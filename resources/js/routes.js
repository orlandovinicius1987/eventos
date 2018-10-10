import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'

Vue.use(VueRouter)

let routes = [
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
]

let router = new VueRouter({
    routes,
    linkActiveClass: 'active',
})

export default router
