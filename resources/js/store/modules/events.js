import Form from '../../classes/Form'

import {
    load,
    store,
    setData,
    setDataUrl,
    setStoreUrl,
    storeFormField,
    setErrors,
    setFormData,
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
}

const mutations = {
    setData,
    setDataUrl,
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
