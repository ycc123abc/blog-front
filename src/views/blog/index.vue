<template>
  <div class="blog-page">
    <!-- 博客列表 -->
    <div class="blog-container">
      <el-row :gutter="20">
        <el-col 
          v-for="blog in blogList?.items" 
          :key="blog.id" 
          :span="8" 
          class="blog-card"
        >
          <el-card shadow="hover">
            <div class="card-cover" :style="{ backgroundImage: 'url(' + blog.cover + ')' }">
              <div class="cover-overlay">
                <h3>{{ blog.title }}</h3>
              </div>
            </div>
            
            <div class="card-content">
              <div class="tags">
                <el-tag 
                  v-for="(tag, tagIndex) in blog.tags" 
                  :key="tagIndex"
                  type="info"
                  size="small"
                >
                  {{ tag }}
                </el-tag>
              </div>
              <div class="meta">
                <span>{{ blog.create_time }}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 分页控件 -->
    <div class="pagination-container">
      <el-pagination
        background
        layout="prev, pager, next, jumper"
        :total="total"
        :page-size="pageSize"
        :current-page="currentPage"
        :pager-count="5"
        @current-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted  } from 'vue';
import type  {ArticlePageResult} from "@/types/article"
import { getArticleList } from '@/api/article';
// 分页参数
const pageSize = 9; // 每页显示9个项目 (3x3布局)
const currentPage = ref(1);
const total = ref(0);

// 模拟博客数据 (9个)
const blogList = ref<ArticlePageResult>();

const fetchBlogList  = async (): Promise<void> => {
try{
  const params = {
      page: currentPage.value,
      size: pageSize
    };
    const res = await getArticleList(params);

      blogList.value = res;
      console.log(111111111111,blogList.value)
      total.value = (res.total_pages || 0) * pageSize;
    //   console.log(blogList.value.items);
      console.log(111111111,res.total_pages);
    
  } catch (error) {
    console.error("获取博客列表失败:", error);
  }
}


// 日期格式化
// const formatDate = (date: string) => {
//   return date.toLocaleDateString('zh-CN', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });
// };

// 分页变化处理
const handlePageChange = (page: number) => {
  currentPage.value = page;
  fetchBlogList();
  console.log(currentPage.value);
  // 可选：添加滚动到顶部功能
  // window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  fetchBlogList();
});
</script>

<style scoped>
.blog-container {
  margin-bottom: 30px;
}

.blog-card {
  margin-bottom: 20px;
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

.card-cover {
  position: relative;
  width: 100%;
  height: 180px;
  background-size: cover;
  background-position: center;
  border-radius: 4px 4px 0 0;
}

.cover-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
  color: white;
  padding: 10px 15px;
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tags {
  margin: 10px 0;
  min-height: 24px;
}

.tags .el-tag {
  margin-right: 5px;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-size: 0.9rem;
}

.stats {
  display: flex;
  gap: 10px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 3px;
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

/* 覆盖分页组件页码样式 */
.el-pagination.is-background .el-pager li:not(.disabled) {
  background-color: #409eff; /* 保持蓝色背景 */
  color: white; /* 设置页码文字为白色 */
  border-radius: 2px;
}

.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #fff; /* 悬停时仍保持白色 */
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #1890ff; /* 激活页码背景色 */
  color: white;
}

.el-pagination.is-background .el-pager li {
  width: 36px;
  height: 32px;
  line-height: 32px;
  border-radius: 4px;
  font-size: 14px;
}
</style>