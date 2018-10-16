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

const state = {
    dataUrl: '',

    storeUrl: '',

    data: {},

    subEvents: [],

    selectedEvent: {
        id: null,
    },

    currentEvent: {
        id: null,
    },

    form: new Form({
        name: null,
    }),
}

const getters = {}

const actions = {
    load,

    store,

    clearForm,
}

const mutations = {
    setData,
    setGetUrl,
    setStoreUrl,
    storeFormField,
    setErrors,
    setFormData,

    selectEvent(state, payload) {
        state.selectedEvent = payload
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}
