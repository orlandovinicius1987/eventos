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
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}
