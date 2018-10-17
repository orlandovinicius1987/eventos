import Form from '../../classes/Form'

import {
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
    data: {},

    form: new Form({
        name: null,
    }),
}

const getters = {}

const actions = {
    store,

    clearForm,

    load() {},
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
