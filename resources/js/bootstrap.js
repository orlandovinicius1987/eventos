require('./support/helpers')

window._ = require('lodash')

window.Popper = require('popper.js').default

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery')

    require('bootstrap')
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
    console.error(
        'CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token',
    )
}

/**
 * Echo & Pusher
 */
import Echo from 'laravel-echo'

window.Pusher = require('pusher-js')

let echoConfig = {
    broadcaster: window.laravel.broadcast.driver,
    key: window.laravel.pusher.key,
    cluster: window.laravel.pusher.options.cluster,
    encrypted: window.laravel.pusher.options.encrypted === 'true',
}

if (window.laravel.pusher.server === 'laravel-websockets') {
    echoConfig.wsHost = window.laravel.pusher.options.host
    echoConfig.wsPort = window.laravel.pusher.options.port
    echoConfig.disableStats = false
}

window.Echo = new Echo(echoConfig)

/**
 * Vue
 */
window.Vue = require('vue')

/**
 * Vuex
 */
window.Vuex = require('vuex')

/**
 * Moment.js
 */
window.moment = require('moment')
moment.locale('pt-br')

/**
 * Vue Grecaptcha
 */
Vue.use(() => import('vue-recaptcha'), {
    sitekey: '6LchDyAUAAAAAPPYWb2ZcFQOh12bI88qpJjKei9J',
})
Vue.component('vue-recaptcha', () => import('vue-recaptcha'))

/**
 * sha256
 */
let sha256 = require('sha256')
window.sha256 = sha256

/**
 * cheerio
 */
let cheerio = require('cheerio')
window.cheerio = cheerio

/**
 * Vue The Mask
 */
Vue.use(() => import('vue-the-mask'))

/**
 * SweetAlert
 */
Vue.use(() => import('vue-swal'))

/**
 * Vue Bootstrap
 */
import { Modal } from 'bootstrap-vue/es/components'
import { Button } from 'bootstrap-vue/es/components'
Vue.use(Modal)
Vue.use(Button)

/**
 * Vue Google Maps
 */
Vue.use(() => import('vue2-google-maps'), {
    load: {
        key: laravel.google_maps.api_key,
        libraries: 'places',
    },
})

/**
 * Autoload Vue components
 */
const file = require.context('./components/app/', true, /\.vue$/i)
file.keys().map(file => {
    const name = 'App' + _.last(file.split('/')).split('.')[0]

    return Vue.component(name, () =>
        import('./components/app/' + basename(file)),
    )
})

/**
 * VueSelect
 */
Vue.component('vue-select', () => import('vue-select'))

/**
 * Vue Croppa
 */
Vue.use(() => import('vue-croppa'), { componentName: 'vue-croppa' })
