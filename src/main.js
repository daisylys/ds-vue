import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

import api from "./api";
Vue.prototype.$api = api; // 将api挂载到vue的原型上
// 引入mockjs
require("@/mock/index.js");
new Vue({
  router,
  store, //注册store(这可以把 store 的实例注入所有的子组件)
  render: h => h(App)
}).$mount("#app");

Vue.filter("getYMD", function(input) {
  return input.split(" ")[0];
});