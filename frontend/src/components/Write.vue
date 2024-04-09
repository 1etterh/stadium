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
      this.image = event.target.files[0];
    },
    async publishPost() {
      const formData = new FormData();
      formData.append('contents', this.contents);
      
      // Create a new presigned URL for the image upload
      const presignedUrlResponse = await axios.post('/presigned-url', {
        fileName: this.image.name,
        fileType: this.image.type
      });
      
      // Upload the image directly to S3 using the presigned URL
      await axios.put(presignedUrlResponse.data.url, this.image, {
        headers: {
          'Content-Type': this.image.type
        }
      });
      
      // After the upload, send the contents and image URL to your backend endpoint
      await axios.post('/write', {
        contents: this.contents,
        imageUrl: presignedUrlResponse.data.url
      });
      
      this.$router.push('/');
    }
  }
};
</script>
