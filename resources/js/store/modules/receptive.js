import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

const state = merge_objects(statesMixin.common, {
    form: new Form({
        name: null,
    }),
})

const actions = merge_objects(actionsMixin, {
    selectInvitation(context, payload) {
        context.commit('invitations/mutateSetSelected', payload, {
            root: true,
        })
    },
})


let mutations = merge_objects(mutationsMixin, {

    selectInvitation(state, payload) {
        state.selectedInvitation = payload
    },

    setInvitations(state, payload) {
        state.invitations = payload
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
