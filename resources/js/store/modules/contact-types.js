import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = {
    id: null,
    name: null,
    code: null,
}

let state = merge_objects(
    {
        form: new Form(clone(__emptyModel)),

        emptyForm: clone(__emptyModel),

        model: {
            name: 'contact-type',

            table: 'contact-types',

            class: { singular: 'ContactType', plural: 'ContactTypes' },
        },
    },
    statesMixin.common,
)

let actions = actionsMixin
let mutations = mutationsMixin
let getters = gettersMixin

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
