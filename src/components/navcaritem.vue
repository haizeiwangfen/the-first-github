<template>
  <div id="navcaritem" @click="itemclick()">
    <div><slot name="itemarticle"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navcaritem",
  props: {
    path: String,
  },
  computed: {},
  methods: {
    itemclick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
#navcaritem {
  flex: 1;
  text-align: center;
  height: 49px;
  /* line-height: 49px; */
  cursor: pointer;
}
</style>