/* eslint-disable no-console */
import * as types from "./mutation-types";
import music from "@/api/apis/music.js"
const actions = {
  getSongListAction(context) {
    // const list = [{ name: "aa", age: "20" },{ name: "bb", age: "20" }];
    // this.$api.
    music.get_songList("type=top&key=123456").then(res => {
        console.log("aciton_songlist", res.data.songList);
        context.commit(types.GET_SONGLIST,res.data.songList);
      });
  },
  getSingerListAction(context) {
    music.get_singerList("type=top&key=123456").then(res => {
        console.log("aciton_singerlist", res.data.singerList);
        context.commit(types.GET_SINGERLIST,res.data.singerList);
      });
  }
};
export default actions;
