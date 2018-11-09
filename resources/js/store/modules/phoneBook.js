import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const state = merge_objects(statesMixin.common, {
    selectedPerson: null,
})

let actions = merge_objects(actionsMixin, {
    setPerson(context, payload) {
        context.commit('mutateSetPerson', payload)

        context.dispatch('load')
    },
})

let mutations = merge_objects(mutationsMixin, {
    mutateSetPerson(state, payload) {
        state.selectedPerson = payload
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
