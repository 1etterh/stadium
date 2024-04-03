import { createWebHistory, createRouter } from "vue-router";
import Feed from './../components/Feed.vue'
import Login from './../components/Login.vue'
const routes=[
    {
        path:'/',
        component:Feed,
        props:true
    },
    {
        path:'/login',
        component:Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router; 