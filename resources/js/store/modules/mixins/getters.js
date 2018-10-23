export function getQueryFilter(state, getters) {
    dd('getQueryFilter', state, getters)
    return {
        filter: state.data.filter,
        pagination: state.data.links.pagination
    }
}
