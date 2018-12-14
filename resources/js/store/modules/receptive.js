import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = {
    id: null,
    name: null,
    code: null,
    sub_event_id: null,
    person_institution_id: null,
    accepted_at: null,
    sent_at: null,
    checkin_at: null,
}

const __emptyCheckedIn = {
    data: null,
    success: null,
    errors: null,
}
const __emptyStatistics = {
    confirmed: null,
    totalcheckedin: null,
}

const state = merge_objects(statesMixin.common, {
    form: new Form(clone(__emptyModel)),

    emptyForm: clone(__emptyModel),

    checkedIn: __emptyCheckedIn,

    statistics: __emptyStatistics,

    model: {
        name: 'invitation',

        table: 'invitations',

        class: { singular: 'Invitation', plural: 'Invitations' },
    },
})

const actions = merge_objects(actionsMixin, {
    selectInvitation(context, payload) {
        context.dispatch('select')

        context.dispatch('setInvitation')
    },

    setInvitation(context, payload) {
        context.commit('mutateSetSelected', payload)

        context.dispatch('load', payload)
    },

    makeCheckin(context, payload) {
        post(makeDataUrl(context) + '/checkin', { uuid: payload }).then(
            response => {
                context.commit('mutateCheckedIn', response.data)
            },
        )
    },

    subscribeExtraChannels(context, payload) {
        subscribePublicChannel(
            'invitees',
            '.App\\Events\\InviteesChanged',
            () => {
                context.dispatch('load', payload)
            },
        )
    },
})

let mutations = merge_objects(mutationsMixin, {
    selectInvitation(state, payload) {
        state.selectedInvitation = payload
    },

    setInvitations(state, payload) {
        state.invitations = payload
    },

    mutateSetInvitation(state, payload) {
        state.invitation = payload
    },

    mutateCheckedIn(state, payload) {
        state.checkedIn = payload
    },

    mutateStatistics(state, payload) {
        state.statistics = payload
    },

    clearCheckedIn(state) {
        state.checkedIn = clone(__emptyCheckedIn)
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
