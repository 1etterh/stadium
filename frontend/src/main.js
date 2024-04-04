import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import "vue-picocss/css/pico.min.css"
// import axios from 'axios'
createApp(App).use(router).mount('#app') 
