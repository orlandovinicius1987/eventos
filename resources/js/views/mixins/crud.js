export default {
    data: function() {
        return {
            loading: {
                environment: false,

                table: false,
            },
        }
    },

    computed: {
        form() {
            return this.$store.state[this.serviceName].form
        },

        environment() {
            return this.$store.environment
        },
    },

    methods: {
        load() {
            this.$store.dispatch(this.serviceName + '/load')
        },

        save(mode) {
            this.setUpdateUrl('/api/v1/'+this.serviceName+'/'+this.$route.params.id)
            return this.$store.dispatch(this.serviceName + '/save', mode)
        },

        setGetUrl(url) {
            this.$store.commit(this.serviceName + '/setGetUrl', url)
        },

        setStoreUrl(url) {
            this.$store.commit(this.serviceName + '/setStoreUrl', url)
        },

        setUpdateUrl(url) {
            this.$store.commit(this.serviceName + '/setUpdateUrl', url)
        },

        setErrors(errors) {
            this.$store.commit(this.serviceName + '/setErrors', errors)
        },

        setFormData(data) {
            this.$store.commit(this.serviceName + '/setFormData', data)
        },

        storeFormField(data) {
            this.$store.commit(this.serviceName + '/storeFormField', data)
        },

        isLoading() {
            return this.loading.environment || this.loading.table
        },

        boot() {
            this.setGetUrl('/api/v1/' + this.serviceName)

            this.setStoreUrl('/api/v1/' + this.serviceName)

            this.load()
        },

        back() {
            this.$router.back()
        },

        saveModel() {
            this.save(this.mode).then(() => {
                this.load()

                this.back()

                this.clearForm()
            })
        },

        can(permission) {
            return permission && false
        },

        cannot(permission) {
            return !can(permission)
        }
    },
}
