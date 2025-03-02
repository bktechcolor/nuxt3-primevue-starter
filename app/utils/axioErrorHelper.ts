import { DUPLICATE_KEY_CHECK } from '@/types/constGlobal';
import { ErrorApiSchema, type ErrorMessageApi } from '@/types/errorApi';
import axios from 'axios';

export function getAxiosError(error: unknown): ErrorMessageApi[] {
  let messageError: ErrorMessageApi[] = [];
  if (axios.isAxiosError(error)) {
    if (error && error.response && error.response.status === 422 && error.response.data) {
      const errorApi = ErrorApiSchema.safeParse(error.response.data);
      if (errorApi.success) {
        if (errorApi.data.errors) {
          // Handle errors
          messageError = Object.entries(errorApi.data.errors).map((c) => ({
            key: c[0],
            value: c[1],
          }));
        }
      }
    }
  }
  return messageError;
}

export function checkDuplicate(messageError: ErrorMessageApi[]): boolean {
  return messageError.some((item) => item.value.find((c) => c.indexOf(DUPLICATE_KEY_CHECK) > -1));
}
