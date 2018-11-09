import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('receptive', ['clearForm']),
    },

    computed: {
        ...mapState({

            invitations: state => state.invitations.row,
        }),
    },
}