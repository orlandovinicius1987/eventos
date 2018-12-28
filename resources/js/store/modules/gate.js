import environment from './environment'

const state = {
    loaded: false,
}

const getters = {}

const actions = {
    can(permission) {
        return can(environment.state.user, permission)
    },
}

const mutations = {
    mutateSetData(state, payload) {
        _.forIn(payload, (val, key) => {
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
