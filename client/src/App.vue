<template>
  <div>
    <div class="flex content-center flex-grow h-12 dnb-green">
      <div
        id="nav"
        class="flex-wrap content-center justify-between flex-grow hidden px-8  sm:flex"
      >
        <router-link to="/">Home</router-link>
        <router-link to="/account">Account</router-link>
        <router-link to="/challenges">Challenges</router-link>
        <router-link to="/forest">My Forest</router-link>
      </div>
      <div
        id="nav"
        class="flex flex-wrap content-center justify-end flex-grow px-8  sm:hidden"
      >
        <svg
          @click="toggleSidebar"
          viewBox="0 0 100 80"
          width="40"
          height="40"
          class="duration-150 rounded-full cursor-pointer  hover:bg-gray-100 hover:bg-opacity-50"
        >
          <rect x="15" y="15" width="70" height="10" fill="#2c3e50"></rect>
          <rect x="15" y="35" width="70" height="10" fill="#2c3e50"></rect>
          <rect x="15" y="55" width="70" height="10" fill="#2c3e50"></rect>
        </svg>
      </div>
    </div>
    <div
      v-if="sidebar"
      class="fixed z-50 flex flex-col w-full h-full gap-4 px-8 py-4 bg-gray-700  sm:hidden main-sidebar"
      :class="sidebar ? ['left-0'] : ['left-full']"
    >
      <router-link
        @click="toggleSidebar"
        class="py-2 rounded shadow-lg dnb-green"
        to="/"
        >Home</router-link
      >
      <router-link
        @click="toggleSidebar"
        class="py-2 rounded shadow-lg dnb-green"
        to="/account"
        >Account</router-link
      >
      <router-link
        @click="toggleSidebar"
        class="py-2 rounded shadow-lg dnb-green"
        to="/challenges"
        >Challenges</router-link
      >
      <router-link
        @click="toggleSidebar"
        class="py-2 rounded shadow-lg dnb-green"
        to="/forest"
        >My Forest</router-link
      >
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
