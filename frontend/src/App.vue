<template>
  <div class="app-container">
  <div class="status-bar">
      <!-- <router-link to="/login">Login</router-link> -->
      <span><font-awesome-icon :icon="['fa', 'paper-plane']" /></span>
    </div>

    <div class="router-container">
      <router-view></router-view>
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

// import Container from './components/Container.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'App',
components:{
  FontAwesomeIcon
}
}
</script>

<style>
::-webkit-scrollbar{
  display: none
}

body,div{
  box-sizing: borderbox;
}

body{
  margin:0;
}
.app-container{
  width: 400px;
  height:900px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
  border:solid 1px black;
  position: relative;
  /* padding:10px; */

}
.router-container{
  position:absolute;
  top:50px;
  overflow-y:scroll;
}

.status-bar, .tab-bar{
  display: flex;
  width:100%;
  position:absolute;
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
</style>
