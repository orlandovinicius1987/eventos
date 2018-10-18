import Form from '../../classes/Form'

import {
    load,
    save,
    setData,
    setQuery,
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

    query: {
        filter: {
            text: null
        }
    },

    subEvents: [],

    invitations: [],

    selectedEvent: __emptyModel,

    selectedSubEvent: __emptyModel,

    selectedInvitation: __emptyModel,

    form: new Form({
        name: null,
    }),

    subEventsQuery: {},

    invitationsQuery: {},
}

const getters = {}

const actions = {
    load,

    save,

    clearForm,

    selectEvent(context, payload) {
        context.commit('selectEvent', payload)

        context.dispatch('loadSubEvents', payload)
    },

    selectSubEvent(context, payload) {
        context.commit('selectSubEvent', payload)

        context.dispatch('loadInvitations', payload)
    },

    loadSubEvents(context, event) {
        return axios
            .get('/api/v1/events/'+event.id+'/sub-events', { params: this.subEventsQuery })
            .then(response => {
                context.commit('setSubEvents', response.data)
            })
    },

    loadInvitations(context, subEvent) {
        return axios
            .get('/api/v1/events/'+subEvent.event.id+'/sub-events/'+subEvent.id+'/invitations', { params: this.invitationsQuery })
            .then(response => {
                context.commit('setInvitations', response.data)
            })
    },
}

const mutations = {
    setData,
    setQuery,
    setGetUrl,
    setStoreUrl,
    storeFormField,
    setErrors,
    setFormData,

    selectEvent(state, payload) {
        state.selectedEvent = payload

        state.selectedSubEvent = __emptyModel

        state.selectedInvitation = __emptyModel
    },

    selectSubEvent(state, payload) {
        state.selectedSubEvent = payload

        state.selectedInvitation = __emptyModel
    },

    selectInvitation(state, payload) {
        state.selectedInvitation = payload
    },

    setSubEvents(state, payload) {
        state.subEvents = payload
    },

    setInvitations(state, payload) {
        state.invitations = payload
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}
