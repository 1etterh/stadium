import { createWebHistory, createRouter } from "vue-router";
import Feed from './../components/Feed.vue'
import Login from './../components/Login.vue'
import Register from "@/components/Register.vue";
const routes=[
    {
        path:'/',
        component:Feed,
        props:true
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router; 