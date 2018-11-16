import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

const state = merge_objects(statesMixin.common, {
    form: new Form({
        name: null,
        code: null,
    }),
})

const service = {
    name: 'receptive',
    uri: 'events/{events.selected.id}/sub-events/{sub-events.selected.id}/receptive',
}

const actions = merge_objects(actionsMixin, {
    selectReceptiveInvitation(context, payload) {
        dd('action - receptive - selectReceptiveInvitation - payload dd: ',payload)
        context.dispatch('receptiveInvitations/select', payload, { root: true })

        context.dispatch('receptiveInvitations/setInvitation', payload, {
            root: true,
        })
    },
})


let mutations = merge_objects(mutationsMixin, {

    selectReceptiveInvitation(state, payload) {
        dd('mutation - receptive - selectReceptiveInvitation - payload dd: ',payload)
        state.selectedReceptiveInvitation = payload
    },

    setReceptiveInvitations(state, payload) {
        dd('receptive - setReceptiveInvitations - payload dd: ',payload)
        state.receptiveInvitations = payload
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
