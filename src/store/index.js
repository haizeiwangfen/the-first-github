import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usernameValue: '',
        emailValue: '',
        roleValue: '',
        ton: true
    },
    mutations: {
        setstate(state, restate) {
            state.usernameValue = restate.username
            state.emailValue = restate.email
            state.roleValue = restate.role
            state.ton = !state.ton
                // console.log(restate.username + restate.email);
        },
        // getstate(state) {
        //     return function () {

        //     }
        // }
        // exitstate(state) {}
    },
    // plugins: [createPersistedState()],
    actions: {},
    modules: {}
})