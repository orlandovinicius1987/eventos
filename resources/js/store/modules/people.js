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

    subPeople: [],

    invitations: [],

    selectedPerson: __emptyModel,

    form: new Form({
        name: null,
    }),

    mode: null,

    subPeopleQuery: {},

    invitationsQuery: {},
}

const getters = {}

const actions = {
    load,

    save,

    clearForm,

    setQueryFilterText,

    setCurrentPage,

    setPerPage,

    selectPerson(context, payload) {
        context.commit('selectPerson', payload)
    },

    selectRole(context, payload) {
        context.commit('selectRole', payload)
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

    selectRole(state, payload) {
        state.selectedRole= payload
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}
