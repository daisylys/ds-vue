<template>
  <div id="app">
    <div v-if="!user.islogin">登录</div>
    <div v-if="user.islogin">
      欢迎你:{{user.username}}|
      <span @click="logouthandle">退出</span>
    </div>
    <ul class="navbar">
      <!-- 使用 router-link 组件来导航. 通过传入 `to` 属性指定链接. -->
      <router-link tag="li" to="/music">音乐</router-link>
      <router-link tag="li" to="/foo">Foo</router-link>
      <router-link tag="li" to="/bar">Bar</router-link>
    </ul>
    <!-- 路由出口:路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "app",
  computed: {
    ...mapState(["user"])
  },
  methods: {
    loginhandle: function() {
      let token = localStorage.getItem("Authorization");
      if (token !== null) {
        alert("已经登录了");
      } else {
        this.$router.push({ path: "/login" }).catch(err => {
          err;
        });
      }
    },
    logouthandle: function() {
      this.changeLogout();
      this.$router.push({ path: "/login" }).catch(err => {
        err;
      });
    },
    ...mapMutations(["changeLogout"])
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  font-size: 12px;
  ul.navbar {
    display: flex;
    li {
      flex: 1;
      font-size: 12px;
      list-style: none;
    }
    .router-link-exact-active.router-link-active {
      color: #ffcccc;
    }
  }
}
</style>
