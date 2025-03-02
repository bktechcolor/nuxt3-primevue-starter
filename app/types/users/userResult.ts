import { z } from 'zod';

export const UserRelatedArticleResultSchema = z.object({
  UserId: z.number(),
  UserName: z.string().nullable(),
  Image: z.string().nullable(),
  Email: z.string().nullable()
})

export type UserRelatedArticleResult = z.infer< typeof UserRelatedArticleResultSchema>;