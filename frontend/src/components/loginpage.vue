<!-- LoginPage.vue -->
<template>
    <div class="login-page">
      <div class="login-form">
        <h2>Login</h2>
        <input type="text" placeholder="Username" v-model="username">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="login">Login</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        // 로그인 기능을 여기에 구현합니다.
        console.log('Username:', this.username);
        console.log('Password:', this.password);
      }
    }
  }
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-form {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .login-form h2 {
    margin-bottom: 20px;
  }
  
  .login-form input {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .login-form button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
  
  .login-form button:hover {
    background-color: #0056b3;
  }
  </style>
  