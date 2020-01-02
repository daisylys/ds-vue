// import toast from './toast/toast.js'
let myPlugin = {};
myPlugin.install = Vue => {
  //   Vue.mixin({
  //     filters: {
  //       //   $_filterType: value => {
  //       //     return typeConfig[value] || "type undefined";
  //       //   },
  //       getYMD: value => {
  //         return value.split(" ")[0];
  //       }
  //     }
  //   });

  Vue.filter("getYMD", value => {
    return value.split(" ")[0];
  });
};
export default myPlugin;

// https://www.jianshu.com/p/a72bf060eeaa
// https://www.jianshu.com/p/4507fa20920d