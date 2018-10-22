window.dd = (...args) => {
    if (
        !window.laravel ||
        !window.laravel.environment ||
        window.laravel.environment.debug
    ) {
        console.log('[DEBUG] ---- ', ...args)
    }
}

window.is_url = str => {
    let pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$',
        'i',
    ) // fragment locator
    return pattern.test(str)
}

window.is_email = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

window.initials = name => {
    let initials = name.match(/\b\w/g) || []

    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()
}

window.closeModal = id => {
    jQuery(id).modal('hide')
}

window.confirm = (title, vue) => {
    return vue.$swal({
        icon: 'warning',
        title: title,
        dangerMode: true,
        buttons: {
            cancel: {
                text: vue.$t('messages.No'),
                value: false,
                visible: true,
                className: 'btn-outline-secondary',
                closeModal: true,
            },
            confirm: {
                text: vue.$t('messages.Yes'),
                value: true,
                visible: true,
                className: 'btn-purple',
                closeModal: true,
            },
        },
    })
}

window.post = (...args) => {
    return axios.post(...args)
}

window.get = (...args) => {
    return axios.get(...args)
}

window.object_get = (obj, descendants) => {
    const arr = descendants.split('.')

    arr.forEach(function(element) {
        if (!obj.hasOwnProperty(element)) {
            return null
        }

        obj = obj[element]
    })

    return obj
}

window.remove_empty_properties = obj => {
    let me = JSON.parse(JSON.stringify(obj))

    for (let propName in me) {
        if (me.hasOwnProperty(propName)) {
            if (
                me[propName] === null ||
                me[propName] === undefined ||
                (typeof me[propName] === 'string' && me[propName].trim() === '')
            ) {
                delete me[propName]
            }
        }
    }

    return me
}

window.logout = () => {
    axios.post('/logout').then(response => {
        window.location = '/'
    })
}

window.clone = object => {
    return JSON.parse(JSON.stringify(object))
}

window.set_object_values = (obj, val) => {
    Object.keys(obj).forEach(function(k) {
        obj[k] = val
    })
}

window.set_null = obj => {
    set_object_values(obj, null)
}

window.merge_objects = (target, ...sources) => {
    return Object.assign({}, target, ...sources)
}
