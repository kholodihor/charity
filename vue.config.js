const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/charity/' : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/_shared.scss";`,
      },
    },
  },
});
