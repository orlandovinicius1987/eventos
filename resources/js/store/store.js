/**
 * Imports
 */
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Vuex
 */
Vue.use(Vuex)

/**
 * Global state
 */
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

/**
 * Modules
 */
import environment from './modules/environment'
import dashboard from './modules/dashboard'
import gate from './modules/gate'
import events from './modules/events'
import subEvents from './modules/subEvents'
import invitations from './modules/invitations'
import categories from './modules/categories'
import addresses from './modules/addresses'
import people from './modules/people'
import roles from './modules/roles'
import institutions from './modules/institutions'
import personCategories from './modules/personCategories'
import categorizables from './modules/categorizables'
import personInstitutions from './modules/personInstitutions'
import contactTypes from './modules/contact-types'
import contacts from './modules/contacts'
import advisors from './modules/advisors'
import advisorContacts from './modules/advisorContacts'
import invitables from './modules/invitables'
import phoneBook from './modules/phoneBook'
import subEventsDashBoard from './modules/subEventsDashBoard'

/**
 * State
 */
const state = {
    mounted: false,
}

/**
 * Store
 */
let store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules: {
        environment,
        dashboard,
        people,
        categories,
        events,
        subEvents,
        invitations,
        invitables,
        addresses,
        gate,
        roles,
        contacts,
        institutions,
        personCategories,
        categorizables,
        personInstitutions,
        contactTypes,
        advisors,
        advisorContacts,
        phoneBook,
        subEventsDashBoard,
    },
})

store.dispatch('environment/absorbLaravel')

export default store
