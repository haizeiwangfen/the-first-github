<template>
  <div class="home">
    <top></top>
    <navcar></navcar>
  </div>
</template>

<script>
// @ is an alias to /src
import top from "../components/top.vue";
import navcar from "../components/navcar.vue";
export default {
  name: "Home",
  components: {
    top,
    navcar,
  },
};
</script>

<style scoped>
</style>