import Vue from "vue";
import Router from "vue-router";
// 1.定义/导入（路由）组件
import music from "@v/music.vue";
import login from "@v/login.vue";
Vue.use(Router);
// 创建 router 实例，然后传 `routes` 配置
const router = new Router({
  routes: [
    { path: "/", redirect: { name: "music" } },
    { path: "/login", name: "login", component: login },
    { path: "/music", name: "music", component: music }
  ]
});
export default router;
