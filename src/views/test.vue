

<template>
  <div class="test">
    {{ getUserId }}
    <el-button type="primary" @click="add">点我</el-button>
    <router-view></router-view>
  </div>
</template>


<script  lang="ts" setup>
import { storeToRefs } from "pinia";
import { user } from "@/store/index";

const { getUserId } = storeToRefs(user()) as { getUserId: { value: number } };

const add = () => {
  user().setUserId();
};
</script>


<style lang="scss" scoped>

</style>