import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				authors: z.union([z.string(), z.string().array()]).optional(),
			}),
		}),
	}),
	team: defineCollection({
		loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
		schema: z.object({
			name: z.string(),
			institution: z.string(),
			/// `core` members get a profile card; `past` members get a compact list entry.
			group: z.enum(['core', 'past']).default('core'),
			/// Optional role badges, such as `Principal Investigator`.
			role: z.union([z.string(), z.string().array()]).optional(),
			/// Widens the member's card to two columns.
			featured: z.boolean().default(false),
			/// Pins a member to a fixed position; unpinned members sort alphabetically.
			order: z.number().optional(),
			website: z.string().url().optional(),
			/// GitHub handle, not a URL.
			github: z.string().optional(),
			scholar: z.string().url().optional(),
			/// Bare ORCID identifier, such as `0000-0002-0674-9042`.
			orcid: z.string().optional(),
			linkedin: z.string().url().optional(),
			researchgate: z.string().url().optional(),
		}),
	}),
};
