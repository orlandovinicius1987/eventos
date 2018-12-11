import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('receptiveInvitations', ['clearForm']),
    },

    computed: {
        ...mapState({

            receptiveInvitations: state => state.receptiveInvitations,
        }),
    },

}
