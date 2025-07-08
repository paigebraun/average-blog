import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        author: z.string().optional(),
        order: z.number().optional(),
        heroImage: z.string().optional(),
        issue: z.string().optional(),
    }),
});

const issues = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        heroImage: z.string().optional(),
        order: z.number().optional(),
    }),
});

export const collections = { blog, issues };
