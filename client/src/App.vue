<template>
  <div>
    <splash-screen :isLoading="isLoading" />
    <div v-if="!isLoading">
      <div class="flex items-center justify-center h-12 bg-custom-green-700">
        <h3 class="font-bold text-lg text-custom-green-100">{{ getRoute }}</h3>
      </div>
      <keep-alive>
        <router-view class="custom-min-height bg-custom-green-100" v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view class="custom-min-height bg-custom-green-100" v-if="!$route.meta.keepAlive"></router-view>
      <!--<router-view />-->
      <div class="h-16 bg-custom-green-100"></div>
      <div
        id="nav"
        class="
          fixed
          bottom-0
          min-w-full
          h-16
          flex
          flex-row
          items-center
          justify-around
        "
      >
        <router-link
          to="/"
          class=" min-h-full flex-grow flex items-center"
          :class="getRoute === 'My Status' ? ['bg-opacity-100','bg-custom-green-700'] : ['bg-opacity-100', 'bg-custom-green-600']"
          ><img
            class="nav-img"
            :src="getRoute === 'My Status' ? `${publicPath}home-outline-g.png` : `${publicPath}home-outline.png`"
            alt="Home"
        /></router-link>
        <router-link
          to="/economicalhealth"
          class="min-h-full flex-grow flex items-center"
          :class="getRoute === 'Economical Health' ? ['bg-opacity-100','bg-custom-green-700'] : ['bg-opacity-100', 'bg-custom-green-600']"
          ><img
            class="nav-img"
            :src="getRoute === 'Economical Health' ? `${publicPath}account-cash-outline-g.png` : `${publicPath}account-cash-outline.png`"
            alt="Economical Health"
        /></router-link>
        <router-link
          to="/ecologicalhealth"
          class="min-h-full flex-grow flex items-center"
          :class="getRoute === 'Ecological Health' ? ['bg-opacity-100','bg-custom-green-700'] : ['bg-opacity-100', 'bg-custom-green-600']"
          ><img
            class="nav-img"
            :src="getRoute === 'Ecological Health' ? `${publicPath}sprout-outline-g.png` : `${publicPath}sprout-outline.png`"
            alt="Ecological Health"
        /></router-link>
        <!--<router-link
          to="/insights"
          class="rounded-full bg-opacity-50 bg-green-400 p-1.5"
          ><img
            class="nav-img"
            :src="`${publicPath}lightbulb-outline-w.png`"
            alt="Challenges"
        /></router-link>-->
        <router-link
          to="/map"
          class="min-h-full flex-grow flex items-center"
          :class="getRoute === 'Spendings map' ? ['bg-opacity-100','bg-custom-green-700'] : ['bg-opacity-100', 'bg-custom-green-600']"
          ><img class="nav-img" :src="getRoute === 'Spendings map' ? `${publicPath}map-outline-g.png` : `${publicPath}map-outline.png`" alt="Map"
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
  min-height: calc(100vh - 7rem) !important;
}

.nav-img {
  height: 2rem;
  width: 2rem;
  margin: 0 auto;
}
</style>
