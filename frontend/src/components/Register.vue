<!-- Register.vue -->
<template>
    <div class="signup-page">
      <form class="signup-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username" v-model="username">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="signup">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      }
    },
    methods: {
      signup() {
        // 회원가입 기능을 여기에 구현합니다.
        console.log('Username:', this.username);
        console.log('Email:', this.email);
        console.log('Password:', this.password);
      }
    }
  }
  </script>
  
  <style scoped>
  .signup-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .signup-form {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .signup-form h2 {
    margin-bottom: 20px;
  }
  
  .signup-form input {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .signup-form button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #28a745;
    color: #fff;
    cursor: pointer;
  }
  
  .signup-form button:hover {
    background-color: #218838;
  }
  </style>
  