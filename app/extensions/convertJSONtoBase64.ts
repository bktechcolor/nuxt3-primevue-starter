import { Buffer } from 'buffer';

import { getFileType } from './fileHelper';

export function convertJSONtoBase64(jsonValue: string): string | undefined {
  if (!jsonValue) {
    return undefined;
  }
  return Buffer.from(jsonValue).toString('base64');
}

export function convertObjectToBase64(object: Record<string, unknown>): string | undefined {
  if (!object) {
    return undefined;
  }
  return Buffer.from(JSON.stringify(object)).toString('base64');
}

export function convertBase64ToJSONString(base64Value?: string): string {
  if (!base64Value) {
    return '';
  }
  return atob(base64Value);
}

export function convertUrlImgtoBase64(fileName: string, fileBase64: string): string | undefined {
  const fileExtension = fileName.split('.').pop();
  if (fileExtension) {
    const getMime = getFileType(fileExtension.toLowerCase());
    if (getMime) {
      return `data:${getMime};base64, ${fileBase64}`;
    }
  }
  return undefined;
}
