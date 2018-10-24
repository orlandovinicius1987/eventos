export function getQueryFilter(state, getters) {
    return {
        filter: state.data.filter,
        pagination: state.data.links.pagination,
    }
}

export function getDataUrl(state, getters) {
    if (state.service && state.service.uri) {
        return buildApiUrl(state.service.uri, state)
    }
}

export function getStoreUrl(state, getters) {
    if (state.service && state.service.uri) {
        return buildApiUrl(state.service.uri, state)
    }
}

export function getUpdateUrl(state, getters) {
    if (state.service && state.service.uri) {
        return buildApiUrl(state.service.uri, state)
    }
}
