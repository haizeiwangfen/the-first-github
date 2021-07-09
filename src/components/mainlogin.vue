<template>
  <div id="mainlogin">
    <!-- <div id="touxiang"><slot name="right"></slot></div> -->
    <div v-if="$store.state.ton" class="login">
      <img src=".././assets/notlogged.png" alt="" @click="notclick()" />
      <!-- <div class="notclick" @click="notclick()">未登录，点击登录</div> -->
    </div>
    <div v-else class="login">
      <img src=".././assets/logging.png" alt="" />
      <p>姓名：{{ $store.state.usernameValue }}</p>
      <p>邮箱：{{ $store.state.emailValue }}</p>
      <div class="exitlogin" @click="loginclick()"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainlogin",
  data() {
    return {
      hhhh: true,
    };
  },
  updated() {
    this.hhhh = this.$store.state.ton;
  },
  methods: {
    notclick() {
      // this.trueOrNo = !this.trueOrNo;
      this.$emit("notclick", true);
      // console.log(this.eValue + this.pValue);
    },
    loginclick() {
      // this.trueOrNo = !this.trueOrNo;
      this.$store.state.ton = !this.$store.state.ton;
      this.$store.commit("setstate", {
        username: "",
        email: "",
        role: "",
      });
      // this.$refs.show.style.display = " none";
      // this.$store.commit("")
    },
  },
};
</script>

<style scoped>
#mainlogin {
  position: relative;
  left: 0;
  right: 0;
  height: 88px;
  background-color: #fff;
}
#mainlogin .login {
  position: absolute;
  background-color: #fff;
  /* background-color: pink; */
  top: 15px;
  left: 10px;
  right: 10px;
  padding: 10px;
  height: 50px;
}
#mainlogin .login img {
  position: absolute;
  left: 10px;
  width: 45px;
  height: 45px;
}
#mainlogin .login p {
  margin: 1px;
  margin-left: 15vw;
  text-align: left;
}
#mainlogin .login .exitlogin {
  position: absolute;
  right: 10px;
  top: 4vh;
  /* border: 1px solid #ccc; */
  /* box-shadow; */
}
/* #mainlogin .lgino .notclick {
  position: absolute;
  right: 20px;
  top: 25px;
  font-size: 16px;
} */
</style>