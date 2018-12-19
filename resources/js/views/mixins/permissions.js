export default {
    methods: {
        can() {
            if (this.environment.user.hasOwnProperty('permissions')) {
                for (var i = 0; i < arguments.length; i++) {
                    const hasPermission = JSON.parse(
                        this.environment.user.permissions,
                    ).hasOwnProperty(arguments[i])

                    if (hasPermission) {
                        return true
                    }
                }
            }

            return false
        },

        cannot(permission) {
            return !this.can(permission)
        },
    },
}
