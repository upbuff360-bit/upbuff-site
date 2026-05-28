import { getCollection, render } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Post } from '~/types';
import { cleanSlug } from './permalinks';

const CASE_STUDY_BASE = 'case-studies';

const getNormalizedCaseStudy = async (entry: CollectionEntry<'caseStudy'>): Promise<Post> => {
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
    permalink: `${CASE_STUDY_BASE}/${slug}`,

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
  const entries = await getCollection('caseStudy');
  const normalized = entries.map(async (entry) => await getNormalizedCaseStudy(entry));
  const results = (await Promise.all(normalized))
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf())
    .filter((cs) => !cs.draft);
  return results;
};

let _caseStudies: Array<Post>;

export const fetchCaseStudies = async (): Promise<Array<Post>> => {
  if (!_caseStudies) {
    _caseStudies = await load();
  }
  return _caseStudies;
};

export const findRelatedCaseStudies = async (
  original: Post,
  maxResults: number = 3
): Promise<Post[]> => {
  const all = await fetchCaseStudies();
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
