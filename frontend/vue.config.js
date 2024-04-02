const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  outputDir:path.resolve(__dirname,'../backend/public/'),
  transpileDependencies: true,
  devServer:{
    proxy:{
      './api':{
        target: 'https://localhost:3000/api',
        changeOrigin:true,
        pathRewrite:{
          '^/api': '',
        },
      },
    },
  },

});
