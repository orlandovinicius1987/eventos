webpackJsonp([21], {
    /***/ './node_modules/babel-loader/lib/index.js?{"cacheDirectory":true,"presets":[["env",{"modules":false,"targets":{"browsers":["> 2%"],"uglify":true}}]],"plugins":["transform-object-rest-spread",["transform-runtime",{"polyfill":false,"helpers":false}],"syntax-dynamic-import"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/views/Invitation.vue': /***/ function(
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
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_categories__ = __webpack_require__(
            './resources/js/views/mixins/categories.js',
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

        var service = {
            name: 'categories',
            uri: 'categories',
            performLoad: false,
        }

        /* harmony default export */ __webpack_exports__['default'] = {
            props: ['mode'],

            mixins: [
                __WEBPACK_IMPORTED_MODULE_0__mixins_crud__['a' /* default */],
                __WEBPACK_IMPORTED_MODULE_1__mixins_categories__[
                    'a' /* default */
                ],
            ],

            data: function data() {
                return {
                    service: service,
                }
            },

            computed: {
                invitation: {
                    get: function get() {
                        return this.$store.state['invitations'].selected
                    },
                },
            },
        }

        /***/
    },

    /***/ './node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-4b49c178","scoped":false,"hasInlineConfig":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/Invitation.vue': /***/ function(
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
            '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
            '',
        ])

        // exports

        /***/
    },

    /***/ './node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-4b49c178","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/views/Invitation.vue': /***/ function(
        module,
        exports,
        __webpack_require__,
    ) {
        var render = function() {
            var _vm = this
            var _h = _vm.$createElement
            var _c = _vm._self._c || _h
            return _c('div', [
                _c('div', { staticClass: 'py-2 text-center' }, [
                    _c('h2', [
                        _vm._v('Convite ' + _vm._s(_vm.invitation.code)),
                    ]),
                    _vm._v(' '),
                    _c('h3', [
                        _vm._v(
                            _vm._s(
                                _vm.invitation.person_institution.person.name,
                            ),
                        ),
                    ]),
                ]),
                _vm._v(' '),
                _c('div', { staticClass: 'row justify-content-center' }, [
                    _c(
                        'div',
                        { staticClass: 'col-8' },
                        [
                            _c(
                                'app-table-panel',
                                {
                                    attrs: {
                                        title:
                                            'Notificações (' +
                                            _vm.invitation.notifications
                                                .length +
                                            ')',
                                    },
                                },
                                [
                                    _c(
                                        'app-table',
                                        {
                                            attrs: {
                                                columns: [
                                                    '#',
                                                    'Tipo',
                                                    'Recebido',
                                                    'Assunto',
                                                    'Destino',
                                                    'Criado em',
                                                    'Enviado em',
                                                ],
                                            },
                                        },
                                        _vm._l(
                                            _vm.invitation.notifications,
                                            function(notification) {
                                                return _c('tr', [
                                                    _c(
                                                        'td',
                                                        {
                                                            staticClass:
                                                                'align-middle',
                                                        },
                                                        [
                                                            _vm._v(
                                                                _vm._s(
                                                                    notification.id,
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
                                                            notification.content_type ===
                                                            'invitation'
                                                                ? _c(
                                                                      'span',
                                                                      {
                                                                          staticClass:
                                                                              'badge badge-primary p-2',
                                                                      },
                                                                      [
                                                                          _vm._v(
                                                                              '\n                                CONVITE\n                            ',
                                                                          ),
                                                                      ],
                                                                  )
                                                                : _vm._e(),
                                                            _vm._v(' '),
                                                            notification.content_type ===
                                                            'credentials'
                                                                ? _c(
                                                                      'span',
                                                                      {
                                                                          staticClass:
                                                                              'badge badge-info p-2',
                                                                      },
                                                                      [
                                                                          _vm._v(
                                                                              '\n                                CREDENCIAIS\n                            ',
                                                                          ),
                                                                      ],
                                                                  )
                                                                : _vm._e(),
                                                            _vm._v(' '),
                                                            notification.content_type ===
                                                            'rejection'
                                                                ? _c(
                                                                      'span',
                                                                      {
                                                                          staticClass:
                                                                              'badge badge-warning p-2',
                                                                      },
                                                                      [
                                                                          _vm._v(
                                                                              '\n                                DECLINAÇÃO\n                            ',
                                                                          ),
                                                                      ],
                                                                  )
                                                                : _vm._e(),
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
                                                            _c(
                                                                'h6',
                                                                {
                                                                    staticClass:
                                                                        'mb-0',
                                                                },
                                                                [
                                                                    notification.received_at
                                                                        ? _c(
                                                                              'span',
                                                                              {
                                                                                  staticClass:
                                                                                      'badge badge-success',
                                                                              },
                                                                              [
                                                                                  _vm._v(
                                                                                      'recebido',
                                                                                  ),
                                                                              ],
                                                                          )
                                                                        : _c(
                                                                              'span',
                                                                              {
                                                                                  staticClass:
                                                                                      'badge badge-danger',
                                                                              },
                                                                              [
                                                                                  _vm._v(
                                                                                      'não recebido',
                                                                                  ),
                                                                              ],
                                                                          ),
                                                                ],
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
                                                                    notification.subject,
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
                                                                    notification.destination,
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
                                                                    notification.created_at,
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
                                                                    notification.sent_at,
                                                                ),
                                                            ),
                                                        ],
                                                    ),
                                                ])
                                            },
                                        ),
                                    ),
                                ],
                                1,
                            ),
                            _vm._v(' '),
                            _c(
                                'router-link',
                                {
                                    staticClass: 'btn btn-success',
                                    attrs: { to: '/events', tag: 'button' },
                                },
                                [
                                    _vm._v(
                                        '\n                voltar\n            ',
                                    ),
                                ],
                            ),
                        ],
                        1,
                    ),
                ]),
            ])
        }
        var staticRenderFns = []
        render._withStripped = true
        module.exports = { render: render, staticRenderFns: staticRenderFns }
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require('vue-hot-reload-api').rerender(
                    'data-v-4b49c178',
                    module.exports,
                )
            }
        }

        /***/
    },

    /***/ './node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-4b49c178","scoped":false,"hasInlineConfig":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/Invitation.vue': /***/ function(
        module,
        exports,
        __webpack_require__,
    ) {
        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(
            './node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-4b49c178","scoped":false,"hasInlineConfig":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/Invitation.vue',
        )
        if (typeof content === 'string') content = [[module.i, content, '']]
        if (content.locals) module.exports = content.locals
        // add the styles to the DOM
        var update = __webpack_require__(
            './node_modules/vue-style-loader/lib/addStylesClient.js',
        )('2500cdc4', content, false, {})
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept(
                    '!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-4b49c178","scoped":false,"hasInlineConfig":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Invitation.vue',
                    function() {
                        var newContent = require('!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-4b49c178","scoped":false,"hasInlineConfig":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Invitation.vue')
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

    /***/ './resources/js/views/Invitation.vue': /***/ function(
        module,
        exports,
        __webpack_require__,
    ) {
        var disposed = false
        function injectStyle(ssrContext) {
            if (disposed) return
            __webpack_require__(
                './node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-4b49c178","scoped":false,"hasInlineConfig":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/Invitation.vue',
            )
        }
        var normalizeComponent = __webpack_require__(
            './node_modules/vue-loader/lib/component-normalizer.js',
        )
        /* script */
        var __vue_script__ = __webpack_require__(
            './node_modules/babel-loader/lib/index.js?{"cacheDirectory":true,"presets":[["env",{"modules":false,"targets":{"browsers":["> 2%"],"uglify":true}}]],"plugins":["transform-object-rest-spread",["transform-runtime",{"polyfill":false,"helpers":false}],"syntax-dynamic-import"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/views/Invitation.vue',
        )
        /* template */
        var __vue_template__ = __webpack_require__(
            './node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-4b49c178","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/views/Invitation.vue',
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
        Component.options.__file = 'resources/js/views/Invitation.vue'

        /* hot reload */
        if (false) {
            ;(function() {
                var hotAPI = require('vue-hot-reload-api')
                hotAPI.install(require('vue'), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord('data-v-4b49c178', Component.options)
                } else {
                    hotAPI.reload('data-v-4b49c178', Component.options)
                }
                module.hot.dispose(function(data) {
                    disposed = true
                })
            })()
        }

        module.exports = Component.exports

        /***/
    },

    /***/ './resources/js/views/mixins/categories.js': /***/ function(
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
                    'categories',
                    ['clearForm'],
                ),
            ),

            computed: _extends(
                {},
                Object(__WEBPACK_IMPORTED_MODULE_0_vuex__['mapState'])({
                    categories: function categories(state) {
                        return state.categories
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
})
