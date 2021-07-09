<template>
  <div id="add">
    <div class="titleclass same">
      <input
        type="text"
        name="title"
        placeholder="请输入标题"
        v-model="titleValue"
        class="search"
      />
    </div>
    <div class="authorclass same">
      <input
        class="search"
        type="text"
        name="author"
        v-model="authorValue"
        placeholder="请输入文章作者"
      />
    </div>
    <div class="publishclass same">
      <input
        class="search"
        type="date"
        name="publishDate"
        v-model="publishDateValue"
        placeholder="发布时间"
      />
    </div>
    <ckeditor
      :editor="editor"
      tag-name="textarea"
      v-model="editorData"
      :config="editorConfig"
      name="content"
    ></ckeditor>
    <button id="btnclass" @click="btnclick()">提交</button>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  name: "add",
  data() {
    return {
      titleValue: "",
      authorValue: "",
      publishDateValue: Date.now(),
      editorData: "<p>Content of the editor.</p>",
      editor: ClassicEditor,
      editorConfig: {
        // The configuration of the editor.
        // toolbar: ["bold", "italic", "|", "link"],
      },
    };
  },
  // updated() {
  //   this.titleValue = "";
  //   this.authorValue = "";
  //   this.publishDateValue = Date.now();
  //   this.editorData = "<p>Content of the editor.</p>";
  // },
  methods: {
    async btnclick() {
      await this.$axios({
        method: "post",
        url: "http://localhost:8080/admin/add",
        data: this.$qs.stringify({
          title: this.titleValue,
          author: this.authorValue,
          publishDate: this.publishDateValue,
          content: this.editorData,
        }),
      });
      setTimeout(() => {
        this.destroyshow();
      }, 2000);
      this.$router.replace("/about/xiangqing");
    },
    destroyshow() {
      this.titleValue = "";
      this.authorValue = "";
      this.publishDateValue = Date.now();
      this.editorData = "<p>Content of the editor.</p>";
    },
  },
};
</script>

<style>
#add {
  height: 64vh;
  /* background-color: rgb(100, 202, 202); */
  /* background: linear-gradient(120deg, #43e97b, #38f9d7, #43e97b); */
  /* background: linear-gradient(100deg, #a18cd1, #fbc2eb, #a18cd1); */
  background: linear-gradient(120deg, #fa709a, #fee140, #fa709a);
  /* margin-bottom: 44px; */
  padding-bottom: 50px;
  margin-top: 49px;
  overflow: scroll;
}
#add .same {
  padding: 10px;
  /* margin: 10px; */
}
#add .same .search {
  font-size: 20px;
  width: 200px;
  border: 5px solid white;
  border-radius: 10px;
  padding: 3px;
}
#add #btnclass {
  font-size: 20px;
  margin-top: 25px;
  width: 70px;
  height: 40px;
  color: #fff;
  transition: 0.5s;
  /* background: linear-gradient(120deg, #fa709a, #fee140, #fa709a); */
  background: linear-gradient(120deg, #43e97b, #38f9d7, #43e97b);
  background-size: 200%;
  border-radius: 10px;
}
#add #btnclass:hover {
  background-position: right;
  transform: translateY(-10px);
}
</style>