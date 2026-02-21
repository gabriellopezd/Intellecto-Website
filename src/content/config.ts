import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        author: z.string().default('Intellecto'),
        tags: z.array(z.string()).default(['Tecnología']),
        category: z.enum(['noticia', 'cientifico', 'ia-semanal']).default('noticia'),
    }),
});

export const collections = { blog };
