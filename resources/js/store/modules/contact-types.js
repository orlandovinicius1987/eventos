import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'

let state = merge_objects(
    {
        form: new Form({
            name: null,
        }),
    },
    statesMixin.common,
)

let actions = actionsMixin
let mutations = mutationsMixin

export default {
    state,
    actions,
    mutations,
    namespaced: true,
}
