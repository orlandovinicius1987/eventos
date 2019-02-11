import store from './store/store.js'
import Vue from 'vue'

import VueRouter from 'vue-router'
import ChangeInstitutionForm from './views/ChangeInstitutionForm'
Vue.use(VueRouter)

const Dashboard = () => import('./views/Dashboard')
const People = () => import('./views/People')
const PeopleForm = () => import('./views/PeopleForm')
const CategorizablesForm = () => import('./views/CategorizablesForm')
const Events = () => import('./views/Events')
const Categories = () => import('./views/Categories')
const CategoriesForm = () => import('./views/CategoriesForm')
const TopicsableForm = () => import('./views/TopicsableForm')
const PersonInstitutionsForm = () => import('./views/PersonInstitutionsForm')
const PersonInstitutionsAddressesForm = () =>
    import('./views/PersonInstitutionsAddressesForm')
const Roles = () => import('./views/Roles')
const RolesForm = () => import('./views/RolesForm')
const Institutions = () => import('./views/Institutions')
const InstitutionsForm = () => import('./views/InstitutionsForm')
const ContactTypes = () => import('./views/ContactTypes')
const ContactTypesForm = () => import('./views/ContactTypesForm')
const ContactsForm = () => import('./views/ContactsForm')
const AdvisorContactsForm = () => import('./views/AdvisorContactsForm')
const AdvisorsForm = () => import('./views/AdvisorsForm')
const InviteForm = () => import('./views/InviteForm')
const Invitation = () => import('./views/Invitation')
const EventsForm = () => import('./views/EventsForm')
const SubEventsForm = () => import('./views/SubEventsForm')
const Import = () => import('./views/Import')
const PhoneBook = () => import('./views/PhoneBook')
const Recept = () => import('./views/Recept.vue')
const Receptive = () => import('./views/Receptive.vue')
const Sectors = () => import('./views/Sectors.vue')
const SectorForm = () => import('./views/SectorForm.vue')
const Costumes = () => import('./views/Costumes.vue')
const CostumesForm = () => import('./views/CostumesForm.vue')
const Topics = () => import('./views/Topics.vue')
const TopicsForm = () => import('./views/TopicsForm.vue')

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
        path: '/recept',
        component: Recept,
    },
    {
        path: '/receptive/:eventId',
        component: Receptive,
    },
    {
        path: '/events/:eventId/sub-events/:subEventId/invitations/create',
        component: InviteForm,
        props: { mode: 'create' },
    },
    {
        path:
            '/events/:eventId/sub-events/:subEventId/invitations/:invitationId/show',
        component: Invitation,
        props: { mode: 'update' },
    },
    {
        path:
            '/events/:eventId/sub-events/:subEventId/invitations/:invitationId/change',
        component: ChangeInstitutionForm,
        props: { mode: 'update' },
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
        path: '/people/:personId/person-topics/create',
        component: TopicsableForm,
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
        path: '/sectors',
        component: Sectors,
    },
    {
        path: '/sectors/create',
        component: SectorForm,
        props: { mode: 'create' },
    },
    {
        path: '/sectors/:id/update',
        component: SectorForm,
        props: { mode: 'update' },
    },
    {
        path: '/costumes/create',
        component: CostumesForm,
        props: { mode: 'create' },
    },
    {
        path: '/costumes/:id/update',
        component: CostumesForm,
        props: { mode: 'update' },
    },
    {
        path: '/costumes',
        component: Costumes,
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
        path: '/topics',
        component: Topics,
    },
    {
        path: '/topics/create',
        component: TopicsForm,
        props: { mode: 'create' },
    },
    {
        path: '/topics/:id/update',
        component: TopicsForm,
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
        component: AdvisorContactsForm,
        props: { mode: 'create', source: 'advisor' },
    },
    {
        path:
            '/people/:personId/person-institutions/:personInstitutionId/advisors/:advisorId/contacts/:contactId/update',
        component: AdvisorContactsForm,
        props: { mode: 'update', source: 'advisor' },
    },
    {
        path:
            '/people/:personId/person-institutions/:personInstitutionId/advisors/create',
        component: AdvisorsForm,
        props: { mode: 'create', source: 'advisor' },
    },
    {
        path:
            '/people/:personId/person-institutions/:personInstitutionId/advisors/:advisorId/update',
        component: AdvisorsForm,
        props: { mode: 'update', source: 'advisor' },
    },
    {
        path: '/people',
        component: People,
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
            if (can('events:read') || can('events:modify')) {
                next('/dashboard')
            } else {
                next('/recept')
            }
        }
    }

    next()
})

export default router
