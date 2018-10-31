import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('people', ['clearForm']),
    },

    computed: {
        ...mapState({
            people: state => state.people,

            personInstitutions: state => state.personInstitutions,

            contacts: state => state.contacts,

            addresses: state => state.addresses,

            advisors: state => state.advisors,
        }),
    },


}
