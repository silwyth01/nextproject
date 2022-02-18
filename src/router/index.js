import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.view.vue'
import Clock from '../views/Clock.view.vue'
import Library from '../views/Library.view.vue'
import TicTacToe from '../views/Tictactoe.view.vue'
import Resto from '../views/Resto.view.vue'
import Todo from '../views/Todo.view.vue'


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
        path: '/library',
        name: 'Library',
        component: Library
    },
    {
        path: '/tictactoe',
        name: 'TicTacToe',
        component: TicTacToe
    },
    {
        path: '/resto',
        name: 'Resto',
        component: Resto
    },
    {
        path: '/todo',
        name: 'Todo',
        component: Todo
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router