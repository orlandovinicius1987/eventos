import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'

const state = merge_objects(statesMixin.common, {
    event: null,

    form: new Form({
        name: null,
    }),
})

const actions = merge_objects(actionsMixin, {
    setEvent(context, payload) {
        context.commit(
            'mutateSetGetUrl',
            '/api/v1/events/' + payload.id + '/sub-events',
        )

        context.commit(
            'mutateSetStoreUrl',
            '/api/v1/events/' + payload.id + '/sub-events',
        )

        context.commit('mutateSetEvent', payload)

        context.dispatch('load', payload)
    },
})

const mutations = merge_objects(mutationsMixin, {
    mutateSetEvent(state, payload) {
        state.event = payload
    },
})

export default {
    state,
    actions,
    mutations,
    namespaced: true,
}
