import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const routes = [{
        path: '/',
        redirect: '/home/article'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: '/home/article',
        children: [{
                path: 'article',
                component: () =>
                    import ("../components/articlepage.vue"),
                name: 'articlepage'
            },
            {
                path: 'video',
                // component: () =>
                //     import ("../components/videopagetwo.vue"),
                component: () =>
                    import ("../components/videopage.vue"),
                name: 'videopage'
                    // name: 'videopagetwo'
            },
            {
                path: 'forum',
                component: () =>
                    import ("../components/forumpage.vue"),
                name: 'forumpage'
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        redirect: '/about/xiangqing',
        component: () =>
            import ('../views/About.vue'),
        children: [{
                path: 'xiangqing',
                component: () =>
                    import ("../components/xiangqing.vue"),
                name: 'xiangqing'
            },
            {
                path: 'add',
                component: () =>
                    import ("../components/add.vue"),
                name: 'add'
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    //   base: process.env.BASE_URL,
    routes
})
export default router