import Form from '../../classes/Form'

import {
    load,
    save,
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

    updateUrl: '',

    data: {},

    subCategories: [],

    invitations: [],

    form: new Form({
        name: null,
    }),

    subCategoriesQuery: {},

}

const getters = {}

const actions = {
    load,

    save,

    clearForm,

    selectCategory(context, payload) {
        context.commit('selectCategory' + '', payload)

        context.dispatch('loadSubCategories', payload)
    },

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
