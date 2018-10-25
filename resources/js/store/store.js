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
import gate from './modules/gate'
import events from './modules/events'
import subEvents from './modules/subEvents'
import invitations from './modules/invitations'
import categories from './modules/categories'
import addresses from './modules/addresses'
import people from './modules/people'
import roles from './modules/roles'
import institutions from './modules/institutions'
import personInstitutions from './modules/personInstitutions'
import contactTypes from './modules/contact-types'
import contacts from './modules/contacts'
import environment from './modules/environment'

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
        people,
        categories,
        events,
        subEvents,
        invitations,
        addresses,
        gate,
        roles,
        contacts,
        institutions,
        personInstitutions,
        contactTypes,
        contacts,
    },
})

store.dispatch('environment/absorbLaravel')

export default store
