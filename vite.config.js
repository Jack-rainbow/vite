export default {
    vueCustomBlockTransforms: {
      i18n: ({ code }) => {
        // return transformed code
      }
    },

    // 代理（vite使用koa-proxies进行代理）
    proxy: {
        '/api': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
  }