import Form from '../../classes/Form'
import {
    load,
    setData,
    setDataUrl,
    storeFormField,
    setErrors,
    setFormData,
} from './mixins/data.js'

const state = {
    dataUrl: '',

    data: {},

    form: new Form({
        name: null,

        username: null,

        color: {
            background: { hex: '#132AD7FF' },
            foreground: { hex: '#FFDC00FF' },
        },

        avatar: null,
    }),
}

const getters = {}

const actions = {
    load,
}

const mutations = {
    setData,
    setDataUrl,
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
