<template>
  <div class="post-container">
    <div class="post-head">
      <img :src="user.image" alt="">
      <p><strong>{{ user.username }}</strong></p>
    </div>

  <div class="post-body">
    <img :src="post.image" alt="">
    <p><strong>{{ post.likes }} Likes</strong>  {{ post.contents }}</p>
  </div>
</div>
</template>
    
<script>
    export default {
      name: 'Post',
      props:{
        post:Object,
        user:Object
      }
    }
</script>
    
<style>
.post-container{
  width:400px;
}
.post-head{
  display: flex;
  height: 80px;
}
.post-head>img{
  margin-top:15px;
  width:50px;
  height:50px;
  border-radius:50%;
}
.post-head >p{
  margin-left:10px;
  margin-top:30px;
}

.post-body>p{
  margin-left:10px;
  text-align:left;
}
.post-body>img{
  width:400px;
}
</style>
    