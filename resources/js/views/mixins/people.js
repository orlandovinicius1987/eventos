import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('people', ['clearForm']),

        makePhotoUrl(photoUrl = null) {
            if (!photoUrl) {
                photoUrl = this.people.form.fields.photoUrl
            }

            if (!photoUrl) {
                photoUrl = this.people.selected.photoUrl
            }

            return flush_image_cache(photoUrl)
        },
    },

    computed: {
        ...mapState({
            people: state => state.people,

            personInstitutions: state => state.personInstitutions,

            contacts: state => state.contacts,

            addresses: state => state.addresses,

            personCategories: state => state.personCategories,

            advisors: state => state.advisors,

            advisorContacts: state => state.advisorContacts,
        }),
    },
}
