import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

const state = merge_objects(statesMixin.common, {
    person: { id: null },

    service: {
        name: 'addresses',
        uri:
            'people/{people.selected.id}/person-institutions/{personInstitutions.selected.id}/addresses',
        isForm: true,
    },

    form: new Form({
        addressable_id: null,
        addressable_type: null,
        zipcode: null,
        street: null,
        number: null,
        complement: null,
        neighbourhood: null,
        city: null,
        state: null,
        latitude: null,
        longitude: null,
    }),
})

const actions = merge_objects(actionsMixin, {
    setPersonInstitution(context, payload) {
        context.commit('mutateSetPersonInstitution', payload)

        context.commit('mutateSetFormField', {
            field: 'addressable_id',
            value: payload.id,
        })

        context.commit('mutateSetFormField', {
            field: 'addressable_type',
            value: payload.model,
        })

        context.commit('mutateSetSelected', __emptyModel)

        context.dispatch('load', payload)
    },

    typeKeyZipcode(context, payload) {
        clearTimeout(this.timeout)

        this.timeout = setTimeout(function() {
            axios
                .get('/api/v1/zipcode/' + payload)
                .then(function(response) {
                    if (response.data.addresses[0].street_name) {
                        context.commit('mutateSetFormField', {
                            field: 'zipcode',
                            value: response.data.addresses[0].zip,
                        })
                        context.commit('mutateSetFormField', {
                            field: 'street',
                            value: response.data.addresses[0].street_name,
                        })
                        context.commit('mutateSetFormField', {
                            field: 'neighbourhood',
                            value: response.data.addresses[0].neighborhood,
                        })
                        context.commit('mutateSetFormField', {
                            field: 'city',
                            value: response.data.addresses[0].city,
                        })
                        context.commit('mutateSetFormField', {
                            field: 'state',
                            value: response.data.addresses[0].state_id,
                        })
                        document.getElementById('number').focus()
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        }, 500)
    },
})

const mutations = merge_objects(mutationsMixin, {
    mutateSetPersonInstitution(state, payload) {
        state.personInstitution = payload
    },
})

let getters = gettersMixin

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
