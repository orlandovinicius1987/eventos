import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'
import Echo from 'laravel-echo'

const __emptyModel = {
    id: null,

    name: null,
    client_id: null,
}

const state = merge_objects(statesMixin.common, {
    form: new Form(clone(__emptyModel)),
    emptyForm: clone(__emptyModel),
})

const actions = merge_objects(actionsMixin, {
    selectEvent(context, payload) {
        context.dispatch('select', payload)

        context.dispatch('subEvents/setEvent', payload, { root: true })
    },

    selectSubEvent(context, payload) {
        window.Echo.channel('sub-event.' + payload.id).listen(
            '.App\\Events\\InvitationsUpdated',
            event => {
                dd('reloading invitations')
                context.dispatch('subEvents/load', payload, { root: true })
                context.dispatch('invitations/load', payload, { root: true })
                context.dispatch('invitables/load', payload, { root: true })
            },
        )

        window.Echo.channel('sub-event.' + payload.id).listen(
            '.App\\Events\\SubEventWasUpdated',
            event => {
                dd('reloading invitations')
                context.dispatch('subEvents/load', payload, { root: true })
            },
        )

        context.dispatch('subEvents/select', payload, { root: true })

        context.dispatch('invitations/setSubEvent', payload, { root: true })
    },

    selectInvitation(context, payload) {
        context.commit('invitations/mutateSetSelected', payload, {
            root: true,
        })
    },

    sendInvitations(context, payload) {
        post(makeDataUrl(context) + '/' + payload.id + '/send-invitations')
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
