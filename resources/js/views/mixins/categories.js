import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('categories', ['clearForm']),
    },

    computed: {
        ...mapState({
            rows: state => state.categories.data.rows,
        }),
    },
}
