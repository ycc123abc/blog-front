<script setup lang='ts'>
import { getArticleDetailById } from "@/api/article.js";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route=useRoute();

const articleContent=ref("");


</script>

<template>
  <div>article</div>
</template>

<style scoped>
</style>
