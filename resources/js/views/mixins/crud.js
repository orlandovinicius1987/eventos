export default {
    data: function() {
        return {
            loading: {
                environment: false,

                table: false,
            },

            showForm: false,

            operation: null,
            currentQuery: null,
        }
    },

    methods: {
        createModel() {
            this.setModelAndOpenModal('store')
        },

        editModel(model) {
            this.setModelAndOpenModal('update', model)
        },

        setModelAndOpenModal(operation, model) {
            this.configureForm(model)

            this.operation = operation

            this.showModal()
        },

        configureForm(model) {
            if (typeof model === 'undefined') {
                model = this.getEmptyFormData()
            }

            this.setFormData(model)

            this.setErrors({})
        },

        cancel() {
            this.showForm = false
        },

        showColorPickerModal() {
            this.$refs.colorPicker.showModal()
        },

        updateColor(color) {
            this.color = color
        },

        reloadEnvironment: function() {
            const $this = this

            $this.loading.environment = true

            return this.$store.dispatch('environment/load').then(() => {
                $this.loading.environment = false
            })
        },

        saveModel() {
            const $this = this

            $this.form
                .post(this.apiBaseUri + '/' + $this.operation)
                .then(() => {
                    $this.hideModal()

                    $this.reload()
                })
        },

        deleteModel(model) {
            const $this = this

            confirm(
                $this.$t('messages.confirm-delete') + " '" + model.name + "'?",
                $this,
            ).then(function(confirmed) {
                if (confirmed) {
                    post($this.apiBaseUri + '/' + model.id + '/delete').then(
                        function() {
                            $this.reload()
                        },
                    )
                }
            })
        },

        reload(query) {
            this.reloadEnvironment()

            this.reloadTable()
        },

        showModal() {
            this.$refs.createUpdateModal.show()
        },

        hideModal() {
            this.$refs.createUpdateModal.hide()
        },

        boot() {
            this.setDataUrl(this.apiBaseUri)

            this.setFormData()

            this.reload()

            this.bootEventListeners()
        },

        setPageSize(size) {
            this.$store.dispatch('environment/updateUserPageSize', size)
        },

        reloadTable(query = null) {
            const $this = this

            if (
                !($this.currentQuery = query =
                    query == null ? $this.currentQuery : query)
            ) {
                return
            }

            $this.$nextTick(() => {
                $this.loading.table = true

                $this.$store
                    .dispatch(this.serviceName + '/load', query)
                    .then(() => {
                        $this.loading.table = false
                    })
            })
        },
    },
}
