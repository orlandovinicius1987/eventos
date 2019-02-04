import environment from './environment'

const state = {
    loaded: false,
}

const getters = {
    can: (state) => (permission) => {
        return JSON.parse(
            Store.getters['environment/getPermissions'],
        ).hasOwnProperty(Store.getters['environment/getCurrentClient'].name+' - '+permission)
    }
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}
