<template>
<p>Profile</p>
<div class="profile-info"></div>
<div class="posts"></div>
</template>
      
  <script>
      export default {
        name: 'Profile',
        props:{
         user:Object
        }
      }
  </script>
      
  <style>
.profile-info{
height:30%;
background-color: aqua;
}
.posts{
height: 50%;
background-color: #eee;
}
  </style>
      