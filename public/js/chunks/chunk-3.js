(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdvisorsForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AdvisorsForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/crud */ "./resources/js/views/mixins/crud.js");
/* harmony import */ var _mixins_people__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/people */ "./resources/js/views/mixins/people.js");
/* harmony import */ var _mixins_advisors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/advisors */ "./resources/js/views/mixins/advisors.js");
/* harmony import */ var _mixins_roles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/roles */ "./resources/js/views/mixins/roles.js");
/* harmony import */ var _mixins_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixins/permissions */ "./resources/js/views/mixins/permissions.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'advisors',
  uri: 'people/{people.selected.id}/person-institutions/{personInstitutions.selected.id}/advisors',
  isForm: true
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['mode', 'source'],
  mixins: [_mixins_crud__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_people__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_advisors__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_roles__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_permissions__WEBPACK_IMPORTED_MODULE_4__["default"]],
  data: function data() {
    this.$store.dispatch('environment/loadRoles');
    this.$store.dispatch('environment/loadInstitutions');
    this.$store.dispatch('environment/loadPeople');
    return {
      service: service
    };
  },
  methods: {
    fillAdditionalFormFields: function fillAdditionalFormFields() {
      if (this.mode === 'create') {
        this.$store.dispatch('advisors/clearForm', {
          root: true
        });
      } else if (this.mode === 'update') {
        this.$store.commit('advisors/mutateFormData', this.advisors.selected);
      }

      this.$store.commit('advisors/mutateSetFormField', {
        field: 'advised_id',
        value: this.personInstitutions.selected.id
      });
    },
    exceptAdvisorList: function exceptAdvisorList(list, advisorId) {
      var items = clone(list);
      items.rows = except(list.rows, advisorId);
      return items;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdvisorsForm.vue?vue&type=template&id=14e88d36&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AdvisorsForm.vue?vue&type=template&id=14e88d36& ***!
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
        _vm._v(
          _vm._s(this.mode === "create" ? "Criar" : "Editar") + " Assessor"
        )
      ]),
      _vm._v(" "),
      _c("h2", [
        _vm._v(" " + _vm._s(_vm.form.fields.name ? _vm.form.fields.name : ""))
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
                _c("app-select", {
                  attrs: {
                    name: "advised_id",
                    label: "Assessor",
                    required: true,
                    form: _vm.form,
                    options: _vm.exceptAdvisorList(
                      _vm.environment.tables.people,
                      _vm.people.selected.id
                    )
                  },
                  model: {
                    value: _vm.form.fields.person_id,
                    callback: function($$v) {
                      _vm.$set(_vm.form.fields, "person_id", $$v)
                    },
                    expression: "form.fields.person_id"
                  }
                }),
                _vm._v(" "),
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

/***/ "./resources/js/views/AdvisorsForm.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/AdvisorsForm.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdvisorsForm_vue_vue_type_template_id_14e88d36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvisorsForm.vue?vue&type=template&id=14e88d36& */ "./resources/js/views/AdvisorsForm.vue?vue&type=template&id=14e88d36&");
/* harmony import */ var _AdvisorsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdvisorsForm.vue?vue&type=script&lang=js& */ "./resources/js/views/AdvisorsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdvisorsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdvisorsForm_vue_vue_type_template_id_14e88d36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdvisorsForm_vue_vue_type_template_id_14e88d36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AdvisorsForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/AdvisorsForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/AdvisorsForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvisorsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AdvisorsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdvisorsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvisorsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/AdvisorsForm.vue?vue&type=template&id=14e88d36&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/AdvisorsForm.vue?vue&type=template&id=14e88d36& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvisorsForm_vue_vue_type_template_id_14e88d36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AdvisorsForm.vue?vue&type=template&id=14e88d36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdvisorsForm.vue?vue&type=template&id=14e88d36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvisorsForm_vue_vue_type_template_id_14e88d36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvisorsForm_vue_vue_type_template_id_14e88d36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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