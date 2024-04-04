<template>
  <div class="rView">
    <router-view></router-view>
  </div>
</template>

<script>

// import Container from './components/Container.vue'
export default {
  name: 'App',

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

</style>
