// ------------ helpers

const reload = _.debounce(context => {
    context.dispatch('load')
}, 650)

// ------------ actions

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

    reload(context)
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

// ------------ mutations

export function mutateData(state, payload) {
    state.data = payload
}

export function mutateQuery(state, payload) {
    state.query = payload
}

export function mutateGetUrl(state, payload) {
    state.dataUrl = payload
}

export function mutateStoreUrl(state, payload) {
    state.storeUrl = payload
}

export function mutateUpdateUrl(state, payload) {
    state.updateUrl = payload
}

export function mutateFormField(state, payload) {
    state.form.fields[payload.field] = payload.value
}

export function mutateErrors(state, payload) {
    const errors = payload.errors
        ? typeof payload.errors.errors === 'undefined'
            ? payload.errors
            : payload.errors.errors
        : {}

    state.form.errors.record(errors)
}

export function mutateFormData(state, payload) {
    _.each(payload, function(value, key) {
        state.form.fields[key] = value
    })
}

export function mutatePerPage(state, payload) {
    state.query.pagination.per_page = payload
}
