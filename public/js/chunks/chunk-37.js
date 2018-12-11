webpackJsonp([37],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/views/InviteForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_crud__ = __webpack_require__("./resources/js/views/mixins/crud.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_sub_events__ = __webpack_require__("./resources/js/views/mixins/sub-events.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_invitables__ = __webpack_require__("./resources/js/views/mixins/invitables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//






var service = {
    name: 'invitables',
    uri: 'events/{events.selected.id}/sub-events/{subEvents.selected.id}/invitations/invitables'
};

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['mode'],

    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_crud__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_invitables__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_sub_events__["a" /* default */]],

    data: function data() {
        this.$store.dispatch('environment/loadSubEvents');
        this.$store.dispatch('environment/loadRoles');
        this.$store.dispatch('environment/loadInstitutions');
        return {
            service: service,

            checkedPeople: {}
        };
    },


    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["mapState"])({
        events: function events(state) {
            return state.events;
        },

        subEvents: function subEvents(state) {
            return state.subEvents;
        }
    }), {

        notInvited: {
            get: function get() {
                return this.$store.state['invitations'].data.filter.checkboxes.not_invited;
            },
            set: function set(filter) {
                if (filter) {
                    this.$store.commit('invitables/mutateFilterCheckbox', { field: 'not_invited', value: this.subEvents.selected.id });
                } else {
                    this.$store.commit('invitables/mutateFilterCheckbox', { field: 'not_invited', value: null });
                }

                this.$store.dispatch('invitables/load');
            }
        },

        selectedSubEvent: {
            get: function get() {
                return this.$store.state['invitables'].data.filter.selects['sub_event'];
            }
        },

        recordButtonText: {
            get: function get() {
                return this.selectedSubEvent ? 'copiar convidados' : 'convidar';
            }
        },

        invitablesFilterText: {
            get: function get() {
                return this.$store.state['invitables'].data.filter.text;
            },
            set: function set(filter) {
                this.resetCheckedPeople();

                return this.$store.dispatch(this.service.name + '/mutateSetQueryFilterText', filter);
            }
        },

        invitablesPerPage: {
            get: function get() {
                return this.$store.state['invitables'].data.links.pagination.per_page;
            },
            set: function set(perPage) {
                this.resetCheckedPeople();

                return this.$store.dispatch('invitables/setPerPage', perPage);
            }
        },

        subEventSelectFilter: {
            get: function get() {
                var _this = this;

                return _.debounce(function () {
                    _this.$store.state['invitables'].data.filter.selects['sub_event'];
                }, 650);
            },
            set: function set(id) {
                this.resetCheckedPeople();

                return this.$store.dispatch('invitables/mutateFilterSelect', {
                    field: 'sub_event', value: id
                });
            }
        }
    }),

    methods: {
        invitablesGotoPage: function invitablesGotoPage(page) {
            this.gotoPage(page, 'invitables', this.invitables.data.links.pagination);
        },
        resetCheckedPeople: function resetCheckedPeople() {
            for (var key in this.checkedPeople) {
                if (this.checkedPeople.hasOwnProperty(key)) {
                    this.checkedPeople[key].checked = false;
                }
            }
        },
        isChecked: function isChecked(invitation) {
            return this.checkedPeople.hasOwnProperty(invitation.id) ? this.checkedPeople[invitation.id].checked : false;
        },
        toggleCheck: function toggleCheck(invitation) {
            if (!this.checkedPeople.hasOwnProperty(invitation.id)) {
                this.checkedPeople[invitation.id] = {
                    id: invitation.id,
                    checked: false
                };
            }

            this.checkedPeople[invitation.id].checked = !this.checkedPeople[invitation.id].checked;
        },
        invite: function invite() {
            var invitees = {
                eventId: this.events.selected.id,

                subEventId: this.subEvents.selected.id,

                invitees: _.filter(this.checkedPeople, function (person) {
                    return person.checked;
                })
            };

            this.resetCheckedPeople();

            this.$store.dispatch('invitables/invite', invitees);
        },
        moveInvitations: function moveInvitations() {
            var invitees = {
                eventId: this.events.selected.id,

                newSubEventId: this.subEvents.selected.id,

                currentSubEventId: this.selectedSubEvent,

                invitees: _.filter(this.checkedPeople, function (person) {
                    return person.checked;
                })
            };

            this.resetCheckedPeople();

            this.$store.dispatch('invitables/moveInvitations', invitees);

            // this.$router.go(0)
        },
        except: function (_except) {
            function except(_x, _x2) {
                return _except.apply(this, arguments);
            }

            except.toString = function () {
                return _except.toString();
            };

            return except;
        }(function (list, id) {
            var items = clone(list);

            items.rows = except(list.rows, id);

            return items;
        })
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-345b434c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/InviteForm.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-345b434c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/views/InviteForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "py-2 text-center" }, [
      _c("h1", [_vm._v("Convidar pessoas para o sub-evento")]),
      _vm._v(" "),
      _c("h2", [_vm._v(_vm._s(_vm.events.selected.name))]),
      _vm._v(" "),
      _c("h2", [
        _vm._v(
          _vm._s(_vm.subEvents.selected.name) +
            " - " +
            _vm._s(
              _vm.subEvents.selected.sector
                ? _vm.subEvents.selected.sector.name
                : ""
            )
        )
      ]),
      _vm._v(" "),
      _c("h2", [_vm._v(_vm._s(_vm.subEvents.selected.place))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c(
        "div",
        { staticClass: "col-6" },
        [
          _vm.invitables.data.links
            ? _c(
                "app-table-panel",
                {
                  attrs: {
                    title: "Pessoas",
                    "per-page": _vm.invitablesPerPage,
                    "filter-text": _vm.invitablesFilterText
                  },
                  on: {
                    "set-per-page": function($event) {
                      _vm.invitablesPerPage = $event
                    },
                    "input-filter-text": function($event) {
                      _vm.invitablesFilterText = $event.target.value
                    }
                  }
                },
                [
                  _c(
                    "template",
                    { slot: "checkboxes" },
                    [
                      _c("app-input", {
                        attrs: {
                          name: "not_invited",
                          label: "Somente não convidados",
                          type: "checkbox",
                          required: true,
                          form: _vm.form,
                          inline: "true"
                        },
                        model: {
                          value: _vm.notInvited,
                          callback: function($$v) {
                            _vm.notInvited = $$v
                          },
                          expression: "notInvited"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "selects" },
                    [
                      _c("app-institution-filter-for-invitation", {
                        attrs: {
                          name: "institution_id",
                          label: "Instituição",
                          required: true,
                          form: _vm.form,
                          options: _vm.environment.tables.institutions
                        }
                      }),
                      _vm._v(" "),
                      _c("app-role-filter-for-invitation", {
                        attrs: {
                          name: "role_id",
                          label: "Função",
                          required: true,
                          form: _vm.form,
                          options: _vm.environment.tables.roles
                        }
                      }),
                      _vm._v(" "),
                      _c("app-select", {
                        attrs: {
                          name: "sub_event_id",
                          label: "Filtrar convidados de outro sub-evento",
                          required: true,
                          form: _vm.form,
                          options: _vm.except(
                            this.environment.tables.sub_events,
                            this.subEvents.form.fields.id
                          )
                        },
                        model: {
                          value: _vm.subEventSelectFilter,
                          callback: function($$v) {
                            _vm.subEventSelectFilter = $$v
                          },
                          expression: "subEventSelectFilter"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("template", { slot: "buttons" }, [
                    _c(
                      "div",
                      {
                        staticClass: "btn btn-primary btn-sm pull-right",
                        on: {
                          click: function($event) {
                            _vm.invite()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.recordButtonText) +
                            "\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm.selectedSubEvent
                      ? _c(
                          "div",
                          {
                            staticClass: "btn btn-danger btn-sm pull-right",
                            on: {
                              click: function($event) {
                                _vm.moveInvitations()
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        mover convidados\n                    "
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
                        pagination: _vm.invitables.data.links.pagination,
                        columns: [
                          "#",
                          "Convidar",
                          "Tratamento",
                          "Nome",
                          "Instituição",
                          "Cargo",
                          "Convidado",
                          ""
                        ]
                      },
                      on: {
                        "goto-page": function($event) {
                          _vm.invitablesGotoPage($event)
                        }
                      }
                    },
                    _vm._l(_vm.invitables.data.rows, function(invitable) {
                      return _c(
                        "tr",
                        {
                          class: {
                            "cursor-pointer": true,
                            "bg-primary-lighter text-white": _vm.isCurrent(
                              invitable,
                              _vm.invitables.selected
                            )
                          }
                        },
                        [
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(invitable.id))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            !invitable.is_invited_to_sub_event
                              ? _c("input", {
                                  attrs: { type: "checkbox" },
                                  domProps: {
                                    checked: _vm.isChecked(invitable)
                                  },
                                  on: {
                                    input: function($event) {
                                      _vm.toggleCheck(invitable)
                                    }
                                  }
                                })
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(invitable.title))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(invitable.person.name))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(invitable.institution.name))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(invitable.role.name))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "align-middle text-center" },
                            [
                              _c("h6", { staticClass: "mb-0" }, [
                                invitable.is_invited_to_sub_event
                                  ? _c(
                                      "span",
                                      { staticClass: "badge badge-success" },
                                      [_vm._v("Já convidado")]
                                    )
                                  : _vm._e()
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm.can("update")
                              ? _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-danger btn-sm ml-1 pull-right",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        _vm.invite(invitable)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-plus" })]
                                )
                              : _vm._e()
                          ])
                        ]
                      )
                    })
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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-345b434c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-345b434c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/InviteForm.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-345b434c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/InviteForm.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("2294e8ec", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-345b434c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InviteForm.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-345b434c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InviteForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/js/views/InviteForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-345b434c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/InviteForm.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/views/InviteForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-345b434c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/views/InviteForm.vue")
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
Component.options.__file = "resources/js/views/InviteForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-345b434c", Component.options)
  } else {
    hotAPI.reload("data-v-345b434c", Component.options)
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

/***/ "./resources/js/views/mixins/invitables.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["a"] = ({
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('invitables', ['clearForm'])),

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapState"])({
        invitables: function invitables(state) {
            return state.invitables;
        }
    }))
});

/***/ }),

/***/ "./resources/js/views/mixins/sub-events.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["a"] = ({
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('subEvents', ['clearForm'])),

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapState"])({
        addresses: function addresses(state) {
            return state.addresses;
        },

        events: function events(state) {
            return state.events;
        },

        subEvents: function subEvents(state) {
            return state.subEvents;
        }
    }))
});

/***/ })

});