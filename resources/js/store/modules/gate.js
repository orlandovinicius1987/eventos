
const state = {
    loaded: false,

    currentUser: null,

    permissions: []
}

const getters = {

}

const actions = {
    checkPermission(context, payload) {
        return axios.get('/api/v1/permissions' + payload.permission).then(response => {
            context.commit('setData', response.data)
        })
    },

    can(permission) {
        // {
        //     requestUrl: 'checkin-guest',
        //         can: false,
        //     lastCheckedAt: null,
        // }

        // procurar na lista de permissoes
        // checkPermissions (assincrono)
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
