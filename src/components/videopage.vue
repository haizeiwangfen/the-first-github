<template>
  <div id="video">
    <div class="player-container main">
      <video-player
        class="vjs-custom-skin"
        :options="playerOptionsone"
      ></video-player>
      <video-player
        class="vjs-custom-skin"
        :options="playerOptionstwo"
      ></video-player>
    </div>
  </div>
</template>

<script>
//引入video样式
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";

import "videojs-contrib-hls";
// import
export default {
  name: "videopage",
  data() {
    return {
      playerOptionsone: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        controls: true, //控制条
        preload: "auto", //视频预加载
        muted: false, //默认情况下将会消除任何音频。
        loop: false, //导致视频一结束就重新开始。
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: "http://localhost:8080/videopartone.mp4", //你所放置的视频的地址，最好是放在服务器上
          },
        ],
        poster: "http://vjs.zencdn.net/v/oceans.png", //你的封面地址（覆盖在视频上面的图片）
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      },
      playerOptionstwo: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        controls: true, //控制条
        preload: "auto", //视频预加载
        muted: false, //默认情况下将会消除任何音频。
        loop: false, //导致视频一结束就重新开始。
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: "http://localhost:8080/videoparttwo.mp4", //你所放置的视频的地址，最好是放在服务器上
          },
        ],
        poster: "http://vjs.zencdn.net/v/oceans.png", //你的封面地址（覆盖在视频上面的图片）
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      },
    };
  },
};
</script>

<style>
#video {
  position: relative;
  display: flex;
  margin-top: 93px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
}
#video .main {
  flex: 1;
  width: 100vw;
  background-color: red;
  height: 100px;
  margin-top: 10px;
  box-shadow: 7px 7px 20px #888;
}
#video .main:nth-child(n) {
  margin-bottom: 100px;
}
</style>