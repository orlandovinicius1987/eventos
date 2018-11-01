import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

const state = merge_objects(statesMixin.common, {
    form: new Form({
        name: null,
        nickname: null,
        title: null,
    }),
})

let actions = merge_objects(
    {
        selectPerson(context, payload) {
            context.dispatch('people/select', payload, { root: true })

            context.dispatch('personInstitutions/setPerson', payload, { root: true })

            context.dispatch('personCategories/setPerson', payload, { root: true })
        },

        selectContact(context, payload) {
            context.dispatch('contacts/select', payload, { root: true })
        },

        selectPersonCategories(context, payload) {
            context.dispatch('personCategories/select', payload, { root: true })
        },

        selectPersonInstitution(context, payload) {
            context.dispatch('personInstitutions/select', payload, { root: true })

            context.dispatch('contacts/setPersonInstitution', payload, { root: true })
            context.dispatch('addresses/setPersonInstitution', payload, { root: true })
            context.dispatch('advisors/setPersonInstitution', payload, { root: true })
        },

        selectAdvisor(context, payload) {
            context.dispatch('advisors/select', payload, { root: true })
        },

        selectPersonCategories(context, payload) {
            context.dispatch('categories/select', payload, { root: true })
        },

        selectContacts(context, payload) {
            context.dispatch('contacts/select', payload, { root: true })
        },

        selectAddresses(context, payload) {
            context.dispatch('addresses/select', payload, { root: true })
        },

        selectAdvisors(context, payload) {
            context.dispatch('advisors/select', payload, { root: true })
        },
    },
    actionsMixin,
)

let mutations = merge_objects(
    {
        selectPerson(state, payload) {
            state.selectedPerson = payload

            state.selectedPersonInstitution = __emptyModel

            state.selectedContact = __emptyModel
            state.selectedAddress = __emptyModel

            state.selectedAdvisors = __emptyModel
        },

        selectPersonInstitution(state, payload) {
            state.selectedPersonInstitution = payload

            state.selectedContact = __emptyModel
            state.selectedAddress = __emptyModel
        },

        selectContact(state, payload) {
            state.selectedContact = payload
        },

        selectAddress(state, payload) {
            state.selectedAddress = payload
        },
        selectAdvisors(state, payload) {
            state.selectedAdvisors = payload
        },


        setPersonCategories(state, payload) {
            state.personCategories = payload
        },

        setPersonInstitution(state, payload) {
            state.personInstitutions = payload
        },

        setContacts(state, payload) {
            state.contacts = payload
        },

        setAdvisors(state, payload) {
            state.advisors = payload
        },

        setAddresses(state, payload) {
            state.addresses = payload
        },
    },
    mutationsMixin,
)

let getters = gettersMixin

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
