import { z } from 'zod';

export const TagIndependentResultSchema = z.object({
  TagId: z.number(),
  TagText: z.string(),
  TagSlug: z.string(),
});
export type TagIndependentResult = z.infer<typeof TagIndependentResultSchema>;