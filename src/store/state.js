const state = {
  user: {
    username: localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "",
    // password: "",
    islogin: localStorage.getItem("islogin")
      ? localStorage.getItem("islogin")
      : "",
    Authorization: localStorage.getItem("Authorization")
      ? localStorage.getItem("Authorization")
      : ""
  },
  music: {
    songList: []
  }
};
export default state;
