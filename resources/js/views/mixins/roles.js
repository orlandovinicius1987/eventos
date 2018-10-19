import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('roles', ['clearForm']),
    },

    computed: {
        ...mapState({
            rows: state => state.roles.data.rows,
        }),
    },
}
