<script setup lang='ts'>
import HomeBg from '@/assets/images/home-banner.png'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <div class="pageheader">
        <div v-if="route.path == '/home'" class="home">
            <el-image :src="HomeBg" class="banner" fit="cover"></el-image>
        </div>
        <div v-if="route.path == '/article'" class="article">
            <el-image :src="HomeBg" class="banner" fit="cover"></el-image>
        </div>
        <div v-else class="other">
            <el-image :src="HomeBg" class="banner" fit="cover"></el-image>
        </div>

    </div>
</template>

<style scoped  lang="scss">
.pageheader {
    width: 100%;

    .home {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .article {
        position: relative;
        width: 100%;
        height: 24rem;
        overflow: hidden;
    }

    .other {
        position: relative;
        width: 100%;
        height: 24rem;
        overflow: hidden;
    }
}

.banner {
  width: 100%;
  height: 100%;
}
</style>
