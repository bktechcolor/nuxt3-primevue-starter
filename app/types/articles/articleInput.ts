import { z } from 'zod';
import { PAGE_SIZE } from '../constGlobal';
import { StoredDocumentInputSchema } from '../storedDocuments/StoredDocumentInput';

export const ClientArticlesQuerySchema = z.object({
  IsFeatured: z.boolean().optional(),
  ExceptArticleId: z.number().optional(),
  IsTrend: z.boolean().optional(),
  CategoryId: z.number().optional(),
  PageSize: z.number().default(PAGE_SIZE),
  PageNumber: z.number(),
});
export type ClientArticlesQuery = z.infer<typeof ClientArticlesQuerySchema>;

export const ArticleArticleCategoryInputSchema = z.object({
  ArticleArticleCategoryId: z.number(),
  ArticleCategoryId: z.number(),
  ArticleId: z.number(),
  IsMainCategory: z.boolean().default(false)
});
export type ArticleArticleCategoryInput = z.infer<typeof ArticleArticleCategoryInputSchema>;

export const ArticleTagInputSchema = z.object({
  ArticleTagId: z.number(),
  ArticleId: z.number(),
  TagId: z.number(),
});
export type ArticleTagInput = z.infer<typeof ArticleTagInputSchema>;

export const ArticleInputSchema = z.object({
  ArticleId: z.number(),
  Title: z.string(),
  Slug: z.string(),
  IsDraft: z.boolean().default(false),
  BrandId: z.number().optional(),
  IsTrend: z.boolean().default(false),
  IsFeatured: z.boolean().default(false),
  ReadingTime: z.number().default(0),
  IsAdvertisement: z.boolean().default(false),
  Description: z.string().optional(),
  Content: z.string(),
  ArticleArticleCategories: z.array(ArticleArticleCategoryInputSchema),
  ArticleTags: z.array(ArticleTagInputSchema),
  CoverImageLink: StoredDocumentInputSchema.optional()
});
export type ArticleInput = z.infer<typeof ArticleInputSchema>;