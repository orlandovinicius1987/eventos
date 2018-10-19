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
