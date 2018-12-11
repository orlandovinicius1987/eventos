webpackJsonp([11], {
    /***/ './node_modules/babel-loader/lib/index.js?{"cacheDirectory":true,"presets":[["env",{"modules":false,"targets":{"browsers":["> 2%"],"uglify":true}}]],"plugins":["transform-object-rest-spread",["transform-runtime",{"polyfill":false,"helpers":false}],"syntax-dynamic-import"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/views/ContactTypes.vue': /***/ function(
        module,
        __webpack_exports__,
        __webpack_require__,
    ) {
        'use strict'
        Object.defineProperty(__webpack_exports__, '__esModule', {
            value: true,
        })
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_crud__ = __webpack_require__(
            './resources/js/views/mixins/crud.js',
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_contact_types__ = __webpack_require__(
            './resources/js/views/mixins/contact-types.js',
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_permissions__ = __webpack_require__(
            './resources/js/views/mixins/permissions.js',
        )
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        var service = { name: 'contactTypes', uri: 'contact-types' }

        /* harmony default export */ __webpack_exports__['default'] = {
            mixins: [
                __WEBPACK_IMPORTED_MODULE_0__mixins_crud__['a' /* default */],
                __WEBPACK_IMPORTED_MODULE_1__mixins_contact_types__[
                    'a' /* default */
                ],
                __WEBPACK_IMPORTED_MODULE_2__mixins_permissions__[
                    'a' /* default */
                ],
            ],

            data: function data() {
                return {
                    service: service,
                }
            },
        }

        /***/
    },

    /***/ './node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-2527fc58","scoped":false,"hasInlineConfig":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/ContactTypes.vue': /***/ function(
        module,
        exports,
        __webpack_require__,
    ) {
        exports = module.exports = __webpack_require__(
            './node_modules/css-loader/lib/css-base.js',
        )(false)
        // imports

        // module
        exports.push([
            module.i,
            '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
            '',
        ])

        // exports

        /***/
    },

    /***/ './node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-2527fc58","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/views/ContactTypes.vue': /***/ function(
        module,
        exports,
        __webpack_require__,
    ) {
        var render = function() {
            var _vm = this
            var _h = _vm.$createElement
            var _c = _vm._self._c || _h
            return _c('div', [
                _vm._m(0),
                _vm._v(' '),
                _c('div', { staticClass: 'row' }, [
                    _c(
                        'div',
                        { staticClass: 'col-4' },
                        [
                            _c(
                                'app-table-panel',
                                {
                                    attrs: {
                                        title:
                                            'Tipos de Contato (' +
                                            _vm.pagination.total +
                                            ')',
                                        'add-button': {
                                            uri: '/contact-types/create',
                                            disabled: _vm.cannot('create'),
                                        },
                                        'per-page': _vm.perPage,
                                        'filter-text': _vm.filterText,
                                    },
                                    on: {
                                        'input-filter-text': function($event) {
                                            _vm.filterText = $event.target.value
                                        },
                                        'set-per-page': function($event) {
                                            _vm.perPage = $event
                                        },
                                    },
                                },
                                [
                                    _c(
                                        'app-table',
                                        {
                                            attrs: {
                                                pagination: _vm.pagination,
                                                columns: [
                                                    '#',
                                                    'Nome',
                                                    'Código',
                                                    '',
                                                ],
                                            },
                                            on: {
                                                'goto-page': function($event) {
                                                    _vm.gotoPage($event)
                                                },
                                            },
                                        },
                                        _vm._l(
                                            _vm.contactTypes.data.rows,
                                            function(contactType) {
                                                return _c(
                                                    'tr',
                                                    {
                                                        class: {
                                                            'cursor-pointer': true,
                                                            'bg-primary-lighter text-white': _vm.isCurrent(
                                                                contactType,
                                                                _vm.selected,
                                                            ),
                                                        },
                                                        on: {
                                                            click: function(
                                                                $event,
                                                            ) {
                                                                _vm.select(
                                                                    contactType,
                                                                )
                                                            },
                                                        },
                                                    },
                                                    [
                                                        _c(
                                                            'td',
                                                            {
                                                                staticClass:
                                                                    'align-middle',
                                                            },
                                                            [
                                                                _vm._v(
                                                                    _vm._s(
                                                                        contactType.id,
                                                                    ),
                                                                ),
                                                            ],
                                                        ),
                                                        _vm._v(' '),
                                                        _c(
                                                            'td',
                                                            {
                                                                staticClass:
                                                                    'align-middle',
                                                            },
                                                            [
                                                                _vm._v(
                                                                    _vm._s(
                                                                        contactType.name,
                                                                    ),
                                                                ),
                                                            ],
                                                        ),
                                                        _vm._v(' '),
                                                        _c(
                                                            'td',
                                                            {
                                                                staticClass:
                                                                    'align-middle',
                                                            },
                                                            [
                                                                _vm._v(
                                                                    _vm._s(
                                                                        contactType.code,
                                                                    ),
                                                                ),
                                                            ],
                                                        ),
                                                        _vm._v(' '),
                                                        _c(
                                                            'td',
                                                            {
                                                                staticClass:
                                                                    'align-middle text-right',
                                                            },
                                                            [
                                                                _c(
                                                                    'router-link',
                                                                    {
                                                                        staticClass:
                                                                            'btn btn-danger btn-sm ml-1 pull-right',
                                                                        attrs: {
                                                                            to:
                                                                                '/contact-types/' +
                                                                                contactType.id +
                                                                                '/update',
                                                                            tag:
                                                                                'button',
                                                                            disabled: _vm.cannot(
                                                                                'create',
                                                                            ),
                                                                            title:
                                                                                'Editar Tipo de Contato',
                                                                        },
                                                                    },
                                                                    [
                                                                        _c(
                                                                            'i',
                                                                            {
                                                                                staticClass:
                                                                                    'fa fa-edit',
                                                                            },
                                                                        ),
                                                                    ],
                                                                ),
                                                            ],
                                                            1,
                                                        ),
                                                    ],
                                                )
                                            },
                                        ),
                                    ),
                                ],
                                1,
                            ),
                        ],
                        1,
                    ),
                ]),
            ])
        }
        var staticRenderFns = [
            function() {
                var _vm = this
                var _h = _vm.$createElement
                var _c = _vm._self._c || _h
                return _c('div', { staticClass: 'py-2 text-center' }, [
                    _c('h2', [_vm._v('Categorias')]),
                ])
            },
        ]
        render._withStripped = true
        module.exports = { render: render, staticRenderFns: staticRenderFns }
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require('vue-hot-reload-api').rerender(
                    'data-v-2527fc58',
                    module.exports,
                )
            }
        }

        /***/
    },

    /***/ './node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-2527fc58","scoped":false,"hasInlineConfig":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/ContactTypes.vue': /***/ function(
        module,
        exports,
        __webpack_require__,
    ) {
        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(
            './node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-2527fc58","scoped":false,"hasInlineConfig":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/ContactTypes.vue',
        )
        if (typeof content === 'string') content = [[module.i, content, '']]
        if (content.locals) module.exports = content.locals
        // add the styles to the DOM
        var update = __webpack_require__(
            './node_modules/vue-style-loader/lib/addStylesClient.js',
        )('229de1f8', content, false, {})
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept(
                    '!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-2527fc58","scoped":false,"hasInlineConfig":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContactTypes.vue',
                    function() {
                        var newContent = require('!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-2527fc58","scoped":false,"hasInlineConfig":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContactTypes.vue')
                        if (typeof newContent === 'string')
                            newContent = [[module.id, newContent, '']]
                        update(newContent)
                    },
                )
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() {
                update()
            })
        }

        /***/
    },

    /***/ './resources/js/views/ContactTypes.vue': /***/ function(
        module,
        exports,
        __webpack_require__,
    ) {
        var disposed = false
        function injectStyle(ssrContext) {
            if (disposed) return
            __webpack_require__(
                './node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-2527fc58","scoped":false,"hasInlineConfig":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/ContactTypes.vue',
            )
        }
        var normalizeComponent = __webpack_require__(
            './node_modules/vue-loader/lib/component-normalizer.js',
        )
        /* script */
        var __vue_script__ = __webpack_require__(
            './node_modules/babel-loader/lib/index.js?{"cacheDirectory":true,"presets":[["env",{"modules":false,"targets":{"browsers":["> 2%"],"uglify":true}}]],"plugins":["transform-object-rest-spread",["transform-runtime",{"polyfill":false,"helpers":false}],"syntax-dynamic-import"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/views/ContactTypes.vue',
        )
        /* template */
        var __vue_template__ = __webpack_require__(
            './node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-2527fc58","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/views/ContactTypes.vue',
        )
        /* template functional */
        var __vue_template_functional__ = false
        /* styles */
        var __vue_styles__ = injectStyle
        /* scopeId */
        var __vue_scopeId__ = null
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null
        var Component = normalizeComponent(
            __vue_script__,
            __vue_template__,
            __vue_template_functional__,
            __vue_styles__,
            __vue_scopeId__,
            __vue_module_identifier__,
        )
        Component.options.__file = 'resources/js/views/ContactTypes.vue'

        /* hot reload */
        if (false) {
            ;(function() {
                var hotAPI = require('vue-hot-reload-api')
                hotAPI.install(require('vue'), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord('data-v-2527fc58', Component.options)
                } else {
                    hotAPI.reload('data-v-2527fc58', Component.options)
                }
                module.hot.dispose(function(data) {
                    disposed = true
                })
            })()
        }

        module.exports = Component.exports

        /***/
    },

    /***/ './resources/js/views/mixins/contact-types.js': /***/ function(
        module,
        __webpack_exports__,
        __webpack_require__,
    ) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(
            './node_modules/vuex/dist/vuex.esm.js',
        )
        var _extends =
            Object.assign ||
            function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i]
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key]
                        }
                    }
                }
                return target
            }

        /* harmony default export */ __webpack_exports__['a'] = {
            methods: _extends(
                {},
                Object(__WEBPACK_IMPORTED_MODULE_0_vuex__['mapActions'])(
                    'contactTypes',
                    ['clearForm'],
                ),
            ),

            computed: _extends(
                {},
                Object(__WEBPACK_IMPORTED_MODULE_0_vuex__['mapState'])({
                    contactTypes: function contactTypes(state) {
                        return state.contactTypes
                    },
                }),
            ),
        }

        /***/
    },

    /***/ './resources/js/views/mixins/crud.js': /***/ function(
        module,
        __webpack_exports__,
        __webpack_require__,
    ) {
        'use strict'
        /* harmony default export */ __webpack_exports__['a'] = {
            data: function data() {
                return {
                    loading: {
                        environment: false,

                        table: false,
                    },
                }
            },

            computed: {
                filterText: {
                    get: function get() {
                        return this.$store.state[this.service.name].data.filter
                            .text
                    },
                    set: function set(payload) {
                        return this.$store.dispatch(
                            this.service.name + '/mutateSetQueryFilterText',
                            payload,
                        )
                    },
                },

                emptyForm: function emptyForm() {
                    return this.$store.state[this.service.name].emptyForm
                },
                form: function form() {
                    return this.$store.state[this.service.name].form
                },
                selected: function selected() {
                    return this.$store.state[this.service.name].selected
                },
                environment: function environment() {
                    return this.$store.state['environment']
                },
                pagination: function pagination() {
                    return this.$store.state[this.service.name].data.links
                        ? this.$store.state[this.service.name].data.links
                              .pagination
                        : {}
                },

                perPage: {
                    get: function get() {
                        return this.pagination.per_page
                    },
                    set: function set(value) {
                        this.$store.dispatch(
                            this.service.name + '/setPerPage',
                            value,
                        )
                    },
                },
            },

            methods: {
                load: function load() {
                    this.$store.commit(
                        this.service.name + '/mutateSetPerPage',
                        this.environment.user.per_page,
                    )

                    return this.$store.dispatch(this.service.name + '/load')
                },
                select: function select(model) {
                    return this.$store.dispatch(
                        this.service.name + '/select',
                        model,
                    )
                },
                save: function save(mode) {
                    return this.$store.dispatch(
                        this.service.name + '/save',
                        mode,
                    )
                },
                mutateSetErrors: function mutateSetErrors(errors) {
                    this.$store.commit(
                        this.service.name + '/mutateSetErrors',
                        errors,
                    )
                },
                mutateFormData: function mutateFormData(data) {
                    this.$store.commit(
                        this.service.name + '/mutateFormData',
                        data,
                    )
                },
                mutateSetFormField: function mutateSetFormField(data) {
                    this.$store.commit(
                        this.service.name + '/mutateSetFormField',
                        data,
                    )
                },
                mutateSetService: function mutateSetService(data) {
                    this.$store.commit(
                        this.service.name + '/mutateSetService',
                        data,
                    )
                },
                isLoading: function isLoading() {
                    return this.loading.environment || this.loading.table
                },
                boot: function boot() {
                    var _this = this

                    this.mutateSetService(this.service)

                    if (
                        !this.service.hasOwnProperty('performLoad') ||
                        this.service.performLoad
                    ) {
                        this.load().then(function() {
                            _this.fillFormWhenEditing()
                        })
                    } else {
                        this.fillFormWhenEditing()
                    }

                    this.$store.dispatch(
                        this.service.name + '/subscribeToTableEvents',
                    )
                },
                fillFormWhenEditing: function fillFormWhenEditing() {
                    var _this2 = this

                    var model =
                        this.mode === 'update'
                            ? _.find(this.rows, function(model) {
                                  return model.id === _this2.$route.params.id
                              })
                            : this.form
                            ? clone(this.emptyForm)
                            : {}

                    this.mutateFormData(model)

                    this.mutateSetErrors({})

                    this.fillAdditionalFormFields()
                },
                fillAdditionalFormFields: function fillAdditionalFormFields() {},
                back: function back() {
                    this.$router.back()
                },
                saveModel: function saveModel() {
                    var _this3 = this

                    this.save(this.mode).then(function() {
                        _this3.back()

                        _this3.clearForm()
                    })
                },
                can: function can(permission) {
                    return permission && false
                },
                cannot: function cannot(permission) {
                    return !can(permission)
                },
                gotoPage: function gotoPage(page) {
                    var namespace =
                        arguments.length > 1 && arguments[1] !== undefined
                            ? arguments[1]
                            : null
                    var pagination =
                        arguments.length > 2 && arguments[2] !== undefined
                            ? arguments[2]
                            : null

                    pagination = pagination ? pagination : this.pagination

                    if (pagination.current_page === page) {
                        return
                    }

                    if (page < 1) {
                        return
                    }

                    if (page > pagination.last_page) {
                        return
                    }

                    this.$store.dispatch(
                        (namespace ? namespace : this.service.name) +
                            '/setCurrentPage',
                        page,
                    )
                },
                isCurrent: function isCurrent(model, selected) {
                    return model.id === selected.id
                },
                setPerPage: function setPerPage() {
                    this.$store.commit(
                        this.service.name + '/mutateSetPerPage',
                        this.environment.user.per_page,
                    )
                },
                getDataUrl: function getDataUrl() {
                    return buildApiUrl(this.service.uri, this.$store.state)
                },
                getStoreUrl: function getStoreUrl() {
                    return buildApiUrl(this.service.uri, this.$store.state)
                },
                getUpdateStoreUrl: function getUpdateStoreUrl() {
                    return buildApiUrl(this.service.uri, this.$store.state)
                },
            },

            mounted: function mounted() {
                this.boot()
            },
        }

        /***/
    },

    /***/ './resources/js/views/mixins/permissions.js': /***/ function(
        module,
        __webpack_exports__,
        __webpack_require__,
    ) {
        'use strict'
        /* harmony default export */ __webpack_exports__['a'] = {
            methods: {
                can: function can(permission) {
                    return permission && true
                },
                cannot: function cannot(permission) {
                    return !this.can(permission)
                },
            },
        }

        /***/
    },
})
