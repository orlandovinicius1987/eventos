import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = {}

const __emptyFilterSelects = {
    sub_event: null,
    institution: null,
    role: null,
}

const state = merge_objects(statesMixin.common, {
    subEvent: { id: null },

    service: {
        name: 'invitables',
        uri: 'events/{eventId}/sub-events/{subEventId}/invitations/invitables',
    },

    form: new Form(clone(__emptyModel)),

    emptyForm: clone(__emptyModel),

    data: {
        filter: {
            selects: clone(__emptyFilterSelects),
        },
    },
})

const actions = merge_objects(actionsMixin, {
    invite(context, payload) {
        post(makeDataUrl(context), payload)
    },

    moveInvitations(context, payload) {
        post(makeDataUrl(context) + '/move', payload)
    },
})

const mutations = merge_objects(mutationsMixin, {
    clearFilterSelects(state, payload) {
        state.data.filter.selects = clone(__emptyFilterSelects)
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
