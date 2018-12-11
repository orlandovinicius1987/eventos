webpackJsonp([6], {
    /***/ './node_modules/babel-loader/lib/index.js?{"cacheDirectory":true,"presets":[["env",{"modules":false,"targets":{"browsers":["> 2%"],"uglify":true}}]],"plugins":["transform-object-rest-spread",["transform-runtime",{"polyfill":false,"helpers":false}],"syntax-dynamic-import"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/views/PhoneBook.vue': /***/ function(
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
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_phoneBook__ = __webpack_require__(
            './resources/js/views/mixins/phoneBook.js',
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_people__ = __webpack_require__(
            './resources/js/views/mixins/people.js',
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(
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

        var service = { name: 'people', uri: 'people' }

        /* harmony default export */ __webpack_exports__['default'] = {
            mixins: [
                __WEBPACK_IMPORTED_MODULE_0__mixins_crud__['a' /* default */],
                __WEBPACK_IMPORTED_MODULE_2__mixins_people__['a' /* default */],
                __WEBPACK_IMPORTED_MODULE_1__mixins_phoneBook__[
                    'a' /* default */
                ],
            ],

            data: function data() {
                this.$store.dispatch('environment/loadRoles')
                this.$store.dispatch('environment/loadInstitutions')
                return {
                    service: service,
                }
            },

            methods: _extends(
                {},
                Object(__WEBPACK_IMPORTED_MODULE_3_vuex__['mapActions'])(
                    service.name,
                    ['selectPerson'],
                ),
                {
                    selectPerson: function selectPerson(payload) {
                        this.$store.dispatch('people/select', payload, {
                            root: true,
                        })

                        this.$store.dispatch('phoneBook/setPerson', payload, {
                            root: true,
                        })
                    },
                },
            ),
        }

        /***/
    },

    /***/ './node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-147c83e8","scoped":false,"hasInlineConfig":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/PhoneBook.vue': /***/ function(
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
            '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
            '',
        ])

        // exports

        /***/
    },

    /***/ './node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-147c83e8","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/views/PhoneBook.vue': /***/ function(
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
                    _vm._m(0),
                    _vm._v(' '),
                    _vm.selected.id && _vm.personInstitutions.data.links
                        ? _c(
                              'div',
                              { staticClass: 'row bg-primary text-white' },
                              [
                                  _c('div', { staticClass: 'col-12 mt-2' }, [
                                      _c(
                                          'div',
                                          {
                                              staticClass:
                                                  'row justify-content-center align-items-center',
                                          },
                                          [
                                              _c(
                                                  'div',
                                                  { staticClass: 'col-8' },
                                                  [
                                                      _c(
                                                          'h1',
                                                          {
                                                              staticClass:
                                                                  'display-4 mb-0',
                                                          },
                                                          [
                                                              _vm._v(
                                                                  _vm._s(
                                                                      _vm
                                                                          .selected
                                                                          .name,
                                                                  ),
                                                              ),
                                                          ],
                                                      ),
                                                  ],
                                              ),
                                              _vm._v(' '),
                                              _c(
                                                  'div',
                                                  { staticClass: 'col-4' },
                                                  [
                                                      _c('img', {
                                                          staticClass:
                                                              'img-thumbnail rounded mx-auto d-block mb-2',
                                                          attrs: {
                                                              src: _vm.makePhotoUrl(
                                                                  _vm.selected
                                                                      .photoUrl,
                                                              ),
                                                              width: '200',
                                                              height: '200',
                                                          },
                                                      }),
                                                  ],
                                              ),
                                          ],
                                      ),
                                  ]),
                              ],
                          )
                        : _vm._e(),
                ]),
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
                                            'Pessoas (' +
                                            _vm.pagination.total +
                                            ')',
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
                                    _c('app-institution-filter-for-person', {
                                        attrs: {
                                            name: 'institution_id',
                                            label: 'Instituição',
                                            required: true,
                                            form: _vm.form,
                                            options:
                                                _vm.environment.tables
                                                    .institutions,
                                        },
                                    }),
                                    _vm._v(' '),
                                    _c('app-role-filter-for-person', {
                                        attrs: {
                                            name: 'role_id',
                                            label: 'Funções',
                                            required: true,
                                            form: _vm.form,
                                            options:
                                                _vm.environment.tables.roles,
                                        },
                                    }),
                                    _vm._v(' '),
                                    _c(
                                        'app-table',
                                        {
                                            attrs: {
                                                pagination:
                                                    _vm.people.data.links
                                                        .pagination,
                                                columns: [
                                                    '#',
                                                    'Tratamento',
                                                    'Nome',
                                                    'Nome público',
                                                ],
                                            },
                                            on: {
                                                'goto-page': function($event) {
                                                    _vm.gotoPage($event)
                                                },
                                            },
                                        },
                                        _vm._l(_vm.people.data.rows, function(
                                            person,
                                        ) {
                                            return _c(
                                                'tr',
                                                {
                                                    class: {
                                                        'cursor-pointer': true,
                                                        'bg-primary text-white': _vm.isCurrent(
                                                            person,
                                                            _vm.selected,
                                                        ),
                                                    },
                                                    on: {
                                                        click: function(
                                                            $event,
                                                        ) {
                                                            _vm.selectPerson(
                                                                person,
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
                                                                    person.id,
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
                                                                    person.title,
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
                                                                    person.name,
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
                                                                    person.nickname,
                                                                ),
                                                            ),
                                                        ],
                                                    ),
                                                ],
                                            )
                                        }),
                                    ),
                                ],
                                1,
                            ),
                        ],
                        1,
                    ),
                    _vm._v(' '),
                    _c(
                        'div',
                        { staticClass: 'col-8' },
                        [
                            _vm.phoneBook.data &&
                            _vm.phoneBook.data.rows &&
                            _vm.phoneBook.data.rows.length > 0
                                ? _c(
                                      'app-table-panel',
                                      {
                                          attrs: {
                                              title:
                                                  'Contatos (' +
                                                  _vm.phoneBook.data.rows
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
                                                          'Pertence a',
                                                          'Função',
                                                          'Instituição',
                                                          'Tipo',
                                                          'Contato',
                                                      ],
                                                  },
                                              },
                                              _vm._l(
                                                  _vm.phoneBook.data.rows,
                                                  function(person) {
                                                      return _c(
                                                          'tr',
                                                          {
                                                              on: {
                                                                  click: function(
                                                                      $event,
                                                                  ) {
                                                                      _vm.selectPerson(
                                                                          person,
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
                                                                              person.from,
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
                                                                              person.role,
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
                                                                              person.institution,
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
                                                                              person.type,
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
                                                                              person.contact,
                                                                          ),
                                                                      ),
                                                                  ],
                                                              ),
                                                          ],
                                                      )
                                                  },
                                              ),
                                          ),
                                      ],
                                      1,
                                  )
                                : _vm._e(),
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
                return _c('div', { staticClass: 'row' }, [
                    _c('div', { staticClass: 'col-12' }, [
                        _c('h2', [_vm._v('Lista Telefônica e Contatos')]),
                    ]),
                ])
            },
        ]
        render._withStripped = true
        module.exports = { render: render, staticRenderFns: staticRenderFns }
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require('vue-hot-reload-api').rerender(
                    'data-v-147c83e8',
                    module.exports,
                )
            }
        }

        /***/
    },

    /***/ './node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-147c83e8","scoped":false,"hasInlineConfig":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/PhoneBook.vue': /***/ function(
        module,
        exports,
        __webpack_require__,
    ) {
        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(
            './node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-147c83e8","scoped":false,"hasInlineConfig":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/PhoneBook.vue',
        )
        if (typeof content === 'string') content = [[module.i, content, '']]
        if (content.locals) module.exports = content.locals
        // add the styles to the DOM
        var update = __webpack_require__(
            './node_modules/vue-style-loader/lib/addStylesClient.js',
        )('24c4ff4b', content, false, {})
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept(
                    '!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-147c83e8","scoped":false,"hasInlineConfig":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PhoneBook.vue',
                    function() {
                        var newContent = require('!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-147c83e8","scoped":false,"hasInlineConfig":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PhoneBook.vue')
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

    /***/ './resources/js/views/PhoneBook.vue': /***/ function(
        module,
        exports,
        __webpack_require__,
    ) {
        var disposed = false
        function injectStyle(ssrContext) {
            if (disposed) return
            __webpack_require__(
                './node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-147c83e8","scoped":false,"hasInlineConfig":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/PhoneBook.vue',
            )
        }
        var normalizeComponent = __webpack_require__(
            './node_modules/vue-loader/lib/component-normalizer.js',
        )
        /* script */
        var __vue_script__ = __webpack_require__(
            './node_modules/babel-loader/lib/index.js?{"cacheDirectory":true,"presets":[["env",{"modules":false,"targets":{"browsers":["> 2%"],"uglify":true}}]],"plugins":["transform-object-rest-spread",["transform-runtime",{"polyfill":false,"helpers":false}],"syntax-dynamic-import"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/views/PhoneBook.vue',
        )
        /* template */
        var __vue_template__ = __webpack_require__(
            './node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-147c83e8","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/views/PhoneBook.vue',
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
        Component.options.__file = 'resources/js/views/PhoneBook.vue'

        /* hot reload */
        if (false) {
            ;(function() {
                var hotAPI = require('vue-hot-reload-api')
                hotAPI.install(require('vue'), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord('data-v-147c83e8', Component.options)
                } else {
                    hotAPI.reload('data-v-147c83e8', Component.options)
                }
                module.hot.dispose(function(data) {
                    disposed = true
                })
            })()
        }

        module.exports = Component.exports

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

    /***/ './resources/js/views/mixins/people.js': /***/ function(
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
            data: function data() {
                return {
                    people_current: {
                        id: 'null',
                    },
                }
            },

            methods: _extends(
                {},
                Object(__WEBPACK_IMPORTED_MODULE_0_vuex__['mapActions'])(
                    'people',
                    ['clearForm'],
                ),
                {
                    makePhotoUrl: function makePhotoUrl() {
                        var photoUrl =
                            arguments.length > 0 && arguments[0] !== undefined
                                ? arguments[0]
                                : null

                        if (!photoUrl) {
                            photoUrl = this.people.form.fields.photoUrl
                        }

                        if (!photoUrl) {
                            photoUrl = this.people.selected.photoUrl
                        }

                        var otherPeopleSelected =
                            this.people_current.id != this.people.selected.id
                        this.people_current.id = this.people.selected.id

                        return flush_image_cache(photoUrl, otherPeopleSelected)
                    },
                },
            ),

            computed: _extends(
                {},
                Object(__WEBPACK_IMPORTED_MODULE_0_vuex__['mapState'])({
                    people: function people(state) {
                        return state.people
                    },

                    personInstitutions: function personInstitutions(state) {
                        return state.personInstitutions
                    },

                    contacts: function contacts(state) {
                        return state.contacts
                    },

                    addresses: function addresses(state) {
                        return state.addresses
                    },

                    personCategories: function personCategories(state) {
                        return state.personCategories
                    },

                    advisors: function advisors(state) {
                        return state.advisors
                    },

                    advisorContacts: function advisorContacts(state) {
                        return state.advisorContacts
                    },
                }),
            ),
        }

        /***/
    },

    /***/ './resources/js/views/mixins/phoneBook.js': /***/ function(
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
                    'institutions',
                    ['clearForm'],
                ),
            ),

            computed: _extends(
                {},
                Object(__WEBPACK_IMPORTED_MODULE_0_vuex__['mapState'])({
                    phoneBook: function phoneBook(state) {
                        return state.phoneBook
                    },
                }),
            ),
        }

        /***/
    },
})
