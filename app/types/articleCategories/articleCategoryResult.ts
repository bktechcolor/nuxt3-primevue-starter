import { z } from 'zod';
export const ArticleCategoryIndependentResultSchema = z.object({
  ArticleCategoryId: z.number(),
  ArticleCategoryName: z.string(),
  ArticleCategorySlug: z.string(),
  IsMainCateogry: z.boolean().default(false)
});

export type ArticleCategoryIndependentResult = z.infer<typeof ArticleCategoryIndependentResultSchema>;