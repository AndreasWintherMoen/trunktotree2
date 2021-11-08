<template>
  <div>
    <splash-screen :isLoading="isLoading" />
    <div v-if="!isLoading">
      <div class="flex content-center flex-grow h-12 dnb-green" />
      <div
        id="nav"
        class="
          flex
          sm:hidden
          flex-grow flex-wrap
          justify-center
          content-center
          px-8
        "
      >
        <h3 class="font-bold text-lg">EcoreHealth+</h3>
      </div>
      <router-view class="custom-min-height" />
      <div class="h-16"></div>
      <div
        id="nav"
        class="
          fixed
          bottom-0
          min-w-full
          dnb-green
          h-16
          flex flex-row
          items-center
          justify-between
          px-24
        "
      >
        <router-link
          to="/"
          class="rounded-full bg-opacity-50 bg-green-400 p-1.5"
          ><img
            class="nav-img"
            :src="`${publicPath}home-outline.png`"
            alt="Home"
        /></router-link>
        <router-link
          to="/challenges"
          class="rounded-full bg-opacity-50 bg-green-400 p-1.5"
          ><img
            class="nav-img"
            :src="`${publicPath}calendar-check-outline.png`"
            alt="Challenges"
        /></router-link>
        <router-link
          to="/map"
          class="rounded-full bg-opacity-50 bg-green-400 p-1.5"
          ><img class="nav-img" :src="`${publicPath}map-outline.png`" alt="Map"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SplashScreen from "./components/pages/SplashScreen.vue";
export default {
  components: { SplashScreen },
  setup() {
    const publicPath = process.env.BASE_URL;
    return { publicPath };
  },
  data: function () {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  },
};
</script>

<style>
#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: #eee;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.dnb-green {
  background-color: #a5e1d2;
}

.main-sidebar {
  transition: left 0.5s;
}

#nav a.router-link-exact-active {
  color: #22b171;
}

.custom-min-height {
  min-height: calc(100% + 10rem) !important;
}

.nav-img {
  width: 32px;
  margin: 0 auto;
}
</style>
