<template>
<div class="feed">
    <div class="feed-container">
        <div v-for="(item,i) in postdata" :key="i">
            <Post :post="item"/>
        </div>
    </div>
</div>
    

</template>

<script>
import axios from 'axios'
import Post from './Post.vue'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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
        // FontAwesomeIcon
    },
    props:{

    }
}
</script>

<style>



</style>
