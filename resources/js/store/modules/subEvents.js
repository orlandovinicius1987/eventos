import Form from '../../classes/Form'

import {
    save,
    mutateData,
    mutateGetUrl,
    mutateStoreUrl,
    mutateFormField,
    mutateErrors,
    mutateFormData,
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
    save,

    clearForm,

    load() {},
}

const mutations = {
    mutateData,
    mutateGetUrl,
    mutateStoreUrl,
    mutateFormField,
    mutateErrors,
    mutateFormData,
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}
