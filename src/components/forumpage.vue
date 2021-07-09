<template>
  <div id="forumpage">
    <header>
      <textarea ref="textarea" name="" id="textarea"></textarea>
      <button @click="btnclick1()">发布</button>
    </header>
    <footer>
      <ul>
        <li v-for="item in datas" :key="item._id" @click="liclick(item)">
          <div>话题:{{ item.talk }}</div>
          <div>发表者:{{ item.username }}</div>
        </li>
      </ul>
    </footer>
    <div ref="cover" class="cover">
      <div class="close" @click="closeClick()">X</div>
      <div class="read">
        <h2>话题:{{ datass.talk }}</h2>
        <p>提问者:{{ datass.username }}</p>
        <hr />
        <input ref="inp" type="text" placeholder="写下你的评论" />
        <button @click="btnclick2()">评论</button>
        <hr />
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "forumpage",
  data() {
    return {
      datas: [],
      datass: {},
    };
  },
  // mounted
  mounted() {
    this.showdatabase();
  },
  updated() {
    this.showdatabase();
  },
  methods: {
    async showdatabase() {
      await this.$axios
        .get("http://localhost:8080/home/showforum")
        .then((res) => {
          this.datas = res.data;
        });
    },
    async btnclick1() {
      // console.log(this.$refs.textarea.value);
      await this.$axios({
        method: "post",
        url: "http://localhost:8080/home/forum",
        data: this.$qs.stringify({
          username: this.$store.state.usernameValue,
          email: this.$store.state.emailValue,
          talk: this.$refs.textarea.value,
          discuss: [],
        }),
      });
    },
    liclick(item) {
      this.$refs.cover.style.display = "block";
      this.datass = item;
      console.log(this.datass);
    },
    closeClick() {
      this.$refs.cover.style.display = "none";
    },
    async btnclick2() {
      await this.$axios({
        method: "post",
        url: "http://localhost:8080/home/adddiscuss",
        data: this.$qs.stringify({
          _id: this.datass._id,
          discuss: this.$refs.inp.value,
        }),
      }).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>

<style scoped>
#forumpage {
  margin-top: 100px;
  position: relative;
}
#forumpage header {
  width: 100vw;
  background-color: #ccc;
  position: relative;
  height: 25vh;
}
#forumpage header #textarea {
  position: absolute;
  top: 1vh;
  left: 30px;
  height: 23vh;
  width: 70vw;
}
#forumpage header button {
  position: absolute;
  right: 10vw;
  top: 12vh;
}
#forumpage footer {
  margin-top: 5px;
  /* background-color: #ccc; */
  height: 50vh;
  overflow: scroll;
}
#forumpage footer ul li {
  box-sizing: border-box;
  width: 100vw;
  height: 10vh;
  border: 2px solid pink;
  text-align: left;
  padding: 5px;
}
#forumpage .cover {
  display: none;
  position: absolute;
  left: 5vw;
  top: 5vh;
  border-radius: 8px;
  width: 90vw;
  height: 70vh;
  z-index: 999;
  background-color: rgb(0 0 0 / 35%);
}
#forumpage .cover .close {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  /* background-color: rgb(0 0 0 / 35%); */
  border-radius: 50%;
}
#forumpage .cover .read {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 60vh;
  background-color: #fff;
  border-radius: 10px;
  overflow: scroll;
}
#forumpage .cover .read p {
  margin: 4px;
}
#forumpage .cover .read input {
  font-size: 20px;
  width: 200px;
  border: 5px solid white;
  border-radius: 10px;
  padding: 3px;
  /* width: ; */
  border-bottom: 2px solid #ccc;
}
#forumpage .cover .read button {
  margin: 20px;
}
</style> 