import router from '../routes'
import store from '../store/store.js'
import { mapActions, mapState } from 'vuex'

const appName = 'vue-app'

if (document.getElementById(appName) !== null) {
    new Vue({
        el: '#' + appName,

        store,

        router,

        data: {},

        methods: {
            ...mapActions('environment', [
                'load',
                'selectEntity',
                'selectLanguage',
            ]),
        },

        computed: {
            ...mapState({
                environment: state => state.environment,
            }),
        },
    })
}
