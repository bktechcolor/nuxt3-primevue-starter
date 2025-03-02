import type { AppSettings } from '@/types/appSettings';

import { AppSettingsSchema } from '@/types/appSettings';

const STORAGE_APP_SETTINGS_KEY = 'appSettings';
/**
 * Fetches and transfers the application settings.
 *
 * Needs to be called before the app is loaded to the DOM.
 * Which primes local storage with the app settings.
 * Therefore, this is called in the index.html file before the main.ts file is loaded.
 *
 * The references to this should only be in the setup.ts file.
 *
 * To get local appsettings please use the getLocalAppsettings() function.
 * @returns A promise that resolves to the application settings.
 */
export async function fetchAndTransferAppsettings(): Promise<AppSettings> {
  
  const appsettingsUrl = '/appsettings.json';
  const localAppsettingsUrl = '/appsettings.local.json';
  console.log(appsettingsUrl)
  if (import.meta.env.DEV) {
    try {
      const localSettingsRes = await fetch(localAppsettingsUrl);
      if (localSettingsRes.ok) {
        return setLocalAppsettings(await localSettingsRes.json());
      } else {
        console.warn(
          `If you want to override the default app settings, please make a copy of "appsettings.json" named "appsettings.local.json" and modify the configurations there.`,
        );
        const appSettingsRes = await fetch(appsettingsUrl);
        return setLocalAppsettings(await appSettingsRes.json());
      }
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : 'local storage appsettings not found',
      );
    }
  } else {
    try {
      const appSettingsRes = await fetch(appsettingsUrl);
      if (appSettingsRes.ok) {
        return setLocalAppsettings(await appSettingsRes.json());
      }
      throw new Error('appsettings not found');
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : 'local storage appsettings not found',
      );
    }
  }
}

/**
 * Sets the local app settings by parsing the response and storing it in the local storage.
 * @param response The response object containing the app settings.
 * @returns The parsed app settings object.
 *
 * @throws An error if the response is invalid.
 */
function setLocalAppsettings(response: unknown): AppSettings {
  const appSettings = AppSettingsSchema.parse(response);
  localStorage.setItem(STORAGE_APP_SETTINGS_KEY, JSON.stringify(appSettings));
  return appSettings;
}


/**
 * Retrieves the local app settings from the local storage.
 * @returns The parsed AppSettings object.
 * @throws Error if the local storage app settings are not found or invalid.
 */
export function getLocalAppsettings(): AppSettings {
  try {
    const localSettings = localStorage.getItem(STORAGE_APP_SETTINGS_KEY);
    let appSettings;
    //Attempt to retrieve and load
    if (!localSettings) {
      fetchAndTransferAppsettings().then((settings) => {
        appSettings = AppSettingsSchema.parse(settings);
      });
    } else if (localSettings) {
      appSettings = AppSettingsSchema.parse(JSON.parse(localSettings));
    }
    if (!appSettings) {
      throw new Error('local storage appsettings not found');
    } else {
      return appSettings;
    }
  } catch (error) {
    console.error(
      `🚨 Configuration Error: Cannot get local appsettings. Please make sure that you have called fetchAndTransferAppsettings() before the app is loaded to the DOM, and that there is a valid appsettings.json file in the public folder.

      This function is failing because it cannot find the appsettings in local storage.
      This is most likely because you have not called fetchAndTransferAppsettings() before the app is loaded to the DOM. Or the appsettings.json file is missing from the public folder.
      Recommended fix: Create a setup.ts file next to main.ts and add the following code:

      // setup.ts
      import { fetchAndTransferAppsettings } from '@/utils/appSettingsHelper';
      await fetchAndTransferAppsettings();

      // index.html
      <script type="module" src="/src/setup.ts"></script>
      <script type="module" src="/src/main.ts"></script>
      `,
    );
    throw new Error(error instanceof Error ? error.message : 'getLocalAppsettings failed');
  }
}
