import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'

const __emptyModel = { id: null }

let state = merge_objects(
    {
        invitations: [],

        selectedInstitution: __emptyModel,

        form: new Form({
            name: null,
        }),

        mode: null,

        subInstitutionsQuery: {},

        invitationsQuery: {},
    },
    statesMixin.common,
)

let actions = merge_objects(
    {
        selectInstitution(context, payload) {
            context.commit('selectedInstitution', payload)
        },
    },
    actionsMixin,
)

let mutations = merge_objects(
    {
        selectInstitution(state, payload) {
            state.selectedInstitution = payload
        },
    },
    mutationsMixin,
)

export default {
    state,
    actions,
    mutations,
    namespaced: true,
}
