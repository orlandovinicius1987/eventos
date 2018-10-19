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
        filterText: {
            get() {
                return this.$store.state[this.serviceName].query.filter.text
            },

            set(payload) {
                return this.$store.dispatch(
                    this.serviceName + '/setQueryFilterText',
                    payload,
                )
            },
        },

        form() {
            return this.$store.state[this.serviceName].form
        },

        environment() {
            return this.$store.environment
        },

        pagination() {
            return this.$store.state[this.serviceName].data.links
                ? this.$store.state[this.serviceName].data.links.pagination
                : {}
        },

        pageSize: {
            get() {
                return this.pagination.per_page
            },

            set(value) {
                this.$store.dispatch(this.serviceName + '/setPerPage', value)
            },
        },
    },

    methods: {
        load() {
            this.$store.dispatch(this.serviceName + '/load')
        },

        save(mode) {
            this.setUpdateUrl(
                '/api/v1/' + this.serviceName + '/' + this.$route.params.id,
            )
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

            this.fillFormWhenEditing()
        },

        fillFormWhenEditing() {
            const $this = this

            if ($this.mode === 'update') {
                const model = _.find(this.rows, function(model) {
                    return model.id == $this.$route.params.id
                })

                $this.setFormData(model)
            }

            if ($this.mode === 'create') {
                $this.setFormData(set_null($this.form.fields))
            }
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
        },

        gotoPage(page) {
            if (this.pagination.current_page === page) {
                return
            }

            if (page < 1) {
                return
            }

            if (page > this.pagination.last_page) {
                return
            }

            this.$store.dispatch(this.serviceName + '/setCurrentPage', page)
        },

        isCurrent(model, selected) {
            return model.id === selected.id
        },
    },
}
