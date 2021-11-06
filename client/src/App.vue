<template>
  <div>
    <div id="nav" class="bg-red-200">
      <router-link to="/">Hjem</router-link>
      <router-link to="/konto">Konto</router-link>
      <router-link to="/sparemal">Sparemål</router-link>
      <router-link to="/traer">Trær</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
