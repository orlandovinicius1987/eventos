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

const __emptySubEvent = {
    address: __emptyAddress,
    event: __emptyEvent,

    associated_subevent_id: null,
    credentials_text: null,
    confirmed_at: null,
    confirmed_by: null,
    costume: null,
    costume_id: null,
    thank_you_text: null,
    rejection_text: null,
    date: null,
    ended_at: null,
    ended_by: null,
    event_id: null,
    id: null,
    invitation_text: null,
    model: null,
    name: null,
    place: null,
    sector_id: null,
    started_at: null,
    started_by: null,
    time: null,
}

const __emptyModel = {
    id: null,
    sub_event_id: null,
    person_institution_id: null,
    accepted_at: null,
    declined_at: null,
    sent_at: null,
    received_at: null,
    checkin_at: null,
    code: null,
    uuid: null,
}

const state = merge_objects(statesMixin.common, {
    subEvent: { id: null },

    service: {
        name: 'invitations',
        uri:
            'events/{events.selected.id}/sub-events/{subEvents.selected.id}/invitations',
        performLoad: false,
    },

    form: new Form(clone(__emptyModel)),
    emptyForm: clone(__emptyModel),
})

const actions = merge_objects(actionsMixin, {
    load(context) {
        if (!context.state.subEvent || !context.state.subEvent.event) {
            return
        }

        return get(
            '/api/v1/events/' +
                context.state.subEvent.event.id +
                '/sub-events/' +
                context.state.subEvent.id +
                '/invitations',
            {
                params: { query: context.getters.getQueryFilter },
            },
        ).then(response => {
            context.dispatch('setDataAfterLoad', response.data)
        })
    },

    resetSubEvent(context, payload) {
        context.commit('mutateSetSubEvent', __emptySubEvent)

        context.commit('mutateSetSelected', __emptyModel)
    },

    setSubEvent(context, payload) {
        context.commit('mutateSetSubEvent', payload)

        context.commit('mutateSetSelected', __emptyModel)

        context.dispatch('load', payload)
    },

    unInvite(context, payload) {
        post(makeDataUrl(context) + '/' + payload.id + '/un-invite')
    },

    markAsAccepted(context, payload) {
        post(
            makeDataUrl(context) +
                '/' +
                payload.id +
                '/mark-as-accepted/manual',
        )
    },

    markAsReceived(context, payload) {
        post(
            makeDataUrl(context) +
                '/' +
                payload.id +
                '/mark-as-received/manual',
        )
    },

    markAsDeclined(context, payload) {
        post(
            makeDataUrl(context) +
                '/' +
                payload.id +
                '/mark-as-rejected/manual',
        )
    },

    sendCredentials(context, payload) {
        post(makeDataUrl(context) + '/' + payload.id + '/sendCredentials')
    },

    sendInvitation(context, payload) {
        post(makeDataUrl(context) + '/' + payload.id + '/sendInvitation')
    },
})

const mutations = merge_objects(mutationsMixin, {
    mutateSetSubEvent(state, payload) {
        state.subEvent = payload
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
