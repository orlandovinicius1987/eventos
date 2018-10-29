import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = { id: null }

const state = merge_objects(statesMixin.common, {
    event: { id: null },

    service: { name: 'subEvents', uri: 'events/{events.selected.id}/sub-events', performLoad: false },

    form: new Form({
        name: null,
        date: null,
        time: null,
        invitation_text: null,
        confirmation_text: null,
        address: {
            zipcode: null,
            street: null,
            number: null,
            complement: null,
            neighbourhood: null,
            city: null,
            state: null,
            latitude: null,
            longitude: null,
        }
    }),
})

function replacer(key, value) {
    // Filtering out properties
    if (typeof value === 'string') {
        return undefined;
    }
    return value;
}

var foo = {
    name: '1',
    date: '2',
    time: 3333,
    invitation_text: null,
    confirmation_text: null,
    address: {
        zipcode: 213123,
        street: null,
        number: null,
        complement: null,
        neighbourhood: null,
        city: null,
        state: null,
        latitude: null,
        longitude: null,
    }
}

JSON.stringify(foo, replacer);


window.replacer = (key, value) => {
    return '';
}

JSON.stringify({
    name: null,
    date: null,
    time: null,
    invitation_text: null,
    confirmation_text: null,
    address: {
        zipcode: null,
        street: null,
        number: null,
        complement: null,
        neighbourhood: null,
        city: null,
        state: null,
        latitude: null,
        longitude: null,
    }
}, replacer)

const actions = merge_objects(actionsMixin, {
    setEvent(context, payload) {
        context.commit('mutateSetEvent', payload)

        context.commit('mutateSetFormField', { field: 'event_id', value: payload.id })

        context.commit('mutateSetSelected', __emptyModel)

        context.dispatch('invitations/setSubEvent', __emptyModel, {
            root: true,
        })

        context.dispatch('load', payload)
    },

    confirm(context, payload) {
        post(makeDataUrl(context) + '/' + payload.id + '/confirm').then(function() {
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
