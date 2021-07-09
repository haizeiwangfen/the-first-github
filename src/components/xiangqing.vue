<template>
  <div id="xiangqing">
    <!-- <h1>发布功能</h1> -->
    <table>
      <tr>
        <th>标题</th>
        <th>作者</th>
        <th>日期</th>
        <th>发布</th>
      </tr>
      <tr v-for="item in article" :key="item._id">
        <th>{{ item.title }}</th>
        <th>{{ item.author }}</th>
        <th>{{ item.publishDate }}</th>
        <th><button @click="showclick(item._id)">发布</button></th>
        <!-- <th><button>发布</button></th> -->
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "xiangqing",
  data() {
    return {
      article: [],
    };
  },
  mounted() {
    // this.$axios.get("/api/admin/announce").then((res) => {
    //   this.article = res.data;
    // });
    this.show();
  },
  updated() {
    this.show();
  },
  methods: {
    async showclick(item) {
      console.log(item);
      await this.$axios({
        method: "post",
        url: "http://localhost:8080/admin/show",
        data: this.$qs.stringify({
          id: item,
        }),
      });
      // this.$router.replace("/home/article");
    },
    show() {
      this.$axios.get("http://localhost:8080/admin/announce").then((res) => {
        this.article = res.data;
      });
    },
  },
};
</script>

<style>
#xiangqing {
  margin-top: 49px;
}
table {
  width: 90%;
  background: #ccc;
  margin: 10px auto;
  border-collapse: collapse; /*border-collapse:collapse合并内外边距(去除表格单元格默认的2个像素内外边距*/
}
th,
td {
  height: 25px;
  line-height: 25px;
  text-align: center;
  border: 1px solid #ccc;
}
th {
  background: #eee;
  font-weight: normal;
}
tr {
  background: #fff;
}
tr:hover {
  background: #cc0;
}
td a {
  color: #06f;
  text-decoration: none;
}
td a:hover {
  color: #06f;
  text-decoration: underline;
}
</style>