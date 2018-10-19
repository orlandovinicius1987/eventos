import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'

const __emptyModel = { id: null }

let state = merge_objects({
    invitations: [],

    selectedPerson: __emptyModel,

    form: new Form({
        name: null,
    }),

    mode: null,

    subPeopleQuery: {},

    invitationsQuery: {},
}, statesMixin.common)

let actions = merge_objects({
    selectPerson(context, payload) {
        context.commit('selectPerson', payload)
    },
}, actionsMixin)

let mutations = merge_objects({
    selectPerson(state, payload) {
        state.selectedPerson = payload
    },
}, mutationsMixin)

export default {
    state,
    actions,
    mutations,
    namespaced: true,
}
