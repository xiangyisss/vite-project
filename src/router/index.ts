import { createWebHistory, createRouter } from 'vue-router'
import TodoIndex from '../pages/Todo/TodoIndex.vue'
import About from '../pages/About/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: TodoIndex
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;