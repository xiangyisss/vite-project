import { createWebHistory, createRouter } from 'vue-router'
import Product from '../components/Product.vue'
import User from '../components/User.vue'

const routes = [
    {
        path: '/',
        name: 'User',
        component: Product
    },
    {
        path: '/about',
        name: 'About',
        component: User
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;