<!-- LoginPage.vue -->
<template>
    <div class="login-page">
        <div class="app-name">
            <h1>STADIUM</h1>
            <h3>Login</h3>
            
        </div>
      <div class="login-form">
     
        <input type="text" placeholder="Username" v-model="username">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="login" class="contrast">Login</button>
      </div>
      <div class="create-account">
        <router-link to="/register">
            or create account
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name:'Login',
  data(){
    return{
      username:'',
      password:''
    }
  } 
  ,
    methods:{
      login(){
        axios.post('/login',{username:this.username, password:this.password})
        .then((res)=>{
          if(res.data==true){
            console.log('logged in')
            this.$router.push('/')
          }
          else{
            this.$router.go(-1)
          }
        })
      }
    }
  }
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:10px;
  }

  .app-name{
    padding:50px;
    padding-bottom:20px;
    height:30%;
  }
  .app-name>p,h3{
    margin:10px;
  }
  
  </style>
  