export default {
    methods: {
        can(permission) {
            return permission && true
        },

        cannot(permission) {
            return !this.can(permission)
        }
    },
}
