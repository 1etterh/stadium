<template>
  <div class="status-bar">
    <p>Home</p>
    <p>Message</p>
  </div>
  
  <div class="rView">
    <router-view :postdata="postdata" :userdata="userdata"></router-view>
  </div>
  <div class="tab-bar">
    <p>Feed</p>
    <p>Search</p>
    <p>Add</p>
    <p>MyPage</p>
  </div>
</template>

<script>
import postdata from './assets/postdata.js'
import userdata from './assets/userdata.js'
// import Container from './components/Container.vue'
export default {
  name: 'App',
  data(){
    return{
      postdata:postdata,
      userdata:userdata
    }
  },
  components: {
  //  Container
  }
}
</script>

<style>
::-webkit-scrollbar{
  display: none
}
#app {
  width: 400px;
  height:800px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
  position:relative;
  border:solid 1px black;

}

body{
  margin:0;
  box-sizing: borderbox;
}

.rView{
  height:700px;
  overflow-y:scroll;

}
.status-bar{
  display: flex;
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
