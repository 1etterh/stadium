<template>
<div class="feed">
  <div class="status-bar">
      <!-- <router-link to="/login">Login</router-link> -->
      <span><font-awesome-icon :icon="['fa', 'paper-plane']" /></span>
    </div>

    <div class="feed-container">
        <div v-for="(item,i) in postdata" :key="i">
            <Post :post="item"/>
        </div>
    </div>
    <div class="tab-bar">
      <span><font-awesome-icon :icon="['fa', 'home']"/></span>
      <span><font-awesome-icon :icon="['fa', 'search']"/></span>
      <router-link to="/write"><span><font-awesome-icon :icon="['fa', 'plus-square']" /></span> </router-link>
      <span><font-awesome-icon :icon="['fa', 'heart']" /></span>
      <span><font-awesome-icon :icon="['fa', 'user-circle']" /></span>
    </div>

</div>
    

</template>

<script>
import axios from 'axios'
import Post from './Post.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
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
        Post,
        FontAwesomeIcon
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
  position:absolute;
  width:100%;
  height:50px;

}
.status-bar{
  top:0;
  padding-top: 10px;
  padding-right: 20px;
  flex-direction: row-reverse;
}
.tab-bar{
  bottom:0;
  justify-content: space-evenly;
}

.feed-container{
  position:absolute;
  top:50px;
  height:700px;
  overflow-y:scroll;
}
</style>
