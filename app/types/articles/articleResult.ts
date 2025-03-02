import { z } from 'zod';
import { dateSchema } from '../dateType';
import { UserRelatedArticleResultSchema } from '../users/userResult';
import { StoredDocumentResultSchema } from '../storedDocuments/storedDocumentResult';
import { ArticleCategoryIndependentResultSchema } from '../articleCategories/articleCategoryResult';
import { TagIndependentResultSchema } from '../tags/tagResult';

export const ArticleArticleCategoryResultSchema = z.object({
  ArticleArticleCategoryId: z.number(),
  ArticleCategoryId: z.number(),
  ArticleId: z.number(),
  IsMainCategory: z.boolean().default(false)
});
export type ArticleArticleCategoryResult = z.infer<typeof ArticleArticleCategoryResultSchema>;

export const ArticleTagResultSchema = z.object({
  ArticleTagId: z.number(),
  ArticleId: z.number(),
  TagId: z.number(),
});
export type ArticleTagResult = z.infer<typeof ArticleTagResultSchema>;

export const ArticleListPageResultSchema = z.object({
  articleId: z.number(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  readingTime: z.number(),
  isTrend: z.boolean(),
  isFeatured: z.boolean(),
  isAdvertisement: z.boolean(),
  likedCount: z.number(),
  coverImageLink: StoredDocumentResultSchema,
  createdDate: dateSchema,
  updatedDate: dateSchema,
})
export type ArticleListPageResult = z.infer<typeof ArticleListPageResultSchema>;

export const ListArticleListPageResultSchema = z.array(ArticleListPageResultSchema);
export type ListArticleListPageResult = z.infer<typeof ListArticleListPageResultSchema>;

export const ArticleResultSchema = z.object({
  ArticleId: z.number(),
  Title: z.string(),
  Slug: z.string(),
  Description: z.string().nullable(),
  Content: z.string(),
  UserId: z.number(),
  IsDraft: z.boolean(),
  ReadingTime: z.number(),
  IsTrend: z.boolean(),
  IsFeatured: z.boolean(),
  IsAdvertisement: z.boolean(),
  BrandId: z.number().nullable(),
  ArticleArticleCategories: z.array(ArticleArticleCategoryResultSchema),
  ArticleTags: z.array(ArticleTagResultSchema),
  CoverImageLink: StoredDocumentResultSchema.nullable()
});
export type ArticleResult = z.infer<typeof ArticleResultSchema>;

export const ArticleDetailResultSchema = z.object({
  ArticleId: z.number(),
  Title: z.string(),
  Slug: z.string(),
  Description: z.string(),
  Content: z.string(),
  Tenant: z.string(),
  IsAdvertisement: z.boolean(),
  PublishedDate: dateSchema,
  ReadingTime: z.number().optional(),
  Type: z.string(),
  LikesCount: z.number().default(0),
  IsLikedByCurrentUser: z.boolean().default(false),
  IsTrend: z.boolean().default(false),
  MainCategoryId: z.number(),
  Author: UserRelatedArticleResultSchema,
  CoverImageLink : StoredDocumentResultSchema,
  ArticleCategories: z.array(ArticleCategoryIndependentResultSchema),
  ArticleTags: z.array(TagIndependentResultSchema)
});
export type ArticleDetailResult =  z.infer<typeof ArticleDetailResultSchema>;
