import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import "vue-picocss/css/pico.min.css"
// import axios from 'axios'

/* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)


const app= createApp(App).use(router).mount('#app') 
app.component('font-awesome-icon', FontAwesomeIcon)