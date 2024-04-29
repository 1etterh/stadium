<template>
<nav>
  <ul>
    <li><strong>Acme Corp</strong></li>
  </ul>
  <ul>
    <li><a href="#" class="secondary">Services</a></li>
    <li>
      <details class="dropdown">
        <summary>
          Account
        </summary>
        <ul dir="rtl">
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </details>
    </li>
  </ul>
</nav>
</template>

<script>


export default {
  name: 'App',
components:{
  
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

</style>
