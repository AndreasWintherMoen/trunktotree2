<template>
  <div>
    <div class="dnb-green h-12 flex content-center flex-grow">
      <div
        id="nav"
        class="
          hidden
          sm:flex
          flex-grow flex-wrap
          justify-between
          content-center
          px-8
        "
      >
        <router-link to="/">Home</router-link>
        <router-link to="/account">Account</router-link>
        <router-link to="/challenges">Challenges</router-link>
        <router-link to="/forest">My Forest</router-link>
      </div>
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
    </div>
    <router-view />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const sidebar = ref(false);
    const toggleSidebar = () => (sidebar.value = !sidebar.value);

    return { sidebar, toggleSidebar };
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
</style>
