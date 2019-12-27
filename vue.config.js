// new https://blog.csdn.net/weixin_44524836/article/details/88376804
const path = require("path");
const UglifyPlugin = require("uglifyjs-webpack-plugin");//缩小(压缩优化)js文件
const px2rem = require("postcss-px2rem");//px转换为rem 
// const test = require("./data/test.json");
const postcss = px2rem({
  remUnit: 50, //基准大小 baseSize，需要和rem.js中相同 default 1rem=50px
  remPrecision: 2
});
module.exports = {
  publicPath: "./", // 基本路径
  //   baseUrl: process.env.NODE_ENV === "production" ? "/online/" : "/",
  outputDir: "dist2",
  assetsDir: "assets",
  lintOnSave: false,
  // webpack配置
  chainWebpack: config => {
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.pdf$/)
      .exclude.add(path.resolve(__dirname, './src/assets'))
      .end()
      .use('file-loader')
      .loader('file-loader')
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
      // 将每个依赖包打包成单独的js文件
      let optimization = {
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace("@", "")}`;
              }
            }
          }
        },
        minimizer: [
          new UglifyPlugin({
            uglifyOptions: {
              compress: {
                // warnings: false,
                drop_console: true, // console
                drop_debugger: false,
                pure_funcs: ["console.log"] // 移除console
              }
            }
          })
        ]
      };
      Object.assign(config, {
        optimization
      });
    } else {
      // 为开发环境修改配置...
      config.mode = "development";
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
          vue$: "vue/dist/vue.esm.js",
          "@": path.resolve(__dirname, "./src"),
          "@c": path.resolve(__dirname, "./src/components"),
          "@v": path.resolve(__dirname, "./src/views")
        } // 别名配置
      }
    });
  },
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  // css相关配置
  // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      css: {}, // 这里的选项会传递给 css-loader
      less: {
        globalVars: {
          primary: "#fff"
        }
      },
      postcss: {
        plugins: [postcss]
      } // 这里的选项会传递给 postcss-loader
    },
    requireModuleExtension: false // 启用 CSS modules for all css / pre-processor files.
  },
  parallel: require("os").cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: "localhost",
    port: 8082,
    https: false,
    hotOnly: false,
    proxy: {
      //开发环境（dev）中解决了跨域问题
      "/api": {
       target: 'https://c.y.qq.com/v8/fcg-bin/',
        // target: "https://www.runoob.com/try/ajax/", //设置你调用的接口域名和端口号 别忘了加http
        // ws: true,
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true,
        pathRewrite: {
          "^/api": "" //用"/api"代替target里面的地址
        }
      }
    },
    // before(app) {
      // http://localhost:8081/test
    //   app.get("/test", (req, res) => {
    //     res.json(test);
    //   });
    // }
    // 第三方插件配置
    // pluginOptions: {}
  }
};
