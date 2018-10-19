export default {
    computed: {
        name: {
            get() {
                return this.form.fields.name
            },
            set(value) {
                this.mutateFormField({
                    field: 'name',
                    value,
                })
            },
        },

        fieldNameDefault() {
            return null
        },
    },
}
