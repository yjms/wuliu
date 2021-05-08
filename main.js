import Vue from 'vue'
import App from './App'
import tools from "@/static/js/tool.js"
import {login} from "@/static/js/require.js"
import animated from '@/static/css/animate.min.css'
Vue.use(animated)
// import
// @import from "animate.css"
Vue.prototype.$tool = tools;
Vue.prototype.$api = login;
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
