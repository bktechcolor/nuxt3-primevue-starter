import { z } from 'zod';
export const dateSchema = z.string().optional();
export type dateType = z.infer<typeof dateSchema>;