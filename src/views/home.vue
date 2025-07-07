<template>
 <el-row :gutter="20">
  <el-col :span="18">
    <el-card v-for="article in articleList" shadow="always">
        <div class="article-item w-[100%] h-[16rem] flex">
          <div class="article-cover w-[45%] h-[100%]">
            <el-image class="w-[100%] h-[100%]" fit="cover"> </el-image>
            <div class="title text-3xl mb-5" @click="article.id">{{ article.article_title }}</div>
          </div>
        </div>
    </el-card>
  </el-col>
  <el-col :span="6">article</el-col>
 </el-row>
</template>

<script setup lang='ts'>
import {ref} from 'vue';
const articleList = ref([]);
</script>

<style scoped>
</style>
