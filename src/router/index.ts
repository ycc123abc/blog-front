import { createRouter, createWebHistory } from "vue-router";


import Layout from "@/components/layout/index.vue";
import Home from "@/views/home.vue";
import Blog from "@/views/blog/index.vue";
import Tool from "@/views/tool/index.vue";
import About from "@/views/about/index.vue";
import Article from "@/views/article/index.vue";

import Share from "@/views/share/index.vue";
import Sponsor from "@/views/sponsor/index.vue";

const routes = [
  {
    name: "Layout",
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        name: "Home",
        path: "home",
        component: Home,
      },
  {
    title: "博客",
    path: "/blog",
    component: Blog,
  },
  {
    title: "工具",
    path: "/tool",
    component: Tool,
  },
    {
    title: "关于",
    path: "/more/about",
    component: About,
  },
  {
    title: "文章",
    path: "/article",
    component: Article,
  },
  {
    title: "更多",
    path: "/more",
    children: [
            {
        title: "分享",
        path: "/more/share",
        component: Share,
      },
      {
        title: "赞助",
        path: "/more/sponsor",
        component: Sponsor,
      },
    ],
  },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;