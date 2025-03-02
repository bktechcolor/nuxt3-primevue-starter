import { z } from 'zod';

export const StoredDocumentResultSchema = z.object({
  storedDocumentId: z.number(),
  storedDocumentPath: z.string(),
  storedDocumentName: z.string(),
  storedDocumentTypeId: z.number(),
  fileSizeInKiloBytes: z.number(),
  width: z.number(),
  height: z.number(),
});

export type StoredDocumentResult = z.infer<typeof StoredDocumentResultSchema>;