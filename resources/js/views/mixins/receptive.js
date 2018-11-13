import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('receptive', ['clearForm']),
    },

    computed: {
        ...mapState({

            receptiveInvitations: state => state.receptiveInvitations,
        }),
    },
}