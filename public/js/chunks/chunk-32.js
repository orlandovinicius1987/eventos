(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TopicsableForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TopicsableForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/crud */ "./resources/js/views/mixins/crud.js");
/* harmony import */ var _mixins_topicsables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/topicsables */ "./resources/js/views/mixins/topicsables.js");
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




var service = {
  name: 'topicsables',
  uri: 'people/{people.selected.id}/person-topics/topicsables',
  isForm: true
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['mode'],
  mixins: [_mixins_crud__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_topicsables__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_permissions__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      service: service,
      topicsablesChecked: {},
      checkedTopic: {}
    };
  },
  computed: {
    topicsablesFilterText: {
      get: function get() {
        return this.$store.state['topicsables'].data.filter.text;
      },
      set: function set(filter) {
        return this.$store.dispatch(this.service.name + '/mutateSetQueryFilterText', filter);
      }
    },
    topicsablesPerPage: {
      get: function get() {
        return this.$store.state['topicsables'].data.links.pagination.per_page;
      },
      set: function set(perPage) {
        return this.$store.dispatch('topicsables/setPerPage', perPage);
      }
    }
  },
  methods: {
    topicsablesGotoPage: function topicsablesGotoPage(page) {
      this.gotoPage(page, 'topicsables', this.topicsables.data.links.pagination);
    },
    toggleCheck: function toggleCheck(topicsable) {
      if (!this.checkedTopic.hasOwnProperty(topicsable.id)) {
        this.checkedTopic[topicsable.id] = {
          id: topicsable.id,
          checked: false
        };
      }

      this.checkedTopic[topicsable.id].checked = !this.checkedTopic[topicsable.id].checked;
      this.topicsablesChecked = this.getTopicsablesChecked();
    },
    isChecked: function isChecked(topic) {
      return this.checkedTopic.hasOwnProperty(topic.id) ? this.checkedTopic[topic.id].checked : false;
    },
    topicize: function topicize() {
      var topics = {
        personId: this.people.selected.id,
        topics: this.topicsablesChecked
      };
      this.$store.dispatch('topicsables/topicize', topics);
      this.$router.go(-1);
    },
    getTopicsablesChecked: function getTopicsablesChecked() {
      return _.filter(this.checkedTopic, function (topic) {
        return topic.checked;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TopicsableForm.vue?vue&type=template&id=1abe5f7e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TopicsableForm.vue?vue&type=template&id=1abe5f7e& ***!
  \************************************************************************************************************************************************************************************************************/
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
      _c("h2", [_vm._v("Associar Interesses a Pessoas")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c(
        "div",
        { staticClass: "col-6" },
        [
          _vm.topicsables.data.links
            ? _c(
                "app-table-panel",
                {
                  attrs: {
                    title: "Interesses",
                    "per-page": _vm.topicsablesPerPage,
                    "filter-text": _vm.topicsablesFilterText
                  },
                  on: {
                    "set-per-page": function($event) {
                      _vm.topicsablesPerPage = $event
                    },
                    "input-filter-text": function($event) {
                      _vm.topicsablesFilterText = $event.target.value
                    }
                  }
                },
                [
                  _c("template", { slot: "buttons" }, [
                    _vm.topicsablesChecked.length > 0
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-sm pull-right",
                            attrs: { disabled: _vm.cannot("people:modify") },
                            on: {
                              click: function($event) {
                                return _vm.topicize()
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        associar interesses\n                    "
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
                        pagination: _vm.topicsables.data.links.pagination,
                        columns: ["#", "", "Nome"]
                      },
                      on: {
                        "goto-page": function($event) {
                          return _vm.personTopicsGotoPage($event)
                        }
                      }
                    },
                    _vm._l(_vm.topicsables.data.rows, function(topicsable) {
                      return _c(
                        "tr",
                        {
                          class: {
                            "cursor-pointer": true,
                            "bg-primary-lighter text-white": _vm.isCurrent(
                              topicsable,
                              _vm.topicsables.selected
                            )
                          }
                        },
                        [
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(topicsable.id))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _c("input", {
                              attrs: { type: "checkbox" },
                              domProps: { checked: _vm.isChecked(topicsable) },
                              on: {
                                input: function($event) {
                                  return _vm.toggleCheck(topicsable)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(topicsable.name))
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

/***/ "./resources/js/views/TopicsableForm.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/TopicsableForm.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopicsableForm_vue_vue_type_template_id_1abe5f7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopicsableForm.vue?vue&type=template&id=1abe5f7e& */ "./resources/js/views/TopicsableForm.vue?vue&type=template&id=1abe5f7e&");
/* harmony import */ var _TopicsableForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopicsableForm.vue?vue&type=script&lang=js& */ "./resources/js/views/TopicsableForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopicsableForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopicsableForm_vue_vue_type_template_id_1abe5f7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopicsableForm_vue_vue_type_template_id_1abe5f7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/TopicsableForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/TopicsableForm.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/TopicsableForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsableForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TopicsableForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TopicsableForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsableForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/TopicsableForm.vue?vue&type=template&id=1abe5f7e&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/TopicsableForm.vue?vue&type=template&id=1abe5f7e& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsableForm_vue_vue_type_template_id_1abe5f7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TopicsableForm.vue?vue&type=template&id=1abe5f7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TopicsableForm.vue?vue&type=template&id=1abe5f7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsableForm_vue_vue_type_template_id_1abe5f7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsableForm_vue_vue_type_template_id_1abe5f7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/mixins/topicsables.js":
/*!**************************************************!*\
  !*** ./resources/js/views/mixins/topicsables.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('topicsables', ['clearForm'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    people: function people(state) {
      return state.people;
    },
    topicsables: function topicsables(state) {
      return state.topicsables;
    }
  }))
});

/***/ })

}]);