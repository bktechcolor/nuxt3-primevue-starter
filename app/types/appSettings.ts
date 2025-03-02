import { z } from 'zod';

export const FeatureTogglesConfigSchema = z.object({});

export type FeatureTogglesConfig = z.infer<typeof FeatureTogglesConfigSchema>;

export const ApplicationInsightsConfigSchema = z.object({
  InstrumentationKey: z.string(),
});
export type ApplicationInsightsConfig = z.infer<typeof ApplicationInsightsConfigSchema>;

export const ClientSideConfigSchema = z.object({
  DocumentStorageApiRootUrl: z.string(),
  SystemNotificationsApiRootUrl: z.string(),
  B2CFunctionAppUrl: z.string(),
  SecretsApiRootUrl: z.string(),
  SHQProductGuid: z.string(),
  ZoomWebAPI: z.string(),
  GoogleMapApiKey: z.string(),
});
export type ClientSideConfig = z.infer<typeof ClientSideConfigSchema>;

export const AuthenB2CConfigSchema = z.object({
  RedirectUri: z.string(),
  RedirectStartPage: z.string(),
  LogoutRoute: z.string(),
});
export type AuthenB2CConfig = z.infer<typeof AuthenB2CConfigSchema>;

export const AppSettingsSchema = z.object({
  ApplicationInsights: ApplicationInsightsConfigSchema,
  FeatureToggles: FeatureTogglesConfigSchema,
  ClientSide: ClientSideConfigSchema,
  AzureB2C: AuthenB2CConfigSchema,
});
export type AppSettings = z.infer<typeof AppSettingsSchema>;
