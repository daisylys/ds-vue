import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

new Vue({
  router,
  store, //注册store(这可以把 store 的实例注入所有的子组件)
  render: h => h(App)
}).$mount("#app");
