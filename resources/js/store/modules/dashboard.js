import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

let state = merge_objects({}, statesMixin.common)

const actions = merge_objects(actionsMixin, {

    selectSubEventDashBoard(context, payload){

        dd(payload)


        context.dispatch('subEvents/select', payload, {
            root: true,
        })

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
