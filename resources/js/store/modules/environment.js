const state = {
    loaded: false,
}

const getters = {}

const actions = {
    load(context) {
        return axios.get('/api/v1/environment').then(response => {
            context.commit('mutateData', response.data)
        })
    },

    absorbLaravel(context) {
        context.commit('mutateData', window.laravel)

        context.dispatch('load')
    },
}

const mutations = {
    mutateData(state, payload) {
        _.forIn(payload, function(val, key) {
            state[key] = val
        })

        state['loaded'] = true
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}
