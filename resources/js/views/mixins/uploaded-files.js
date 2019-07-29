import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('uploadedFiles', ['clearForm']),
    },

    computed: {
        ...mapState({
            uploadedFiles: state => state.uploadedFiles,
        }),
    },
}
