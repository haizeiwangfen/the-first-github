<template>
  <div ref="show" id="mainnavcar">
    <div id="navcar">
      <navcaritem path="/about/xiangqing">
        <div slot="itemarticle">发布</div>
      </navcaritem>
      <navcaritem path="/about/add">
        <div slot="itemarticle">新增</div>
      </navcaritem>
    </div>
    <router-view />
  </div>
</template>

<script>
import navcaritem from "./navcaritem.vue";

export default {
  name: "navcarTwo",
  // props: [''],
  data() {
    return {
      roleV: "",
    };
  },
  components: {
    navcaritem,
  },
  // created() {
  //   this.roleV = this.$store.state.roleValue;
  // },
  mounted() {
    this.roleV = this.$store.state.roleValue;
    this.elshow();
  },
  // watch: {
  //   // this.elshow()
  //   roleV: {
  //     deep: true,
  //     elshow(value, oldvalue) {
  //       if (this.roleV == "admin") {
  //         this.$refs.show.style.display = "block";
  //       } else {
  //         this.$refs.show.style.display = "none";
  //       }
  //     },
  //   },
  // },
  methods: {
    elshow() {
      if (this.$store.state.roleValue == "admin") {
        this.$refs.show.style.display = "block";
      } else {
        this.$refs.show.style.display = "none";
      }
    },
  },
  updated() {
    this.elshow();
  },
};
</script>

<style scoped>
/* #mainnavcar {
  display: block;
} */
#navcar {
  /* position: fixed; */
  position: absolute;
  /* position: sticky; */
  height: 49px;
  background: linear-gradient(120deg, #43e97b, #38f9d7, #43e97b);
  /* background: linear-gradient(120deg, #fa709a, #fee140, #fa709a); */
  top: 88px;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
  line-height: 49px;
  border-bottom: 1px solid #ccc;
}
</style>