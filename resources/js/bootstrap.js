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
// import Echo from 'laravel-echo'
//
// window.Pusher = require('pusher-js')
//
// console.log(process.env.MIX_PUSHER_APP_KEY)
//
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true,
// })

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
import VueRecaptcha from 'vue-recaptcha'
Vue.use(VueRecaptcha, {
    sitekey: '6LchDyAUAAAAAPPYWb2ZcFQOh12bI88qpJjKei9J',
})
Vue.component('vue-recaptcha', VueRecaptcha)

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

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

/**
 * SweetAlert
 */
import VueSwal from 'vue-swal'
Vue.use(VueSwal)

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


import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCLPSCfHpWH9hSmShe76NibXyXMM1njEo0',
        libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)

        //// If you want to set the version, you can do so:
        // v: '3.26',
    },

    //// If you intend to programmatically custom event listener code
    //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
    //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
    //// you might need to turn this on.
    // autobindAllEvents: false,

    //// If you want to manually install components, e.g.
    //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
    //// Vue.component('GmapMarker', GmapMarker)
    //// then disable the following:
    // installComponents: true,
})
