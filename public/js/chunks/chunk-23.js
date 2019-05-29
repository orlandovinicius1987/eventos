(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/People.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/People.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/crud */ "./resources/js/views/mixins/crud.js");
/* harmony import */ var _mixins_people__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/people */ "./resources/js/views/mixins/people.js");
/* harmony import */ var _mixins_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/permissions */ "./resources/js/views/mixins/permissions.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'people',
  uri: 'people'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_crud__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_people__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_permissions__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      service: service,
      showExport: false,
      exporter: {
        selectedOptions: [],
        busy: false
      }
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])(service.name, ['selectPerson', 'selectPersonInstitution', 'selectAddress', 'selectContact', 'selectAdvisor', 'selectAdvisorContacts']), {
    peopleGotoPage: function peopleGotoPage(page) {
      this.gotoPage(page, 'people', this.people.data.links.pagination);
    },
    personInstitutionsGotoPage: function personInstitutionsGotoPage(page) {
      this.gotoPage(page, 'personInstitutions', this.personInstitutions.data.links.pagination);
    },
    personTopicsGotoPage: function personTopicsGotoPage(page) {
      this.gotoPage(page, 'personTopics', this.personTopics.data.links.pagination);
    },
    addressesGotoPage: function addressesGotoPage(page) {
      this.gotoPage(page, 'addresses', this.addresses.data.links.pagination);
    },
    contactsGotoPage: function contactsGotoPage(page) {
      this.gotoPage(page, 'contacts', this.contacts.data.links.pagination);
    },
    advisorContactsGotoPage: function advisorContactsGotoPage(page) {
      this.gotoPage(page, 'advisorContacts', this.contacts.data.links.pagination);
    },
    personCategoriesGotoPage: function personCategoriesGotoPage(page) {
      this.gotoPage(page, 'personCategories', this.personCategories.data.links.pagination);
    },
    advisorsGotoPage: function advisorsGotoPage(page) {
      this.gotoPage(page, 'advisors', this.advisors.data.links.pagination);
    },
    confirmDeletePersonCategory: function confirmDeletePersonCategory(personCategory) {
      var _this = this;

      confirm('Deseja realmente desassociar ' + personCategory.name + '?', this).then(function (value) {
        if (value) {
          _this.deletePersonCategory(personCategory);
        }
      });
    },
    deletePersonCategory: function deletePersonCategory(personCategory) {
      return this.$store.dispatch('personCategories/unCategorize', personCategory);
    },
    confirmDeletePersonTopic: function confirmDeletePersonTopic(personTopic) {
      var _this2 = this;

      confirm('Deseja realmente desassociar ' + personTopic.topic.name + '?', this).then(function (value) {
        if (value) {
          _this2.deletePersonTopic(personTopic);
        }
      });
    },
    deletePersonTopic: function deletePersonTopic(personTopic) {
      return this.$store.dispatch('personTopics/unTopicize', personTopic);
    },
    showExportModal: function showExportModal() {
      this.showExport = true;
    },
    toggleExportOption: function toggleExportOption(option, event) {
      if (event) {
        return this.exporter.selectedOptions.push(option.code);
      }

      _.pull(this.exporter.selectedOptions, option.code);
    },
    doExport: function doExport(type) {
      var _this3 = this;

      this.exporter.busy = true;
      this.exportToFile(type).then(function () {
        _this3.exporter.busy = false;
      });
    },
    exportToFile: function exportToFile(fileType) {
      var _this4 = this;

      return post('api/v1/people/export', {
        query: this.$store.getters['people/getQueryFilter'],
        fileType: fileType,
        options: this.exporter.selectedOptions
      }).then(function (response) {
        return fileType === 'pdf' ? _this4.downloadPdf(response) : _this4.downloadCsv(response);
      });
    },
    downloadPdf: function downloadPdf(response) {
      var blob = new Blob([response.data], {
        type: 'application/pdf'
      });
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = extractFileNameFromResponse(response);
      link.click();
    },
    downloadCsv: function downloadCsv(response) {
      var blob = new Blob([response.data], {
        type: 'application/csv'
      });
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = extractFileNameFromResponse(response);
      link.click();
    }
  }),
  computed: {
    peopleFilterText: {
      get: function get() {
        return this.$store.state['people'].data.filter.text;
      },
      set: function set(filter) {
        return this.$store.dispatch(this.service.name + '/mutateSetQueryFilterText', filter);
      }
    },
    peoplePerPage: {
      get: function get() {
        return this.$store.state['people'].data.links.pagination.per_page;
      },
      set: function set(perPage) {
        return this.$store.dispatch('people/setPerPage', perPage);
      }
    },
    personInstitutionsFilterText: {
      get: function get() {
        return this.$store.state['personInstitutions'].data.filter.text;
      },
      set: function set(filter) {
        return this.$store.dispatch('personInstitutions/mutateSetQueryFilterText', filter);
      }
    },
    personInstitutionsPerPage: {
      get: function get() {
        return this.$store.state['personInstitutions'].data.links.pagination.per_page;
      },
      set: function set(perPage) {
        return this.$store.dispatch('personInstitutions/setPerPage', perPage);
      }
    },
    personTopicsFilterText: {
      get: function get() {
        return this.$store.state['personTopics'].data.filter.text;
      },
      set: function set(filter) {
        return this.$store.dispatch('personTopics/mutateSetQueryFilterText', filter);
      }
    },
    personTopicsPerPage: {
      get: function get() {
        return this.$store.state['personTopics'].data.links.pagination.per_page;
      },
      set: function set(perPage) {
        return this.$store.dispatch('personTopics/setPerPage', perPage);
      }
    },
    addressesFilterText: {
      get: function get() {
        return this.$store.state['addresses'].data.filter.text;
      },
      set: function set(filter) {
        return this.$store.dispatch('addresses/mutateSetQueryFilterText', filter);
      }
    },
    addressesPerPage: {
      get: function get() {
        return this.$store.state['addresses'].data.links.pagination.per_page;
      },
      set: function set(perPage) {
        return this.$store.dispatch('addresses/setPerPage', perPage);
      }
    },
    contactsFilterText: {
      get: function get() {
        return this.$store.state['contacts'].data.filter.text;
      },
      set: function set(filter) {
        return this.$store.dispatch('contacts/mutateSetQueryFilterText', filter);
      }
    },
    contactsPerPage: {
      get: function get() {
        return this.$store.state['contacts'].data.links.pagination.per_page;
      },
      set: function set(perPage) {
        return this.$store.dispatch('contacts/setPerPage', perPage);
      }
    },
    personCategoriesFilterText: {
      get: function get() {
        return this.$store.state['personCategories'].data.filter.text;
      },
      set: function set(filter) {
        return this.$store.dispatch('personCategories/mutateSetQueryFilterText', filter);
      }
    },
    personCategoriesPerPage: {
      get: function get() {
        return this.$store.state['personCategories'].data.links.pagination.per_page;
      },
      set: function set(perPage) {
        return this.$store.dispatch('personCategories/setPerPage', perPage);
      }
    },
    advisorsFilterText: {
      get: function get() {
        return this.$store.state['advisors'].data.filter.text;
      },
      set: function set(filter) {
        return this.$store.dispatch('advisors/mutateSetQueryFilterText', filter);
      }
    },
    advisorsPerPage: {
      get: function get() {
        return this.$store.state['advisors'].data.links.pagination.per_page;
      },
      set: function set(perPage) {
        return this.$store.dispatch('advisors/setPerPage', perPage);
      }
    },
    advisorContactsFilterText: {
      get: function get() {
        return this.$store.state['advisorContacts'].data.filter.text;
      },
      set: function set(filter) {
        return this.$store.dispatch('advisorContacts/mutateSetQueryFilterText', filter);
      }
    },
    advisorContactsPerPage: {
      get: function get() {
        return this.$store.state['advisorContacts'].data.links.pagination.per_page;
      },
      set: function set(perPage) {
        return this.$store.dispatch('advisorContacts/setPerPage', perPage);
      }
    },
    hasNoPhotoCheckbox: {
      get: function get() {
        return this.$store.state['people'].data.filter.checkboxes.hasNoPhoto;
      },
      set: function set(filter) {
        this.$store.dispatch('people/mutateFilterCheckbox', {
          field: 'hasNoPhoto',
          value: filter
        });
      }
    },
    showInactive: {
      get: function get() {
        return this.$store.state['people'].data.filter.checkboxes.showInactive;
      },
      set: function set(filter) {
        this.$store.dispatch('people/mutateFilterCheckbox', {
          field: 'showInactive',
          value: filter
        });
      }
    },
    exportableOptions: function exportableOptions() {
      return this.environment.tables.exportable_data;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/People.vue?vue&type=template&id=02fd0cee&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/People.vue?vue&type=template&id=02fd0cee& ***!
  \****************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("div", { staticClass: "py-2 text-center" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm.selected.id && _vm.personInstitutions.data.links
          ? _c("div", { staticClass: "row bg-primary text-white" }, [
              _c("div", { staticClass: "col-12 mt-2" }, [
                _c(
                  "div",
                  {
                    staticClass: "row justify-content-center align-items-center"
                  },
                  [
                    _c("div", { staticClass: "col-8" }, [
                      _c("h1", { staticClass: "display-4 mb-0" }, [
                        _vm._v(_vm._s(_vm.selected.name))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _c("img", {
                        staticClass:
                          "img-thumbnail rounded mx-auto d-block mb-2",
                        attrs: {
                          src: _vm.makePhotoUrl(_vm.selected.photoUrl),
                          width: "200",
                          height: "200"
                        }
                      })
                    ])
                  ]
                )
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-12 col-lg-4" },
          [
            (_vm.can("people:read") || _vm.can("people:modify")) &&
            _vm.people.data.links
              ? _c(
                  "app-table-panel",
                  {
                    attrs: {
                      title: "Pessoas (" + _vm.pagination.total + ")",
                      "add-button": {
                        uri: "/people/create",
                        disabled: _vm.cannot("people:modify"),
                        dusk: "create-people-button"
                      },
                      "export-button": true,
                      "per-page": _vm.peoplePerPage,
                      "filter-text": _vm.peopleFilterText
                    },
                    on: {
                      "set-per-page": function($event) {
                        _vm.peoplePerPage = $event
                      },
                      "input-filter-text": function($event) {
                        _vm.peopleFilterText = $event.target.value
                      },
                      export: function($event) {
                        return _vm.showExportModal()
                      }
                    }
                  },
                  [
                    _c(
                      "template",
                      { slot: "selects" },
                      [
                        _c("app-institution-filter-for-person", {
                          attrs: {
                            name: "institution_id",
                            label: "Instituição",
                            required: true,
                            form: _vm.form,
                            options: _vm.environment.tables.institutions
                          }
                        }),
                        _vm._v(" "),
                        _c("app-role-filter-for-person", {
                          attrs: {
                            name: "role_id",
                            label: "Função",
                            required: true,
                            form: _vm.form,
                            options: _vm.environment.tables.roles
                          }
                        }),
                        _vm._v(" "),
                        _c("app-category-filter-for-person", {
                          attrs: {
                            name: "category_id",
                            label: "Categoria",
                            required: true,
                            form: _vm.form,
                            options: _vm.environment.tables.categories
                          }
                        }),
                        _vm._v(" "),
                        _c("app-topic-filter-for-person", {
                          attrs: {
                            name: "topic_id",
                            label: "Interesse",
                            required: true,
                            form: _vm.form,
                            options: _vm.environment.tables.topics
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "template",
                      { slot: "checkboxes" },
                      [
                        _c("app-input", {
                          attrs: {
                            name: "hasNoPhotoCheckbox",
                            label: "sem foto",
                            type: "checkbox",
                            required: true,
                            form: _vm.form,
                            inline: "true"
                          },
                          model: {
                            value: _vm.hasNoPhotoCheckbox,
                            callback: function($$v) {
                              _vm.hasNoPhotoCheckbox = $$v
                            },
                            expression: "hasNoPhotoCheckbox"
                          }
                        }),
                        _vm._v(" "),
                        _c("app-input", {
                          attrs: {
                            name: "showInactive",
                            label: "mostrar inativos",
                            type: "checkbox",
                            required: true,
                            form: _vm.form,
                            inline: "true"
                          },
                          model: {
                            value: _vm.showInactive,
                            callback: function($$v) {
                              _vm.showInactive = $$v
                            },
                            expression: "showInactive"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "app-table",
                      {
                        attrs: {
                          pagination: _vm.people.data.links.pagination,
                          columns: [
                            "#",
                            "Tratamento",
                            "Nome",
                            "Nome público",
                            "Status",
                            ""
                          ]
                        },
                        on: {
                          "goto-page": function($event) {
                            return _vm.peopleGotoPage($event)
                          }
                        }
                      },
                      _vm._l(_vm.people.data.rows, function(person) {
                        return _c(
                          "tr",
                          {
                            class: {
                              "cursor-pointer": true,
                              "bg-primary text-white": _vm.isCurrent(
                                person,
                                _vm.selected
                              )
                            },
                            on: {
                              click: function($event) {
                                return _vm.selectPerson(person)
                              }
                            }
                          },
                          [
                            _c("td", { staticClass: "align-middle" }, [
                              _vm._v(_vm._s(person.id))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "align-middle" }, [
                              _vm._v(_vm._s(person.title))
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "align-middle",
                                attrs: { dusk: "dusk-da-pessoa" }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(person.name) +
                                    "\n                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "align-middle" }, [
                              _vm._v(_vm._s(person.nickname))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "align-middle" }, [
                              _c(
                                "h6",
                                { staticClass: "m-0" },
                                [
                                  _c("app-active-badge", {
                                    attrs: {
                                      value: person.is_active,
                                      labels: ["ativo", "inativo"]
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "align-middle text-right" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "btn btn-danger btn-sm ml-1 pull-right",
                                    attrs: {
                                      to: "/people/" + person.id + "/update",
                                      tag: "button",
                                      disabled: _vm.cannot("people:modify"),
                                      title: "Editar Pessoa"
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-edit" })]
                                )
                              ],
                              1
                            )
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
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-lg-8" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12" },
              [
                (_vm.can("people:read") || _vm.can("people:modify")) &&
                _vm.selected.id &&
                _vm.personCategories.data.links
                  ? _c(
                      "app-table-panel",
                      {
                        attrs: {
                          title:
                            "Categorias: " +
                            _vm.personCategories.data.links.pagination.total,
                          "add-button": {
                            uri:
                              "/people/" +
                              _vm.people.selected.id +
                              "/categories/create",
                            disabled: _vm.cannot("people:modify"),
                            dusk: "add-category"
                          },
                          "per-page": _vm.personCategoriesPerPage,
                          "filter-text": _vm.personCategoriesFilterText
                        },
                        on: {
                          "set-per-page": function($event) {
                            _vm.personCategoriesPerPage = $event
                          },
                          "input-filter-text": function($event) {
                            _vm.personCategoriesFilterText = $event.target.value
                          }
                        }
                      },
                      [
                        _c(
                          "app-table",
                          {
                            attrs: {
                              pagination:
                                _vm.personCategories.data.links.pagination,
                              columns: ["#", "Nome", ""]
                            },
                            on: {
                              "goto-page": function($event) {
                                return _vm.personCategoriesGotoPage($event)
                              }
                            }
                          },
                          _vm._l(_vm.personCategories.data.rows, function(
                            personCategory
                          ) {
                            return _c(
                              "tr",
                              {
                                staticClass: "cursor-pointer",
                                class: {
                                  "cursor-pointer": true,
                                  "bg-primary text-white": _vm.isCurrent(
                                    personCategory,
                                    _vm.personCategories.selected
                                  )
                                }
                              },
                              [
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(personCategory.id) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(personCategory.name) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "align-middle text-right" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "btn btn-danger btn-sm mr-1 pull-right",
                                        attrs: { title: "Excluir Categoria" },
                                        on: {
                                          click: function($event) {
                                            return _vm.confirmDeletePersonCategory(
                                              personCategory
                                            )
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fa fa-trash" })]
                                    )
                                  ]
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12" },
              [
                (_vm.can("people:read") || _vm.can("people:modify")) &&
                _vm.selected.id &&
                _vm.personTopics.data.links
                  ? _c(
                      "app-table-panel",
                      {
                        attrs: {
                          title:
                            "Interesses: " +
                            _vm.personTopics.data.links.pagination.total,
                          "add-button": {
                            uri:
                              "/people/" +
                              _vm.people.selected.id +
                              "/person-topics/create",
                            disabled: _vm.cannot("people:modify")
                          },
                          "per-page": _vm.personTopicsPerPage,
                          "filter-text": _vm.personTopicsFilterText
                        },
                        on: {
                          "set-per-page": function($event) {
                            _vm.personTopicsPerPage = $event
                          },
                          "input-filter-text": function($event) {
                            _vm.personTopicsFilterText = $event.target.value
                          }
                        }
                      },
                      [
                        _c(
                          "app-table",
                          {
                            attrs: {
                              pagination:
                                _vm.personTopics.data.links.pagination,
                              columns: ["#", "Nome", ""]
                            },
                            on: {
                              "goto-page": function($event) {
                                return _vm.personTopicsGotoPage($event)
                              }
                            }
                          },
                          _vm._l(_vm.personTopics.data.rows, function(
                            personTopic
                          ) {
                            return _c(
                              "tr",
                              {
                                staticClass: "cursor-pointer",
                                class: {
                                  "cursor-pointer": true,
                                  "bg-primary text-white": _vm.isCurrent(
                                    personTopic,
                                    _vm.personTopics.selected
                                  )
                                }
                              },
                              [
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(personTopic.id) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(personTopic.topic.name) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "align-middle text-right" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "btn btn-danger btn-sm mr-1 pull-right",
                                        attrs: { title: "Excluir Interesse" },
                                        on: {
                                          click: function($event) {
                                            return _vm.confirmDeletePersonTopic(
                                              personTopic
                                            )
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fa fa-trash" })]
                                    )
                                  ]
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12" },
              [
                (_vm.can("people:read") || _vm.can("people:modify")) &&
                _vm.selected.id &&
                _vm.personInstitutions.data.links
                  ? _c(
                      "app-table-panel",
                      {
                        attrs: {
                          title:
                            "Funções: " +
                            _vm.personInstitutions.data.links.pagination.total,
                          "add-button": {
                            uri:
                              "/people/" +
                              _vm.personInstitutions.person.id +
                              "/person-institutions/create",
                            disabled: _vm.cannot("people:modify"),
                            dusk: "add-function"
                          },
                          "per-page": _vm.personInstitutionsPerPage,
                          "filter-text": _vm.personInstitutionsFilterText
                        },
                        on: {
                          "set-per-page": function($event) {
                            _vm.personInstitutionsPerPage = $event
                          },
                          "input-filter-text": function($event) {
                            _vm.personInstitutionsFilterText =
                              $event.target.value
                          }
                        }
                      },
                      [
                        _c(
                          "app-table",
                          {
                            attrs: {
                              pagination:
                                _vm.personInstitutions.data.links.pagination,
                              columns: [
                                "#",
                                "Tratamento",
                                "Instituição",
                                "Função",
                                "Status",
                                ""
                              ]
                            },
                            on: {
                              "goto-page": function($event) {
                                return _vm.personInstitutionsGotoPage($event)
                              }
                            }
                          },
                          _vm._l(_vm.personInstitutions.data.rows, function(
                            personInstitution
                          ) {
                            return _c(
                              "tr",
                              {
                                staticClass: "cursor-pointer",
                                class: {
                                  "cursor-pointer": true,
                                  "bg-primary text-white": _vm.isCurrent(
                                    personInstitution,
                                    _vm.personInstitutions.selected
                                  )
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.selectPersonInstitution(
                                      personInstitution
                                    )
                                  }
                                }
                              },
                              [
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(personInstitution.id) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass: "align-middle",
                                    attrs: { dusk: "role-click" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(personInstitution.title) +
                                        "\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        personInstitution.institution.name
                                      ) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(personInstitution.role.name) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _c(
                                    "h6",
                                    { staticClass: "m-0" },
                                    [
                                      _c("app-active-badge", {
                                        attrs: {
                                          value: personInstitution.is_active,
                                          labels: ["ativo", "inativo"]
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                personInstitution.advised_id == null
                                  ? _c(
                                      "td",
                                      {
                                        staticClass: "align-middle text-right"
                                      },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            staticClass:
                                              "btn btn-danger btn-sm ml-1 pull-right",
                                            attrs: {
                                              to:
                                                "/people/" +
                                                _vm.personInstitutions.person
                                                  .id +
                                                "/person-institutions/" +
                                                personInstitution.id +
                                                "/update",
                                              tag: "button",
                                              disabled: _vm.cannot(
                                                "people:modify"
                                              ),
                                              title: "Editar Função"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-edit"
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ]
                            )
                          }),
                          0
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12" },
              [
                (_vm.can("people:read") || _vm.can("people:modify")) &&
                _vm.personInstitutions.selected.id &&
                _vm.contacts.data.links
                  ? _c(
                      "app-table-panel",
                      {
                        attrs: {
                          title:
                            "Contatos: " +
                            _vm.contacts.data.links.pagination.total,
                          "add-button": {
                            uri:
                              "/people/" +
                              _vm.personInstitutions.person.id +
                              "/person-institutions/" +
                              _vm.contacts.personInstitution.id +
                              "/contacts/create",
                            disabled: _vm.cannot("people:modify"),
                            dusk: "add-contact"
                          },
                          "per-page": _vm.contactsPerPage,
                          "filter-text": _vm.contactsFilterText
                        },
                        on: {
                          "set-per-page": function($event) {
                            _vm.contactsPerPage = $event
                          },
                          "input-filter-text": function($event) {
                            _vm.contactsFilterText = $event.target.value
                          }
                        }
                      },
                      [
                        _c(
                          "app-table",
                          {
                            attrs: {
                              pagination: _vm.contacts.data.links.pagination,
                              columns: ["#", "Tipo", "Contato", "Status", ""]
                            },
                            on: {
                              "goto-page": function($event) {
                                return _vm.contactsGotoPage($event)
                              }
                            }
                          },
                          _vm._l(_vm.contacts.data.rows, function(contact) {
                            return _c(
                              "tr",
                              {
                                staticClass: "cursor-pointer",
                                class: {
                                  "cursor-pointer": true,
                                  "bg-primary text-white": _vm.isCurrent(
                                    contact,
                                    _vm.contacts.selected
                                  )
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.selectContact(contact)
                                  }
                                }
                              },
                              [
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(contact.id) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(contact.contact_type.name) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(contact.contact) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _c(
                                    "h6",
                                    { staticClass: "m-0" },
                                    [
                                      _c("app-active-badge", {
                                        attrs: {
                                          value: contact.is_active,
                                          labels: ["ativo", "inativo"]
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "align-middle text-right" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "btn btn-danger btn-sm ml-1 pull-right",
                                        attrs: {
                                          to:
                                            "/people/" +
                                            _vm.personInstitutions.person.id +
                                            "/person-institutions/" +
                                            _vm.contacts.personInstitution.id +
                                            "/contacts/" +
                                            contact.id +
                                            "/update",
                                          tag: "button",
                                          disabled: _vm.cannot("people:modify"),
                                          title: "Editar Contato"
                                        }
                                      },
                                      [_c("i", { staticClass: "fa fa-edit" })]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12" },
              [
                (_vm.can("people:read") || _vm.can("people:modify")) &&
                _vm.personInstitutions.selected.id &&
                _vm.addresses.data.links
                  ? _c(
                      "app-table-panel",
                      {
                        attrs: {
                          title:
                            "Endereços: " +
                            _vm.addresses.data.links.pagination.total,
                          "add-button": {
                            uri:
                              "/people/" +
                              _vm.personInstitutions.person.id +
                              "/person-institutions/" +
                              _vm.addresses.personInstitution.id +
                              "/addresses/create",
                            disabled: _vm.cannot("people:modify")
                          },
                          "per-page": _vm.addressesPerPage,
                          "filter-text": _vm.addressesFilterText
                        },
                        on: {
                          "set-per-page": function($event) {
                            _vm.addressesPerPage = $event
                          },
                          "input-filter-text": function($event) {
                            _vm.addressesFilterText = $event.target.value
                          }
                        }
                      },
                      [
                        _c(
                          "app-table",
                          {
                            attrs: {
                              pagination: _vm.addresses.data.links.pagination,
                              columns: [
                                "#",
                                "Rua",
                                "Numero",
                                "Complemento",
                                "Bairro",
                                "Cidade",
                                ""
                              ],
                              rows: _vm.addresses.data.rows
                            },
                            on: {
                              "goto-page": function($event) {
                                return _vm.addressesGotoPage($event)
                              }
                            }
                          },
                          _vm._l(_vm.addresses.data.rows, function(address) {
                            return _c(
                              "tr",
                              {
                                staticClass: "cursor-pointer",
                                class: {
                                  "cursor-pointer": true,
                                  "bg-primary text-white": _vm.isCurrent(
                                    address,
                                    _vm.addresses.selected
                                  )
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.selectAddress(address)
                                  }
                                }
                              },
                              [
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(address.id) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(address.street) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(address.number) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(address.complement) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(address.neighbourhood) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(address.zipcode) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(address.city) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(address.state) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "align-middle text-right" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "btn btn-danger btn-sm ml-1 pull-right",
                                        attrs: {
                                          to:
                                            "/people/" +
                                            _vm.personInstitutions.person.id +
                                            "/person-institutions/" +
                                            _vm.addresses.personInstitution.id +
                                            "/addresses/" +
                                            address.id +
                                            "/update",
                                          tag: "button",
                                          disabled: _vm.cannot("people:modify"),
                                          title: "Editar Endereço"
                                        }
                                      },
                                      [_c("i", { staticClass: "fa fa-edit" })]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12" },
              [
                (_vm.can("people:read") || _vm.can("people:modify")) &&
                _vm.personInstitutions.selected.id &&
                _vm.advisors.data.links
                  ? _c(
                      "app-table-panel",
                      {
                        attrs: {
                          title:
                            "Assessores: " +
                            _vm.advisors.data.links.pagination.total,
                          "add-button": {
                            uri:
                              "/people/" +
                              _vm.personInstitutions.person.id +
                              "/person-institutions/" +
                              _vm.advisors.personInstitution.id +
                              "/advisors/create",
                            disabled: _vm.cannot("people:modify")
                          },
                          "per-page": _vm.advisorsPerPage,
                          "filter-text": _vm.advisorsFilterText
                        },
                        on: {
                          "set-per-page": function($event) {
                            _vm.advisorsPerPage = $event
                          },
                          "input-filter-text": function($event) {
                            _vm.advisorsFilterText = $event.target.value
                          }
                        }
                      },
                      [
                        _c(
                          "app-table",
                          {
                            attrs: {
                              pagination: _vm.advisors.data.links.pagination,
                              columns: [
                                "#",
                                "Tratamento",
                                "Nome",
                                "Nome Público",
                                ""
                              ]
                            },
                            on: {
                              "goto-page": function($event) {
                                return _vm.advisorsGotoPage($event)
                              }
                            }
                          },
                          _vm._l(_vm.advisors.data.rows, function(advisor) {
                            return _c(
                              "tr",
                              {
                                staticClass: "cursor-pointer",
                                class: {
                                  "cursor-pointer": true,
                                  "bg-primary text-white": _vm.isCurrent(
                                    advisor,
                                    _vm.advisors.selected
                                  )
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.selectAdvisor(advisor)
                                  }
                                }
                              },
                              [
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(advisor.id) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(advisor.person.title) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(advisor.person.name) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(advisor.person.nickname) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "align-middle" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "btn btn-danger btn-sm ml-1 pull-right",
                                        attrs: {
                                          to:
                                            "/people/" +
                                            _vm.personInstitutions.person.id +
                                            "/person-institutions/" +
                                            _vm.advisors.personInstitution.id +
                                            "/advisors/" +
                                            advisor.id +
                                            "/update",
                                          tag: "button",
                                          disabled: _vm.cannot("people:modify"),
                                          title: "Editar Assessor"
                                        }
                                      },
                                      [_c("i", { staticClass: "fa fa-edit" })]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12" },
              [
                (_vm.can("people:read") || _vm.can("people:modify")) &&
                _vm.advisors.selected.id &&
                _vm.advisorContacts.data.links
                  ? _c(
                      "app-table-panel",
                      {
                        attrs: {
                          title:
                            "Contatos de " +
                            _vm.advisors.selected.person.name +
                            ": " +
                            _vm.advisorContacts.data.links.pagination.total,
                          "add-button": {
                            uri:
                              "/people/" +
                              _vm.advisors.person.id +
                              "/person-institutions/" +
                              _vm.personInstitutions.selected.id +
                              "/advisors/" +
                              _vm.advisorContacts.personInstitution.id +
                              "/contacts/create",
                            disabled: _vm.cannot("people:modify")
                          },
                          "per-page": _vm.advisorContactsPerPage,
                          "filter-text": _vm.advisorContactsFilterText
                        },
                        on: {
                          "set-per-page": function($event) {
                            _vm.advisorContactsPerPage = $event
                          },
                          "input-filter-text": function($event) {
                            _vm.advisorContactsFilterText = $event.target.value
                          }
                        }
                      },
                      [
                        _c(
                          "app-table",
                          {
                            attrs: {
                              pagination:
                                _vm.advisorContacts.data.links.pagination,
                              columns: ["#", "Tipo", "Contato", ""]
                            },
                            on: {
                              "goto-page": function($event) {
                                return _vm.advisorContactsGotoPage($event)
                              }
                            }
                          },
                          _vm._l(_vm.advisorContacts.data.rows, function(
                            advisorContact
                          ) {
                            return _c(
                              "tr",
                              {
                                staticClass: "cursor-pointer",
                                class: {
                                  "cursor-pointer": true,
                                  "bg-primary text-white": _vm.isCurrent(
                                    advisorContact,
                                    _vm.advisorContacts.selected
                                  )
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.selectAdvisorContacts(
                                      advisorContact
                                    )
                                  }
                                }
                              },
                              [
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(advisorContact.id) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(advisorContact.contact_type.name) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "align-middle" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(advisorContact.contact) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "align-middle text-right" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "btn btn-danger btn-sm ml-1 pull-right",
                                        attrs: {
                                          to:
                                            "/people/" +
                                            _vm.advisors.person.id +
                                            "/person-institutions/" +
                                            _vm.personInstitutions.selected.id +
                                            "/advisors/" +
                                            _vm.advisorContacts
                                              .personInstitution.id +
                                            "/contacts/" +
                                            advisorContact.id +
                                            "/update",
                                          tag: "button",
                                          disabled: _vm.cannot("people:modify"),
                                          title: "Editar Contato do Assessor"
                                        }
                                      },
                                      [_c("i", { staticClass: "fa fa-edit" })]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "exportModal",
            "body-class": "mx-auto",
            title: "Selecione os campos a exportar",
            centered: ""
          },
          model: {
            value: _vm.showExport,
            callback: function($$v) {
              _vm.showExport = $$v
            },
            expression: "showExport"
          }
        },
        [
          _c("div", { staticClass: "modal-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c(
                  "form",
                  { attrs: { action: "do" } },
                  _vm._l(_vm.exportableOptions, function(option) {
                    return _c("app-input", {
                      key: option.code,
                      attrs: {
                        label: option.title,
                        type: "checkbox",
                        form: _vm.form,
                        inline: "true"
                      },
                      on: {
                        input: function($event) {
                          return _vm.toggleExportOption(option, $event)
                        }
                      }
                    })
                  }),
                  1
                )
              ])
            ])
          ]),
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
                "button",
                {
                  staticClass: "float-right btn btn-success",
                  on: {
                    click: function($event) {
                      _vm.showExport = false
                    }
                  }
                },
                [_vm._v("\n                Fechar\n            ")]
              ),
              _vm._v(" "),
              false
                ? undefined
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "float-right btn btn-outline-secondary mr-2",
                  on: {
                    click: function($event) {
                      return _vm.doExport("csv")
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-file-excel" }),
                  _vm._v(" Excel\n            ")
                ]
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [_c("h2", [_vm._v("Pessoas")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/People.vue":
/*!***************************************!*\
  !*** ./resources/js/views/People.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _People_vue_vue_type_template_id_02fd0cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./People.vue?vue&type=template&id=02fd0cee& */ "./resources/js/views/People.vue?vue&type=template&id=02fd0cee&");
/* harmony import */ var _People_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./People.vue?vue&type=script&lang=js& */ "./resources/js/views/People.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _People_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _People_vue_vue_type_template_id_02fd0cee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _People_vue_vue_type_template_id_02fd0cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/People.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/People.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/People.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./People.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/People.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/People.vue?vue&type=template&id=02fd0cee&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/People.vue?vue&type=template&id=02fd0cee& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_template_id_02fd0cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./People.vue?vue&type=template&id=02fd0cee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/People.vue?vue&type=template&id=02fd0cee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_template_id_02fd0cee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_template_id_02fd0cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ })

}]);