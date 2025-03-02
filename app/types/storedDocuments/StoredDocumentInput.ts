import { z } from 'zod';

export const StoredDocumentInputSchema = z.object({
  StoredDocumentId: z.number(),
  StoredDocumentTypeId: z.number(),
  StoredDocumentPath: z.string(),
  StoredDocumentName: z.string(),
  FileSizeInKiloBytes: z.number().optional(),
  Width: z.number().optional(),
  Height: z.number().optional(),
});
export type StoredDocumentInput = z.infer<typeof StoredDocumentInputSchema>;