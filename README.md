# ds-vue

> npm install -g @vue/cli

> npm install -g @vue/cli-service-global

| 操作                 | 说明                                     |
| -------------------- | ---------------------------------------- |
| vue create [proName] |                                          |
| yarn install         | Project setup                            |
| yarn run serve       | Compiles and hot-reloads for development |
| yarn run build       | Compiles and minifies for production     |
| yarn run test        | Run your tests                           |
| yarn run lint        | Lints and fixes files                    |

### + vue.config.js

|                         |                       |
| ----------------------- | --------------------- |
| uglifyjs-webpack-plugin | 缩小(压缩优化)js 文件 |
| postcss-px2rem          | px 转换为 rem         |
| less less-loader        | 使用 less             |

## + src/router/index.js

> yarn add vue-router

- 路由守卫：使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆;不同路由不同页面标题，设置afterEach钩子函数

-多级路由

## + src/store

> yarn add vuex

## + src/api

## +src/mock (可选)

`Mock.mock( url, post/get , 返回的数据);`

> yarn add mockjs
