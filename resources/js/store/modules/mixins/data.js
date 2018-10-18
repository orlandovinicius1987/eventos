// ------------ helpers

const reload = _.debounce(context => {
    context.dispatch('load')
}, 650)

// ------------ actions

export function load(context, query = {}) {
    Object.assign(query, context.state.query);

    return axios
        .get(context.state.dataUrl, { params: { query: query } })
        .then(response => {
            context.commit('setData', response.data)
        })
}

export function save(context, payload) {
    const url = payload === 'create' ? context.state.storeUrl : context.state.updateUrl

    return context.state.form
        .post(url, context.state.form.fields)
        .then(response => {
            context.dispatch('load')
        })
}

export function clearForm(context) {
    set_null(context.state.form.fields)
}

export function setQueryFilterText(context, payload) {
    let query = context.state.query

    query.filter.text = payload

    context.commit('setQuery', query)

    dd('debouncing...')
    reload(context)
}

// ------------ mutations

export function setData(state, payload) {
    state.data = payload
}

export function setQuery(state, payload) {
    state.query = payload
}

export function setGetUrl(state, payload) {
    state.dataUrl = payload
}

export function setStoreUrl(state, payload) {
    state.storeUrl = payload
}

export function setUpdateUrl(state, payload) {
    state.updateUrl = payload
}

export function storeFormField(state, payload) {
    state.form.fields[payload.field] = payload.value
}

export function setErrors(state, payload) {
    const errors = payload.errors
        ? typeof payload.errors.errors === 'undefined'
            ? payload.errors
            : payload.errors.errors
        : {}

    state.form.errors.record(errors)
}

export function setFormData(state, payload) {
    _.each(payload, function(value, key) {
        state.form.fields[key] = value
    })
}

