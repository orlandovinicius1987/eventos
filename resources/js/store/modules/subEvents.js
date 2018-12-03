import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyEvent = {
    id: null,

    name: null,
    client_id: null,
}

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

const __emptyModel = {
    address: __emptyAddress,
    event: __emptyEvent,

    invitation_text: '',
    credentials_text: '',
    rejection_text: '',
    associated_subevent_id: null,
    confirmed_at: null,
    confirmed_by: null,
    costume: null,
    costume_id: null,
    date: null,
    ended_at: null,
    ended_by: null,
    event_id: null,
    id: null,
    model: null,
    name: null,
    place: null,
    sector_id: null,
    started_at: null,
    started_by: null,
    time: null,
}

const state = merge_objects(statesMixin.common, {
    event: { id: null },

    service: {
        name: 'subEvents',
        uri: 'events/{events.selected.id}/sub-events',
        performLoad: false,
    },

    form: new Form(clone(__emptyModel)),
    emptyForm: clone(__emptyModel),
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

        context.dispatch('invitations/resetSubEvent', __emptyModel, {
            root: true,
        })

        context.dispatch('load', payload)
    },

    confirm(context, payload) {
        post(makeDataUrl(context) + '/' + payload.id + '/confirm').then(() => {
            context.dispatch('load', payload)
        })
    },

    finalize(context, payload) {
        post(makeDataUrl(context) + '/' + payload.id + '/finalize').then(() => {
            context.dispatch('load', payload)
        })
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
