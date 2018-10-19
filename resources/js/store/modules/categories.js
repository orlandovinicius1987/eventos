import Form from '../../classes/Form'

import {
    load,
    save,
    setData,
    setQuery,
    setGetUrl,
    setStoreUrl,
    setUpdateUrl,
    storeFormField,
    setErrors,
    setFormData,
    clearForm,
    setQueryFilterText,
    setCurrentPage,
    setPerPage,
} from './mixins/data.js'

const __emptyModel = { id: null }

const state = {
    dataUrl: '',

    storeUrl: '',

    updateUrl: '',

    data: {},

    query: {
        filter: {
            text: null,
        },

        pagination: {
            per_page: 5,

            current_page: 1,
        },
    },

    selectedCategory: __emptyModel,

    form: new Form({
        name: null,
    }),


}

const getters = {}

const actions = {
    load,

    save,

    clearForm,

    setQueryFilterText,

    setCurrentPage,

    setPerPage,

    selectCategory(context, payload) {
        context.commit('selectCategory', payload)
    },

}

const mutations = {
    setData,
    setQuery,
    setGetUrl,
    setStoreUrl,
    setUpdateUrl,
    storeFormField,
    setErrors,
    setFormData,

    selectCategory(state, payload) {
        dd(payload)
        state.selectedCategory = payload
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}
