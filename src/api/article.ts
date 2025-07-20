import http from "@/config/request";
import type {
  ApiResponse,
  ArticleListResult,
  ArticleDetail,
  ArticleListParams,
  ArticleHomeListResult
} from "@/types/article";

export const getArticleHomeList = (): Promise<ArticleHomeListResult> => {
  return http.get("/articles/homelist/");
};

export const getArticleList = (
  data: ArticleListParams
): Promise<ApiResponse<ArticleListResult>> => {
  return http.get("/api/article/list/");
};


export const getArticleDetailById = (
  id: string
): Promise<ApiResponse<ArticleDetail>> => {
  return http.get(`/api/article/detail/${id}`);
};