// index.js是一个api接口的出口，这样就可以把api接口根据功能划分为多个模块，利于多人协作开发
import music from "./apis/music.js";
// 其他模块的接口……

// 导出接口
export default {
  music,
  // ……
};
