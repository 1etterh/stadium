<template>

    <router-view></router-view>

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
body>#app {
  width: 400px;
  height:800px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
  border:solid 1px black;
  /* padding:10px; */

}

body,div{
  box-sizing: borderbox;
}

body{
  margin:0;
}
</style>
