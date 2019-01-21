import axios from 'axios'

axios.interceptors.response.use(undefined, err => {
    let res = err.response

    if (res.status === 401) {
        window.location = '/login'
    }
})
