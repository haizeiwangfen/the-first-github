<template>
  <div id="article">
    <div
      class="main"
      v-for="item in articlePage"
      :key="item._id"
      @click="artclick(item)"
    >
      <h2>{{ item.title }}</h2>
      <p>发布时间{{ item.publishDate }}</p>
      <p>作者{{ item.author }}</p>
    </div>
    <div ref="second" class="second">
      <div class="close" @click="closeClick()">X</div>
      <div class="read">
        <h2>{{ onecePage.title }}</h2>
        <p>作者:{{ onecePage.author }}</p>
        <div class="titlexq" v-html="onecePage.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "articlepage",
  data() {
    return {
      // show: false,
      articlePage: [],
      onecePage: {},
    };
  },
  created() {
    this.$axios.get("http://localhost:8080/home/article").then((res) => {
      console.log(res);
      this.articlePage = res.data;
    });
  },
  methods: {
    artclick(item) {
      this.$refs.second.style.display = "block";
      // console.log(item);
      this.onecePage = item;
      // console.log(this.onecePage);
    },
    closeClick() {
      this.$refs.second.style.display = "none";
    },
  },
};
</script>

<style>
#article {
  position: relative;
  display: flex;
  margin-top: 93px;
  padding: 10px;
  flex-direction: column;
  /* flex-wrap: wrap; */
  align-items: center;
}
#article .main {
  /* line-height: 100px; */
  /* padding-top: 10px; */
  border-radius: 10px;
  flex: 1;
  width: 100vw;
  /* background-color: rgba(48, 45, 45, 0.199); */
  background-color: #f6f6f6;
  height: 100px;
  margin-top: 10px;
  /* border: 2px solid #ccc; */
  /* box-shadow: 7px 7px 20px #8d6d6d3b; */
  box-shadow: 7px 10px 20px #ccc;
}
#article .second {
  display: none;
  position: absolute;
  left: 5vw;
  top: 5vh;
  border-radius: 8px;
  width: 90vw;
  height: 70vh;
  z-index: 999;
  background-color: rgb(0 0 0 / 35%);
  /* background-color: #; */
  /* background-color: black; */
  /* transition: all 3s 2s linear; */
  /* transition: all 0.4s ease-out; */
}
#article .second .close {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  /* background-color: rgb(0 0 0 / 35%); */
  border-radius: 50%;
}
#article .second .close img {
  width: 100%;
  height: 100%;
}
#article .second .read {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 50vh;
  background-color: #fff;
  border-radius: 10px;
  overflow: scroll;
}
#article .second .read .titlexq p {
  text-align: left;
  margin: 4px;
}
/* .slide-fade-leave-active {
  transition: all 3s cubic-bezier(1, 0.5, 0.8, 1) !important;
} */
</style>