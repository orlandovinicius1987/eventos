import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('people', ['clearForm']),
    },

    computed: {
        ...mapState({
            rows: state => state.people.data.rows,
        }),
    },
}
