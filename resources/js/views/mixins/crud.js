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
                    this.serviceName + '/mutateSetQueryFilterText',
                    payload,
                )
            },
        },

        form() {
            return this.$store.state[this.serviceName].form
        },

        selected() {
            return this.$store.state[this.serviceName].selected
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
                this.serviceName + '/mutateSetPerPage',
                this.environment.user.per_page,
            )

            return this.$store.dispatch(this.serviceName + '/load')
        },

        select(model) {
            return this.$store.dispatch(this.serviceName + '/select', model)
        },

        save(mode) {
            this.mutateSetUpdateUrl(
                '/api/v1/' + this.serviceName + '/' + this.$route.params.id,
            )

            this.mutateSetStoreUrl('/api/v1/' + this.serviceName)

            return this.$store.dispatch(this.serviceName + '/save', mode)
        },

        mutateSetGetUrl(url) {
            this.$store.commit(this.serviceName + '/mutateSetGetUrl', url)
        },

        mutateSetStoreUrl(url) {
            this.$store.commit(this.serviceName + '/mutateSetStoreUrl', url)
        },

        mutateSetUpdateUrl(url) {
            this.$store.commit(this.serviceName + '/mutateSetUpdateUrl', url)
        },

        mutateSetErrors(errors) {
            this.$store.commit(this.serviceName + '/mutateSetErrors', errors)
        },

        mutateFormData(data) {
            this.$store.commit(this.serviceName + '/mutateFormData', data)
        },

        mutateSetFormField(data) {
            this.$store.commit(this.serviceName + '/mutateSetFormField', data)
        },

        isLoading() {
            return this.loading.environment || this.loading.table
        },

        boot() {
            const $this = this

            $this.mutateSetGetUrl('/api/v1/' + $this.serviceName)

            $this.mutateSetStoreUrl('/api/v1/' + $this.serviceName)

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

        gotoPage(page, namespace = null, pagination = null) {
            pagination = pagination ? pagination : this.pagination

            if (pagination.current_page === page) {
                return
            }

            if (page < 1) {
                return
            }

            if (page > pagination.last_page) {
                return
            }

            this.$store.dispatch(
                (namespace ? namespace : this.serviceName) + '/setCurrentPage',
                page,
            )
        },

        isCurrent(model, selected) {
            return model.id === selected.id
        },

        setPerPage() {
            this.$store.commit(
                this.serviceName + '/mutateSetPerPage',
                this.environment.user.per_page,
            )
        },
    },

    mounted() {
        this.boot()
    },
}
