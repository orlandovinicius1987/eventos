import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('addresses', ['clearForm']),
    },

    computed: {
        ...mapState({
            addresses: state => state.addresses,
        }),
    },
}
