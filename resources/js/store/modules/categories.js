import Form from '../../classes/Form'

import {
    load,
    save,
    clearForm,
    setCurrentPage,
    setPerPage,
    updateUserPerPage,
    mutateData,
    mutateQuery,
    mutateGetUrl,
    mutateStoreUrl,
    mutateUpdateUrl,
    mutateFormField,
    mutateErrors,
    mutateFormData,
    mutatePerPage,
    mutateQueryFilterText,
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
            perPage: 5,

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

    mutateQueryFilterText,

    setCurrentPage,

    setPerPage,

    updateUserPerPage,

    selectCategory(context, payload) {
        context.commit('selectCategory', payload)
    },

}

const mutations = {
    mutateData,
    mutateQuery,
    mutateGetUrl,
    mutateStoreUrl,
    mutateUpdateUrl,
    mutateFormField,
    mutateErrors,
    mutateFormData,
    mutatePerPage,


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
