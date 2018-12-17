(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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




var service = {
  name: 'people',
  uri: 'people'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_crud__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_people__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_permissions__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      service: service
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])(service.name, ['selectPerson', 'selectPersonInstitution', 'selectAddress', 'selectContact', 'selectAdvisor', 'selectAdvisorContacts']), {
    peopleGotoPage: function peopleGotoPage(page) {
      this.gotoPage(page, 'people', this.people.data.links.pagination);
    },
    personInstitutionsGotoPage: function personInstitutionsGotoPage(page) {
      this.gotoPage(page, 'personInstitutions', this.personInstitutions.data.links.pagination);
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
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/People.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/People.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/People.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/People.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./People.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/People.vue?vue&type=style&index=0&lang=css&");

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
  return _c("div", [
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
                      staticClass: "img-thumbnail rounded mx-auto d-block mb-2",
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
        { staticClass: "col-4" },
        [
          _vm.people.data.links
            ? _c(
                "app-table-panel",
                {
                  attrs: {
                    title: "Pessoas (" + _vm.pagination.total + ")",
                    "add-button": {
                      uri: "/people/create",
                      disabled: _vm.cannot("create")
                    },
                    "per-page": _vm.peoplePerPage,
                    "filter-text": _vm.peopleFilterText
                  },
                  on: {
                    "set-per-page": function($event) {
                      _vm.peoplePerPage = $event
                    },
                    "input-filter-text": function($event) {
                      _vm.peopleFilterText = $event.target.value
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
                        columns: ["#", "Tratamento", "Nome", "Nome público", ""]
                      },
                      on: {
                        "goto-page": function($event) {
                          _vm.peopleGotoPage($event)
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
                              _vm.selectPerson(person)
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
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(person.name))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(person.nickname))
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
                                    disabled: _vm.cannot("update"),
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
      _c("div", { staticClass: "col-8" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _vm.selected.id && _vm.personCategories.data.links
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
                          disabled: _vm.cannot("create")
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
                              _vm.personCategoriesGotoPage($event)
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
                                          _vm.confirmDeletePersonCategory(
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
              _vm.selected.id && _vm.personInstitutions.data.links
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
                          disabled: _vm.cannot("create")
                        },
                        "per-page": _vm.personInstitutionsPerPage,
                        "filter-text": _vm.personInstitutionsFilterText
                      },
                      on: {
                        "set-per-page": function($event) {
                          _vm.personInstitutionsPerPage = $event
                        },
                        "input-filter-text": function($event) {
                          _vm.personInstitutionsFilterText = $event.target.value
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
                              _vm.personInstitutionsGotoPage($event)
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
                                  _vm.selectPersonInstitution(personInstitution)
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
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(personInstitution.title) +
                                    "\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(personInstitution.institution.name) +
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
                                              personInstitution.id +
                                              "/update",
                                            tag: "button",
                                            disabled: _vm.cannot("update"),
                                            title: "Editar Função"
                                          }
                                        },
                                        [_c("i", { staticClass: "fa fa-edit" })]
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
              _vm.personInstitutions.selected.id && _vm.contacts.data.links
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
                          disabled: _vm.cannot("create")
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
                              _vm.contactsGotoPage($event)
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
                                  _vm.selectContact(contact)
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
                                        disabled: _vm.cannot("update"),
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
              _vm.personInstitutions.selected.id && _vm.addresses.data.links
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
                          disabled: _vm.cannot("create")
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
                              _vm.addressesGotoPage($event)
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
                                  _vm.selectAddress(address)
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
                                        disabled: _vm.cannot("update"),
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
              _vm.personInstitutions.selected.id && _vm.advisors.data.links
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
                          disabled: _vm.cannot("create")
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
                              _vm.advisorsGotoPage($event)
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
                                  _vm.selectAdvisor(advisor)
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
                                        disabled: _vm.cannot("update"),
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
              _vm.advisors.selected.id && _vm.advisorContacts.data.links
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
                          disabled: _vm.cannot("create")
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
                              _vm.advisorContactsGotoPage($event)
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
                                  _vm.selectAdvisorContacts(advisorContact)
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
                                          _vm.advisorContacts.personInstitution
                                            .id +
                                          "/contacts/" +
                                          advisorContact.id +
                                          "/update",
                                        tag: "button",
                                        disabled: _vm.cannot("update"),
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
    ])
  ])
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
/* empty/unused harmony star reexport *//* harmony import */ var _People_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./People.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/People.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/views/People.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************!*\
  !*** ./resources/js/views/People.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./People.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/People.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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
    advisors: function advisors(state) {
      return state.advisors;
    },
    advisorContacts: function advisorContacts(state) {
      return state.advisorContacts;
    }
  }))
});

/***/ }),

/***/ "./resources/js/views/mixins/permissions.js":
/*!**************************************************!*\
  !*** ./resources/js/views/mixins/permissions.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    can: function can(permission) {
      return permission && true;
    },
    cannot: function cannot(permission) {
      return !this.can(permission);
    }
  }
});

/***/ })

}]);