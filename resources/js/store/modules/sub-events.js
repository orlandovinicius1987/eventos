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

    currentEvent: {
        id: null,
    },

    form: new Form({
        name: null,
    }),
}

const getters = {}

const actions = {
    load(context, query = {}) {
        return axios
            .get('/api/v1/' + context.state.currentEvent.id, {
                params: query,
            })
            .then(response => {
                context.commit('setData', response.data)
            })
    },
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
