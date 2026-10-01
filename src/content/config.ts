import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
                alt: z.string().optional(),
                type: z.string().optional(),
                secureUrl: z.string().url().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

// Shared schema used by blog posts, case studies, newsroom items and events.
const contentSchema = z.object({
  publishDate: z.date().optional(),
  updateDate: z.date().optional(),
  draft: z.boolean().optional(),

  title: z.string(),
  excerpt: z.string().optional(),
  image: z.string().optional(),

  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  author: z.string().optional(),
  authorLinkedIn: z.string().url().optional(),
  readingTime: z.number().optional(),

  metadata: metadataDefinition(),
});

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: contentSchema,
});

const caseStudyCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/case-study' }),
  schema: contentSchema,
});

const newsCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/news' }),
  schema: contentSchema,
});

// Events reuse the shared schema. `publishDate` is the event (start) date.
const eventCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/events' }),
  schema: contentSchema.extend({
    eventEndDate: z.date().optional(),
    location: z.string().optional(),
    eventUrl: z.string().url().optional(),
  }),
});

export const collections = {
  post: postCollection,
  caseStudy: caseStudyCollection,
  news: newsCollection,
  event: eventCollection,
};
