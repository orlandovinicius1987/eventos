import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './views/Dashboard'
import Events from './views/Events'
import EventsCreate from './views/EventsCreate'
import SubEventsCreate from './views/SubEventsCreate'
import Import from './views/Import'

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
    {
        path: '/events/create',
        name: 'events.create',
        component: EventsCreate,
    },
    {
        path: '/events/sub-event/create',
        name: 'events.subevent.create',
        component: SubEventsCreate,
    },
    {
        path: '/import',
        name: 'import',
        component: Import,
    },
]

let router = new VueRouter({
    routes,
    linkActiveClass: 'active',
})

export default router
