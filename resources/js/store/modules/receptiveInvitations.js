import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

const state = merge_objects(statesMixin.common, {

    receptiveInvitations : __emptyModel,

    service: {
        name: 'receptiveInvitations',
        uri:'events/{events.selected.id}/sub-events/{subEvents.selected.id}/receptive',
        performLoad: true,
    },

    form: new Form({
        sub_event_id: null,
        person_institution_id : null,
        accepted_at: null,
        sent_at: null,
        checkin_at: null,
        code: null,
    }),
})

const actions = merge_objects(actionsMixin, {

    setInvitation(context, payload) {
        dd('receptiveInvitation - setInvitation - payload dd: ',payload)
        context.commit('mutateSetReceptiveInvitation', payload)

        context.commit('mutateSetSelected', __emptyModel)

        context.dispatch('load', payload)
    },

})

const mutations = merge_objects(mutationsMixin, {
    mutateSetReceptiveInvitation(state, payload) {
        dd('receptiveInvitation - mutateSetReceptiveInvitation - payload dd: ',payload)
        state.receptiveInvitation = payload
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
