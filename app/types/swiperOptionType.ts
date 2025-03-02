import { z } from 'zod';

export enum SwiperOptionType {
  LatestArticles = 1,
  ProductOptions = 2,
  HotArticles = 3,
  ThemeOptions = 4,
}

export const SwiperOptionTypeSchema = z.nativeEnum(SwiperOptionType);