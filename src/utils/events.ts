import { getCollection, render } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Post } from '~/types';
import { cleanSlug } from './permalinks';

/** An event is a normal Post plus optional event-only fields. `publishDate` = event (start) date. */
export type EventItem = Post & {
  eventEndDate?: Date;
  location?: string;
  eventUrl?: string;
};

const EVENTS_BASE = 'newsroom/events';

const getNormalizedEvent = async (entry: CollectionEntry<'event'>): Promise<EventItem> => {
  const { id, data } = entry;
  const { Content, remarkPluginFrontmatter } = await render(entry);

  const {
    publishDate: rawPublishDate = new Date(),
    updateDate: rawUpdateDate,
    title,
    excerpt,
    image,
    tags: rawTags = [],
    category: rawCategory,
    author,
    authorLinkedIn,
    readingTime,
    draft = false,
    metadata = {},
    eventEndDate,
    location,
    eventUrl,
  } = data;

  const slug = cleanSlug(id);
  const publishDate = new Date(rawPublishDate);
  const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : undefined;

  const category = rawCategory
    ? { slug: cleanSlug(rawCategory), title: rawCategory }
    : undefined;

  const tags = (rawTags as string[]).map((tag: string) => ({
    slug: cleanSlug(tag),
    title: tag,
  }));

  return {
    id,
    slug,
    permalink: `${EVENTS_BASE}/${slug}`,

    publishDate,
    updateDate,

    title,
    excerpt,
    image,

    category,
    tags,
    author,
    authorLinkedIn,

    draft,
    metadata,

    Content,

    readingTime: readingTime ?? remarkPluginFrontmatter?.readingTime,

    eventEndDate: eventEndDate ? new Date(eventEndDate) : undefined,
    location,
    eventUrl,
  };
};

const load = async (): Promise<Array<EventItem>> => {
  const entries = await getCollection('event');
  const normalized = entries.map(async (entry) => await getNormalizedEvent(entry));
  const results = (await Promise.all(normalized))
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf())
    .filter((cs) => !cs.draft);
  return results;
};

let _events: Array<EventItem>;

export const fetchEvents = async (): Promise<Array<EventItem>> => {
  if (!_events) {
    _events = await load();
  }
  return _events;
};

export const findRelatedEvents = async (
  original: EventItem,
  maxResults: number = 3
): Promise<EventItem[]> => {
  const all = await fetchEvents();
  const originalTagsSet = new Set(original.tags ? original.tags.map((t) => t.slug) : []);

  const scored = all.reduce((acc: { cs: EventItem; score: number }[], cs) => {
    if (cs.slug === original.slug) return acc;
    let score = 0;
    if (cs.category && original.category && cs.category.slug === original.category.slug) {
      score += 5;
    }
    if (cs.tags) {
      cs.tags.forEach((tag) => {
        if (originalTagsSet.has(tag.slug)) score += 1;
      });
    }
    acc.push({ cs, score });
    return acc;
  }, []);

  scored.sort((a, b) => b.score - a.score);

  const selected: EventItem[] = [];
  let i = 0;
  while (selected.length < maxResults && i < scored.length) {
    selected.push(scored[i].cs);
    i++;
  }
  return selected;
};
