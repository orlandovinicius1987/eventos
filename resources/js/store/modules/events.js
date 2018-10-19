import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'

const __emptyModel = { id: null }

let state = merge_objects(
    {
        subEvents: [],

        invitations: [],

        selectedEvent: __emptyModel,

        selectedSubEvent: __emptyModel,

        selectedInvitation: __emptyModel,

        form: new Form({
            name: null,
        }),

        subEventsQuery: {},

        invitationsQuery: {},
    },
    statesMixin.common,
)

let actions = merge_objects(
    {
        load: actionsMixin.load,
        save: actionsMixin.save,
        clearForm: actionsMixin.clearForm,

        selectEvent(context, payload) {
            context.commit('selectEvent', payload)

            context.dispatch('loadSubEvents', payload)
        },

        selectSubEvent(context, payload) {
            context.commit('selectSubEvent', payload)

            context.dispatch('loadInvitations', payload)
        },

        loadSubEvents(context, event) {
            return axios
                .get('/api/v1/events/' + event.id + '/sub-events', {
                    params: this.subEventsQuery,
                })
                .then(response => {
                    context.commit('setSubEvents', response.data)
                })
        },

        loadInvitations(context, subEvent) {
            return axios
                .get(
                    '/api/v1/events/' +
                        subEvent.event.id +
                        '/sub-events/' +
                        subEvent.id +
                        '/invitations',
                    { params: this.invitationsQuery },
                )
                .then(response => {
                    context.commit('setInvitations', response.data)
                })
        },
    },
    actionsMixin,
)

let mutations = merge_objects(
    {
        selectEvent(state, payload) {
            state.selectedEvent = payload

            state.selectedSubEvent = __emptyModel

            state.selectedInvitation = __emptyModel
        },

        selectSubEvent(state, payload) {
            state.selectedSubEvent = payload

            state.selectedInvitation = __emptyModel
        },

        selectInvitation(state, payload) {
            state.selectedInvitation = payload
        },

        setSubEvents(state, payload) {
            state.subEvents = payload
        },

        setInvitations(state, payload) {
            state.invitations = payload
        },
    },
    mutationsMixin,
)

export default {
    state,
    actions,
    mutations,
    namespaced: true,
}
