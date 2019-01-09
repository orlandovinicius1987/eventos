import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('personInstitutions', ['clearForm']),
    },

    computed: {
        ...mapState({
            personTopics: state => state.personTopics,
        }),
    },
}
