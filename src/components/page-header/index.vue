<script setup lang='ts'>
import HomeBg from '@/assets/images/home-banner.png'
import { useRoute } from 'vue-router'
import Down from  "~icons/mdi/chevron-down";
import { ref } from 'vue'
const route = useRoute()

const showScrollBottom = ref(true);
const scrollToBottom =() =>{
    const homeElement= document.querySelector('#home')

    if (homeElement) {
        document.body.scrollTo({
            top: homeElement.clientHeight,
            behavior: 'smooth'
        })
    }
}


</script>

<template>
    <div class="pageheader">
        <div v-if="route.path == '/home'" class="home">
            <el-image :src="HomeBg" class="banner" fit="cover"></el-image>
            <div class="content">
                <div class="title">BLOG</div>
                <div class="saying">我的博客</div>       
            </div>
            <div v-if="showScrollBottom" class="scroll-bottom"><Down @click="scrollToBottom" class="w-[2rem] h-[2rem] text-white scroll-icon" /></div>
        </div>
        <div v-else-if="route.path == '/article'" class="article">
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
.content {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);

    .title {
      font-size: 5rem;
      font-weight: bold;
      color: #fff;
      text-align: center;
    }
        .saying {
        font-size: 6rem;
        color: #fff;
        text-align: center;
    }
    }

}

.banner {
  width: 100%;
  height: 100%;
}



</style>
