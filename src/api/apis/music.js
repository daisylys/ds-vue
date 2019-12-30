import { fetch } from "../fetch";

const music = {
  get_songList(data) {
    return fetch({
      url: "/songs/index",
      method: "post",
      data
    });
  }
};
export default music;
