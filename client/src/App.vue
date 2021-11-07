<template>
  <div>
    <div class="bg-green-200 h-12 flex content-center flex-grow">
      <div id="nav" class="hidden sm:flex flex-grow flex-wrap justify-between content-center px-8">
        <router-link to="/">Home</router-link>
        <router-link to="/account">Account</router-link>
        <router-link to="/challenges">Challenges</router-link>
        <router-link to="/forest">My Forest</router-link>
      </div>
      <div id="nav" class="flex sm:hidden flex-grow flex-wrap justify-between content-center px-8">
        <svg @click="toggleSidebar" viewBox="0 0 100 80" width="40" height="40" class="rounded-full cursor-pointer duration-150 hover:bg-gray-100 hover:bg-opacity-50">
          <rect x="15" y="15" width="70" height="10" fill="#2c3e50"></rect>
          <rect x="15" y="35" width="70" height="10" fill="#2c3e50"></rect>
          <rect x="15" y="55" width="70" height="10" fill="#2c3e50"></rect>
        </svg>
      </div>
    </div>
    <div v-if="sidebar" class="flex sm:hidden gap-2 flex-col px-8 pt-2">
        <router-link @click="toggleSidebar" class="rounded bg-green-200 py-2" to="/">Home</router-link>
        <router-link @click="toggleSidebar" class="rounded bg-green-200 py-2" to="/account">Account</router-link>
        <router-link @click="toggleSidebar" class="rounded bg-green-200 py-2" to="/challenges">Challenges</router-link>
        <router-link @click="toggleSidebar" class="rounded bg-green-200 py-2"  to="/forest">My Forest</router-link>
      </div>
    <router-view />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const sidebar = ref(false);
    const toggleSidebar = () => sidebar.value = !sidebar.value;

    return { sidebar, toggleSidebar };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

#nav svg {
  color: ;
}

#nav a.router-link-exact-active {
  color: #22b171;
}
</style>
