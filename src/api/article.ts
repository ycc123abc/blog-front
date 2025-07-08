import http from "@/config/request";
import type {
  ApiResponse,
  ArticleListResult,
  ArticleDetail,
  ArticleListParams
} from "@/types/article";

export const getArticleHomeList = (): Promise<ApiResponse<ArticleListResult>> => {
  return http.post("/api/article/homelist");
};

export const getArticleList = (
  data: ArticleListParams
): Promise<ApiResponse<ArticleListResult>> => {
  return http.post("/api/article/list", data);
};


export const getArticleDetailById = (
  id: string
): Promise<ApiResponse<ArticleDetail>> => {
  return http.get(`/api/article/detail/${id}`);
};