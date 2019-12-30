<template>
  <div>
    <input type="text" v-model="loginForm.username" placeholder="用户名" />
    <br />
    <br />
    <input type="text" v-model="loginForm.password" placeholder="密码111" />
    <br />
    <button @click="login">登录</button>
  </div>
</template>
<script>
/* eslint-disable no-console */
import { mapMutations } from "vuex";
import { fetch } from "@/api/fetch.js";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    login() {
      let _this = this;
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        alert("账号或密码不能为空");
      } else {
        fetch({
          method: "post",
          url: "/user/login",
          data: _this.loginForm
        })
          .then(res => {
            console.log(res.data);
            if (res.data.success) {
              _this.userToken = "Bearer " + res.data.token;
              // 将用户token保存到vuex中
              _this.changeLogin({
                username: _this.loginForm.username,
                islogin: true,
                Authorization: _this.userToken
              });
              _this.$router.push("/my");
              alert("登陆成功");
            } else {
              alert("账号或密码错误1");
            }
          })
          .catch(error => {
            alert("账号或密码错误2");
            console.log(error);
          });
      }
    }
  }
};
</script>