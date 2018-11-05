import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

const state = merge_objects(statesMixin.common, {
    subEvent: { id: null },

    service: {
        name: 'invitations',
        uri:
            'events/{events.selected.id}/sub-events/{subEvents.selected.id}/invitations',
        performLoad: false,
    },

    form: new Form({
        name: null,
    }),
})

const actions = merge_objects(actionsMixin, {
    load(context) {
        if (!context.state.subEvent || !context.state.subEvent.event) {
            return
        }

        return get(
            '/api/v1/events/' +
                context.state.subEvent.event.id +
                '/sub-events/' +
                context.state.subEvent.id +
                '/invitations',
            {
                params: { query: context.getters.getQueryFilter },
            },
        ).then(response => {
            context.commit('mutateSetData', response.data)
        })
    },

    setSubEvent(context, payload) {
        context.commit('mutateSetSubEvent', payload)

        context.commit('mutateSetSelected', __emptyModel)

        context.dispatch('load', payload)
    },

    unInvite(context, payload) {
        post(makeDataUrl(context) + '/' + payload.id + '/un-invite').then(
            function() {
                context.dispatch('load', payload)
            },
        )
    },
})

const mutations = merge_objects(mutationsMixin, {
    mutateSetSubEvent(state, payload) {
        state.subEvent = payload
    },
})

let getters = gettersMixin

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
