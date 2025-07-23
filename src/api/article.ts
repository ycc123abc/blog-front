import http from "@/config/request";
import type {
  ApiResponse,
  ArticlePageParams,
  ArticleDetail,
  ArticleHomeListResult,
  ArticlePageResult
} from "@/types/article";

export const getArticleHomeList = (): Promise<ArticleHomeListResult> => {
  return http.get("/articles/homelist/");
};

// 博客列表
export const getArticleList = (
  data: ArticlePageParams
): Promise<ArticlePageResult> => {
  return http.get("/articles",{params:data});

};


export const getArticleDetailById = (
  id: string
): Promise<ApiResponse<ArticleDetail>> => {
  return http.get(`/api/article/detail/${id}`);
};