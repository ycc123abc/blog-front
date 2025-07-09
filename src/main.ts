import { createApp } from 'vue'

import App from './App.vue'
import router from "@/router/index.js";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import "@/styles/base.scss";
// element-plus 暗黑主题
import "element-plus/theme-chalk/dark/css-vars.css";
// 样式
import "element-plus/dist/index.css";


import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";

const app = createApp(App);
app.use(router).use(createPinia().use(piniaPluginPersistedstate))

app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine);
  },
}).mount("#app");