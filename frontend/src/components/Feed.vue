<template>
  
    <div class="status-bar">
    <p>Home</p>
    <p>Message</p>
    <router-link to="/login">Login</router-link>
  </div>
    <div v-for="(item,i) in postdata" :key="i">
        <Post :post="item"/>
    </div>

    <div class="tab-bar">
    <p>Feed</p>
    <p>Search</p>
    <p>Add</p>
    <p>MyPage</p>
  </div>

</template>

<script>
import axios from 'axios'
import Post from './Post.vue'
export default {
    name: 'Feed',
    created(){
        axios.get('/feed')
        .then((res)=>{
            console.log(res.data)
            this.postdata=res.data
            
        })
    },
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

.status-bar{
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  position:sticky;
  top:0;

}

.tab-bar{
  display:flex;
  justify-content:space-around;
  position:sticky;
  bottom:0;
}
</style>
