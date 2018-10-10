import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './views/Dashboard'

Vue.use(VueRouter)

let routes = [
    {
        path: '/',
        redirect: 'dashboard',
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
]

let router = new VueRouter({
    routes,
    linkActiveClass: 'active',
})

export default router
