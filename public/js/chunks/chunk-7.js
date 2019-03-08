(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PhoneBook.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PhoneBook.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/crud */ "./resources/js/views/mixins/crud.js");
/* harmony import */ var _mixins_phoneBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/phoneBook */ "./resources/js/views/mixins/phoneBook.js");
/* harmony import */ var _mixins_people__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/people */ "./resources/js/views/mixins/people.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'people',
  uri: 'people'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_crud__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_people__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_phoneBook__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    this.$store.dispatch('environment/loadRoles');
    this.$store.dispatch('environment/loadInstitutions');
    return {
      service: service
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])(service.name, ['selectPerson']), {
    selectPerson: function selectPerson(payload) {
      this.$store.dispatch('people/select', payload, {
        root: true
      });
      this.$store.dispatch('phoneBook/setPerson', payload, {
        root: true
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PhoneBook.vue?vue&type=template&id=147c83e8&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PhoneBook.vue?vue&type=template&id=147c83e8& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
        { staticClass: "col-12 col-lg-4" },
        [
          _c(
            "app-table-panel",
            {
              attrs: {
                title: "Pessoas (" + _vm.pagination.total + ")",
                "per-page": _vm.perPage,
                "filter-text": _vm.filterText
              },
              on: {
                "input-filter-text": function($event) {
                  _vm.filterText = $event.target.value
                },
                "set-per-page": function($event) {
                  _vm.perPage = $event
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
                      label: "Funções",
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
                "app-table",
                {
                  attrs: {
                    pagination: _vm.people.data.links.pagination,
                    columns: ["#", "Tratamento", "Nome", "Nome público"]
                  },
                  on: {
                    "goto-page": function($event) {
                      return _vm.gotoPage($event)
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
                          return _vm.selectPerson(person)
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
                      ])
                    ]
                  )
                }),
                0
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-8" },
        [
          _vm.phoneBook.data &&
          _vm.phoneBook.data.rows &&
          _vm.phoneBook.data.rows.length > 0
            ? _c(
                "app-table-panel",
                {
                  attrs: {
                    title: "Contatos (" + _vm.phoneBook.data.rows.length + ")"
                  }
                },
                [
                  _c(
                    "app-table",
                    {
                      attrs: {
                        columns: [
                          "Pertence a",
                          "Função",
                          "Instituição",
                          "Tipo",
                          "Contato"
                        ]
                      }
                    },
                    _vm._l(_vm.phoneBook.data.rows, function(person) {
                      return _c(
                        "tr",
                        {
                          on: {
                            click: function($event) {
                              return _vm.selectPerson(person)
                            }
                          }
                        },
                        [
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(person.from))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(person.role))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(person.institution) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(person.type))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(person.contact))
                          ])
                        ]
                      )
                    }),
                    0
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("h2", [_vm._v("Lista Telefônica e Contatos")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/PhoneBook.vue":
/*!******************************************!*\
  !*** ./resources/js/views/PhoneBook.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhoneBook_vue_vue_type_template_id_147c83e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneBook.vue?vue&type=template&id=147c83e8& */ "./resources/js/views/PhoneBook.vue?vue&type=template&id=147c83e8&");
/* harmony import */ var _PhoneBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhoneBook.vue?vue&type=script&lang=js& */ "./resources/js/views/PhoneBook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PhoneBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhoneBook_vue_vue_type_template_id_147c83e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhoneBook_vue_vue_type_template_id_147c83e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/PhoneBook.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/PhoneBook.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/PhoneBook.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PhoneBook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PhoneBook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/PhoneBook.vue?vue&type=template&id=147c83e8&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/PhoneBook.vue?vue&type=template&id=147c83e8& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneBook_vue_vue_type_template_id_147c83e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PhoneBook.vue?vue&type=template&id=147c83e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PhoneBook.vue?vue&type=template&id=147c83e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneBook_vue_vue_type_template_id_147c83e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneBook_vue_vue_type_template_id_147c83e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/mixins/people.js":
/*!*********************************************!*\
  !*** ./resources/js/views/mixins/people.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      people_current: {
        id: 'null'
      }
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('people', ['clearForm']), {
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
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
    personTopics: function personTopics(state) {
      return state.personTopics;
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

/***/ "./resources/js/views/mixins/phoneBook.js":
/*!************************************************!*\
  !*** ./resources/js/views/mixins/phoneBook.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('institutions', ['clearForm'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    phoneBook: function phoneBook(state) {
      return state.phoneBook;
    }
  }))
});

/***/ })

}]);