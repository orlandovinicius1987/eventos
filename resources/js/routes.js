import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './views/Dashboard'
import PeopleForm from './views/PeopleForm'
import People from './views/People'
import CategorizablesForm from './views/CategorizablesForm'
import Events from './views/Events'
import Categories from './views/Categories'
import CategoriesForm from './views/CategoriesForm'
import PersonInstitutionsForm from './views/PersonInstitutionsForm'
import PersonInstitutionsAddressesForm from './views/PersonInstitutionsAddressesForm'
import Roles from './views/Roles'
import RolesForm from './views/RolesForm'
import Institutions from './views/Institutions'
import InstitutionsForm from './views/InstitutionsForm'
import ContactTypes from './views/ContactTypes'
import ContactTypesForm from './views/ContactTypesForm'
import ContactsForm from './views/ContactsForm'
import InviteForm from './views/InviteForm'
import EventsForm from './views/EventsForm'
import SubEventsForm from './views/SubEventsForm'
import Import from './views/Import'
import PhoneBook from './views/PhoneBook'

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
        path: '/sub-events',
        component: SubEventsForm,
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
        props: { mode: 'create', source: 'personInstitution' },
    },
    {
        path:
            '/people/:personId/person-institutions/:personInstitutionId/update',
        component: PersonInstitutionsForm,
        props: { mode: 'update', source: 'personInstitution' },
    },
    {
        path:
            '/people/:personId/person-institutions/:personInstitutionId/addresses/create',
        component: PersonInstitutionsAddressesForm,
        props: { mode: 'create' },
    },
    {
        path:
            '/people/:personId/person-institutions/:personInstitutionId/addresses/:id/update',
        component: PersonInstitutionsAddressesForm,
        props: { mode: 'update' },
    },
    {
        path: '/people/:personId/categories/create',
        component: CategorizablesForm,
        props: { mode: 'create' },
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
    {
        path:
            '/people/:personId/person-institutions/:personInstitutionId/contacts/create',
        component: ContactsForm,
        props: { mode: 'create', source: 'personInstitution' },
    },
    {
        path:
            '/people/:personId/person-institutions/:personInstitutionId/contacts/:contactId/update',
        component: ContactsForm,
        props: { mode: 'update', source: 'personInstitution' },
    },

    {
        path:
            '/people/:personId/person-institutions/:personInstitutionId/advisors/:advisorId/contacts/create',
        component: ContactsForm,
        props: { mode: 'create', source: 'advisor' },
    },
    {
        path:
            '/people/:personId/person-institutions/:personInstitutionId/advisors/:advisorId/contacts/:contactId/update',
        component: ContactsForm,
        props: { mode: 'update', source: 'advisor' },
    },
    {
        path:
            '/people/:personId/person-institutions/:personInstitutionId/advisors/create',
        component: PersonInstitutionsForm,
        props: { mode: 'create', source: 'advisor' },
    },
    {
        path:
            '/people/:personId/person-institutions/:personInstitutionId/advisors/:advisorId/update',
        component: PersonInstitutionsForm,
        props: { mode: 'update', source: 'advisor' },
    },
    {
        path: '/phone-book',
        component: PhoneBook,
        props: { mode: 'view' },
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

        let regex = /.+?(?=\/\d)/
        let result = regex.exec(to.path)

        if (result && result.length > 0) {
            next(result[0])
        } else {
            next('/dashboard')
        }
    }

    next()
})

export default router
