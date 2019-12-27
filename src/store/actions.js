import * as types from "./mutation-types";
const actions = {
  getSongListAction(context) {
    const list = [{ name: "aa", age: "20" },{ name: "bb", age: "20" }];
    context.commit(types.GET_SONGLIST,list);
  }
};
export default actions;
