import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

let state = merge_objects({}, statesMixin.common)

const actions = merge_objects(actionsMixin, {
    selectEventDashBoard(context, payload) {
        context.dispatch('events/select', payload.event, {
            root: true,
        })
    },
})

let mutations = mutationsMixin

let getters = gettersMixin

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
