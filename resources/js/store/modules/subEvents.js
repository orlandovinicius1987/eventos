import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'

let state = merge_objects({
    data: {},

    form: new Form({
        name: null,
    }),
}, statesMixin.common)

let actions = merge_objects({
    load() {},
}, actionsMixin)

const mutations = mutationsMixin

export default {
    state,
    actions,
    mutations,
    namespaced: true,
}
