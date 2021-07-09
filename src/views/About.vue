<template>
  <div id="about">
    <mainlogin @notclick="notlogin"> </mainlogin>
    <navcar-two></navcar-two>
    <div ref="kuangzi" class="notlogining">
      <div>
        <input type="email" v-model="emailValue" placeholder="请输入邮箱账号" />
      </div>
      <div>
        <input
          type="password"
          v-model="pswValue"
          placeholder="请输入邮箱密码"
        />
      </div>
      <div>
        <button @click="btnclick()">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import mainlogin from "../components/mainlogin";
import navcarTwo from "../components/navcarTwo.vue";

export default {
  name: "About",
  data() {
    return {
      emailValue: "",
      pswValue: "",
    };
  },
  components: {
    mainlogin,
    navcarTwo,
  },
  methods: {
    notlogin() {
      this.$refs.kuangzi.style.display = "block";
    },
    async btnclick() {
      await this.$axios({
        method: "post",
        url: "http://localhost:8080/admin/loginuser",
        data: this.$qs.stringify({
          email: this.emailValue,
          password: this.pswValue,
        }),
      }).then((res) => {
        console.log(res.data.username + res.data.email + res.data.role);
        this.$store.commit("setstate", {
          username: res.data.username,
          email: res.data.email,
          role: res.data.role,
        });
        this.$refs.kuangzi.style.display = "none";
      });
    },
  },
};
</script>

<style scoped>
#about .notlogining {
  display: none;
  z-index: 999;
  border-radius: 20px;
  width: 200px;
  height: 150px;
  /* box-shadow: 10px 10px 20px #ccc; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ccc;
}
#about .notlogining input {
  margin: 10px;
  height: 30px;
  border-radius: 10px;
  outline: none;
}
#about .notlogining button {
  width: 50px;
  height: 30px;
  border-radius: 10px;
  background-color: #ccc;
}
</style>
