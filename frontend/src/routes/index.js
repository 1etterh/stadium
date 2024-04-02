import { createWebHistory, createRouter } from "vue-router";
import Container from './../components/Container.vue'

const routes=[
    {
        path:'/',
        component:Container,
        props:true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router; 