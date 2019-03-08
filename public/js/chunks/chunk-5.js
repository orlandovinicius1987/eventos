(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ContactsForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ContactsForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/crud */ "./resources/js/views/mixins/crud.js");
/* harmony import */ var _mixins_contacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/contacts */ "./resources/js/views/mixins/contacts.js");
/* harmony import */ var _mixins_advisorContacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/advisorContacts */ "./resources/js/views/mixins/advisorContacts.js");
/* harmony import */ var _mixins_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/permissions */ "./resources/js/views/mixins/permissions.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'contacts',
  uri: 'people/{people.selected.id}/person-institutions/{personInstitutions.selected.id}/contacts',
  isForm: true
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['mode', 'source'],
  mixins: [_mixins_crud__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_contacts__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_permissions__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data: function data() {
    this.$store.dispatch('environment/loadContactTypes');
    return {
      service: service
    };
  },
  methods: {
    fillAdditionalFormFields: function fillAdditionalFormFields() {
      this.$store.commit('contacts/mutateSetFormField', {
        field: 'person_institution_id',
        value: this.contacts.personInstitution.id
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ContactsForm.vue?vue&type=template&id=4889b4d6&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ContactsForm.vue?vue&type=template&id=4889b4d6& ***!
  \**********************************************************************************************************************************************************************************************************/
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
        _vm._v(_vm._s(this.mode === "create" ? "Criar" : "Editar") + " Contato")
      ]),
      _vm._v(" "),
      _c("h2", [
        _vm._v(
          " " + _vm._s(_vm.form.fields.contact ? _vm.form.fields.contact : "")
        )
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
                _c("app-contact-field", {
                  attrs: {
                    contact: _vm.form.fields.contact,
                    form: _vm.form,
                    environment: _vm.environment
                  }
                }),
                _vm._v(" "),
                _c("app-input", {
                  attrs: {
                    name: "is_active",
                    label: "Ativo",
                    type: "checkbox",
                    required: true,
                    form: _vm.form,
                    dusk: "contact-active"
                  },
                  model: {
                    value: _vm.form.fields.is_active,
                    callback: function($$v) {
                      _vm.$set(_vm.form.fields, "is_active", $$v)
                    },
                    expression: "form.fields.is_active"
                  }
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
                      dusk: "record-contact-button",
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

/***/ "./resources/js/views/ContactsForm.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/ContactsForm.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactsForm_vue_vue_type_template_id_4889b4d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactsForm.vue?vue&type=template&id=4889b4d6& */ "./resources/js/views/ContactsForm.vue?vue&type=template&id=4889b4d6&");
/* harmony import */ var _ContactsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactsForm.vue?vue&type=script&lang=js& */ "./resources/js/views/ContactsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactsForm_vue_vue_type_template_id_4889b4d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactsForm_vue_vue_type_template_id_4889b4d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ContactsForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ContactsForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/ContactsForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ContactsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ContactsForm.vue?vue&type=template&id=4889b4d6&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/ContactsForm.vue?vue&type=template&id=4889b4d6& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsForm_vue_vue_type_template_id_4889b4d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactsForm.vue?vue&type=template&id=4889b4d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ContactsForm.vue?vue&type=template&id=4889b4d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsForm_vue_vue_type_template_id_4889b4d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsForm_vue_vue_type_template_id_4889b4d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/mixins/advisorContacts.js":
/*!******************************************************!*\
  !*** ./resources/js/views/mixins/advisorContacts.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('advisorContacts', ['clearForm'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    advisorContacts: function advisorContacts(state) {
      return state.advisorContacts;
    }
  }))
});

/***/ }),

/***/ "./resources/js/views/mixins/contacts.js":
/*!***********************************************!*\
  !*** ./resources/js/views/mixins/contacts.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('contacts', ['clearForm'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    contacts: function contacts(state) {
      return state.contacts;
    }
  }))
});

/***/ })

}]);