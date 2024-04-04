<!-- LoginPage.vue -->
<template>
    <div class="login-page">
        <div class="app-name">
            <h1>STADIUM</h1>
            <h3>Login</h3>
            
        </div>
      <form class="login-form">
     
        <input type="text" placeholder="Username" name="username">
        <input type="password" placeholder="Password" name="password">
        <button type="submit" class="contrast">Login</button>
      </form>
      <div class="create-account">
        <router-link to="/register">
            or create account
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'Login'
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
  