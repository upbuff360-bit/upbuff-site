import { getCollection, render } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Post } from '~/types';
import { cleanSlug } from './permalinks';

const NEWS_BASE = 'newsroom';

const getNormalizedNews = async (entry: CollectionEntry<'news'>): Promise<Post> => {
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
    permalink: `${NEWS_BASE}/${slug}`,

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
  };
};

const load = async (): Promise<Array<Post>> => {
  const entries = await getCollection('news');
  const normalized = entries.map(async (entry) => await getNormalizedNews(entry));
  const results = (await Promise.all(normalized))
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf())
    .filter((cs) => !cs.draft);
  return results;
};

let _news: Array<Post>;

export const fetchNews = async (): Promise<Array<Post>> => {
  if (!_news) {
    _news = await load();
  }
  return _news;
};

export const findRelatedNews = async (
  original: Post,
  maxResults: number = 3
): Promise<Post[]> => {
  const all = await fetchNews();
  const originalTagsSet = new Set(original.tags ? original.tags.map((t) => t.slug) : []);

  const scored = all.reduce((acc: { cs: Post; score: number }[], cs) => {
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

  const selected: Post[] = [];
  let i = 0;
  while (selected.length < maxResults && i < scored.length) {
    selected.push(scored[i].cs);
    i++;
  }
  return selected;
};
