export default {
    methods: {
        can(permission) {
            if (this.environment.user.hasOwnProperty('permissions')) {
                return JSON.parse(this.environment.user.permissions).hasOwnProperty(permission)
            }else{
                return false
            }
        },

        cannot(permission) {
            return !this.can(permission)
        }
    },
}
