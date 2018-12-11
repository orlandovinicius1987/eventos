import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyTable = {
    filter: {
        text: null,
    },

    links: {
        pagination: {
            per_page: null,

            current_page: null,
        },
    },

    rows: {},
}

const state = merge_objects(statesMixin.common, {
    service: {
        name: 'subEventsDashboard',
        uri: 'sub-events/all-about-to-happen',
        performLoad: false,
    },

    data: __emptyTable,
})

const actions = merge_objects(actionsMixin, {

     
})

const mutations = merge_objects(mutationsMixin, {})

let getters = gettersMixin

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
