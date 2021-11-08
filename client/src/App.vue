<template>
  <div>
    <splash-screen :isLoading="isLoading" />
    <div v-if="!isLoading">
      <div class="flex items-center justify-center h-12 dnb-green">
        <h3 class="font-bold text-lg">{{ getRoute }}</h3>
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
          justify-around
          px-8
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
          to="/economichealth"
          class="rounded-full bg-opacity-50 bg-green-400 p-1.5"
          ><img
            class="nav-img"
            :src="`${publicPath}home-outline.png`"
            alt="Economic Health"
        /></router-link>
        <router-link
          to="/ecologichealth"
          class="rounded-full bg-opacity-50 bg-green-400 p-1.5"
          ><img
            class="nav-img"
            :src="`${publicPath}home-outline.png`"
            alt="Ecologic Health"
        /></router-link>
        <router-link
          to="/insights"
          class="rounded-full bg-opacity-50 bg-green-400 p-1.5"
          ><img
            class="nav-img"
            :src="`${publicPath}lightbulb-outline.png`"
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
  computed: {
    getRoute() {
      return this.$route.name;
    },
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
