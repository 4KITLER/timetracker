<template>
  <div id="container" class="sf-pagewrap-area-layout-wide sf-pagewrap-area-container-fixed container-size-1320 mt-4">
    <router-link class="sf-link t-1" to="/">Главная</router-link> |
    <router-link class="sf-link t-1" to="/tasks">Проекты</router-link>
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
