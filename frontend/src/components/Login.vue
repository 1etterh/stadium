<template>
    <div class="app-name">STADIUM</div>
    <div class="login-container">
        <form action="/login" method="POST">
            <input type="text">
            <input type="password">
            <button type="submit"></button>
        </form>
    </div>
</template>

<script>
// import axios from 'axios'
import Post from './Post.vue'
export default {
    name: 'Feed',
    data(){
        return{
           postdata:[],
           
        }
    },
    components:{
        Post
    },
    props:{

    }
}
</script>

<style>

</style>
