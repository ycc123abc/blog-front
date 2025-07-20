<template>
  <el-row :gutter="20">
    <el-col :span="18" class="space-y-6">
        <div v-if="articleList.length === 0">无数据</div>
  <div v-else>已加载 {{ articleList.length }} 篇文章</div>
      <el-card v-for="article in articleList" shadow="hover">
        <div class="article-item w-[100%] md:h-[18rem] flex md:flex-row flex-col overflow-hidden ">
          <div class="article-cover md:w-[45%] md:h-[100%] w-[100%] h-[50%] overflow-hidden">
            <el-image class="w-[100%] h-[100%] duration-300 hover:scale-125" fit="cover" :src="Homebanner"> </el-image>
          </div>
          <div class="article-content w-[55%] h-[100%] p-[1.2rem] flex flex-col justify-center">
            <div class="space-y-6">
              <div class="title text-3xl">{{ article.title }}</div>
            </div>
            <div class="flex flex-row justify-between mt-auto">
              <div class="create-time text-sm">{{ article.create_time }}</div>
              <div class="label flex flex-row space-x-2 ">
                <el-tag v-for="tag in article.tags" :key="tag" type='info' effect="dark">
                  {{ tag }}
                </el-tag>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :sm="6" :xs="24">
      <el-card class="mb-[1.2rem]">
        <div class="banner w-[100%] h-[8rem]">
          <el-image class="w-[100%] h-[100%]" fit="cover" :src="Homebanner"> </el-image>
        </div>
        <div class="info-box flex items-center p-[0.8rem]">
          <el-avatar :size="48" class="mr-[5px]">M</el-avatar>
          <div>个人博客</div>
        </div>
        <div class="flex justify-around items-center p-[1rem]">
          <div class="item">
            <div class="title text-center">文章</div>
            <div class="value text-center">20</div>
          </div>
          <div class="item">
            <div class="label text-center">标签</div>
            <div class="value text-center">20</div>
          </div>
        </div>
          <div class="flex justify-center mt-auto ">
          <el-button type="primary" round class="mb-[1.2rem]" @click="window.open('https://github.com', '_blank')">GitHub</el-button>
          </div>
      </el-card>

    </el-col>
  </el-row>
  <div class="flex-center">
    <el-button round color="#87CEEB" size="big" @click="$router.push('/blog')">查看更多</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getArticleHomeList } from '@/api/article';
import type { ArticleItem } from '@/types/article';
// import { useRouter } from "vue-router";
import { onMounted } from "vue";
import Homebanner from "@/assets/images/home-banner.png";
declare const window: Window & typeof globalThis;
const articleList = ref<ArticleItem[]>([
]);

const conditionGetArticleList = async (): Promise<void> => {
  const res = await getArticleHomeList();
  articleList.value = res.items;
};
// const router = useRouter();
// const gotoArticle = (id: string) => {
//   if (!id) return;
//   router.push({ path: "/articles/list/", query: { id } });
// };

onMounted(() => {
  conditionGetArticleList();
});
</script>

<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
</style>
