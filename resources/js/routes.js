import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './views/Dashboard'
import Events from './views/Events'

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
    {
        path: '/events',
        name: 'events',
        component: Events,
    },
]

let router = new VueRouter({
    routes,
    linkActiveClass: 'active',
})

export default router
