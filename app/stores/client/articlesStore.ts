
import type { ArticleListPageResult } from "@/types/articles/articleResult";
import type { ArticleInput, ClientArticlesQuery } from "@/types/articles/articleInput";
import { articleApi }  from "@/axios/instances/articleApi";

export const useArticleStore = defineStore('ArticleStore', ()=>{
  const listData = ref<ArticleListPageResult[]>([]);

  async function getArticleListPage(params: ClientArticlesQuery){
    const response = await articleApi.getListArticle(params);
    return response;
  }

  async function getArticleDetail(articleId: number){
    await articleApi.getArticleDetailById(articleId);
  }

  async function upsertArticle(data: ArticleInput, file: FormData): Promise<boolean>{
    return await articleApi.upsertArticle(data, file)
  }

  return{
    listData,
    getArticleDetail,
    getArticleListPage,
    upsertArticle
  }
});

if(import.meta.hot){
  import.meta.hot.accept(acceptHMRUpdate(useArticleStore, import.meta.hot));
}