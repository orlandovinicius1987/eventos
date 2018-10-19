const loadDebounced = _.debounce(context => {
    context.dispatch('load')
}, 650)

export function load(context, query = {}) {
    Object.assign(query, context.state.query)

    return axios
        .get(context.state.dataUrl, { params: { query: query } })
        .then(response => {
            context.commit('mutateData', response.data)
        })
}

export function save(context, payload) {
    const url =
        payload === 'create' ? context.state.storeUrl : context.state.updateUrl

    return context.state.form
        .post(url, context.state.form.fields)
        .then(response => {
            context.dispatch('load')
        })
}

export function clearForm(context) {
    set_null(context.state.form.fields)
}

export function mutateQueryFilterText(context, payload) {
    let query = context.state.query

    query.filter.text = payload

    context.commit('mutateQuery', query)

    loadDebounced(context)
}

export function setCurrentPage(context, payload) {
    let query = context.state.query

    query.pagination.current_page = payload

    context.commit('mutateQuery', query)

    context.dispatch('load')
}

export function setPerPage(context, payload) {
    context.commit('mutatePerPage', payload)

    context.dispatch('load')

    context.dispatch('updateUserPerPage', payload)
}

export function updateUserPerPage(context, payload) {
    post('/api/v1/users/per-page/' + payload)
}
