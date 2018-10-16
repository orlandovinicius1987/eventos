export function load(context, query = {}) {
    return axios
        .get(context.state.dataUrl, { params: query })
        .then(response => {
            dd('load ' + context.state.dataUrl)
            context.commit('setData', response.data)
        })
}

export function setData(state, payload) {
    state.data = payload
}

export function setGetUrl(state, payload) {
    state.dataUrl = payload
}

export function setStoreUrl(state, payload) {
    state.storeUrl = payload
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

export function store(context) {
    return axios
        .post(context.state.storeUrl, context.state.form.fields)
        .then(response => {
            context.dispatch('load')
        })
}

export function clearForm(context) {
    set_null(context.state.form.fields)
}
