import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.view.vue'
import Clock from '../views/Clock.view.vue'
import Nouvelle from '../views/Nouvelle.view.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/clock',
        name: 'Clock',
        component: Clock
    },
    {
        path: '/nouvelle',
        name: 'Nouvelle',
        component: Nouvelle
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router