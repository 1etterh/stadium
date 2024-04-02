### side project for studying 
1. Vue.js
2. Node.js
3. RDS for MySQL


## 1. Settings
1. create folder 
```
c:\\Dev\\stadium
```
2. install vue, express generator in root folder
```
npm install @vue/cli
npm install express-generator
```
3. make frontend folder using vue
```
vue create frontend
```
	![[Pasted image 20240402135456.png]]
4. make backend folder using express
```
express --view=pug backend
```
	![[Pasted image 20240402135308.png]]


5. go to backend and install dependencies
	![[Pasted image 20240402135557.png]]
	![[Pasted image 20240402135622.png]]

*.gitignore*
```
.DS_Store

node_modules

/dist

  
  

# local env files

.env.local

.env.*.local

  

# Log files

npm-debug.log*

yarn-debug.log*

yarn-error.log*

pnpm-debug.log*

  

# Editor directories and files

.idea

.vscode

*.suo

*.ntvs*

*.njsproj

*.sln

*.sw?

```
6. move to stadium/frontend
7. edit: vue.config.js
	-to connect frontend with backend
	-
```
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
```
8. build frontend file
```
C:\Dev\stadium\frontend> npm run build
```

9. check conection of Backend n Frontend
```
C:\Dev\stadium\backend> npm start
```
	-if connection was successful, localhost:3000 will show the same page as frontend page.

