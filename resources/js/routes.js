import Vue from 'vue'
import VueRouter from 'vue-router'
import AddressesForm from './views/AddressesForm'
import Dashboard from './views/Dashboard'
import PeopleForm from './views/PeopleForm'
import People from './views/People'
import Events from './views/Events'
import Categories from './views/Categories'
import CategoriesForm from './views/CategoriesForm'
import PersonInstitutionsForm from './views/PersonInstitutionsForm'
import Roles from './views/Roles'
import RolesForm from './views/RolesForm'
import Institutions from './views/Institutions'
import InstitutionsForm from './views/InstitutionsForm'
import ContactTypes from './views/ContactTypes'
import ContactTypesForm from './views/ContactTypesForm'
import InviteForm from './views/InviteForm'
import EventsForm from './views/EventsForm'
import SubEventsForm from './views/SubEventsForm'
import Import from './views/Import'
import { format } from 'util'

Vue.use(VueRouter)

let routes = [
    {
        path: '/',
        redirect: 'dashboard',
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/events',
        component: Events,
        children: [],
    },
    {
        path: '/events/:eventId/sub-events/create',
        component: SubEventsForm,
        props: { mode: 'create' },
    },
    {
        path: '/events/create',
        component: EventsForm,
        props: { mode: 'create' },
    },
    {
        path: '/events/:id/update',
        component: EventsForm,
        props: { mode: 'update' },
    },
    {
        path: '/events/:eventId/sub-events/:subEventId/update',
        component: SubEventsForm,
        props: { mode: 'update' },
    },
    {
        path: '/events/:eventId/sub-events/:subEventId/invitations/create',
        component: InviteForm,
        props: { mode: 'create' },
    },
    {
        path: '/people',
        component: People,
    },
    {
        path: '/people/create',
        component: PeopleForm,
        props: { mode: 'create' },
    },
    {
        path: '/people/:id/update',
        component: PeopleForm,
        props: { mode: 'update' },
    },
    {
        path: '/people/:personId/person-institutions/create',
        component: PersonInstitutionsForm,
        props: { mode: 'create' },
    },
    {
        path:
            '/people/:personId/person-institutions/:personInstitutionId/update',
        component: PersonInstitutionsForm,
        props: { mode: 'update' },
    },
    // {
    //     path: '/contacts/create',
    //     component: ContactsForm,
    //     props: { mode: 'create' },
    // },
    // {
    //     path: '/contacts/:id/update',
    //     component: ContactsForm,
    //     props: { mode: 'update' },
    // },
    {
        path:
            '/people/:personId/person-institutions/:personInstitutionId/addresses/create',
        component: AddressesForm,
        props: { mode: 'create' },
    },
    {
        path:
            '/people/:personId/person-institutions/:personInstitutionId/addresses/:id/update',
        component: AddressesForm,
        props: { mode: 'update' },
    },
    {
        path: '/roles',
        component: Roles,
    },
    {
        path: '/roles/create',
        component: RolesForm,
        props: { mode: 'create' },
    },
    {
        path: '/roles/:id/update',
        component: RolesForm,
        props: { mode: 'update' },
    },
    {
        path: '/import',
        component: Import,
    },
    {
        path: '/categories',
        component: Categories,
    },
    {
        path: '/categories/create',
        component: CategoriesForm,
        props: { mode: 'create' },
    },
    {
        path: '/categories/:id/update',
        component: CategoriesForm,
        props: { mode: 'update' },
    },
    {
        path: '/institutions',
        component: Institutions,
    },
    {
        path: '/institutions/create',
        component: InstitutionsForm,
        props: { mode: 'create' },
    },
    {
        path: '/institutions/:id/update',
        component: InstitutionsForm,
        props: { mode: 'update' },
    },
    {
        path: '/contact-types',
        component: ContactTypes,
    },
    {
        path: '/contact-types/create',
        component: ContactTypesForm,
        props: { mode: 'create' },
    },
    {
        path: '/contact-types/:id/update',
        component: ContactTypesForm,
        props: { mode: 'update' },
    },
]

let router = new VueRouter({
    routes,
    linkActiveClass: 'active',
})

let initialized = false

router.beforeEach((to, from, next) => {
    if (to.path !== '/' && !initialized) {
        initialized = true

        next('/dashboard')
    }

    next()
})

export default router
