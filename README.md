# vuetest

> A Vue.js project

### 目录结构

- build  ## 配置文件夹。 webpack 和vue-loader的基本配置，（系统生成，不用动）
- config  ## 配置文件夹。 环境配置文件对应不同的环境下的情况，生产环境，开发环境，测试环境。（不用动）
- **src  ## 源码文件夹**
  - **api  ## 前端的调用接口配置**
  - assets ## 静态文件文件夹，图片之类的文件
  - **components  ## 组件，界面中相对独立的一个单元。**
  - mock ## 用于测试时，拦截ajax请求，模拟后端接口的功能。
  - **router  ## 前端界面的路由跳转**
  - **util   ## 一些工具函数的实现，供其他程序调用**
  - **view  ## 前端的界面，调用components的组件，组合为界面，然后通过router跳转，切换不同的view，实现前端页面的跳转和路由的跳转。**
  - **vuex  ## 组件间共享的数据，以及对这些数据的操作。**
  - App.vue   ## 界面容器文件
  - main.js ## 程序的入口文件
- static ## 没啥用，系统生成的
- test  ## 单元测试文件夹，没用
- **index.html ## 入口网页**
- **package.json  ## npm依赖配置文件**

### 依赖和系统需求

1. node.js：8.0 及以上，
2. Git
3. 编辑器：vscode （插件：Vetur）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
