
<template>
  <div class="register-page">
    <div class="register-head">
      <h1>Register</h1>
    </div>
  
      <div class="register-body" :class="{ 'unique': isUsernameUnique }">
        <div class="register-input">
          <input type="text" name="username" v-model="registerUsername" placeholder="ID">
          <button @click="checkUsername" class="contrast">c</button>
        </div>
        <div class="register-input" >
          <div class="register-password">
            <input type="password" v-model="registerPassword" placeholder="Password">
            <input type="password" v-model="registerPasswordConfirm" placeholder="Confirm Password">
          </div>
          <button @click="register" class="contrast">r</button>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      registerUsername: "",
      registerPassword: "",
      registerPasswordConfirm: "",
      isUsernameUnique: false,
      isPasswordVisible: false
    };
  },
  computed: {
    isValidRegister() {
      return (
        this.isUsernameUnique &&
        this.registerPassword === this.registerPasswordConfirm &&
        this.registerUsername !== "" &&
        this.registerPassword !== ""
      );
    }
  },
  methods: {
    async checkUsername() {
      try {
        const response = await fetch('/checkUsername', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.registerUsername
          })
        });

        const data = await response.json();
        if (data.exists) {
          alert('이미 사용 중인 사용자 이름입니다.');
        } else {
          alert('사용 가능한 사용자 이름입니다.');
            this.isUsernameUnique = true;
            this.isPasswordVisible = true;        }
      } catch (error) {
        console.error(error);
        alert('사용자 이름을 확인하는 중 오류가 발생했습니다.');
      }


    },
    async register() {
      // 회원 가입 기능 구현
    }
  }
};
</script>

<style scoped>
.register-head {
  height: 20%;
  padding-top: 250px;
}
.register-body {
  width: 200%;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid black; */
}
.register-input {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}
.register-input > input {
  width: 70%;
}
.register-input > button {
  width: 20%;
}
.register-password {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}


.unique {
  transform: translateX(-50%);
  transition: all 1s;
}
</style>
