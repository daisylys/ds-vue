import * as types from "./mutation-types";
const mutations = {
   // 修改token，并将token存入localStorage
   [types.CHANGE_LOGIN](state, user) {
    state.user.username = user.username;
    state.user.Authorization = user.Authorization;
    state.user.islogin=user.islogin;
    localStorage.setItem("username", user.username);
    localStorage.setItem("islogin", user.islogin);
    localStorage.setItem("Authorization", user.Authorization);
  },
  [types.CHANGE_LOGOUT](state) {
    state.user.username = "";
    state.user.Authorization = "";
    state.user.islogin=false;
    localStorage.removeItem("username");
    localStorage.removeItem("islogin");
    localStorage.removeItem("Authorization");
  },
  [types.GET_SONGLIST](state, payload) {
    state.music.songList = payload;
  },
  
};
export default mutations;
