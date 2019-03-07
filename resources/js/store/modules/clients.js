import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = {
    settings: {
        signature: null,
        mail_from_name: null,
        mail_from_email: null,
    },
}

let state = merge_objects(
    {
        form: new Form(clone(__emptyModel)),

        emptyForm: clone(__emptyModel),

        model: {
            name: 'clients',

            table: 'clients',

            class: { singular: 'Client', plural: 'Clients' },
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
