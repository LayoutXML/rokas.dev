import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  // File name (without .md) is the project's id, used in URLs: /#<id>
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      type: z.string().optional(),
      summary: z.string(),
      logo: image(),
      links: z
        .array(
          z.object({
            kind: z.enum(['github', 'google-play', 'docker-hub', 'website']),
            url: z.url(),
          }),
        )
        .default([]),
      playBadgeUrl: z.url().optional(),
      publications: z
        .array(
          z.object({
            outlet: z.string(),
            badge: image(),
            article: z.string(),
            url: z.url(),
            archive: z.url().optional(),
          }),
        )
        .default([]),
      // Card links straight to this URL instead of opening a popup
      externalUrl: z.url().optional(),
    }),
});

export const collections = { projects };
