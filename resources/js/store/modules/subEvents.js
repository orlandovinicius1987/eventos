import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

const state = merge_objects(statesMixin.common, {
    event: { id: null },

    service: { name: 'subEvents', uri: 'events/{events.selected.id}/sub-events', isForm: true },

    form: new Form({
        name: null,
    }),
})

const actions = merge_objects(actionsMixin, {
    setEvent(context, payload) {
        context.commit('mutateSetEvent', payload)

        context.commit('mutateSetFormField', { field: 'event_id', value: payload.id })

        context.commit('mutateSetSelected', __emptyModel)

        context.dispatch('invitations/setSubEvent', __emptyModel, {
            root: true,
        })

        context.dispatch('load', payload)
    },
})

const mutations = merge_objects(mutationsMixin, {
    mutateSetEvent(state, payload) {
        state.event = payload
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
