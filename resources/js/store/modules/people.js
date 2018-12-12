import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = {
    id: null,
    name: null,
    nickname: null,
    title: null,
    cpf: null,
    photo: null,
    photoUrl: '/images/no-image.jpg',
}

const state = merge_objects(statesMixin.common, {
    form: new Form(clone(__emptyModel)),

    emptyForm: clone(__emptyModel),

    data: {
        filter: {
            selects: {
                institution: null,
                role: null,
            },
        },
    },

    model: {
        name: 'person',

        table: 'people',

        class: { singular: 'Person', plural: 'People' },
    },
})

let actions = merge_objects(actionsMixin, {
    selectPerson(context, payload) {
        context.dispatch('select', payload)

        context.dispatch('personInstitutions/setPerson', payload, {
            root: true,
        })

        context.dispatch('personCategories/setPerson', payload, {
            root: true,
        })
    },

    selectContact(context, payload) {
        context.dispatch('contacts/select', payload, { root: true })
    },

    selectPersonCategories(context, payload) {
        context.dispatch('personCategories/select', payload, { root: true })
    },

    selectPersonInstitution(context, payload) {
        context.dispatch('personInstitutions/select', payload, {
            root: true,
        })

        context.dispatch('contacts/setPersonInstitution', payload, {
            root: true,
        })

        context.dispatch('addresses/setPersonInstitution', payload, {
            root: true,
        })

        context.dispatch('advisors/setPersonInstitution', payload, {
            root: true,
        })
    },

    selectAdvisor(context, payload) {
        context.dispatch('advisors/select', payload, { root: true })
        context.dispatch('advisorContacts/setPersonInstitution', payload, {
            root: true,
        })
    },

    selectContacts(context, payload) {
        context.dispatch('contacts/select', payload, { root: true })
    },

    selectAddress(context, payload) {
        context.dispatch('addresses/select', payload, { root: true })
    },

    selectAdvisors(context, payload) {
        context.dispatch('advisors/select', payload, { root: true })
    },

    selectAdvisorContacts(context, payload) {
        context.dispatch('advisorContacts/select', payload, { root: true })
    },

    subscribeExtraChannels(context, payload = null) {
        if (payload) {
            subscribePublicChannel(
                'person.' + payload.id,
                '.App\\Events\\PersonCategoriesChanged',
                () => {
                    context.dispatch('personCategories/load', payload, {
                        root: true,
                    })
                },
            )

            subscribePublicChannel(
                'person.' + payload.id,
                '.App\\Events\\PersonInstitutionsGotChanged',
                () => {
                    context.dispatch('personInstitutions/load', payload, {
                        root: true,
                    })
                },
            )

            subscribePublicChannel(
                'person.' + payload.id,
                '.App\\Events\\PersonContactsGotChanged',
                () => {
                    context.dispatch('personContacts/load', payload, {
                        root: true,
                    })
                },
            )

            subscribePublicChannel(
                'person.' + payload.id,
                '.App\\Events\\PersonAdvisorsGotChanged',
                () => {
                    context.dispatch('personAdvisors/load', payload, {
                        root: true,
                    })
                },
            )
        }
    },
})

let mutations = merge_objects(
    {
        selectPerson(state, payload) {
            state.selectedPerson = payload

            state.selectedPersonInstitution = __emptyModel

            state.selectedContact = __emptyModel
            state.selectedAddress = __emptyModel

            state.selectedAdvisors = __emptyModel
        },

        selectPersonInstitution(state, payload) {
            state.selectedPersonInstitution = payload

            state.selectedContact = __emptyModel
            state.selectedAddress = __emptyModel
        },

        selectContact(state, payload) {
            state.selectedContact = payload
        },

        selectAddress(state, payload) {
            state.selectedAddress = payload
        },

        selectAdvisors(state, payload) {
            state.selectedAdvisors = payload
        },

        setPersonCategories(state, payload) {
            state.personCategories = payload
        },

        setPersonInstitution(state, payload) {
            state.personInstitutions = payload
        },

        setContacts(state, payload) {
            state.contacts = payload
        },

        setAdvisors(state, payload) {
            state.advisors = payload
        },

        setAddresses(state, payload) {
            state.addresses = payload
        },
    },
    mutationsMixin,
)

let getters = gettersMixin

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
