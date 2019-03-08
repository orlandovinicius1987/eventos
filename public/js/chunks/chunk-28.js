(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SectorForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SectorForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/crud */ "./resources/js/views/mixins/crud.js");
/* harmony import */ var _mixins_sectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/sectors */ "./resources/js/views/mixins/sectors.js");
/* harmony import */ var _mixins_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/permissions */ "./resources/js/views/mixins/permissions.js");
/* harmony import */ var vue_swatches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-swatches */ "./node_modules/vue-swatches/dist/vue-swatches.min.js");
/* harmony import */ var vue_swatches__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_swatches__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'sectors',
  uri: 'sectors',
  performLoad: false
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['mode'],
  mixins: [_mixins_crud__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_sectors__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_permissions__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    Swatches: vue_swatches__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      service: service
    };
  },
  computed: {
    background: {
      get: function get() {
        return get_color(this.form.fields.color, 0);
      },
      set: function set(color) {
        this.$store.commit('sectors/mutateSetFormField', {
          field: 'color',
          value: color + ',' + this.foreground
        });
      }
    },
    foreground: {
      get: function get() {
        return get_color(this.form.fields.color, 1);
      },
      set: function set(color) {
        this.$store.commit('sectors/mutateSetFormField', {
          field: 'color',
          value: this.background + ',' + color
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SectorForm.vue?vue&type=template&id=3a18bea9&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SectorForm.vue?vue&type=template&id=3a18bea9& ***!
  \********************************************************************************************************************************************************************************************************/
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
        _vm._v(_vm._s(this.mode === "create" ? "Criar" : "Editar") + " Setor")
      ]),
      _vm._v(" "),
      _c(
        "h2",
        [
          _c("app-badge", {
            attrs: {
              caption: _vm.form.fields.name ? _vm.form.fields.name : "",
              color: _vm.background + "," + _vm.foreground,
              padding: 4
            }
          })
        ],
        1
      )
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
                _c("app-input", {
                  attrs: {
                    name: "name",
                    label: "Nome",
                    required: true,
                    form: _vm.form
                  },
                  model: {
                    value: _vm.form.fields.name,
                    callback: function($$v) {
                      _vm.$set(_vm.form.fields, "name", $$v)
                    },
                    expression: "form.fields.name"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 mb-3" }, [
              _c("span", { staticClass: "d-inline" }, [
                _vm._v("Cor de fundo:")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-inline" },
                [
                  _c("swatches", {
                    attrs: { "show-fallback": "", colors: "text-advanced" },
                    model: {
                      value: _vm.background,
                      callback: function($$v) {
                        _vm.background = $$v
                      },
                      expression: "background"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 mb-3" }, [
              _c("span", { staticClass: "d-inline" }, [
                _vm._v("Cor da letra:")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-inline" },
                [
                  _c("swatches", {
                    attrs: { "show-fallback": "", colors: "text-advanced" },
                    model: {
                      value: _vm.foreground,
                      callback: function($$v) {
                        _vm.foreground = $$v
                      },
                      expression: "foreground"
                    }
                  })
                ],
                1
              )
            ])
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
                      disabled: _vm.cannot("sectors:modify")
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
                    attrs: { to: "/sectors", tag: "button" }
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

/***/ "./resources/js/views/SectorForm.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/SectorForm.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SectorForm_vue_vue_type_template_id_3a18bea9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectorForm.vue?vue&type=template&id=3a18bea9& */ "./resources/js/views/SectorForm.vue?vue&type=template&id=3a18bea9&");
/* harmony import */ var _SectorForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectorForm.vue?vue&type=script&lang=js& */ "./resources/js/views/SectorForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SectorForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SectorForm_vue_vue_type_template_id_3a18bea9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SectorForm_vue_vue_type_template_id_3a18bea9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SectorForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/SectorForm.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/SectorForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectorForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SectorForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SectorForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectorForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SectorForm.vue?vue&type=template&id=3a18bea9&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/SectorForm.vue?vue&type=template&id=3a18bea9& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectorForm_vue_vue_type_template_id_3a18bea9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SectorForm.vue?vue&type=template&id=3a18bea9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SectorForm.vue?vue&type=template&id=3a18bea9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectorForm_vue_vue_type_template_id_3a18bea9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectorForm_vue_vue_type_template_id_3a18bea9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/mixins/sectors.js":
/*!**********************************************!*\
  !*** ./resources/js/views/mixins/sectors.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('sectors', ['clearForm'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    sectors: function sectors(state) {
      return state.sectors;
    }
  }))
});

/***/ })

}]);