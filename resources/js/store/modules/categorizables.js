import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

const state = merge_objects(statesMixin.common, {
    person: { id: null },

    service: {
        name: 'categorizables',
        uri: 'people/{people.selected.id}/categories',
        isForm: true,
    },

    form: new Form(__emptyModel),
})

const actions = merge_objects(actionsMixin, {
    setPerson(context, payload) {
        context.commit('mutateSetCategorizable', payload)

        context.commit('mutateSetSelected', __emptyModel)

        context.dispatch('load', payload)
    },

    unCategorize(context, payload) {
        post(makeDataUrl(context) + '/' + payload.id + '/un-categorize/').then(
            function() {
                context.dispatch('load', payload)
            },
        )
    },

    categorize(context, payload) {
        dd(context)
        dd(payload)
        dd(makeDataUrl(context))
        post(makeDataUrl(context)).then(function() {
            dd(context.dispatch('load', payload))
            context.dispatch('load', payload)
        })
    },
})

const mutations = merge_objects(mutationsMixin, {
    mutateSetCategorizable(state, payload) {
        state.categorizables = payload
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
