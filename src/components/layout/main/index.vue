<script setup lang='ts'>
import PageHeader from "@/components/page-header/index.vue";
// import { useRoute } from "vue-router";

// const route = useRoute();

// const wideList = ["/home", "/blog"];
</script>


<template >
  <div class="main-container">
    <PageHeader></PageHeader>
    <div class="max-w-[1280px] mx-auto ">
      <router-view></router-view>
    </div>
  </div>
</template>



<style scoped lang="scss">

</style>

