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
     
      console.log(this.image);
    },
    async publishPost() {
      try {
        // Create a FormData object
        let formData = new FormData();
        formData.append('image', this.image);
        formData.append('contents', this.contents);
        console.log(formData)
        // Send FormData object using axios
        const response = await axios.post('/write', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (response.data.success) {
          console.log('Uploaded post');
          this.$router.push('/');
        } else {
          console.error('Failed to upload post');
          this.$router.go(-1);
        }
      } catch (error) {
        console.error('Error publishing post:', error);
        // Handle error
      }
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
