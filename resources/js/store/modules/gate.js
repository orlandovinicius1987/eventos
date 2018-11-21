import environment from './environment'

const state = {
    loaded: false,
}

const getters = {}

const actions = {
    can(permission) {
        if (
            typeof JSON.parse(environment.state.user.permissions)[
                permission
            ] !== 'undefined'
        ) {
            return true
        } else {
            return false
        }
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
