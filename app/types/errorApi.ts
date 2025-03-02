import { z } from 'zod';

export const ErrorMessageApiSchema = z.object({
  key: z.string(),
  value: z.array(z.string()).default([]),
});
export type ErrorMessageApi = z.infer<typeof ErrorMessageApiSchema>;

export const ErrorMessageApiListSchema = z.array(ErrorMessageApiSchema);
export type ErrorMessageApiList = z.infer<typeof ErrorMessageApiListSchema>;

export const ErrorApiSchema = z.object({
  errors: z.record(z.string(), z.array(z.string()).default([])).optional(),
  type: z.string(),
  title: z.string(),
  status: z.number(),
  detail: z.string(),
  instance: z.string(),
  extensions: z.object({}).optional(),
});
export type ErrorApi = z.infer<typeof ErrorApiSchema>;
