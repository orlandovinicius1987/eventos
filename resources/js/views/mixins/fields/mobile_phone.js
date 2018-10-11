export default {
    computed: {
        mobile_phone: {
            get() {
                return this.form.fields.mobile_phone
            },
            set(value) {
                this.storeFormField({
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
