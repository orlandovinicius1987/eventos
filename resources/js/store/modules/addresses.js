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
    person: __personModel,

    institution_id: null,
    institution: __institutionModel,

    role_id: null,
    model: __roleModel,

    advised_id: null,
    title: null,
    is_active: false,

    addressable_id: null,
    addressable_type: null,
    city: null,
    client_id: null,
    complement: null,
    full_address: null,
    google_maps_image_url: null,
    google_maps_link_url: null,
    latitude: null,
    longitude: null,
    neighbourhood: null,
    number: null,
    state: null,
    street: null,
    zipcode: null,
}

const state = merge_objects(statesMixin.common, {
    person: { id: null },

    service: {
        name: 'addresses',
        uri:
            'people/{people.selected.id}/person-institutions/{personInstitutions.selected.id}/addresses',
        isForm: true,
    },

    form: new Form(clone(__emptyModel)),

    emptyForm: clone(__emptyModel),
})

const actions = merge_objects(actionsMixin, {
    setPersonInstitution(context, payload) {
        context.commit('mutateSetPersonInstitution', payload)

        context.commit('mutateSetFormField', {
            field: 'addressable_id',
            value: payload.id,
        })

        context.commit('mutateSetFormField', {
            field: 'addressable_type',
            value: payload.model,
        })

        context.commit('mutateSetSelected', __emptyModel)

        context.dispatch('load', payload)
    },
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
