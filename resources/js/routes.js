import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './views/Dashboard'
import PeopleForm from './views/PeopleForm'
import People from './views/People'
import Events from './views/Events'
import Categories from './views/Categories'
import CategoriesForm from './views/CategoriesForm'
import Roles from './views/Roles'
import RolesForm from './views/RolesForm'
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
        path: '/people',
        name: 'people',
        component: People,
    },
    {
        path: '/people/create',
        name: 'people.create',
        component: PeopleForm,
        props: { mode: 'create' },
    },
    {
        path: '/people/:id/update',
        name: 'people.update',
        component: PeopleForm,
        props: { mode: 'update' },
    },
    {
        path: '/roles',
        name: 'roles',
        component: Roles,
    },
    {
        path: '/roles/create',
        name: 'roles.create',
        component: RolesForm,
        props: { mode: 'create' },
    },
    {
        path: '/roles/:id/update',
        name: 'roles.update',
        component: RolesForm,
        props: { mode: 'update' },
    },
    {
        path: '/import',
        name: 'import',
        component: Import,
    },
    {
        path: '/categories',
        name: 'categories',
        component: Categories,
    },
    {
        path: '/categories/create',
        name: 'categories.create',
        component: CategoriesForm,
        props: { mode: 'create' },
    },
    {
        path: '/categories/:id/update',
        name: 'categories.update',
        component: CategoriesForm,
        props: { mode: 'update' },
    },
]

let router = new VueRouter({
    routes,
    linkActiveClass: 'active',
})

export default router
