(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ClientSettingsForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ClientSettingsForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/crud */ "./resources/js/views/mixins/crud.js");
/* harmony import */ var _mixins_clients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/clients */ "./resources/js/views/mixins/clients.js");
/* harmony import */ var _mixins_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/permissions */ "./resources/js/views/mixins/permissions.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'clients',
  uri: 'clients/{environment.session.current_client.id}/settings',
  performLoad: false
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['mode'],
  mixins: [_mixins_crud__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_clients__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_permissions__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      service: service
    };
  },
  methods: {
    changeText: function changeText($event) {
      this.$store.commit('clients/mutateSetFormField', {
        field: 'signature',
        value: $event,
        object: 'settings'
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.load().then(function () {
      setTimeout(function () {
        if (_this.$store.state.clients.data.rows) {
          _this.select(_this.$store.state.clients.data.rows[0]);
        }
      }, 1500);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ClientSettingsForm.vue?vue&type=template&id=9684bd5e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ClientSettingsForm.vue?vue&type=template&id=9684bd5e& ***!
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
      _c("h2", [
        _vm._v(
          "\n            " +
            _vm._s(this.mode === "create" ? "Nova " : "Editar ") +
            "Assinatura\n        "
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
            _vm.currentClient
              ? _c(
                  "div",
                  { staticClass: "col-12 mb-3" },
                  [
                    _c("app-input", {
                      attrs: {
                        name: "mail_from_name",
                        label: "Remetente dos e-mails (nome)",
                        required: true,
                        inline: "true",
                        form: _vm.form
                      },
                      model: {
                        value: _vm.form.fields.settings.mail_from_name,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.form.fields.settings,
                            "mail_from_name",
                            $$v
                          )
                        },
                        expression: "form.fields.settings.mail_from_name"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-input", {
                      attrs: {
                        name: "mail_from_name",
                        label: "Remetente dos e-mails (e-mail)",
                        required: true,
                        inline: "true",
                        form: _vm.form
                      },
                      model: {
                        value: _vm.form.fields.settings.mail_from_email,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.form.fields.settings,
                            "mail_from_email",
                            $$v
                          )
                        },
                        expression: "form.fields.settings.mail_from_email"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-markdown-text-area", {
                      attrs: {
                        form: _vm.form,
                        label: "Assinatura para os e-mails",
                        id: "signature",
                        value: _vm.currentClient.settings.signature
                      },
                      on: {
                        input: function($event) {
                          return _vm.changeText($event)
                        }
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
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
                      disabled: _vm.cannot("events:modify")
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
                    attrs: { to: "/dashboard", tag: "button" }
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

/***/ "./resources/js/views/ClientSettingsForm.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/ClientSettingsForm.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClientSettingsForm_vue_vue_type_template_id_9684bd5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientSettingsForm.vue?vue&type=template&id=9684bd5e& */ "./resources/js/views/ClientSettingsForm.vue?vue&type=template&id=9684bd5e&");
/* harmony import */ var _ClientSettingsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientSettingsForm.vue?vue&type=script&lang=js& */ "./resources/js/views/ClientSettingsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClientSettingsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClientSettingsForm_vue_vue_type_template_id_9684bd5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClientSettingsForm_vue_vue_type_template_id_9684bd5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ClientSettingsForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ClientSettingsForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/ClientSettingsForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientSettingsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ClientSettingsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ClientSettingsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientSettingsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ClientSettingsForm.vue?vue&type=template&id=9684bd5e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/ClientSettingsForm.vue?vue&type=template&id=9684bd5e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientSettingsForm_vue_vue_type_template_id_9684bd5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ClientSettingsForm.vue?vue&type=template&id=9684bd5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ClientSettingsForm.vue?vue&type=template&id=9684bd5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientSettingsForm_vue_vue_type_template_id_9684bd5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientSettingsForm_vue_vue_type_template_id_9684bd5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/mixins/clients.js":
/*!**********************************************!*\
  !*** ./resources/js/views/mixins/clients.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('clients', ['clearForm'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    clients: function clients(state) {
      return state.clients;
    },
    currentClient: function currentClient(state) {
      return state.clients.data.rows ? state.clients.data.rows[0] : null;
    }
  }))
});

/***/ })

}]);