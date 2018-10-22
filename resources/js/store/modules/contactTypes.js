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
    load(context) {
        return get('/api/v1/events/' + context.state.event.id + '/sub-events', {
            params: { query: context.state.query },
        }).then(response => {
            context.commit('mutateSetData', response.data)
        })
    },

    setEvent(context, payload) {
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
