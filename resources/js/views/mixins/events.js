import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('events', ['clearForm']),
    },

    computed: {
        ...mapState({
            events: state => state.events.data,
        }),
    },
}
