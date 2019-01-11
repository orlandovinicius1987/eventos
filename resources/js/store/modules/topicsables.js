import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

const state = merge_objects(statesMixin.common, {
    person: { id: null },

    service: {
        name: 'topicsables',
        uri: 'people/{people.selected.id}/person-topics',
        isForm: true,
    },

    form: new Form(clone(__emptyModel)),
    emptyForm: clone(__emptyModel),
})

const actions = merge_objects(actionsMixin, {
    setPerson(context, payload) {
        context.commit('mutateSetTopicsable', payload)

        context.commit('mutateSetSelected', __emptyModel)

        context.dispatch('load', payload)
    },

    unCategorize(context, payload) {
        post(makeDataUrl(context) + '/' + payload.id + '/un-categorize/')
    },

    topicize(context, payload) {
        dd('topicize')
        post(makeDataUrl(context), payload)
    },
})

const mutations = merge_objects(mutationsMixin, {
    mutateSetTopicsable(state, payload) {
        state.topicsables = payload
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
