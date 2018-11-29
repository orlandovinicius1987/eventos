import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = {
    contact:null,
    contact_type_id:null,
    person_institution_id:null,
    is_active:false,
}

const state = merge_objects(statesMixin.common, {
    person: { id: null },

    service: {
        name: 'advisorContacts',
        uri:
            'people/{advisors.person.id}/person-institutions/{advisorContacts.personInstitution.id}/contacts',
        isForm: true,
    },

    form: new Form(__emptyModel),

    emptyForm: __emptyModel,
})

const actions = merge_objects(actionsMixin, {
    setPersonInstitution(context, payload) {
        context.commit('mutateSetPersonInstitution', payload)

        context.commit('mutateSetFormField', {
            field: 'person_institution_id',
            value: payload.id,
        })

        context.commit('mutateSetSelected', __emptyModel)

        context.dispatch('load', payload)
    },

    selectAdvisorContact(context, payload) {},
})

const mutations = merge_objects(mutationsMixin, {
    mutateSetPersonInstitution(state, payload) {
        state.personInstitution = payload
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
