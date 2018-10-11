export function load(context, query = {}) {
    return axios.post(context.state.dataUrl, query).then(response => {
        context.commit('setData', response.data)
    })
}

export function setData(state, payload) {
    state.data = payload
}

export function setDataUrl(state, payload) {
    state.dataUrl = payload
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
