import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import path from 'path'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
// https://vite.dev/config/
export default defineConfig({
    resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
    plugins: [
    vue(),
    AutoImport({
      // element plus组件按需自动引入
      resolvers: [ElementPlusResolver()],
    }),
    // vue 组件自动导入
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    Icons({
      // 实验性功能 当您导入图标时，它会自动检测合适的包管理器（npm、yarn 或 pnpm）来安装图标集。
      autoInstall: true,
      compiler: 'vue3',
      customCollections: {
        base: FileSystemIconLoader(path.resolve('src', 'assets/icons'), svg => svg),
      },

    })],
    css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
})
