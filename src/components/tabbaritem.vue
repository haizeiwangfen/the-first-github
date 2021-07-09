<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
// import { defineComponent } from "@vue/composition-api";

export default {
  // setup() {},
  name: "tabbaritem",
  props: {
    path: String,
    activeColor: {
      //   typeof: String,
      type: String,
      default: "red",
      // 没有传值就默认red
    },
  },
  //   计算属性在调用时不需要加()
  computed: {
    //   这里是改变点击的颜色的
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
      //   相等返回1
    },
    // 这里是可以动态传入颜色
    activeStyle() {
      // 注意这里的this.isActive不用加（）
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemclick() {
      this.$router.replace(this.path);
      //   this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  /* line-height: 49px; */
  cursor: pointer;
}

.tab-bar-item img {
  margin-top: 3px;
  width: 24px;
  height: 24px;
  margin-bottom: 2px;
  vertical-align: middle;
}

/* .active {
  color: red;
} */
</style>