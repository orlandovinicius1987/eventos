import * as gettersMixin from './mixins/getters.js'

const __emptyTable = {
    filter: {
        text: null,
    },

    links: {
        pagination: {
            per_page: null,

            current_page: null,
        },
    },

    rows: {},
}

const state = {
    loaded: false,
    tables: {
        contact_types: __emptyTable,
        institutions: __emptyTable,
        roles: __emptyTable,
        people: __emptyTable,
        costumes: __emptyTable,
        sectors: __emptyTable,
        sub_events: __emptyTable,
    },
}

const getters = gettersMixin

const actions = {
    load(context) {
        return axios.get('/api/v1/environment').then(response => {
            context.commit('mutateSetData', response.data)
        })
    },

    loadContactTypes(context) {
        return axios
            .get('/api/v1/contact-types', {
                params: { query: context.getters.getFullQueryFilter },
            })
            .then(response => {
                context.commit('mutateSetContactTypes', response.data)
            })
    },

    loadInstitutions(context) {
        return axios
            .get('/api/v1/institutions', {
                params: { query: context.getters.getFullQueryFilter },
            })
            .then(response => {
                context.commit('mutateSetInstitutions', response.data)
            })
    },

    loadRoles(context) {
        return axios
            .get('/api/v1/roles', {
                params: { query: context.getters.getFullQueryFilter },
            })
            .then(response => {
                context.commit('mutateSetRoles', response.data)
            })
    },

    loadPeople(context) {
        return axios
            .get('/api/v1/people', {
                params: { query: context.getters.getFullQueryFilter },
            })
            .then(response => {
                context.commit('mutateSetPeople', response.data)
            })
    },

    loadCostumes(context) {
        return axios
            .get('/api/v1/costumes', {
                params: { query: context.getters.getFullQueryFilter },
            })
            .then(response => {
                context.commit('mutateSetCostumes', response.data)
            })
    },

    loadSectors(context) {
        return axios
            .get('/api/v1/sectors', {
                params: { query: context.getters.getFullQueryFilter },
            })
            .then(response => {
                context.commit('mutateSetSectors', response.data)
            })
    },

    loadSubEvents(context) {
        return axios
            .get('/api/v1/sub-events', {
                params: { query: context.getters.getFullQueryFilter },
            })
            .then(response => {
                context.commit('mutateSetSubEvents', response.data)
            })
    },

    absorbLaravel(context) {
        context.commit('mutateSetData', window.laravel)

        context.dispatch('load')

        context.dispatch('loadContactTypes')
        context.dispatch('loadInstitutions')
        context.dispatch('loadRoles')
        context.dispatch('loadPeople')
        context.dispatch('loadCostumes')
        context.dispatch('loadSectors')
        context.dispatch('loadSubEvents')
    },
}

const mutations = {
    mutateSetData(state, payload) {
        state['loaded'] = false

        _.forIn(payload, function(val, key) {
            state[key] = val
        })

        state['loaded'] = true
    },

    mutateSetContactTypes(state, payload) {
        state['tables']['contact_types'] = payload
    },

    mutateSetInstitutions(state, payload) {
        state['tables']['institutions'] = payload
    },

    mutateSetRoles(state, payload) {
        state['tables']['roles'] = payload
    },
    mutateSetPeople(state, payload) {
        state['tables']['people'] = payload
    },
    mutateSetCostumes(state, payload) {
        state['tables']['costumes'] = payload
    },

    mutateSetSectors(state, payload) {
        state['tables']['sectors'] = payload
    },

    mutateSetSubEvents(state, payload) {
        state['tables']['sub_events'] = payload
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}
