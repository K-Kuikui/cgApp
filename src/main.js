// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
//全局ui组件
import { LoadingPlugin, ToastPlugin, AlertPlugin, ViewBox, XHeader, ConfirmPlugin } from 'vux'

Vue.component('view-box', ViewBox)
Vue.component('x-header', XHeader)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)



Vue.use(Vuex)


Vue.use(VueRouter)
Vue.config.productionTip = false


const FastClick = require('fastclick');
FastClick.attach(document.body)


router.beforeEach(function(to, from, next) {
    store.commit('updateRouter', to)
    store.commit('updateLoadingStatus', { isLoading: true })
    next()
})

router.afterEach(function(to) {
    store.commit('updateLoadingStatus', { isLoading: false })
})
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})