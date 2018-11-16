import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

const state = merge_objects(statesMixin.common, {
    person: { id: null },

    service: {
        name: 'personInstitutions',
        uri: 'people/{people.selected.id}/person-institutions',
        isForm: true,
    },

    form: new Form({
        person_id: null,
        role_id: null,
        institution_id: null,
        title: null,
        is_active: null,
    }),

    advisors: null,
})

const actions = merge_objects(actionsMixin, {
    setPerson(context, payload) {
        context.commit('mutateSetPerson', payload)

        context.commit('mutateSetFormField', {
            field: 'person_id',
            value: payload.id,
        })

        context.commit('mutateSetSelected', __emptyModel)

        context.dispatch('contacts/setPersonInstitution', __emptyModel, {
            root: true,
        })

        context.dispatch('addresses/setPersonInstitution', __emptyModel, {
            root: true,
        })

        context.dispatch('advisors/setPersonInstitution', __emptyModel, {
            root: true,
        })

        context.dispatch('load', payload)
        context.dispatch('loadAdvisors')
    },

    loadAdvisors(context, payload) {
        context.commit('mutateSetAdvisors', payload)
    },
})

const mutations = merge_objects(mutationsMixin, {
    mutateSetPerson(state, payload) {
        state.person = payload
    },

    mutateSetAdvisors(state, payload) {
        state.advisors = payload
    },
})

let getters = gettersMixin

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
