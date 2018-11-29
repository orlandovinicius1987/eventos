import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = {
    id: null,
    party_number: null,
    is_party: null,
    is_active:false,
    name: null,
}

let state = merge_objects(statesMixin.common, {
    form: new Form(__emptyModel),
    emptyForm: __emptyModel,
})

let actions = merge_objects(actionsMixin, {
    selectPerson(context, payload) {
        context.commit('selectPerson', payload)
    },
})

let mutations = merge_objects(mutationsMixin, {
    selectPerson(state, payload) {
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
