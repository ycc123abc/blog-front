<script setup lang="ts">
// import { ref } from "vue";
const particlesOptions = {
  background: {
    color: "#282c34",
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
};
</script>

<template>
    
  <div class="tsparticles min-h-screen relative">
    
    <vue-particles id="tsparticles" :options="particlesOptions" />
<router-view></router-view>
  </div>
</template>

<style scoped lang="scss">

.tsparticles {
  width: 100vw;
  height: 100vh;
  position: relative;
}

</style>
