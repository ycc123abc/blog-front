<script setup lang='ts'>
// import { getArticleDetailById } from "@/api/article.js";
// import { ref, onMounted } from "vue";
// import { useRoute } from "vue-router";
// import { storeToRefs } from "pinia";
// import { articleStore} from "@/store/index.js";
// const route=useRoute();

// const articleContent=ref("");
// const articleDetail = ref({});
// const {getArticle}=storeToRefs(articleStore());


// const getArticleById = (id:string) => {
//   getArticleDetailById(id).then((res) => {
//     if (res.success) {
//       const { article_content, ...rest } = res.result;
//       articleContent.value = article_content;
//       articleDetail.value = rest;
//       articleStore().setArticle(rest);
//     }
//   });
// };

// onMounted(() => {
//   getArticleById(route.query.id);
// });
</script>

<template>
  <div>article</div>
</template>

<style scoped>
</style>
