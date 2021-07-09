import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'

// import { createApp } from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue2';
Vue.use(CKEditor);
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);

// Vue.prototype.$store = store
Vue.prototype.$qs = qs
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')