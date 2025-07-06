<script setup lang='ts'>
import Robot  from "~icons/mdi/robot";
import { defineAsyncComponent, ref } from "vue";
import { useRouter } from "vue-router";
import path from "path";
// import { configStore } from "@/store/index.js";
import { storeToRefs } from "pinia";

// const { getIsDark } = storeToRefs(configStore());
// const isDark = ref(getIsDark.value);

const router = useRouter();

const menuList = [
  {
    title: "首页",
    icon: defineAsyncComponent(() => import("~icons/fa-regular/heart")),
    path: "/home",
    children: [],
  },
  {
    title: "博客",
    icon: defineAsyncComponent(() => import("~icons/fa-regular/clock")),
    path: "/blog",
    children: [],
  },
  {
    title: "工具",
    path: "/tool",
    icon: defineAsyncComponent(() => import("~icons/fa-regular/comment-dots")),
    children: [],
  },
    {
    title: "关于",
    path: "/more/about",
    icon: defineAsyncComponent(() => import("~icons/fa6-regular/face-kiss-wink-heart")),
    children: [],
  },
  {
    title: "更多",
    icon: defineAsyncComponent(() => import("~icons/fa-regular/list-alt")),
    path: "/more",
    children: [
      {
        title: "赞助",
        icon: defineAsyncComponent(() => import("~icons/fa6-regular/face-kiss-wink-heart")),
        path: "/more/sponsor",
      },
    ],
  },
];

const handleSelect = (path:string) => {
  console.log(path)
  if (!path) return;
  router.push(path);
  // router.push({
  //   path,
  //   query: {
  //     t: new Date().getTime(),
  //   },
  // });
};
</script>

<template>
  <div class="header-container">
    <div class="left"><Robot class="logo"/></div>
     <div class="right">
      <el-menu menu-trigger="click" :ellipsis="false" mode="horizontal" @select="handleSelect">
        <div v-for="menu in menuList" :key="menu.path">
          <el-sub-menu v-if="menu.children.length" :index="menu.path">
            <template #title>
              <component class="menu-icon" :is="menu.icon"></component>
              {{ menu.title }}
              </template>
            <el-menu-item v-for="subMenu in menu.children" :key="subMenu.path" :index="subMenu.path">
              <component class="menu-icon text-black" :is="subMenu.icon"></component> 
              <span class="text-black">{{ subMenu.title }} </span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item v-else :index="menu.path">
          <component class="menu-icon" :is="menu.icon"></component>
          {{ menu.title }}
          </el-menu-item>
        </div>
      </el-menu>
     </div>
  </div>
</template>



<style scoped lang="scss">
.header-container {
  display: flex;
  align-items: center;
  .left{
      .logo {
          width: 3rem;
          height: 3rem;
      }
}
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

}
</style>

