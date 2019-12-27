import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import logger from "./logger";
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state, //初始化状态
  getters, //state 中派生出一些状态
  mutations, //更改store 中state唯一方法
  actions, //提交mutation，可异步
  plugin: debug ? [logger] : []
});
