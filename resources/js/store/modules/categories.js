import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'

const __emptyModel = { id: null }

let state = merge_objects(
    {
        selectedCategory: __emptyModel,

        form: new Form({
            name: null,
        }),
    },
    statesMixin.common,
)

let actions = merge_objects(
    {
        selectCategory(context, payload) {
            context.commit('selectCategory', payload)
        },
    },
    actionsMixin,
)

let mutations = merge_objects(
    {
        selectCategory(state, payload) {
            dd(payload)
            state.selectedCategory = payload
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
