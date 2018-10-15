export default {
    data: function() {
        return {
            loading: {
                environment: false,

                table: false,
            },
        }
    },

    methods: {
        boot() {
            this.setDataUrl(this.apiBaseUri)

            this.setStoreUrl(this.apiBaseUri)
        },
    },
}
