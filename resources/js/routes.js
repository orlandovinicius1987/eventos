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
import Institutions from './views/Institutions'
import InstitutionsForm from './views/InstitutionsForm'
import ContactTypes from './views/ContactTypes'
import ContactTypesForm from './views/ContactTypesForm'

import EventsForm from './views/EventsForm'
import SubEventsForm from './views/SubEventsForm'
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
        component: EventsForm,
        props: { mode: 'create' },
    },
    {
        path: '/events/:id/update',
        name: 'events.update',
        component: EventsForm,
        props: { mode: 'update' },
    },
    {
        path: '/sub-events/create',
        name: 'sub-events.create',
        component: SubEventsForm,
        props: { mode: 'create' },
    },
    {
        path: '/sub-events/:id/update',
        name: 'sub-events.update',
        component: SubEventsForm,
        props: { mode: 'update' },
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
    // {
    //     path: '/advisors/create',
    //     name: 'advisors.create',
    //     component: AdvisorsForm,
    //     props: { mode: 'create' },
    // },
    // {
    //     path: '/advisors/:id/update',
    //     name: 'advisors.update',
    //     component: AdvisorsForm,
    //     props: { mode: 'update' },
    // },
    // {
    //     path: '/person-institutions/create',
    //     name: 'person-institutions.create',
    //     component: personInstitutionsForm,
    //     props: { mode: 'create' },
    // },
    // {
    //     path: '/person-institutions/:id/update',
    //     name: 'person-institutions.update',
    //     component: personInstitutionsForm,
    //     props: { mode: 'update' },
    // },
    // {
    //     path: '/contacts/create',
    //     name: 'contacts.create',
    //     component: ContactsForm,
    //     props: { mode: 'create' },
    // },
    // {
    //     path: '/contacts/:id/update',
    //     name: 'contacts.update',
    //     component: ContactsForm,
    //     props: { mode: 'update' },
    // },
    // {
    //     path: '/addresses/create',
    //     name: 'addresses.create',
    //     component: AddressesForm,
    //     props: { mode: 'create' },
    // },
    // {
    //     path: '/addresses/:id/update',
    //     name: 'addresses.update',
    //     component: AddressesForm,
    //     props: { mode: 'update' },
    // },
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
    {
        path: '/institutions',
        name: 'institutions',
        component: Institutions,
    },
    {
        path: '/institutions/create',
        name: 'institutions.create',
        component: InstitutionsForm,
        props: { mode: 'create' },
    },
    {
        path: '/institutions/:id/update',
        name: 'institutions.update',
        component: InstitutionsForm,
        props: { mode: 'update' },
    },
    {
        path: '/contact-types',
        name: 'contact-types',
        component: ContactTypes,
    },
    {
        path: '/contact-types/create',
        name: 'contact-types.create',
        component: ContactTypesForm,
        props: { mode: 'create' },
    },
    {
        path: '/contact-types/:id/update',
        name: 'contact-types.update',
        component: ContactTypesForm,
        props: { mode: 'update' },
    },
]

let router = new VueRouter({
    routes,
    linkActiveClass: 'active',
})

export default router
