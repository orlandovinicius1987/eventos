(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonInstitutionsForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PersonInstitutionsForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/crud */ "./resources/js/views/mixins/crud.js");
/* harmony import */ var _mixins_personInstitutions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/personInstitutions */ "./resources/js/views/mixins/personInstitutions.js");
/* harmony import */ var _mixins_people__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/people */ "./resources/js/views/mixins/people.js");
/* harmony import */ var _mixins_advisors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/advisors */ "./resources/js/views/mixins/advisors.js");
/* harmony import */ var _mixins_roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixins/roles */ "./resources/js/views/mixins/roles.js");
/* harmony import */ var _mixins_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mixins/permissions */ "./resources/js/views/mixins/permissions.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'personInstitutions',
  uri: 'people/{people.selected.id}/person-institutions',
  isForm: true
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['mode', 'source'],
  mixins: [_mixins_crud__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_personInstitutions__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_people__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_advisors__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_roles__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_permissions__WEBPACK_IMPORTED_MODULE_5__["default"]],
  data: function data() {
    this.$store.dispatch('environment/loadRoles');
    this.$store.dispatch('environment/loadInstitutions');
    return {
      service: service
    };
  },
  methods: {
    fillAdditionalFormFields: function fillAdditionalFormFields() {
      if (this.mode === 'create') {
        this.$store.dispatch('personInstitutions/clearForm', {
          root: true
        });
      } else if (this.mode === 'update') {
        this.$store.commit('personInstitutions/mutateFormData', this.personInstitutions.selected);
      }

      this.$store.commit('personInstitutions/mutateSetFormField', {
        field: 'person_id',
        value: this.personInstitutions.person.id
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonInstitutionsForm.vue?vue&type=template&id=59bfb473&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PersonInstitutionsForm.vue?vue&type=template&id=59bfb473& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      _c("h2", [
        _vm._v(_vm._s(this.mode === "create" ? "Nova " : "Editar") + " Função")
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-8" }, [
        _c("form", [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 mb-3" },
              [
                _c("app-person-institution-field", {
                  attrs: { form: _vm.form, environment: _vm.environment }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 text-right mb-3" },
              [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: {
                      type: "submit",
                      dusk: "gravar-funções-pessoas",
                      disabled: _vm.cannot("people:modify")
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.saveModel()
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                            gravar\n                        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-success",
                    attrs: { to: "/people/", tag: "button" }
                  },
                  [
                    _vm._v(
                      "\n                            cancelar\n                        "
                    )
                  ]
                )
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/PersonInstitutionsForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/PersonInstitutionsForm.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PersonInstitutionsForm_vue_vue_type_template_id_59bfb473___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonInstitutionsForm.vue?vue&type=template&id=59bfb473& */ "./resources/js/views/PersonInstitutionsForm.vue?vue&type=template&id=59bfb473&");
/* harmony import */ var _PersonInstitutionsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonInstitutionsForm.vue?vue&type=script&lang=js& */ "./resources/js/views/PersonInstitutionsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PersonInstitutionsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PersonInstitutionsForm_vue_vue_type_template_id_59bfb473___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PersonInstitutionsForm_vue_vue_type_template_id_59bfb473___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/PersonInstitutionsForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/PersonInstitutionsForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/PersonInstitutionsForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PersonInstitutionsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonInstitutionsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/PersonInstitutionsForm.vue?vue&type=template&id=59bfb473&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/PersonInstitutionsForm.vue?vue&type=template&id=59bfb473& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsForm_vue_vue_type_template_id_59bfb473___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PersonInstitutionsForm.vue?vue&type=template&id=59bfb473& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonInstitutionsForm.vue?vue&type=template&id=59bfb473&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsForm_vue_vue_type_template_id_59bfb473___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsForm_vue_vue_type_template_id_59bfb473___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/mixins/advisors.js":
/*!***********************************************!*\
  !*** ./resources/js/views/mixins/advisors.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('advisors', ['clearForm'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    advisors: function advisors(state) {
      return state.advisors;
    }
  }))
});

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

/***/ "./resources/js/views/mixins/personInstitutions.js":
/*!*********************************************************!*\
  !*** ./resources/js/views/mixins/personInstitutions.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('personInstitutions', ['clearForm'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    personInstitutions: function personInstitutions(state) {
      return state.personInstitutions;
    }
  }))
});

/***/ }),

/***/ "./resources/js/views/mixins/roles.js":
/*!********************************************!*\
  !*** ./resources/js/views/mixins/roles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('roles', ['clearForm'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    roles: function roles(state) {
      return state.roles;
    }
  }))
});

/***/ })

}]);