import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

let state = merge_objects(
    {
        invitations: [],

        selectedRole: __emptyModel,

        form: new Form({
            name: null,
        }),

        mode: null,

        subRolesQuery: {},

        invitationsQuery: {},
    },
    statesMixin.common,
)

let actions = merge_objects(
    {
        selectRole(context, payload) {
            context.commit('selectRole', payload)
        },
    },
    actionsMixin,
)

let mutations = merge_objects(
    {
        selectRole(state, payload) {
            state.selectedRole = payload
        },
    },
    mutationsMixin,
)

let getters = gettersMixin

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
