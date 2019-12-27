/* eslint-disable no-console */
import axios from "axios";
export const ERR_OK = "200";
// let baseUrl = "";
if (process.env.NODE_ENV === "development") {
  //   baseUrl = process.env.VUE_APP_API;
} else if (process.env.NODE_ENV === "porduction") {
  //   baseUrl = process.env.production.BASE_URL;
}

export function fetch(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      timeout: 10000
    });
    instance.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";

    //拦截请求:发送请求前，对请求的配置参数（config）做处理
    instance.interceptors.request.use(
      response => {
        console.log("请求成功！：", response);
        return response;
      },
      err => {
        console.log("请求错误！：", err);
        return Promise.reject(err);
      }
    );
    //拦截响应
    // 请求得到响应后，对返回数据做处理;请求或响应失败时，指定对应的错误处理函数。
    instance.interceptors.response.use(
      response => {
        console.log("响应成功！：", response);
        return response;
      },
      err => {
        console.log("响应错误！：", err);
        return Promise.reject(err);
      }
    );
    instance(options)
      // axios(options)
      .then(respose => {
        if (respose.status == "200") {
          resolve(respose);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}
