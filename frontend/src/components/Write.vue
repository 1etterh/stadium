<template>
  <div class="post-publish">
    <h1>Publish Post</h1>
    <input type="file" @change="handleFileChange">
    <textarea v-model="contents" placeholder="contents"></textarea>
    <button @click="publishPost" :disabled="!image">Publish</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      image: null,
      contents: ''
    };
  },
  methods: {
    handleFileChange(event) {
      // Get the selected image file
      this.image = event.target.files[0];
      console.log(this.image)
    },
    async publishPost() {
      // Create FormData object to send image file
      let formData=new FormData();
      formData.append('contents',this.contents)
      
      formData.append('image',this.image)
      console.log(formData)
      // Send FormData object using axios
      await axios.post('/write', formData, {
        headers:{
        "Content-Type":'multipart/form-data'
      }})
      .then((res)=>{
        if(res.data.success){
          console.log('uploaded post')
          this.$router.push('/')
        }
        else{
          this.$router.go(-1)
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  }
};
</script>

<style scoped>
.post-publish {
  max-width: 600px;
  margin: auto;
}

.post-publish input[type="file"] {
  margin-bottom: 10px;
}

.post-publish textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}

.post-publish button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
