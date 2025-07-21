<template>
  <div class="blog-page">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>博客</h1>
    </div>

    <!-- 博客列表 -->
    <div class="blog-container">
      <el-row :gutter="20">
        <el-col 
          v-for="(blog, index) in paginatedBlogs" 
          :key="index" 
          :span="8" 
          class="blog-card"
        >
          <el-card shadow="hover">
            <img 
              :src="blog.cover" 
              alt="Cover" 
              class="cover-image"
            />
            <div class="card-content">
              <h3>{{ blog.title }}</h3>
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
                <span>{{ formatDate(blog.createTime) }}</span>
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
        :total="blogList.length"
        :page-size="pageSize"
        :current-page="currentPage"
        :pager-count="5"  
        @current-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface BlogItem {
  title: string;
  tags: string[];
  createTime: Date;
  cover: string;
}

// 分页参数
const pageSize = 9; // 每页显示9个项目 (3x3布局)
const currentPage = ref(1);

// 模拟博客数据 (补充到10个)
const blogList = ref<BlogItem[]>([
  {
    title: 'Vue3 新特性解析',
    tags: ['前端', 'Vue'],
    createTime: new Date('2023-10-01'),
    cover: 'https://via.placeholder.com/300x200?text=Vue3'
  },
  {
    title: 'TypeScript 高级技巧',
    tags: ['TypeScript', '编程'],
    createTime: new Date('2023-09-15'),
    cover: 'https://via.placeholder.com/300x200?text=TS'
  },
  {
    title: 'CSS Grid 布局指南',
    tags: ['CSS', '布局'],
    createTime: new Date('2023-08-22'),
    cover: 'https://via.placeholder.com/300x200?text=CSS'
  },
  {
    title: 'Node.js 性能优化',
    tags: ['Node.js', '后端'],
    createTime: new Date('2023-07-30'),
    cover: 'https://via.placeholder.com/300x200?text=Node'
  },
  {
    title: '响应式设计实践',
    tags: ['响应式', 'UI'],
    createTime: new Date('2023-06-18'),
    cover: 'https://via.placeholder.com/300x200?text=Responsive'
  },
  {
    title: 'Webpack 配置详解',
    tags: ['构建工具', 'Webpack'],
    createTime: new Date('2023-05-10'),
    cover: 'https://via.placeholder.com/300x200?text=Webpack'
  },
  {
    title: '前端安全最佳实践',
    tags: ['安全', '前端'],
    createTime: new Date('2023-04-05'),
    cover: 'https://via.placeholder.com/300x200?text=Security'
  },
  {
    title: '状态管理方案对比',
    tags: ['Vuex', 'Pinia'],
    createTime: new Date('2023-03-15'),
    cover: 'https://via.placeholder.com/300x200?text=State'
  },
  {
    title: '微前端架构实践',
    tags: ['微前端', '架构'],
    createTime: new Date('2023-02-28'),
    cover: 'https://via.placeholder.com/300x200?text=MicroFE'
  },
  {
    title: 'React 18 新特性',
    tags: ['React', '前端'],
    createTime: new Date('2023-01-15'),
    cover: 'https://via.placeholder.com/300x200?text=React'
  },
    {
    title: 'React 18 新特性',
    tags: ['React', '前端'],
    createTime: new Date('2023-01-15'),
    cover: 'https://via.placeholder.com/300x200?text=React'
  }
]);

// 计算当前页显示的数据
const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return blogList.value.slice(start, end);
});

// 日期格式化
const formatDate = (date: Date) => {
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// 分页变化处理
const handlePageChange = (page: number) => {
  currentPage.value = page;
  // 在实际应用中，这里可以添加滚动到顶部的功能
  // window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
.blog-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 2rem;
  color: #333;
}

.blog-container {
  margin-bottom: 30px;
}

.blog-card {
  margin-bottom: 20px;
}

.cover-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  margin: 10px 0;
  font-size: 1.2rem;
}

.tags {
  margin: 10px 0;
}

.tags .el-tag {
  margin-right: 5px;
}

.meta {
  display: flex;
  align-items: center;
  color: #999;
  font-size: 0.9rem;
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

/* 修复分页按钮文字颜色问题 */
.el-pagination.is-background .el-pager li:not(.disabled) {
  color: #606266; /* 非激活状态文字颜色 */
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #409eff;
  color: white; /* 激活状态文字颜色 */
}

.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #409eff; /* 悬停状态文字颜色 */
}
</style>