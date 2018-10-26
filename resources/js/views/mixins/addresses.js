import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('addresses', ['clearForm', 'typeKeyZipcode']),
    },

    computed: {
        ...mapState({
            addresses: state => state.addresses,
        }),
    },
}
