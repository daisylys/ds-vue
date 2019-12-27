import { fetch } from "../fetch";

const music = {
  JH_news(data) {
    return fetch({
      url: "/songs/index",
      method: "post",
      data
    });
  }
};
export default music;
