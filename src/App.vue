<template>
  <div id="app">
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
export default {
  name: "app"
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
