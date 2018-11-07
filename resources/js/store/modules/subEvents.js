import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

const __emptyAddress = {
    zipcode: null,
    street: null,
    number: null,
    complement: null,
    neighbourhood: null,
    city: null,
    state: null,
    latitude: laravel.google_maps.geolocation.latitude,
    longitude: laravel.google_maps.geolocation.longitude,
}

const __emptyForm = {
    id: null,
    name: null,
    date: null,
    time: null,
    invitation_text: null,
    confirmation_text: null,
    address: __emptyAddress,
    costume_id: __emptyModel,
    sector_id: __emptyModel,
    event_id: __emptyModel,
}

const state = merge_objects(statesMixin.common, {
    event: { id: null },

    service: {
        name: 'subEvents',
        uri: 'events/{events.selected.id}/sub-events',
        performLoad: false,
    },

    form: new Form(__emptyForm),
})

const actions = merge_objects(actionsMixin, {
    select(context, payload) {
        if (payload.address === null) {
            payload.address = __emptyAddress
        }

        context.commit('mutateSetSelected', payload)

        context.commit('mutateFormData', payload)
    },

    setEvent(context, payload) {
        context.commit('mutateSetEvent', payload)

        context.commit('mutateSetFormField', {
            field: 'event_id',
            value: payload.id,
        })

        context.commit('mutateSetSelected', __emptyModel)

        context.dispatch('invitations/setSubEvent', __emptyModel, {
            root: true,
        })

        context.dispatch('load', payload)
    },

    confirm(context, payload) {
        post(makeDataUrl(context) + '/' + payload.id + '/confirm').then(
            function() {
                context.dispatch('load', payload)
            },
        )
    },

    finalize(context, payload) {
        post(makeDataUrl(context) + '/' + payload.id + '/finalize').then(
            function() {
                context.dispatch('load', payload)
            },
        )
    },
})

const mutations = merge_objects(mutationsMixin, {
    mutateSetEvent(state, payload) {
        state.event = payload
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
