import { createWebHistory, createRouter } from "vue-router";
import Feed from './../components/Feed.vue'

const routes=[
    {
        path:'/',
        component:Feed,
        props:true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router; 