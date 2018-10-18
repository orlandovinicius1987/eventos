import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('people', ['clearForm']),
    },

    computed: {
        ...mapState({
            people: state => state.people.data.rows,

            pagination: state => state.people.data.links ? state.people.data.links.pagination : {},
        }),
    },
}
