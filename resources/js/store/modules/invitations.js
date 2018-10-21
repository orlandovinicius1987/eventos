import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'

const state = merge_objects(statesMixin.common, {
    subEvent: null,

    form: new Form({
        name: null,
    }),
})

const actions = merge_objects(actionsMixin, {
    load(context) {
        return get(
            '/api/v1/events/' +
                context.state.subEvent.event.id +
                '/sub-events/' +
                context.state.subEvent.id +
                '/invitations',
            {
                params: { query: context.state.query },
            },
        ).then(response => {
            context.commit('mutateSetData', response.data)
        })
    },

    setSubEvent(context, payload) {
        context.commit('mutateSetSubEvent', payload)

        context.dispatch('load', payload)
    },
})

const mutations = merge_objects(mutationsMixin, {
    mutateSetSubEvent(state, payload) {
        state.subEvent = payload
    },
})

export default {
    state,
    actions,
    mutations,
    namespaced: true,
}
