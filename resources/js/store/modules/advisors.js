import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = {
    person_id: null,
    role_id: null,
    institution_id: null,
    advised_id: null,
    title: null,
    is_active:false,
}

const state = merge_objects(statesMixin.common, {
    person: { id: null },

    service: {
        name: 'advisors',
        uri:
            'people/{people.selected.id}/person-institutions/{personInstitutions.selected.id}/advisors',
        isForm: true,
    },

    form: new Form(__emptyModel),

    emptyForm: __emptyModel,
})

const actions = merge_objects(actionsMixin, {
    setPersonInstitution(context, payload) {
        context.commit('mutateSetPersonInstitution', payload)

        context.commit('mutateSetFormField', {
            field: 'person_institution_id',
            value: payload.id,
        })

        context.commit('mutateSetSelected', __emptyModel)

        context.dispatch('load', payload)

        context.dispatch('personInstitutions/loadAdvisors', 'loadAdvisors', {
            root: true,
        })
    },

    setPerson(context, payload) {
        context.commit('mutateSetPerson', payload)
    },
})

const mutations = merge_objects(mutationsMixin, {
    mutateSetPersonInstitution(state, payload) {
        state.personInstitution = payload
    },

    mutateSetPerson(state, payload) {
        state.person = payload
    },

    mutateSetAdvisors(state, payload) {
        state.advisor = payload
    },
})

let getters = merge_objects(gettersMixin, {
    getAdvisors(state, getters) {
        return state.data
    },
})

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
