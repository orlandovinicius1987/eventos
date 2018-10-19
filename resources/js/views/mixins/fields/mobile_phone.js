export default {
    computed: {
        mobile_phone: {
            get() {
                return this.form.fields.mobile_phone
            },
            set(value) {
                this.mutateFormField({
                    field: 'mobile_phone',
                    value,
                })
            },
        },

        fieldEmailDefault() {
            return null
        },
    },
}
