<template>
    <div v-for="(item,i) in postdata" :key="i">
        <Post :post="item" :user="userdata[i]"/>
    </div>
</template>

<script>
import Post from './Post.vue'
export default {
    name: 'Container',
    data(){
        return{
           
        }
    },
    components:{
        Post
    },
    props:{
        postdata:Array,
        userdata:Array
    }
}
</script>

<style>

</style>
