import * as types from "./mutation-types";
const mutations = {
  [types.GET_SONGLIST](state, payload) {
    state.music.songList = payload;
  }
};
export default mutations;
