### 什么是 Vite？
> github：https://github.com/vitejs/vite


### 特点：

- 1.快速的冷启动
    - 1.1 `冷启动`
        冷启动的时候，应用启动的时候，后台没有该应用的进行，系统会`创建一个新的进程`，分配给应用。
    - 1.2 `热启动`
        热启动应用的时候，后台已经有了该应用的进程，即使推出应用，但是`后台依然存在`。    
- 2.即时的模块热更新
- 3.真正的按需编译


### vite与webpack 目录结构对比

![wdhanJ.png](https://s1.ax1x.com/2020/09/12/wdhanJ.png)



### 文件异同点

- 1.index.html
 
``` js
<script type="module" src="/src/main.js"></script>
```
> 那这个是什么呢？请看下边

因为浏览器会识别`type='module'`的script元素，浏览器会把它当作是ES模块，从而使用HTTP请求获取模块内容

- 小知识点：
ESM 天生就是按需加载的，只有 import 的时候才会去按需加载

``` js
<script type="module">
  import { createApp } from './main.js‘;
  createApp();
</script>
```

### 弊端：
每个改动，浏览器通过本机`<script module>`支持对其解析，从而为每个导入都会发出一个`HTTP请求`.拦截浏览器对模块的请求并返回处理后的结果
[![wd47I1.png](https://s1.ax1x.com/2020/09/12/wd47I1.png)](https://imgchr.com/i/wd47I1)

#### 引发的问题？Vite是如何做到使用HTTP请求拿到模块？
vite会启动一个web server来代理这些模块，其里边就是借助koa启动了一个服务

### 环境变量

`注意:`只有带前缀的变量才对`VITE_`您的代码公开。例如VITE_SOME_KEY=123将暴露为


### 参考链接
1.[Es-import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
2.[有了 vite，还需要 webpack 么？](https://zhuanlan.zhihu.com/p/150083887?from_voters_page=true)