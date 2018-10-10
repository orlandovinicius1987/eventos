export default {
    computed: {
        color: {
            get() {
                return this.form.fields.color
            },
            set(value) {
                this.storeFormField({
                    field: 'color',
                    value,
                })
            },
        },

        fieldColorDefault() {
            return {
                background: { hex: '#132AD7FF' },
                foreground: { hex: '#FFDC00FF' },
            }
        },
    },
}
