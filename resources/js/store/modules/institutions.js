import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

let state = merge_objects(statesMixin.common,
    {
        form: new Form({
            name: null,
        }),
    }
)

let actions = merge_objects(actionsMixin,
    {
        selectPerson(context, payload) {
            context.commit('selectPerson', payload)
        },
    }
)

let mutations = merge_objects(mutationsMixin,
    {
        selectPerson(state, payload) {
            state.selectedPerson = payload
        },
    }
)

let getters = gettersMixin

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
