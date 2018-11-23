import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

const state = merge_objects(statesMixin.common, {
    subEvent: { id: null },

    service: { name: 'invitables', uri: 'invitables' },

    form: new Form({
        name: null,
    }),

    data: {
        filter: {
            selects: {
                sub_event: null,
            },
        },
    }
})

const actions = merge_objects(actionsMixin, {
    invite(context, payload) {
        post(makeDataUrl(context), payload).then(() => {
            context.dispatch('load', payload)
        })

        context.dispatch('load')
    },
})

const mutations = merge_objects(mutationsMixin, {})

let getters = gettersMixin

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
