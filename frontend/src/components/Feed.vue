<template>
 <div class="feed">
    <div class="status-bar">
    <p>Home</p>
    <p>Message</p>
    <router-link to="/login">Login</router-link>
  </div>
  <div class="feed-container">
    <div v-for="(item,i) in postdata" :key="i">
        <Post :post="item"/>
    </div>
  </div>

    <div class="tab-bar">
    <span>Feed</span>
    <span>Search</span>
    <span>Add</span>
    <span>MyPage</span>
  </div>
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
.feed{
  position:relative;
  height:800px;
}
.status-bar, .tab-bar{
  display: flex;
  justify-content: space-evenly;
  position:absolute;
  width:100%;
  height:50px;

}
.status-bar{
  top:0
}
.tab-bar{
  bottom:0
}

.feed-container{
  position:absolute;
  top:50px;
  height:700px;
  overflow-y:scroll;
}
</style>
