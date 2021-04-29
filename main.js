import Vue from 'vue'
import App from './App'
import tools from "@/static/tool.js"
Vue.prototype.$tool = tools;
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
