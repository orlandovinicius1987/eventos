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

    mutateQueryFilterText,

    setCurrentPage,

    setPerPage,

    updateUserPerPage,

    selectPerson(context, payload) {
        context.commit('selectPerson', payload)
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
