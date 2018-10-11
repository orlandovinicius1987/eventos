
const state = {
    loaded: false,

    currentUser: null,
}

const getters = {}

const actions = {
    load(context) {
        return axios.get('/api/v1/environment').then(response => {
            context.commit('setData', response.data)

            context.commit('setCurrentEntity', response.data.currentEntity)
        })
    },

    absorbLaravel(context) {
        context.commit('setData', window.laravel)

        context.dispatch('load')
    },
}

const mutations = {
    setData(state, payload) {
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
