import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('clients', ['clearForm']),
    },

    computed: {
        ...mapState({
            clients: state => state.clients,
        }),
    },
}
