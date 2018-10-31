import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('personCategories', ['clearForm']),
    },

    computed: {
        ...mapState({
            personCategories: state => state.personCategories,
        }),
    },
}
