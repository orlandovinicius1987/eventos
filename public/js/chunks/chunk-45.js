webpackJsonp([45],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/views/PeopleForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_crud__ = __webpack_require__("./resources/js/views/mixins/crud.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_people__ = __webpack_require__("./resources/js/views/mixins/people.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
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





var service = { name: 'people', uri: 'people', performLoad: false };

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['mode'],

    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_crud__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_people__["a" /* default */]],

    data: function data() {
        return {
            service: service,
            photo: null,
            photoUrl: 'https://dummyimage.com/200x200/fff/aaa',
            photoBlob: null,
            showCropper: false,
            currentNameIsDuplicate: false
        };
    },


    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapActions"])(service.name, ['selectPerson']), {
        generatePhoto: function generatePhoto() {
            var _this = this;

            this.mutatePhotoUrl(this.photo.generateDataUrl());

            this.photo.generateBlob(function (blob) {
                _this.mutatePhoto(blob);
            }, 'image/jpeg', 0.85);
        },
        usePhoto: function usePhoto() {
            this.generatePhoto();

            this.showCropper = false;
        },
        mutatePhoto: function mutatePhoto(blob) {
            var _this2 = this;

            blob_to_base64(blob, function (result) {
                _this2.mutateSetFormField({
                    field: 'photo',
                    value: blob.type + ';' + result
                });
            });
        },
        mutatePhotoUrl: function mutatePhotoUrl(url) {
            this.mutateSetFormField({
                field: 'photoUrl',
                value: url
            });
        },
        flushImageCache: function flushImageCache(imageUrl) {
            return flush_image_cache(imageUrl);
        },
        verifyDuplicateName: function verifyDuplicateName(payload) {
            var _this3 = this;

            clearTimeout(this.timeout);

            this.currentNameIsDuplicate = false;

            this.timeout = setTimeout(function () {
                post('/api/v1/people/validate-name', { name: payload }).catch(function (error) {
                    _this3.currentNameIsDuplicate = true;
                    console.log(error);
                });
            }, 500);
        },
        confirmNameDuplicate: function confirmNameDuplicate() {
            var _this4 = this;

            confirm('Deseja realmente cadastrar novamente o nome: ' + this.form.fields.name + '?', this).then(function (value) {
                if (value) {
                    _this4.saveModel();
                }
            });
        },
        savePerson: function savePerson() {
            this.currentNameIsDuplicate ? this.confirmNameDuplicate() : this.saveModel();
        }
    }),

    computed: {
        photoUrlField: function photoUrlField() {
            return flush_image_cache(this.form.fields.photoUrl);
        }
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38ea60d2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/PeopleForm.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-38ea60d2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/views/PeopleForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "py-2 text-center" }, [
      _c("h2", [
        _vm._v(_vm._s(this.mode === "create" ? "Nova " : "Editar ") + "Pessoa")
      ]),
      _vm._v(" "),
      _c("h2", [
        _vm._v(_vm._s(_vm.form.fields.name ? _vm.form.fields.name : ""))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-8" }, [
        _c("form", [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12" },
              [
                _c("img", {
                  staticClass: "img-thumbnail rounded mx-auto d-block",
                  attrs: {
                    src: _vm.makePhotoUrl(),
                    width: "200",
                    height: "200"
                  },
                  on: {
                    click: function($event) {
                      _vm.showCropper = true
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    attrs: {
                      id: "croppaModal",
                      "body-class": "mx-auto",
                      centered: ""
                    },
                    model: {
                      value: _vm.showCropper,
                      callback: function($$v) {
                        _vm.showCropper = $$v
                      },
                      expression: "showCropper"
                    }
                  },
                  [
                    _c("vue-croppa", {
                      attrs: {
                        placeholder: "Selecione uma imagem",
                        width: 400,
                        height: 400,
                        "prevent-white-space": true
                      },
                      model: {
                        value: _vm.photo,
                        callback: function($$v) {
                          _vm.photo = $$v
                        },
                        expression: "photo"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "w-100",
                        attrs: { slot: "modal-footer" },
                        slot: "modal-footer"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "float-right btn btn-success",
                            on: {
                              click: function($event) {
                                _vm.showCropper = false
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    Cancelar\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "float-right btn btn-outline-secondary mr-2",
                            on: {
                              click: function($event) {
                                _vm.usePhoto()
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    OK\n                                "
                            )
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 mb-3" },
              [
                _c(
                  "label",
                  { staticClass: "mb-0 mt-2", attrs: { for: "name" } },
                  [_vm._v("Nome")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.fields.name,
                      expression: "form.fields.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { name: "name", id: "name", required: "required" },
                  domProps: { value: _vm.form.fields.name },
                  on: {
                    keyup: function($event) {
                      _vm.verifyDuplicateName(_vm.form.fields.name)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form.fields, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.form.errors.has("name")
                  ? _c("div", { staticClass: "text-danger" }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.form.errors.get("name")) +
                          "\n                        "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentNameIsDuplicate
                  ? _c(
                      "div",
                      {
                        staticClass: "alert alert-warning",
                        attrs: { role: "alert", id: "nameDuplicate" }
                      },
                      [
                        _vm._v(
                          "\n                            Foi encontrado uma pessoa com este mesmo nome: " +
                            _vm._s(_vm.form.fields.name) +
                            ", recomenda-se verificar as pessoas cadastradas.\n                        "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("app-input", {
                  directives: [
                    {
                      name: "mask",
                      rawName: "v-mask",
                      value: "###.###.###-##",
                      expression: "'###.###.###-##'"
                    }
                  ],
                  attrs: {
                    name: "cpf",
                    label: "CPF",
                    required: false,
                    form: _vm.form
                  },
                  model: {
                    value: _vm.form.fields.cpf,
                    callback: function($$v) {
                      _vm.$set(_vm.form.fields, "cpf", $$v)
                    },
                    expression: "form.fields.cpf"
                  }
                }),
                _vm._v(" "),
                _c("app-input", {
                  attrs: {
                    name: "nickname",
                    label: "Nome público",
                    required: true,
                    form: _vm.form
                  },
                  model: {
                    value: _vm.form.fields.nickname,
                    callback: function($$v) {
                      _vm.$set(_vm.form.fields, "nickname", $$v)
                    },
                    expression: "form.fields.nickname"
                  }
                }),
                _vm._v(" "),
                _c("app-input", {
                  attrs: {
                    name: "title",
                    label: "Tratamento",
                    required: true,
                    form: _vm.form
                  },
                  model: {
                    value: _vm.form.fields.title,
                    callback: function($$v) {
                      _vm.$set(_vm.form.fields, "title", $$v)
                    },
                    expression: "form.fields.title"
                  }
                }),
                _vm._v(" "),
                _c("app-input", {
                  attrs: {
                    name: "birthdate",
                    label: "Data de nascimento",
                    type: "date",
                    form: _vm.form
                  },
                  model: {
                    value: _vm.form.fields.birthdate,
                    callback: function($$v) {
                      _vm.$set(_vm.form.fields, "birthdate", $$v)
                    },
                    expression: "form.fields.birthdate"
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
                        _vm.savePerson()
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
                    attrs: { to: "/people", tag: "button" }
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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-38ea60d2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38ea60d2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/PeopleForm.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38ea60d2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/PeopleForm.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("1e4d852a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38ea60d2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PeopleForm.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38ea60d2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PeopleForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/js/views/PeopleForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38ea60d2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/PeopleForm.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/views/PeopleForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-38ea60d2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/views/PeopleForm.vue")
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
Component.options.__file = "resources/js/views/PeopleForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38ea60d2", Component.options)
  } else {
    hotAPI.reload("data-v-38ea60d2", Component.options)
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

/***/ })

});