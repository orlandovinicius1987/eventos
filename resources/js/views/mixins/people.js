import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('people', ['clearForm']),
    },

    computed: {
        ...mapState({
            people: state => state.people.data,
        }),
    },
}
