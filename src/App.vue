<template>
  <div id="app">
    <!-- <top></top> -->
    <!-- <navcar></navcar> -->
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
    <maintabbar></maintabbar>
  </div>
</template>

<script>
// import top from "./components/top.vue";
// import navcar from "./components/navcar.vue";

import maintabbar from "./components/maintabbar.vue";

export default {
  name: "App",
  components: {
    // top,
    // navcar,
    maintabbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}
/* .router-link-exact-active {
  background-color: #42b983;
} */
</style>
