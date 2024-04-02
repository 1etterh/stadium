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

