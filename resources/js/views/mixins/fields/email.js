export default {
    computed: {
        email: {
            get() {
                return this.form.fields.email
            },
            set(value) {
                this.mutateFormField({
                    field: 'email',
                    value,
                })
            },
        },

        fieldEmailDefault() {
            return null
        },
    },
}
