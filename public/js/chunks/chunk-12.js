(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CategorizablesForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CategorizablesForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/crud */ "./resources/js/views/mixins/crud.js");
/* harmony import */ var _mixins_categorizables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/categorizables */ "./resources/js/views/mixins/categorizables.js");
/* harmony import */ var _mixins_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/permissions */ "./resources/js/views/mixins/permissions.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'categorizables',
  uri: 'people/{people.selected.id}/categories/categorizables'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['mode'],
  mixins: [_mixins_crud__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_categorizables__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_permissions__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      service: service,
      categorizablesChecked: {},
      checkedCategory: {}
    };
  },
  computed: {
    categorizablesFilterText: {
      get: function get() {
        return this.$store.state['categorizables'].data.filter.text;
      },
      set: function set(filter) {
        return this.$store.dispatch(this.service.name + '/mutateSetQueryFilterText', filter);
      }
    },
    categorizablesPerPage: {
      get: function get() {
        return this.$store.state['categorizables'].data.links.pagination.per_page;
      },
      set: function set(perPage) {
        return this.$store.dispatch('categorizables/setPerPage', perPage);
      }
    }
  },
  methods: {
    categorizablesGotoPage: function categorizablesGotoPage(page) {
      this.gotoPage(page, 'categorizables', this.categorizables.data.links.pagination);
    },
    isChecked: function isChecked(categorizable) {
      return this.checkedCategory.hasOwnProperty(categorizable.id) ? this.checkedCategory[categorizable.id].checked : false;
    },
    toggleCheck: function toggleCheck(categorizable) {
      if (!this.checkedCategory.hasOwnProperty(categorizable.id)) {
        this.checkedCategory[categorizable.id] = {
          id: categorizable.id,
          checked: false
        };
      }

      this.checkedCategory[categorizable.id].checked = !this.checkedCategory[categorizable.id].checked;
      this.categorizablesChecked = this.getCategorizablesChecked();
    },
    categorize: function categorize() {
      var categories = {
        personId: this.people.selected.id,
        categories: this.categorizablesChecked
      };
      this.$store.dispatch('categorizables/categorize', categories);
      this.$router.go(-1);
    },
    getCategorizablesChecked: function getCategorizablesChecked() {
      return _.filter(this.checkedCategory, function (category) {
        return category.checked;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CategorizablesForm.vue?vue&type=template&id=3229bdd0&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CategorizablesForm.vue?vue&type=template&id=3229bdd0& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      _c("h1", [_vm._v(_vm._s(_vm.people.selected.name))]),
      _vm._v(" "),
      _c("h2", [_vm._v("Associar Categorias a Pessoas")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c(
        "div",
        { staticClass: "col-6" },
        [
          _vm.categorizables.data.links
            ? _c(
                "app-table-panel",
                {
                  attrs: {
                    title: "Categorias",
                    "per-page": _vm.categorizablesPerPage,
                    "filter-text": _vm.categorizablesFilterText
                  },
                  on: {
                    "set-per-page": function($event) {
                      _vm.categorizablesPerPage = $event
                    },
                    "input-filter-text": function($event) {
                      _vm.categorizablesFilterText = $event.target.value
                    }
                  }
                },
                [
                  _c("template", { slot: "buttons" }, [
                    _vm.categorizablesChecked.length > 0
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-sm pull-right",
                            attrs: {
                              dusk: "associate-category-dusk",
                              disabled: _vm.cannot("people:modify")
                            },
                            on: {
                              click: function($event) {
                                return _vm.categorize()
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        associar categorias\n                    "
                            )
                          ]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "app-table",
                    {
                      attrs: {
                        pagination: _vm.categorizables.data.links.pagination,
                        columns: ["#", "", "Nome"]
                      },
                      on: {
                        "goto-page": function($event) {
                          return _vm.categorizablesGotoPage($event)
                        }
                      }
                    },
                    _vm._l(_vm.categorizables.data.rows, function(
                      categorizable
                    ) {
                      return _c(
                        "tr",
                        {
                          class: {
                            "cursor-pointer": true,
                            "bg-primary-lighter text-white": _vm.isCurrent(
                              categorizable,
                              _vm.categorizables.selected
                            )
                          }
                        },
                        [
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(categorizable.id))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _c("input", {
                              attrs: {
                                type: "checkbox",
                                dusk: "select-category-dusk"
                              },
                              domProps: {
                                checked: _vm.isChecked(categorizable)
                              },
                              on: {
                                input: function($event) {
                                  return _vm.toggleCheck(categorizable)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(categorizable.name) +
                                "\n                        "
                            )
                          ])
                        ]
                      )
                    }),
                    0
                  )
                ],
                2
              )
            : _vm._e()
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/CategorizablesForm.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/CategorizablesForm.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategorizablesForm_vue_vue_type_template_id_3229bdd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategorizablesForm.vue?vue&type=template&id=3229bdd0& */ "./resources/js/views/CategorizablesForm.vue?vue&type=template&id=3229bdd0&");
/* harmony import */ var _CategorizablesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategorizablesForm.vue?vue&type=script&lang=js& */ "./resources/js/views/CategorizablesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategorizablesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategorizablesForm_vue_vue_type_template_id_3229bdd0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategorizablesForm_vue_vue_type_template_id_3229bdd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/CategorizablesForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/CategorizablesForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/CategorizablesForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorizablesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CategorizablesForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CategorizablesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorizablesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/CategorizablesForm.vue?vue&type=template&id=3229bdd0&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/CategorizablesForm.vue?vue&type=template&id=3229bdd0& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorizablesForm_vue_vue_type_template_id_3229bdd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CategorizablesForm.vue?vue&type=template&id=3229bdd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CategorizablesForm.vue?vue&type=template&id=3229bdd0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorizablesForm_vue_vue_type_template_id_3229bdd0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorizablesForm_vue_vue_type_template_id_3229bdd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/mixins/categorizables.js":
/*!*****************************************************!*\
  !*** ./resources/js/views/mixins/categorizables.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('categorizables', ['clearForm'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    people: function people(state) {
      return state.people;
    },
    categorizables: function categorizables(state) {
      return state.categorizables;
    }
  }))
});

/***/ })

}]);