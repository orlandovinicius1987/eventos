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
    selectEvent(context, payload) {
        context.dispatch('select', payload)

        context.dispatch('subEvents/setEvent', payload, { root: true })
    },

    selectSubEvent(context, payload) {
        context.dispatch('subEvents/select', payload, { root: true })

        context.dispatch('invitations/setSubEvent', payload, { root: true })
    },

    selectInvitation(context, payload) {
        context.commit('invitations/mutateSetSelected', payload, {
            root: true,
        })
    },
})

const mutations = merge_objects(mutationsMixin, {
    selectEvent(state, payload) {
        state.selectedEvent = payload

        state.selectedSubEvent = __emptyModel

        state.selectedInvitation = __emptyModel
    },

    selectSubEvent(state, payload) {
        state.selectedSubEvent = payload

        state.selectedInvitation = __emptyModel
    },

    selectInvitation(state, payload) {
        state.selectedInvitation = payload
    },

    setSubEvents(state, payload) {
        state.subEvents = payload
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
