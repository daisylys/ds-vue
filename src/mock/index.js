/* eslint-disable no-console */
// 引入mockjs
const Mock = require("mockjs");
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const songListData = function() {
  let songList = [];
  for (let i = 0; i < 6; i++) {
    let newObject = {
      title: Random.csentence(5, 10), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage("300x250", "mock的图片"), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + " " + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };
    songList.push(newObject);
  }
  return {
    songList: songList,
  };
};
Mock.mock("/songs/index", "post", songListData);
const singerListData = function() {
  let songList = [];
  for (let i = 0; i < 6; i++) {
    let newObject = {
      title: Random.csentence(5, 10), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage("300x250", "mock的图片"), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + " " + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };
    songList.push(newObject);
  }
  let singerList = [];
  for (let i = 0; i < 6; i++) {
    let newObject = {
      thumbnail_pic_s: Random.dataImage("300x250", "mock的图片"), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
    };
    singerList.push(newObject);
  }
  return {
    singerList:singerList
  };
};
Mock.mock("/songs/singer", "post", singerListData);
// 登录数据
Mock.mock("/user/login", "post", req => {
  const { password, username } = JSON.parse(req.body);
  console.log(username,password);
  if (
    // username === "user" && 
    password === "111") {
    return {
      success: true,
      token:Random.guid()
    };
  } else {
    return {
      success: false
    };
  }
});


