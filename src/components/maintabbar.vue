<template>
  <div id="footer">
    <tabbaritem path="/home">
      <img slot="item-icon" src=".././assets/home.svg" alt="" />
      <img slot="item-icon-active" src=".././assets/home_active.svg" alt="" />
      <div slot="item-text">首页</div>
    </tabbaritem>
    <tabbaritem path="/about">
      <img slot="item-icon" src=".././assets/profile.svg" alt="" />
      <img
        slot="item-icon-active"
        src=".././assets/profile_active.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tabbaritem>
  </div>
</template>

<script>
import tabbaritem from "./tabbaritem.vue";
export default {
  name: "maintabbar",
  components: {
    tabbaritem,
  },
};
</script>

<style scoped>
/* 底部导航栏 */
#footer {
  z-index: 3;
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -2px 10px rgba(100, 100, 100, 0.3);
  font-size: 14px;
}
/* #footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55px;
  background-color: #ccc;
  border-top: 1px solid rgb(95, 86, 88);
  display: flex;
  justify-content: space-around;
  align-items: center;
} */
</style>