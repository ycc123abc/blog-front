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
  cover?: string;
  create_time: string;
  update_time: string;
  tags?: string[];
  // 根据实际返回字段补充
  views: number;
  favor: number;
}



//文章首页列表
export interface ArticleHomeListResult {
  items: ArticleItem[];
}

// 文章详情类型
export interface ArticleDetail extends ArticleItem {
  content: string| undefined;
  author?: string | undefined;
  tags?: string[] | undefined;
 article_content: string ;
  // 其他详情字段...
}

// 翻页返回参数类型
export interface PageResult {
  page: number;
  total_pages: number;
}


// 文章页面列表响应类型
export interface ArticlePageResult extends PageResult {
  items: ArticleItem[];
}

// 翻页请求参数类型
export interface PageParams {
  page?: number;
  size?: number;
}

// 文章页面列表请求参数类型
export interface ArticlePageParams extends PageParams{
  sort?: string;
  search_fields?:string[]
}