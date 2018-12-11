webpackJsonp([36],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/views/People.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_crud__ = __webpack_require__("./resources/js/views/mixins/crud.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_people__ = __webpack_require__("./resources/js/views/mixins/people.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_permissions__ = __webpack_require__("./resources/js/views/mixins/permissions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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






var service = { name: 'people', uri: 'people' };

/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_crud__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_people__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_permissions__["a" /* default */]],

    data: function data() {
        return {
            service: service
        };
    },


    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["mapActions"])(service.name, ['selectPerson', 'selectPersonInstitution', 'selectAddress', 'selectContact', 'selectAdvisor', 'selectAdvisorContacts']), {
        peopleGotoPage: function peopleGotoPage(page) {
            this.gotoPage(page, 'people', this.people.data.links.pagination);
        },
        personInstitutionsGotoPage: function personInstitutionsGotoPage(page) {
            this.gotoPage(page, 'personInstitutions', this.personInstitutions.data.links.pagination);
        },
        addressesGotoPage: function addressesGotoPage(page) {
            this.gotoPage(page, 'addresses', this.addresses.data.links.pagination);
        },
        contactsGotoPage: function contactsGotoPage(page) {
            this.gotoPage(page, 'contacts', this.contacts.data.links.pagination);
        },
        advisorContactsGotoPage: function advisorContactsGotoPage(page) {
            this.gotoPage(page, 'advisorContacts', this.contacts.data.links.pagination);
        },
        personCategoriesGotoPage: function personCategoriesGotoPage(page) {
            this.gotoPage(page, 'personCategories', this.personCategories.data.links.pagination);
        },
        advisorsGotoPage: function advisorsGotoPage(page) {
            this.gotoPage(page, 'advisors', this.advisors.data.links.pagination);
        },
        confirmDeletePersonCategory: function confirmDeletePersonCategory(personCategory) {
            var _this = this;

            confirm('Deseja realmente desassociar ' + personCategory.name + '?', this).then(function (value) {
                if (value) {
                    _this.deletePersonCategory(personCategory);
                }
            });
        },
        deletePersonCategory: function deletePersonCategory(personCategory) {
            return this.$store.dispatch('personCategories/unCategorize', personCategory);
        }
    }),

    computed: {
        peopleFilterText: {
            get: function get() {
                return this.$store.state['people'].data.filter.text;
            },
            set: function set(filter) {
                return this.$store.dispatch(this.service.name + '/mutateSetQueryFilterText', filter);
            }
        },

        peoplePerPage: {
            get: function get() {
                return this.$store.state['people'].data.links.pagination.per_page;
            },
            set: function set(perPage) {
                return this.$store.dispatch('people/setPerPage', perPage);
            }
        },

        personInstitutionsFilterText: {
            get: function get() {
                return this.$store.state['personInstitutions'].data.filter.text;
            },
            set: function set(filter) {
                return this.$store.dispatch('personInstitutions/mutateSetQueryFilterText', filter);
            }
        },

        personInstitutionsPerPage: {
            get: function get() {
                return this.$store.state['personInstitutions'].data.links.pagination.per_page;
            },
            set: function set(perPage) {
                return this.$store.dispatch('personInstitutions/setPerPage', perPage);
            }
        },

        addressesFilterText: {
            get: function get() {
                return this.$store.state['addresses'].data.filter.text;
            },
            set: function set(filter) {
                return this.$store.dispatch('addresses/mutateSetQueryFilterText', filter);
            }
        },

        addressesPerPage: {
            get: function get() {
                return this.$store.state['addresses'].data.links.pagination.per_page;
            },
            set: function set(perPage) {
                return this.$store.dispatch('addresses/setPerPage', perPage);
            }
        },

        contactsFilterText: {
            get: function get() {
                return this.$store.state['contacts'].data.filter.text;
            },
            set: function set(filter) {
                return this.$store.dispatch('contacts/mutateSetQueryFilterText', filter);
            }
        },

        contactsPerPage: {
            get: function get() {
                return this.$store.state['contacts'].data.links.pagination.per_page;
            },
            set: function set(perPage) {
                return this.$store.dispatch('contacts/setPerPage', perPage);
            }
        },

        personCategoriesFilterText: {
            get: function get() {
                return this.$store.state['personCategories'].data.filter.text;
            },
            set: function set(filter) {
                return this.$store.dispatch('personCategories/mutateSetQueryFilterText', filter);
            }
        },

        personCategoriesPerPage: {
            get: function get() {
                return this.$store.state['personCategories'].data.links.pagination.per_page;
            },
            set: function set(perPage) {
                return this.$store.dispatch('personCategories/setPerPage', perPage);
            }
        },
        advisorsFilterText: {
            get: function get() {
                return this.$store.state['advisors'].data.filter.text;
            },
            set: function set(filter) {
                return this.$store.dispatch('advisors/mutateSetQueryFilterText', filter);
            }
        },

        advisorsPerPage: {
            get: function get() {
                return this.$store.state['advisors'].data.links.pagination.per_page;
            },
            set: function set(perPage) {
                return this.$store.dispatch('advisors/setPerPage', perPage);
            }
        },
        advisorContactsFilterText: {
            get: function get() {
                return this.$store.state['advisorContacts'].data.filter.text;
            },
            set: function set(filter) {
                return this.$store.dispatch('advisorContacts/mutateSetQueryFilterText', filter);
            }
        },

        advisorContactsPerPage: {
            get: function get() {
                return this.$store.state['advisorContacts'].data.links.pagination.per_page;
            },
            set: function set(perPage) {
                return this.$store.dispatch('advisorContacts/setPerPage', perPage);
            }
        },

        hasNoPhotoCheckbox: {
            get: function get() {
                return this.$store.state['people'].data.filter.checkboxes.hasNoPhoto;
            },
            set: function set(filter) {
                this.$store.dispatch('people/mutateFilterCheckbox', { field: 'hasNoPhoto', value: filter });
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02fd0cee\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/People.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02fd0cee\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/views/People.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "py-2 text-center" }, [
      _vm._m(0),
      _vm._v(" "),
      _vm.selected.id && _vm.personInstitutions.data.links
        ? _c("div", { staticClass: "row bg-primary text-white" }, [
            _c("div", { staticClass: "col-12 mt-2" }, [
              _c(
                "div",
                {
                  staticClass: "row justify-content-center align-items-center"
                },
                [
                  _c("div", { staticClass: "col-8" }, [
                    _c("h1", { staticClass: "display-4 mb-0" }, [
                      _vm._v(_vm._s(_vm.selected.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4" }, [
                    _c("img", {
                      staticClass: "img-thumbnail rounded mx-auto d-block mb-2",
                      attrs: {
                        src: _vm.makePhotoUrl(_vm.selected.photoUrl),
                        width: "200",
                        height: "200"
                      }
                    })
                  ])
                ]
              )
            ])
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-4" },
        [
          _vm.people.data.links
            ? _c(
                "app-table-panel",
                {
                  attrs: {
                    title: "Pessoas (" + _vm.pagination.total + ")",
                    "add-button": {
                      uri: "/people/create",
                      disabled: _vm.cannot("create")
                    },
                    "per-page": _vm.peoplePerPage,
                    "filter-text": _vm.peopleFilterText
                  },
                  on: {
                    "set-per-page": function($event) {
                      _vm.peoplePerPage = $event
                    },
                    "input-filter-text": function($event) {
                      _vm.peopleFilterText = $event.target.value
                    }
                  }
                },
                [
                  _c(
                    "template",
                    { slot: "selects" },
                    [
                      _c("app-institution-filter-for-person", {
                        attrs: {
                          name: "institution_id",
                          label: "Instituição",
                          required: true,
                          form: _vm.form,
                          options: _vm.environment.tables.institutions
                        }
                      }),
                      _vm._v(" "),
                      _c("app-role-filter-for-person", {
                        attrs: {
                          name: "role_id",
                          label: "Função",
                          required: true,
                          form: _vm.form,
                          options: _vm.environment.tables.roles
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "checkboxes" },
                    [
                      _c("app-input", {
                        attrs: {
                          name: "hasNoPhotoCheckbox",
                          label: "sem foto",
                          type: "checkbox",
                          required: true,
                          form: _vm.form,
                          inline: "true"
                        },
                        model: {
                          value: _vm.hasNoPhotoCheckbox,
                          callback: function($$v) {
                            _vm.hasNoPhotoCheckbox = $$v
                          },
                          expression: "hasNoPhotoCheckbox"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "app-table",
                    {
                      attrs: {
                        pagination: _vm.people.data.links.pagination,
                        columns: ["#", "Tratamento", "Nome", "Nome público", ""]
                      },
                      on: {
                        "goto-page": function($event) {
                          _vm.peopleGotoPage($event)
                        }
                      }
                    },
                    _vm._l(_vm.people.data.rows, function(person) {
                      return _c(
                        "tr",
                        {
                          class: {
                            "cursor-pointer": true,
                            "bg-primary text-white": _vm.isCurrent(
                              person,
                              _vm.selected
                            )
                          },
                          on: {
                            click: function($event) {
                              _vm.selectPerson(person)
                            }
                          }
                        },
                        [
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(person.id))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(person.title))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(person.name))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(person.nickname))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "align-middle text-right" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "btn btn-danger btn-sm ml-1 pull-right",
                                  attrs: {
                                    to: "/people/" + person.id + "/update",
                                    tag: "button",
                                    disabled: _vm.cannot("update"),
                                    title: "Editar Pessoa"
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-edit" })]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    })
                  )
                ],
                2
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-8" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _vm.selected.id && _vm.personCategories.data.links
                ? _c(
                    "app-table-panel",
                    {
                      attrs: {
                        title:
                          "Categorias: " +
                          _vm.personCategories.data.links.pagination.total,
                        "add-button": {
                          uri:
                            "/people/" +
                            _vm.people.selected.id +
                            "/categories/create",
                          disabled: _vm.cannot("create")
                        },
                        "per-page": _vm.personCategoriesPerPage,
                        "filter-text": _vm.personCategoriesFilterText
                      },
                      on: {
                        "set-per-page": function($event) {
                          _vm.personCategoriesPerPage = $event
                        },
                        "input-filter-text": function($event) {
                          _vm.personCategoriesFilterText = $event.target.value
                        }
                      }
                    },
                    [
                      _c(
                        "app-table",
                        {
                          attrs: {
                            pagination:
                              _vm.personCategories.data.links.pagination,
                            columns: ["#", "Nome", ""]
                          },
                          on: {
                            "goto-page": function($event) {
                              _vm.personCategoriesGotoPage($event)
                            }
                          }
                        },
                        _vm._l(_vm.personCategories.data.rows, function(
                          personCategory
                        ) {
                          return _c(
                            "tr",
                            {
                              staticClass: "cursor-pointer",
                              class: {
                                "cursor-pointer": true,
                                "bg-primary text-white": _vm.isCurrent(
                                  personCategory,
                                  _vm.personCategories.selected
                                )
                              }
                            },
                            [
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(personCategory.id) +
                                    "\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(personCategory.name) +
                                    "\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "align-middle text-right" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "btn btn-danger btn-sm mr-1 pull-right",
                                      attrs: { title: "Excluir Categoria" },
                                      on: {
                                        click: function($event) {
                                          _vm.confirmDeletePersonCategory(
                                            personCategory
                                          )
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-trash" })]
                                  )
                                ]
                              )
                            ]
                          )
                        })
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _vm.selected.id && _vm.personInstitutions.data.links
                ? _c(
                    "app-table-panel",
                    {
                      attrs: {
                        title:
                          "Funções: " +
                          _vm.personInstitutions.data.links.pagination.total,
                        "add-button": {
                          uri:
                            "/people/" +
                            _vm.personInstitutions.person.id +
                            "/person-institutions/create",
                          disabled: _vm.cannot("create")
                        },
                        "per-page": _vm.personInstitutionsPerPage,
                        "filter-text": _vm.personInstitutionsFilterText
                      },
                      on: {
                        "set-per-page": function($event) {
                          _vm.personInstitutionsPerPage = $event
                        },
                        "input-filter-text": function($event) {
                          _vm.personInstitutionsFilterText = $event.target.value
                        }
                      }
                    },
                    [
                      _c(
                        "app-table",
                        {
                          attrs: {
                            pagination:
                              _vm.personInstitutions.data.links.pagination,
                            columns: [
                              "#",
                              "Tratamento",
                              "Instituição",
                              "Função",
                              "Status",
                              ""
                            ]
                          },
                          on: {
                            "goto-page": function($event) {
                              _vm.personInstitutionsGotoPage($event)
                            }
                          }
                        },
                        _vm._l(_vm.personInstitutions.data.rows, function(
                          personInstitution
                        ) {
                          return _c(
                            "tr",
                            {
                              staticClass: "cursor-pointer",
                              class: {
                                "cursor-pointer": true,
                                "bg-primary text-white": _vm.isCurrent(
                                  personInstitution,
                                  _vm.personInstitutions.selected
                                )
                              },
                              on: {
                                click: function($event) {
                                  _vm.selectPersonInstitution(personInstitution)
                                }
                              }
                            },
                            [
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(personInstitution.id) +
                                    "\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(personInstitution.title) +
                                    "\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(personInstitution.institution.name) +
                                    "\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(personInstitution.role.name) +
                                    "\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _c(
                                  "h6",
                                  { staticClass: "m-0" },
                                  [
                                    _c("app-active-badge", {
                                      attrs: {
                                        value: personInstitution.is_active,
                                        labels: ["ativo", "inativo"]
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              personInstitution.advised_id == null
                                ? _c(
                                    "td",
                                    { staticClass: "align-middle text-right" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "btn btn-danger btn-sm ml-1 pull-right",
                                          attrs: {
                                            to:
                                              "/people/" +
                                              _vm.personInstitutions.person.id +
                                              "/person-institutions/" +
                                              personInstitution.id +
                                              "/update",
                                            tag: "button",
                                            disabled: _vm.cannot("update"),
                                            title: "Editar Função"
                                          }
                                        },
                                        [_c("i", { staticClass: "fa fa-edit" })]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ]
                          )
                        })
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _vm.personInstitutions.selected.id && _vm.contacts.data.links
                ? _c(
                    "app-table-panel",
                    {
                      attrs: {
                        title:
                          "Contatos: " +
                          _vm.contacts.data.links.pagination.total,
                        "add-button": {
                          uri:
                            "/people/" +
                            _vm.personInstitutions.person.id +
                            "/person-institutions/" +
                            _vm.contacts.personInstitution.id +
                            "/contacts/create",
                          disabled: _vm.cannot("create")
                        },
                        "per-page": _vm.contactsPerPage,
                        "filter-text": _vm.contactsFilterText
                      },
                      on: {
                        "set-per-page": function($event) {
                          _vm.contactsPerPage = $event
                        },
                        "input-filter-text": function($event) {
                          _vm.contactsFilterText = $event.target.value
                        }
                      }
                    },
                    [
                      _c(
                        "app-table",
                        {
                          attrs: {
                            pagination: _vm.contacts.data.links.pagination,
                            columns: ["#", "Tipo", "Contato", "Status", ""]
                          },
                          on: {
                            "goto-page": function($event) {
                              _vm.contactsGotoPage($event)
                            }
                          }
                        },
                        _vm._l(_vm.contacts.data.rows, function(contact) {
                          return _c(
                            "tr",
                            {
                              staticClass: "cursor-pointer",
                              class: {
                                "cursor-pointer": true,
                                "bg-primary text-white": _vm.isCurrent(
                                  contact,
                                  _vm.contacts.selected
                                )
                              },
                              on: {
                                click: function($event) {
                                  _vm.selectContact(contact)
                                }
                              }
                            },
                            [
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(contact.id))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(contact.contact_type.name))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(contact.contact))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _c(
                                  "h6",
                                  { staticClass: "m-0" },
                                  [
                                    _c("app-active-badge", {
                                      attrs: {
                                        value: contact.is_active,
                                        labels: ["ativo", "inativo"]
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "align-middle text-right" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "btn btn-danger btn-sm ml-1 pull-right",
                                      attrs: {
                                        to:
                                          "/people/" +
                                          _vm.personInstitutions.person.id +
                                          "/person-institutions/" +
                                          _vm.contacts.personInstitution.id +
                                          "/contacts/" +
                                          contact.id +
                                          "/update",
                                        tag: "button",
                                        disabled: _vm.cannot("update"),
                                        title: "Editar Contato"
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-edit" })]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        })
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _vm.personInstitutions.selected.id && _vm.addresses.data.links
                ? _c(
                    "app-table-panel",
                    {
                      attrs: {
                        title:
                          "Endereços: " +
                          _vm.addresses.data.links.pagination.total,
                        "add-button": {
                          uri:
                            "/people/" +
                            _vm.personInstitutions.person.id +
                            "/person-institutions/" +
                            _vm.addresses.personInstitution.id +
                            "/addresses/create",
                          disabled: _vm.cannot("create")
                        },
                        "per-page": _vm.addressesPerPage,
                        "filter-text": _vm.addressesFilterText
                      },
                      on: {
                        "set-per-page": function($event) {
                          _vm.addressesPerPage = $event
                        },
                        "input-filter-text": function($event) {
                          _vm.addressesFilterText = $event.target.value
                        }
                      }
                    },
                    [
                      _c(
                        "app-table",
                        {
                          attrs: {
                            pagination: _vm.addresses.data.links.pagination,
                            columns: [
                              "#",
                              "Rua",
                              "Numero",
                              "Complemento",
                              "Bairro",
                              "Cidade",
                              ""
                            ],
                            rows: _vm.addresses.data.rows
                          },
                          on: {
                            "goto-page": function($event) {
                              _vm.addressesGotoPage($event)
                            }
                          }
                        },
                        _vm._l(_vm.addresses.data.rows, function(address) {
                          return _c(
                            "tr",
                            {
                              staticClass: "cursor-pointer",
                              class: {
                                "cursor-pointer": true,
                                "bg-primary text-white": _vm.isCurrent(
                                  address,
                                  _vm.addresses.selected
                                )
                              },
                              on: {
                                click: function($event) {
                                  _vm.selectAddress(address)
                                }
                              }
                            },
                            [
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(address.id))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(address.street))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(address.number))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(address.complement))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(address.neighbourhood))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(address.zipcode))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(address.city))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(address.state))
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "align-middle text-right" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "btn btn-danger btn-sm ml-1 pull-right",
                                      attrs: {
                                        to:
                                          "/people/" +
                                          _vm.personInstitutions.person.id +
                                          "/person-institutions/" +
                                          _vm.addresses.personInstitution.id +
                                          "/addresses/" +
                                          address.id +
                                          "/update",
                                        tag: "button",
                                        disabled: _vm.cannot("update"),
                                        title: "Editar Endereço"
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-edit" })]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        })
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _vm.personInstitutions.selected.id && _vm.advisors.data.links
                ? _c(
                    "app-table-panel",
                    {
                      attrs: {
                        title:
                          "Assessores: " +
                          _vm.advisors.data.links.pagination.total,
                        "add-button": {
                          uri:
                            "/people/" +
                            _vm.personInstitutions.person.id +
                            "/person-institutions/" +
                            _vm.advisors.personInstitution.id +
                            "/advisors/create",
                          disabled: _vm.cannot("create")
                        },
                        "per-page": _vm.advisorsPerPage,
                        "filter-text": _vm.advisorsFilterText
                      },
                      on: {
                        "set-per-page": function($event) {
                          _vm.advisorsPerPage = $event
                        },
                        "input-filter-text": function($event) {
                          _vm.advisorsFilterText = $event.target.value
                        }
                      }
                    },
                    [
                      _c(
                        "app-table",
                        {
                          attrs: {
                            pagination: _vm.advisors.data.links.pagination,
                            columns: [
                              "#",
                              "Tratamento",
                              "Nome",
                              "Nome Público",
                              ""
                            ]
                          },
                          on: {
                            "goto-page": function($event) {
                              _vm.advisorsGotoPage($event)
                            }
                          }
                        },
                        _vm._l(_vm.advisors.data.rows, function(advisor) {
                          return _c(
                            "tr",
                            {
                              staticClass: "cursor-pointer",
                              class: {
                                "cursor-pointer": true,
                                "bg-primary text-white": _vm.isCurrent(
                                  advisor,
                                  _vm.advisors.selected
                                )
                              },
                              on: {
                                click: function($event) {
                                  _vm.selectAdvisor(advisor)
                                }
                              }
                            },
                            [
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(advisor.id))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(advisor.person.title))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(advisor.person.name))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(advisor.person.nickname))
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "align-middle" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "btn btn-danger btn-sm ml-1 pull-right",
                                      attrs: {
                                        to:
                                          "/people/" +
                                          _vm.personInstitutions.person.id +
                                          "/person-institutions/" +
                                          _vm.advisors.personInstitution.id +
                                          "/advisors/" +
                                          advisor.id +
                                          "/update",
                                        tag: "button",
                                        disabled: _vm.cannot("update"),
                                        title: "Editar Assessor"
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-edit" })]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        })
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _vm.advisors.selected.id && _vm.advisorContacts.data.links
                ? _c(
                    "app-table-panel",
                    {
                      attrs: {
                        title:
                          "Contatos de " +
                          _vm.advisors.selected.person.name +
                          ": " +
                          _vm.advisorContacts.data.links.pagination.total,
                        "add-button": {
                          uri:
                            "/people/" +
                            _vm.advisors.person.id +
                            "/person-institutions/" +
                            _vm.personInstitutions.selected.id +
                            "/advisors/" +
                            _vm.advisorContacts.personInstitution.id +
                            "/contacts/create",
                          disabled: _vm.cannot("create")
                        },
                        "per-page": _vm.advisorContactsPerPage,
                        "filter-text": _vm.advisorContactsFilterText
                      },
                      on: {
                        "set-per-page": function($event) {
                          _vm.advisorContactsPerPage = $event
                        },
                        "input-filter-text": function($event) {
                          _vm.advisorContactsFilterText = $event.target.value
                        }
                      }
                    },
                    [
                      _c(
                        "app-table",
                        {
                          attrs: {
                            pagination:
                              _vm.advisorContacts.data.links.pagination,
                            columns: ["#", "Tipo", "Contato", ""]
                          },
                          on: {
                            "goto-page": function($event) {
                              _vm.advisorContactsGotoPage($event)
                            }
                          }
                        },
                        _vm._l(_vm.advisorContacts.data.rows, function(
                          advisorContact
                        ) {
                          return _c(
                            "tr",
                            {
                              staticClass: "cursor-pointer",
                              class: {
                                "cursor-pointer": true,
                                "bg-primary text-white": _vm.isCurrent(
                                  advisorContact,
                                  _vm.advisorContacts.selected
                                )
                              },
                              on: {
                                click: function($event) {
                                  _vm.selectAdvisorContacts(advisorContact)
                                }
                              }
                            },
                            [
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(advisorContact.id))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(advisorContact.contact_type.name) +
                                    "\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(advisorContact.contact))
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "align-middle text-right" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "btn btn-danger btn-sm ml-1 pull-right",
                                      attrs: {
                                        to:
                                          "/people/" +
                                          _vm.advisors.person.id +
                                          "/person-institutions/" +
                                          _vm.personInstitutions.selected.id +
                                          "/advisors/" +
                                          _vm.advisorContacts.personInstitution
                                            .id +
                                          "/contacts/" +
                                          advisorContact.id +
                                          "/update",
                                        tag: "button",
                                        disabled: _vm.cannot("update"),
                                        title: "Editar Contato do Assessor"
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-edit" })]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        })
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [_c("h2", [_vm._v("Pessoas")])])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-02fd0cee", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02fd0cee\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/People.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02fd0cee\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/People.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("8737124e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02fd0cee\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./People.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02fd0cee\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./People.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/js/views/People.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02fd0cee\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/People.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/views/People.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02fd0cee\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/views/People.vue")
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
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/People.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02fd0cee", Component.options)
  } else {
    hotAPI.reload("data-v-02fd0cee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/views/mixins/crud.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            loading: {
                environment: false,

                table: false
            }
        };
    },

    computed: {
        filterText: {
            get: function get() {
                return this.$store.state[this.service.name].data.filter.text;
            },
            set: function set(payload) {
                return this.$store.dispatch(this.service.name + '/mutateSetQueryFilterText', payload);
            }
        },

        emptyForm: function emptyForm() {
            return this.$store.state[this.service.name].emptyForm;
        },
        form: function form() {
            return this.$store.state[this.service.name].form;
        },
        selected: function selected() {
            return this.$store.state[this.service.name].selected;
        },
        environment: function environment() {
            return this.$store.state['environment'];
        },
        pagination: function pagination() {
            return this.$store.state[this.service.name].data.links ? this.$store.state[this.service.name].data.links.pagination : {};
        },


        perPage: {
            get: function get() {
                return this.pagination.per_page;
            },
            set: function set(value) {
                this.$store.dispatch(this.service.name + '/setPerPage', value);
            }
        }
    },

    methods: {
        load: function load() {
            this.$store.commit(this.service.name + '/mutateSetPerPage', this.environment.user.per_page);

            return this.$store.dispatch(this.service.name + '/load');
        },
        select: function select(model) {
            return this.$store.dispatch(this.service.name + '/select', model);
        },
        save: function save(mode) {
            return this.$store.dispatch(this.service.name + '/save', mode);
        },
        mutateSetErrors: function mutateSetErrors(errors) {
            this.$store.commit(this.service.name + '/mutateSetErrors', errors);
        },
        mutateFormData: function mutateFormData(data) {
            this.$store.commit(this.service.name + '/mutateFormData', data);
        },
        mutateSetFormField: function mutateSetFormField(data) {
            this.$store.commit(this.service.name + '/mutateSetFormField', data);
        },
        mutateSetService: function mutateSetService(data) {
            this.$store.commit(this.service.name + '/mutateSetService', data);
        },
        isLoading: function isLoading() {
            return this.loading.environment || this.loading.table;
        },
        boot: function boot() {
            var _this = this;

            this.mutateSetService(this.service);

            if (!this.service.hasOwnProperty('performLoad') || this.service.performLoad) {
                this.load().then(function () {
                    _this.fillFormWhenEditing();
                });
            } else {
                this.fillFormWhenEditing();
            }

            this.$store.dispatch(this.service.name + '/subscribeToTableEvents');
        },
        fillFormWhenEditing: function fillFormWhenEditing() {
            var _this2 = this;

            var model = this.mode === 'update' ? _.find(this.rows, function (model) {
                return model.id === _this2.$route.params.id;
            }) : this.form ? clone(this.emptyForm) : {};

            this.mutateFormData(model);

            this.mutateSetErrors({});

            this.fillAdditionalFormFields();
        },
        fillAdditionalFormFields: function fillAdditionalFormFields() {},
        back: function back() {
            this.$router.back();
        },
        saveModel: function saveModel() {
            var _this3 = this;

            this.save(this.mode).then(function () {
                _this3.back();

                _this3.clearForm();
            });
        },
        can: function can(permission) {
            return permission && false;
        },
        cannot: function cannot(permission) {
            return !can(permission);
        },
        gotoPage: function gotoPage(page) {
            var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var pagination = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            pagination = pagination ? pagination : this.pagination;

            if (pagination.current_page === page) {
                return;
            }

            if (page < 1) {
                return;
            }

            if (page > pagination.last_page) {
                return;
            }

            this.$store.dispatch((namespace ? namespace : this.service.name) + '/setCurrentPage', page);
        },
        isCurrent: function isCurrent(model, selected) {
            return model.id === selected.id;
        },
        setPerPage: function setPerPage() {
            this.$store.commit(this.service.name + '/mutateSetPerPage', this.environment.user.per_page);
        },
        getDataUrl: function getDataUrl() {
            return buildApiUrl(this.service.uri, this.$store.state);
        },
        getStoreUrl: function getStoreUrl() {
            return buildApiUrl(this.service.uri, this.$store.state);
        },
        getUpdateStoreUrl: function getUpdateStoreUrl() {
            return buildApiUrl(this.service.uri, this.$store.state);
        }
    },

    mounted: function mounted() {
        this.boot();
    }
});

/***/ }),

/***/ "./resources/js/views/mixins/people.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            people_current: {
                id: 'null'
            }
        };
    },

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('people', ['clearForm']), {
        makePhotoUrl: function makePhotoUrl() {
            var photoUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (!photoUrl) {
                photoUrl = this.people.form.fields.photoUrl;
            }

            if (!photoUrl) {
                photoUrl = this.people.selected.photoUrl;
            }

            var otherPeopleSelected = this.people_current.id != this.people.selected.id;
            this.people_current.id = this.people.selected.id;

            return flush_image_cache(photoUrl, otherPeopleSelected);
        }
    }),

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapState"])({
        people: function people(state) {
            return state.people;
        },

        personInstitutions: function personInstitutions(state) {
            return state.personInstitutions;
        },

        contacts: function contacts(state) {
            return state.contacts;
        },

        addresses: function addresses(state) {
            return state.addresses;
        },

        personCategories: function personCategories(state) {
            return state.personCategories;
        },

        advisors: function advisors(state) {
            return state.advisors;
        },

        advisorContacts: function advisorContacts(state) {
            return state.advisorContacts;
        }
    }))
});

/***/ }),

/***/ "./resources/js/views/mixins/permissions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        can: function can(permission) {
            return permission && true;
        },
        cannot: function cannot(permission) {
            return !this.can(permission);
        }
    }
});

/***/ })

});