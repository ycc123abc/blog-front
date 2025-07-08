export interface ApiResponse<T> {
  success: boolean;
  result: T;
  message?: string;
  code?: number;
}

// 文章项类型
export interface ArticleItem {
  id: string;
  title: string;
  summary?: string;
  cover?: string;
  createTime: string;
  label?: string[];
  // 根据实际返回字段补充
}

// 文章列表响应类型
export interface ArticleListResult {
  list: ArticleItem[];
  total?: number;
}

// 文章详情类型
export interface ArticleDetail extends ArticleItem {
  content: string;
  author?: string;
  tags?: string[];
  // 其他详情字段...
}

// 文章列表请求参数类型
export interface ArticleListParams {
  page?: number;
  size?: number;
  category?: string;
  // 其他查询参数...
}