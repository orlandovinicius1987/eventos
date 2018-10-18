import Form from '../../classes/Form'

import {
    load,
    store,
    setData,
    setGetUrl,
    setStoreUrl,
    storeFormField,
    setErrors,
    setFormData,
    clearForm,
} from './mixins/data.js'

const __emptyModel = { id: null }

const state = {
    dataUrl: '',

    storeUrl: '',

    data: {},

    subPeople: [],

    invitations: [],

    selectedPerson: __emptyModel,

    form: new Form({
        name: null,
    }),

    subPeopleQuery: {},

    invitationsQuery: {},
}

const getters = {}

const actions = {
    load,

    store,

    clearForm,

    selectPerson(context, payload) {
        context.commit('selectPerson', payload)
    },
}

const mutations = {
    setData,
    setGetUrl,
    setStoreUrl,
    storeFormField,
    setErrors,
    setFormData,

    selectPerson(state, payload) {
        state.selectedPerson = payload
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}
