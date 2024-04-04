<template>
    <div class="app-name">STADIUM</div>
    <div class="login-container">
        <form action="/login" method="POST">
            <input type="text" name="username">
            <input type="password" name="password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
// import axios from 'axios'
// import Post from './Post.vue'
export default {
    name: 'Login',
    data(){
        return{

           
        }
    },
    components:{

    },
    props:{

    },
    methods(){
      
    }
}
</script>

<style>

</style>
