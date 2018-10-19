import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('institutions', ['clearForm']),
    },

    computed: {
        ...mapState({
            rows: state => state.institutions.data.rows,
        }),
    },
}
