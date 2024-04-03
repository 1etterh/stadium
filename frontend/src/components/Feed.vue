<template>
    <div v-for="(item,i) in postdata" :key="i">
        <Post :post="item"/>
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

</style>
