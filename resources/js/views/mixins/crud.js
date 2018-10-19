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
                    this.serviceName + '/mutateQueryFilterText',
                    payload,
                )
            },
        },

        form() {
            return this.$store.state[this.serviceName].form
        },

        environment() {
            return this.$store.state['environment']
        },

        pagination() {
            return this.$store.state[this.serviceName].data.links
                ? this.$store.state[this.serviceName].data.links.pagination
                : {}
        },

        perPage: {
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
            this.$store.commit(
                this.serviceName + '/mutatePerPage',
                this.environment.user.per_page,
            )

            return this.$store.dispatch(this.serviceName + '/load')
        },

        save(mode) {
            this.mutateUpdateUrl(
                '/api/v1/' + this.serviceName + '/' + this.$route.params.id,
            )
            return this.$store.dispatch(this.serviceName + '/save', mode)
        },

        mutateGetUrl(url) {
            this.$store.commit(this.serviceName + '/mutateGetUrl', url)
        },

        mutateStoreUrl(url) {
            this.$store.commit(this.serviceName + '/mutateStoreUrl', url)
        },

        mutateUpdateUrl(url) {
            this.$store.commit(this.serviceName + '/mutateUpdateUrl', url)
        },

        mutateErrors(errors) {
            this.$store.commit(this.serviceName + '/mutateErrors', errors)
        },

        mutateFormData(data) {
            this.$store.commit(this.serviceName + '/mutateFormData', data)
        },

        mutateFormField(data) {
            this.$store.commit(this.serviceName + '/mutateFormField', data)
        },

        isLoading() {
            return this.loading.environment || this.loading.table
        },

        boot() {
            const $this = this

            $this.mutateGetUrl('/api/v1/' + $this.serviceName)

            $this.mutateStoreUrl('/api/v1/' + $this.serviceName)

            $this.load().then(function() {
                $this.fillFormWhenEditing()
            })
        },

        fillFormWhenEditing() {
            const $this = this

            if ($this.mode === 'update') {
                const model = _.find(this.rows, function(model) {
                    return model.id == $this.$route.params.id
                })

                $this.mutateFormData(model)
            }

            if ($this.mode === 'create') {
                $this.mutateFormData(set_null($this.form.fields))
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

        setPerPage() {
            this.$store.commit(
                this.serviceName + '/mutatePerPage',
                this.environment.user.per_page,
            )
        },
    },
}
