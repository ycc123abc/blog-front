<script setup lang='ts'>
import HomeBg from '@/assets/images/home-banner.png'
import { useRoute } from 'vue-router'
import Down from  "~icons/mdi/chevron-down";
import { onMounted, ref } from 'vue'


import { debounce } from "@/utils/tools";

const route = useRoute();
// const { getArticle } = storeToRefs(articleStore());

const showScrollBottom = ref(true);

const scrollToBottom = () => {
  const homeElement = document.querySelector("#home");

  if (homeElement) {
    window.scrollTo({
      top: homeElement.clientHeight,
      behavior: "smooth",
    });
  }
};

const scrollListener = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    console.log(scrollTop)
  if (scrollTop > 50) {
    showScrollBottom.value = false;
  } else {
    showScrollBottom.value = true;
  }
};

const initScrollEvent = () => {
  window.addEventListener("scroll", debounce(scrollListener, 100));
};

onMounted(() => {
  initScrollEvent();
});


</script>

<template>
    <div class="pageheader">
        <div id="home" v-if="route.path == '/home'" class="home">
            <el-image :src="HomeBg" class="banner" fit="cover"></el-image>
            <div class="content">
                <div class="title">BLOG</div>
                <div class="saying">我的博客</div>       
            </div>
            <div class="mask"></div> 
      <div v-if="showScrollBottom" class="scroll-bottom"><Down @click="scrollToBottom" class="w-[2rem] h-[2rem] text-white scroll-icon" /></div>
        </div>
        <div v-else-if="route.path == '/article'" class="article">
            <el-image :src="HomeBg" class="banner" fit="cover"></el-image>
            <div class="content text-white"> 111111111111111111111</div>
        </div>
        <div v-else class="other">
            <el-image :src="HomeBg" class="banner" fit="cover"></el-image>
            <div class="content">
                <div class="title"> {{ route.name }}</div>
                 </div>
        </div>

    </div>
</template>

<style scoped  lang="scss">
.pageheader {
    width: 100%;

  .home {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .scroll-bottom {
      position: absolute;
      left: 50%;
      bottom: 0rem;
      transform: translateX(-50%);
      z-index: 2;

      .scroll-icon {
        cursor: pointer;
        animation: bounce 1.5s infinite;
      }
    }
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 60%;
    z-index: 2;

    .title {
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
      text-align: center;
    }

    .saying {
      font-size: 1.4rem;
      color: #fff;
      text-align: center;
    }
  }

}

.banner {
  width: 100%;
  height: 100%;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    opacity: 1;
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    opacity: 0.5;
  }
}


</style>
