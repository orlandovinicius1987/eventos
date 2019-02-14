import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __personModel = {
    id: null,
    name: null,
    nickname: null,
    title: null,
    cpf: null,
    photo: null,
    photoUrl: '/images/no-image.jpg',
    notes: null,
}

const __institutionModel = {
    id: null,

    name: null,
}

const __roleModel = {
    id: null,

    name: null,
}

const __emptyModel = {
    person_id: null,
    role_id: null,
    institution_id: null,
    advised_id: null,
    title: null,
    is_active: false,

    person: __personModel,
    institution: __institutionModel,
    model: __roleModel,
}

const state = merge_objects(statesMixin.common, {
    person: { id: null },

    service: {
        name: 'personInstitutions',
        uri: 'people/{people.selected.id}/person-institutions',
        isForm: true,
    },

    form: new Form(clone(__emptyModel)),

    emptyForm: clone(__emptyModel),

    advisors: null,
})

const actions = merge_objects(actionsMixin, {
    setPerson(context, payload) {
        context.commit('mutateSetPerson', payload)

        context.commit('mutateSetSelected', __emptyModel)

        context.dispatch('load', payload)
    },

    loadAdvisors(context, payload) {
        context.commit('mutateSetAdvisors', payload)
    },

    subscribeExtraChannels(context, payload = null) {
        if (payload) {
            subscribePublicChannel(
                'person-institution.' + payload.id,
                '.App\\Events\\PersonInstitutionAddressesGotChanged',
                () => {
                    context.dispatch('addresses/load', payload, {
                        root: true,
                    })
                },
            )

            subscribePublicChannel(
                'person-institution.' + payload.id,
                '.App\\Events\\PersonInstitutionContactsGotChanged',
                () => {
                    context.dispatch('contacts/load', payload, {
                        root: true,
                    })
                },
            )

            subscribePublicChannel(
                'person-institution.' + payload.id,
                '.App\\Events\\PersonInstitutionAdvisorsGotChanged',
                () => {
                    context.dispatch('advisors/load', payload, {
                        root: true,
                    })
                },
            )
        }
    },
})

const mutations = merge_objects(mutationsMixin, {
    mutateSetPerson(state, payload) {
        state.person = payload
    },

    mutateSetAdvisors(state, payload) {
        state.advisors = payload
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
