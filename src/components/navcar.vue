<template>
  <div id="mainnavcar">
    <div id="navcar">
      <navcaritem path="/home/article">
        <div slot="itemarticle">文章</div>
      </navcaritem>
      <navcaritem path="/home/video">
        <div slot="itemarticle">视频</div>
      </navcaritem>
      <navcaritem path="/home/forum">
        <div slot="itemarticle">论坛</div>
      </navcaritem>
    </div>
    <!-- <router-view></router-view> -->
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
  </div>
  <!-- <router-view></router-view> -->
</template>

<script>
import navcaritem from "./navcaritem.vue";

export default {
  name: "navcar",
  components: {
    navcaritem,
  },
};
</script>

<style scoped>
#navcar {
  position: fixed;
  height: 49px;
  background-color: #a0eee1;
  top: 44px;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
  line-height: 49px;
  border-bottom: 1px solid #ccc;
}
</style>