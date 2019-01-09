import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('personTopics', ['clearForm']),
    },

    computed: {
        ...mapState({
            personTopics: state => state.personTopics,
        }),
    },
}
