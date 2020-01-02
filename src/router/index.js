import Vue from "vue";
import Router from "vue-router";
// 1.定义/导入（路由）组件
import music from "@v/music/index.vue";
import singer from "@v/music/singer.vue";
import login from "@v/login.vue";
import my from "@v/my.vue";
Vue.use(Router);
// 创建 router 实例，然后传 `routes` 配置
const router = new Router({
  routes: [
    { path: "/", redirect: { name: "music" } },
    { path: "/login", name: "login", component: login },
    {
      path: "/music",
      name: "music",
      component: music,
      children: [{ path: "singer", name: "singer", component: singer }]
    },
    {
      path: "/my",
      name: "my",
      component: my,
      meta: {
        isLogin: true
      }
    }
  ]
});
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else {
    let token = localStorage.getItem("Authorization");
    if (to.meta.isLogin && (token === null || token === "")) {
      next("/login");
    } else {
      next();
    }
  }
});
// 不同路由不同页面标题，设置afterEach钩子函数

router.afterEach(to => {
  document.title = to.name;
});
export default router;
