<template>
    <div v-for="(item,i) in postdata" :key="i">
        <Post :post="item" :user="userdata[i]"/>
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
            this.postdata=res.data.postdata
            this.userdata=res.data.userdata
        })
    },
    data(){
        return{
           postdata:[],
           userdata:[]
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
