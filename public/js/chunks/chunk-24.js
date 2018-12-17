(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/crud */ "./resources/js/views/mixins/crud.js");
/* harmony import */ var _mixins_addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/addresses */ "./resources/js/views/mixins/addresses.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



var service = {
  name: 'addresses',
  uri: 'people/{people.selected.id}/person-institutions/{personInstitutions.selected.id}/addresses',
  performLoad: false
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['mode'],
  mixins: [_mixins_crud__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_addresses__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      service: service
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('addresses', ['selectedEvent', 'selectedSubEvent']))
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./PersonInstitutionsAddressesForm.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=template&id=ff1a2432&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=template&id=ff1a2432& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
          "\n            " +
            _vm._s(this.mode === "create" ? "Nova " : "Editar ") +
            _vm._s(
              _vm.addresses.form.fields.name
                ? _vm.addresses.form.fields.name
                : "Endereço"
            ) +
            "\n        "
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
                _c("app-address-field", {
                  attrs: {
                    address: _vm.addresses.form.fields,
                    form: _vm.addresses.form,
                    "google-maps": _vm.environment.google_maps
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
                    attrs: { type: "submit" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.saveModel()
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

/***/ "./resources/js/views/PersonInstitutionsAddressesForm.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/PersonInstitutionsAddressesForm.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PersonInstitutionsAddressesForm_vue_vue_type_template_id_ff1a2432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonInstitutionsAddressesForm.vue?vue&type=template&id=ff1a2432& */ "./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=template&id=ff1a2432&");
/* harmony import */ var _PersonInstitutionsAddressesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonInstitutionsAddressesForm.vue?vue&type=script&lang=js& */ "./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PersonInstitutionsAddressesForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersonInstitutionsAddressesForm.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PersonInstitutionsAddressesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PersonInstitutionsAddressesForm_vue_vue_type_template_id_ff1a2432___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PersonInstitutionsAddressesForm_vue_vue_type_template_id_ff1a2432___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/PersonInstitutionsAddressesForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsAddressesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PersonInstitutionsAddressesForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsAddressesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsAddressesForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./PersonInstitutionsAddressesForm.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsAddressesForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsAddressesForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsAddressesForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsAddressesForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsAddressesForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=template&id=ff1a2432&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=template&id=ff1a2432& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsAddressesForm_vue_vue_type_template_id_ff1a2432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PersonInstitutionsAddressesForm.vue?vue&type=template&id=ff1a2432& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonInstitutionsAddressesForm.vue?vue&type=template&id=ff1a2432&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsAddressesForm_vue_vue_type_template_id_ff1a2432___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonInstitutionsAddressesForm_vue_vue_type_template_id_ff1a2432___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/mixins/addresses.js":
/*!************************************************!*\
  !*** ./resources/js/views/mixins/addresses.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('addresses', ['clearForm'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    addresses: function addresses(state) {
      return state.addresses;
    },
    personInstitutions: function personInstitutions(state) {
      return state.personInstitutions;
    }
  }))
});

/***/ }),

/***/ "./resources/js/views/mixins/crud.js":
/*!*******************************************!*\
  !*** ./resources/js/views/mixins/crud.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ })

}]);