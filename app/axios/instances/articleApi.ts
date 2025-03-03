import type { ErrorMessageApi } from '@/types/errorApi';
import type { ClientArticlesQuery } from '@/types/articles/articleInput';
import { convertJSONtoBase64 } from '@/extensions/convertJSONtoBase64';
import { 
  ListArticleListPageResultSchema,
  ArticleDetailResultSchema,
  ArticleResultSchema,
} from '@/types/articles/articleResult';
import { type ArticleInput } from '@/types/articles/articleInput';
import type {
  ArticleDetailResult,
  ListArticleListPageResult,
  ArticleResult
} from '@/types/articles/articleResult';
import type { AxiosRequestConfig } from 'axios';

import { getLocalAppsettings } from '@/extensions/appSettingsHelper';
import { getAxiosError } from '@/extensions/axioErrorHelper';

import AxiosBase from '../axiosBase';
import AccessTokenRequestInterceptor from '../interceptors/accessToken-request-interceptor';
import AccessTokenResponseInterceptor from '../interceptors/accessToken-response-interceptor';

export class ArticleApi extends AxiosBase {
  constructor(interceptors: unknown[]) {
    //const baseUrl = getLocalAppsettings()?.ClientSide.ZoomWebAPI;
    const baseUrl = 'http://localhost:5267/';
    if (baseUrl) {
      super(interceptors, baseUrl);
    } else {
      super(interceptors, '');
    }
  }

  urlArticle = '/v1/Articles';
  name = 'Article';

  public async getListArticle(param: ClientArticlesQuery): Promise<ListArticleListPageResult> {
    try {
      const response = await this.axiosInstance.get(`${this.urlArticle}`, {
        params: param,
      });
      if (response && response.status === 200) {
        return ListArticleListPageResultSchema.parse(response.data);
      } else {
        throw new Error(`Failed to parse list ${this.name}`);
      }
    } catch (error) {
      console.error(
        `An unexpected error occurred attempting to retrieve the list ${this.name}.`,
        error,
      );
      return [];
    }
  }

  public async getArticleDetailById(articleId: number): Promise<ArticleDetailResult | undefined> {
    try {
      const response = await this.axiosInstance.get(`${this.urlArticle}/${articleId}`);
      if (response && response.status === 200) {
        return ArticleDetailResultSchema.parse(response.data);
      } else {
        throw new Error(`Failed to parse article with id ${this.name}`);
      }
    } catch (error) {
      console.error(
        `An unexpected error occurred attempting to retrieve article with id ${this.name}.`,
        error,
      );
    }
    return undefined;
  }
  public async upsertArticle(data: ArticleInput, file: FormData): Promise<boolean> {
    try {
      if (!file) {
        file = new FormData();
      }
      file.append('articleInputBody', convertJSONtoBase64(JSON.stringify(data)) ?? '');
      const response = await this.axiosInstance.post(`${this.urlArticle}`, file, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response && (response.status === 200 || response.status === 201)) {
        return true;
      } else {
        throw new Error(`Failed to upsert ${this.name}`);
      }
    } catch (error) {
      console.error(`An unexpected error occurred attempting to upsert ${this.name}`, error);
    }
    return false;
  }

  public async deleteArticle(articleId: number): Promise<boolean> {
    try {
      const response = await this.axiosInstance.delete(`${this.urlArticle}/${articleId}`);
      if (response && response.status === 204) {
        return true;
      } else {
        throw new Error(`Failed to delete ${this.name}`);
      }
    } catch (error) {
      console.error(`An unexpected error occurred attempting to delete ${this.name}.`, error);
    }
    return false;
  }
}

export const articleApi = new ArticleApi([
  AccessTokenRequestInterceptor,
  AccessTokenResponseInterceptor,
]);
