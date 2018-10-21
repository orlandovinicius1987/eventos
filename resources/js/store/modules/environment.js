const state = {
    loaded: false,
}

const getters = {}

const actions = {
    load(context) {
        return axios.get('/api/v1/environment').then(response => {
            context.commit('mutateSetData', response.data)
        })
    },

    absorbLaravel(context) {
        context.commit('mutateSetData', window.laravel)

        context.dispatch('load')
    },
}

const mutations = {
    mutateSetData(state, payload) {
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
