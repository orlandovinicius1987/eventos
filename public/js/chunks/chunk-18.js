(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Events.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Events.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/crud */ "./resources/js/views/mixins/crud.js");
/* harmony import */ var _mixins_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/events */ "./resources/js/views/mixins/events.js");
/* harmony import */ var _mixins_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/permissions */ "./resources/js/views/mixins/permissions.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
var _objectSpread2;

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
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'events',
  uri: 'events'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_crud__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_events__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_permissions__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      service: service,
      downloading: false
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])(service.name, ['selectEvent', 'selectSubEvent', 'selectInvitation']), (_objectSpread2 = {
    eventsGotoPage: function eventsGotoPage(page) {
      this.gotoPage(page, 'events', this.events.data.links.pagination);
    },
    subEventsGotoPage: function subEventsGotoPage(page) {
      this.gotoPage(page, 'subEvents', this.subEvents.data.links.pagination);
    },
    invitationsGotoPage: function invitationsGotoPage(page) {
      this.gotoPage(page, 'invitations', this.invitations.data.links.pagination);
    },
    unInvite: function unInvite(invitation) {
      var _this = this;

      confirm('Deseja realmente desconvidar ' + invitation.person_institution.person.name + '?', this).then(function (value) {
        if (value) {
          return _this.$store.dispatch('invitations/unInvite', invitation);
        }
      });
    },
    markAsAccepted: function markAsAccepted(invitation) {
      var _this2 = this;

      confirm('Deseja realmente confirmar a presença de ' + invitation.person_institution.person.name + '?', this).then(function (value) {
        if (value) {
          return _this2.$store.dispatch('invitations/markAsAccepted', invitation);
        }
      });
    },
    markAsReceived: function markAsReceived(invitation, type) {
      var _this3 = this;

      confirm('Deseja realment marcar como recebido o covite de ' + invitation.person_institution.person.name + '?', this).then(function (value) {
        if (value) {
          return _this3.$store.dispatch('invitations/markAsReceived', {
            invitation: invitation,
            type: type
          });
        }
      });
    },
    markAsDeclined: function markAsDeclined(invitation) {
      var _this4 = this;

      confirm('Deseja realmente declinar a presença de ' + invitation.person_institution.person.name + '?', this).then(function (value) {
        if (value) {
          return _this4.$store.dispatch('invitations/markAsDeclined', invitation);
        }
      });
    },
    downloadInvitation: function downloadInvitation(invitation) {
      invitation.busy = true;
      downloadPDF(this.$store.getters['invitations/getDataUrl'] + '/' + invitation.id + '/download').then(function () {
        invitation.busy = false;
      });
    },
    sendCredential: function sendCredential(invitation) {
      var _this5 = this;

      invitation.busy = true;
      confirm('Deseja realmente enviar as credencias para ' + invitation.person_institution.person.name + '?', this).then(function (value) {
        if (value) {
          return _this5.$store.dispatch('invitations/sendCredentials', invitation);
        }
      });
    },
    sendInvitation: function sendInvitation(invitation) {
      var _this6 = this;

      invitation.busy = true;
      confirm('Deseja realmente enviar o convite para ' + invitation.person_institution.person.name + '?', this).then(function (value) {
        if (value) {
          return _this6.$store.dispatch('invitations/sendInvitation', invitation);
        }
      });
    },
    confirmSubEvent: function confirmSubEvent(subEvent) {
      var _this7 = this;

      confirm('Deseja realmente confirmar ' + subEvent.name + '?', this).then(function (value) {
        if (value) {
          return _this7.$store.dispatch('subEvents/confirm', subEvent);
        }
      });
    },
    finalizeSubEvent: function finalizeSubEvent(subEvent) {
      var _this8 = this;

      confirm('Deseja realmente confirmar que o evento foi realizado ' + subEvent.name + '?', this).then(function (value) {
        if (value) {
          _this8.finalizeSubEventReconfirmed(subEvent);
        }
      });
    },
    finalizeSubEventReconfirmed: function finalizeSubEventReconfirmed(subEvent) {
      var _this9 = this;

      confirm('Tem certeza que deseja marcar este sub-evento como realizado?', this).then(function (value) {
        if (value) {
          return _this9.$store.dispatch('subEvents/finalize', subEvent);
        }
      });
    },
    sendInvitations: function sendInvitations(event) {
      var _this10 = this;

      confirm('Você tem certeza que deseja enviar todos os convites agora?', this).then(function (value) {
        if (value) {
          event.busy = true;
          return _this10.$store.dispatch('events/sendInvitations', event).then(function () {
            event.busy = false;
          });
        }
      });
    },
    sendCredentials: function sendCredentials(event) {
      var _this11 = this;

      confirm('Você tem certeza que deseja enviar todas as credenciais agora?', this).then(function (value) {
        if (value) {
          event.busy = true;
          return _this11.$store.dispatch('events/sendCredentials', event).then(function () {
            event.busy = false;
          });
        }
      });
    }
  }, _defineProperty(_objectSpread2, "sendCredentials", function sendCredentials(event) {
    var _this12 = this;

    confirm('Você tem certeza que deseja enviar todas as credenciais agora?', this).then(function (value) {
      if (value) {
        event.busy = true;
        return _this12.$store.dispatch('events/sendCredentials', event).then(function () {
          event.busy = false;
        });
      }
    });
  }), _defineProperty(_objectSpread2, "downloadSubEventPDF", function downloadSubEventPDF(subEvent) {
    var _this13 = this;

    this.downloading = true;
    downloadPDF(this.$store.getters['subEvents/getDataUrl'] + '/' + subEvent.id + '/download').then(function () {
      _this13.downloading = false;
    });
  }), _defineProperty(_objectSpread2, "canSendEmail", function canSendEmail(invitation) {
    return invitation.has_email && invitation.sub_event.confirmed_at;
  }), _defineProperty(_objectSpread2, "replicateCommonInfo", function replicateCommonInfo(subEvent) {
    var _this14 = this;

    confirm('Você tem certeza que replicar os textos de "' + subEvent.name + ' - ' + subEvent.sector.name + '" para os outros sub-eventos?', this).then(function (value) {
      confirm('CERTEZA ABSOLUTA?', _this14).then(function (value) {
        if (value) {
          subEvent.busy = true;
          return _this14.$store.dispatch('subEvents/replicateCommonInfo', subEvent).then(function () {
            subEvent.busy = false;
          });
        }
      });
    });
  }), _defineProperty(_objectSpread2, "filterNotifications", function filterNotifications(notifications, type) {
    return _.filter(notifications, function (notification) {
      return notification.content_type === type;
    });
  }), _defineProperty(_objectSpread2, "filterNotificationsReceived", function filterNotificationsReceived(notifications, type) {
    return _.filter(this.filterNotifications(notifications, type), function (notification) {
      return notification.received_at;
    });
  }), _objectSpread2)),
  computed: {
    eventsFilterText: {
      get: function get() {
        return this.$store.state['events'].data.filter.text;
      },
      set: function set(filter) {
        return this.$store.dispatch(this.service.name + '/mutateSetQueryFilterText', filter);
      }
    },
    eventsPerPage: {
      get: function get() {
        return this.$store.state['events'].data.links.pagination.per_page;
      },
      set: function set(perPage) {
        return this.$store.dispatch('events/setPerPage', perPage);
      }
    },
    subEventsFilterText: {
      get: function get() {
        return this.$store.state['subEvents'].data.filter.text;
      },
      set: function set(filter) {
        return this.$store.dispatch('subEvents/mutateSetQueryFilterText', filter);
      }
    },
    subEventsPerPage: {
      get: function get() {
        return this.$store.state['subEvents'].data.links.pagination.per_page;
      },
      set: function set(perPage) {
        return this.$store.dispatch('subEvents/setPerPage', perPage);
      }
    },
    invitationsFilterText: {
      get: function get() {
        return this.$store.state['invitations'].data.filter.text;
      },
      set: function set(filter) {
        return this.$store.dispatch('invitations/mutateSetQueryFilterText', filter);
      }
    },
    hasNoEmailCheckbox: {
      get: function get() {
        return this.$store.state['invitations'].data.filter.checkboxes.hasNoEmail;
      },
      set: function set(filter) {
        this.$store.commit('invitations/mutateFilterCheckbox', {
          field: 'hasNoEmail',
          value: filter
        });
        this.$store.dispatch('invitations/load');
      }
    },
    sentCheckbox: {
      get: function get() {
        return this.$store.state['invitations'].data.filter.checkboxes.sent;
      },
      set: function set(filter) {
        this.$store.commit('invitations/mutateFilterCheckbox', {
          field: 'sent',
          value: filter
        });
        this.$store.dispatch('invitations/load');
      }
    },
    notSentCheckbox: {
      get: function get() {
        return this.$store.state['invitations'].data.filter.checkboxes.notSent;
      },
      set: function set(filter) {
        this.$store.commit('invitations/mutateFilterCheckbox', {
          field: 'notSent',
          value: filter
        });
        this.$store.dispatch('invitations/load');
      }
    },
    receivedCheckbox: {
      get: function get() {
        return this.$store.state['invitations'].data.filter.checkboxes.received;
      },
      set: function set(filter) {
        this.$store.commit('invitations/mutateFilterCheckbox', {
          field: 'received',
          value: filter
        });
        this.$store.dispatch('invitations/load');
      }
    },
    notReceivedCheckbox: {
      get: function get() {
        return this.$store.state['invitations'].data.filter.checkboxes.notReceived;
      },
      set: function set(filter) {
        this.$store.commit('invitations/mutateFilterCheckbox', {
          field: 'notReceived',
          value: filter
        });
        this.$store.dispatch('invitations/load');
      }
    },
    credentialsSentCheckbox: {
      get: function get() {
        return this.$store.state['invitations'].data.filter.checkboxes.credentialsSent;
      },
      set: function set(filter) {
        this.$store.commit('invitations/mutateFilterCheckbox', {
          field: 'credentialsSent',
          value: filter
        });
        this.$store.dispatch('invitations/load');
      }
    },
    credentialsNotSentCheckbox: {
      get: function get() {
        return this.$store.state['invitations'].data.filter.checkboxes.credentialsNotSent;
      },
      set: function set(filter) {
        this.$store.commit('invitations/mutateFilterCheckbox', {
          field: 'credentialsNotSent',
          value: filter
        });
        this.$store.dispatch('invitations/load');
      }
    },
    credentialsReceivedCheckbox: {
      get: function get() {
        return this.$store.state['invitations'].data.filter.checkboxes.credentialsReceived;
      },
      set: function set(filter) {
        this.$store.commit('invitations/mutateFilterCheckbox', {
          field: 'credentialsReceived',
          value: filter
        });
        this.$store.dispatch('invitations/load');
      }
    },
    credentialsNotReceivedCheckbox: {
      get: function get() {
        return this.$store.state['invitations'].data.filter.checkboxes.credentialsNotReceived;
      },
      set: function set(filter) {
        this.$store.commit('invitations/mutateFilterCheckbox', {
          field: 'credentialsNotReceived',
          value: filter
        });
        this.$store.dispatch('invitations/load');
      }
    },
    acceptedCheckbox: {
      get: function get() {
        return this.$store.state['invitations'].data.filter.checkboxes.accepted;
      },
      set: function set(filter) {
        this.$store.commit('invitations/mutateFilterCheckbox', {
          field: 'accepted',
          value: filter
        });
        this.$store.dispatch('invitations/load');
      }
    },
    declinedCheckbox: {
      get: function get() {
        return this.$store.state['invitations'].data.filter.checkboxes.declined;
      },
      set: function set(filter) {
        this.$store.commit('invitations/mutateFilterCheckbox', {
          field: 'declined',
          value: filter
        });
        this.$store.dispatch('invitations/load');
      }
    },
    notAcceptedCheckbox: {
      get: function get() {
        return this.$store.state['invitations'].data.filter.checkboxes.notAccepted;
      },
      set: function set(filter) {
        this.$store.commit('invitations/mutateFilterCheckbox', {
          field: 'notAccepted',
          value: filter
        });
        this.$store.dispatch('invitations/load');
      }
    },
    notCheckedInCheckbox: {
      get: function get() {
        return this.$store.state['invitations'].data.filter.checkboxes.notCheckedIn;
      },
      set: function set(filter) {
        this.$store.commit('invitations/mutateFilterCheckbox', {
          field: 'notCheckedIn',
          value: filter
        });
        this.$store.dispatch('invitations/load');
      }
    },
    notAnsweredCheckbox: {
      get: function get() {
        return this.$store.state['invitations'].data.filter.checkboxes.notAnswered;
      },
      set: function set(filter) {
        this.$store.commit('invitations/mutateFilterCheckbox', {
          field: 'notAnswered',
          value: filter
        });
        this.$store.dispatch('invitations/load');
      }
    },
    invitationsPerPage: {
      get: function get() {
        return this.$store.state['invitations'].data.links.pagination.per_page;
      },
      set: function set(perPage) {
        return this.$store.dispatch('invitations/setPerPage', perPage);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Events.vue?vue&type=template&id=1b973310&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Events.vue?vue&type=template&id=1b973310& ***!
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
      _vm.selected.id && _vm.events.data.links
        ? _c("div", { staticClass: "row bg-primary text-white" }, [
            _c("div", { staticClass: "col-12 mt-2" }, [
              _c("h3", [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.selected.name) +
                    "\n\n                    "
                ),
                _vm.subEvents.selected &&
                _vm.subEvents.selected.id == _vm.events.selected.id &&
                _vm.subEvents.selected.name
                  ? _c("span", [
                      _vm._v(
                        "\n                        - " +
                          _vm._s(_vm.subEvents.selected.name) +
                          "\n                    "
                      )
                    ])
                  : _vm._e()
              ])
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
          _c(
            "app-table-panel",
            {
              attrs: {
                title: "Eventos (" + _vm.pagination.total + ")",
                "add-button": {
                  uri: "/events/create",
                  disabled: _vm.cannot("events:modify"),
                  dusk: "create-event-button"
                },
                "per-page": _vm.eventsPerPage,
                "filter-text": _vm.eventsFilterText
              },
              on: {
                "set-per-page": function($event) {
                  _vm.eventsPerPage = $event
                },
                "input-filter-text": function($event) {
                  _vm.eventsFilterText = $event.target.value
                }
              }
            },
            [
              _c(
                "app-table",
                {
                  attrs: {
                    pagination: _vm.events.data.links.pagination,
                    columns: ["Nome", ""]
                  },
                  on: {
                    "goto-page": function($event) {
                      return _vm.eventsGotoPage($event)
                    }
                  }
                },
                _vm._l(_vm.events.data.rows, function(event) {
                  return _c(
                    "tr",
                    {
                      class: {
                        "cursor-pointer": true,
                        "bg-primary-lighter text-white": _vm.isCurrent(
                          event,
                          _vm.selected
                        )
                      },
                      on: {
                        click: function($event) {
                          return _vm.selectEvent(event)
                        }
                      }
                    },
                    [
                      _c(
                        "td",
                        {
                          staticClass: "align-middle text-left",
                          attrs: { dusk: "dusk-do-evento" }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(event.name) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "align-middle text-right" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "btn btn-primary btn-sm ml-1 pull-right",
                              attrs: {
                                to: "receptive/" + event.id,
                                tag: "div",
                                title: "Receptivo"
                              }
                            },
                            [_c("i", { staticClass: "fas fa-user-friends" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-info btn-sm text-white btn-table-utility ml-1 pull-right",
                              attrs: {
                                disabled: _vm.cannot("subevents:invite"),
                                title:
                                  "Enviar todas as credenciais não enviadas"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.sendCredentials(event)
                                }
                              }
                            },
                            [
                              !event.busy
                                ? _c("i", { staticClass: "fa fa-landmark" })
                                : _vm._e(),
                              _vm._v(" "),
                              event.busy
                                ? _c("i", { staticClass: "fa fa-cog fa-spin" })
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-warning btn-sm btn-table-utility ml-1 pull-right",
                              attrs: {
                                disabled: _vm.cannot("subevents:invite"),
                                title: "Enviar todos os convites não enviados"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.sendInvitations(event)
                                }
                              }
                            },
                            [
                              !event.busy
                                ? _c("i", {
                                    staticClass: "fa fa-angle-double-right"
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              event.busy
                                ? _c("i", { staticClass: "fa fa-cog fa-spin" })
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "btn btn-danger btn-sm btn-table-utility ml-1 pull-right",
                              attrs: {
                                to: "/events/" + event.id + "/update",
                                tag: "button",
                                disabled: _vm.cannot("events:modify"),
                                title: "Editar Evento"
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-12 col-lg-8" },
        [
          (_vm.can("subevents:read") || _vm.can("subevents:modify")) &&
          _vm.selected.id &&
          _vm.subEvents.data.links
            ? _c(
                "app-table-panel",
                {
                  attrs: {
                    title:
                      _vm.selected.name +
                      " (" +
                      _vm.subEvents.data.links.pagination.total +
                      " subeventos)",
                    "add-button": {
                      uri:
                        "/events/" +
                        _vm.subEvents.event.id +
                        "/sub-events/create",
                      disabled: _vm.cannot("subevents:modify")
                    },
                    "per-page": _vm.subEventsPerPage,
                    "filter-text": _vm.subEventsFilterText
                  },
                  on: {
                    "set-per-page": function($event) {
                      _vm.subEventsPerPage = $event
                    },
                    "input-filter-text": function($event) {
                      _vm.subEventsFilterText = $event.target.value
                    }
                  }
                },
                [
                  _c(
                    "app-table",
                    {
                      attrs: {
                        pagination: _vm.subEvents.data.links.pagination,
                        columns: [
                          "Setor",
                          "Nome",
                          { title: "Convidados", trClass: "text-right" },
                          "Data",
                          "Hora",
                          "Confirmado",
                          "Realizado",
                          ""
                        ]
                      },
                      on: {
                        "goto-page": function($event) {
                          return _vm.subEventsGotoPage($event)
                        }
                      }
                    },
                    _vm._l(_vm.subEvents.data.rows, function(subEvent) {
                      return _c(
                        "tr",
                        {
                          staticClass: "cursor-pointer",
                          class: {
                            "cursor-pointer": true,
                            "bg-primary-lighter text-white": _vm.isCurrent(
                              subEvent,
                              _vm.subEvents.selected
                            )
                          },
                          on: {
                            click: function($event) {
                              return _vm.selectSubEvent(subEvent)
                            }
                          }
                        },
                        [
                          _c(
                            "td",
                            { staticClass: "align-middle" },
                            [
                              _c("app-sector-badge", {
                                attrs: {
                                  sector: subEvent.sector,
                                  uppercase: "true",
                                  padding: "2"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _c("strong", [_vm._v(_vm._s(subEvent.name))]),
                            _c("br"),
                            _vm._v(
                              "\n                            " +
                                _vm._s(subEvent.place) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle text-right" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(subEvent.invitations_count) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(subEvent.date))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(subEvent.time))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(subEvent.confirmed_at) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(subEvent.ended_at) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "align-middle text-right subevents-buttons"
                            },
                            [
                              !subEvent.associated_subevent_id
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-info btn-sm btn-table-utility text-white ml-1 pull-right",
                                      attrs: {
                                        disabled: _vm.cannot(
                                          "subevents:modify"
                                        ),
                                        title:
                                          "Replicar textos para todos os outros subeventos"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.replicateCommonInfo(
                                            subEvent
                                          )
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-copy" })]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              !subEvent.confirmed_at
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-success btn-sm btn-table-utility ml-1 pull-right",
                                      attrs: {
                                        disabled:
                                          _vm.cannot("subevents:modify") ||
                                          !_vm.environment.events.confirmation
                                            .enabled,
                                        title: "Confirmar Sub-evento"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.confirmSubEvent(subEvent)
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-check" })]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              !subEvent.ended_at && subEvent.confirmed_at
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-primary btn-sm btn-table-utility ml-1 pull-right",
                                      attrs: {
                                        disabled: _vm.cannot(
                                          "subevents:modify"
                                        ),
                                        title: "Finalizar Sub-evento"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.finalizeSubEvent(subEvent)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-times-circle"
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "btn btn-danger btn-sm btn-table-utility ml-1 pull-right",
                                  attrs: {
                                    to:
                                      "events/" +
                                      _vm.subEvents.event.id +
                                      "/sub-events/" +
                                      subEvent.id +
                                      "/update",
                                    tag: "button",
                                    disabled: _vm.cannot("subevents:modify"),
                                    title: "Editar Sub-evento"
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-edit" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-warning btn-sm btn-table-utility ml-1 pull-right",
                                  attrs: {
                                    title: "Imprimir lista de convidados"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.downloadSubEventPDF(subEvent)
                                    }
                                  }
                                },
                                [
                                  !_vm.downloading
                                    ? _c("i", { staticClass: "fa fa-print" })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.downloading
                                    ? _c("i", {
                                        staticClass: "fa fa-cog fa-spin"
                                      })
                                    : _vm._e()
                                ]
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
    ]),
    _vm._v(" "),
    _vm.invitations.subEvent.id
      ? _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-12" },
            [
              (_vm.can("subevents:read") || _vm.can("subevents:modify")) &&
              _vm.selected.id &&
              _vm.invitations.data.links
                ? _c(
                    "app-table-panel",
                    {
                      attrs: {
                        title:
                          _vm.invitations.data.links.pagination.total +
                          " convidado" +
                          (_vm.invitations.data.links.pagination.total == 1
                            ? ""
                            : "s") +
                          " para " +
                          _vm.subEvents.selected.name +
                          " de " +
                          _vm.selected.name,
                        "add-button": {
                          uri:
                            "/events/" +
                            _vm.subEvents.event.id +
                            "/sub-events/" +
                            _vm.subEvents.selected.id +
                            "/invitations/create",
                          disabled: _vm.cannot("subevents:invite")
                        },
                        "per-page": _vm.invitationsPerPage,
                        "filter-text": _vm.invitationsFilterText,
                        "dont-center-filters": "true"
                      },
                      on: {
                        "set-per-page": function($event) {
                          _vm.invitationsPerPage = $event
                        },
                        "input-filter-text": function($event) {
                          _vm.invitationsFilterText = $event.target.value
                        }
                      }
                    },
                    [
                      _c("template", { slot: "checkboxes" }, [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col" },
                            [
                              _c("app-input", {
                                attrs: {
                                  name: "hasNoEmailCheckbox",
                                  label: "sem e-mail",
                                  type: "checkbox",
                                  required: true,
                                  form: _vm.form,
                                  inline: "true"
                                },
                                model: {
                                  value: _vm.hasNoEmailCheckbox,
                                  callback: function($$v) {
                                    _vm.hasNoEmailCheckbox = $$v
                                  },
                                  expression: "hasNoEmailCheckbox"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col" },
                            [
                              _c("app-input", {
                                attrs: {
                                  name: "sentCheckbox",
                                  label: "enviados",
                                  type: "checkbox",
                                  required: true,
                                  form: _vm.form,
                                  inline: "true"
                                },
                                model: {
                                  value: _vm.sentCheckbox,
                                  callback: function($$v) {
                                    _vm.sentCheckbox = $$v
                                  },
                                  expression: "sentCheckbox"
                                }
                              }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("app-input", {
                                attrs: {
                                  name: "notSentCheckbox",
                                  label: "não enviados",
                                  type: "checkbox",
                                  required: true,
                                  form: _vm.form,
                                  inline: "true"
                                },
                                model: {
                                  value: _vm.notSentCheckbox,
                                  callback: function($$v) {
                                    _vm.notSentCheckbox = $$v
                                  },
                                  expression: "notSentCheckbox"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col" },
                            [
                              _c("app-input", {
                                attrs: {
                                  name: "receivedCheckbox",
                                  label: "recebidos",
                                  type: "checkbox",
                                  required: true,
                                  form: _vm.form,
                                  inline: "true"
                                },
                                model: {
                                  value: _vm.receivedCheckbox,
                                  callback: function($$v) {
                                    _vm.receivedCheckbox = $$v
                                  },
                                  expression: "receivedCheckbox"
                                }
                              }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("app-input", {
                                attrs: {
                                  name: "notReceivedCheckbox",
                                  label: "não recebidos",
                                  type: "checkbox",
                                  required: true,
                                  form: _vm.form,
                                  inline: "true"
                                },
                                model: {
                                  value: _vm.notReceivedCheckbox,
                                  callback: function($$v) {
                                    _vm.notReceivedCheckbox = $$v
                                  },
                                  expression: "notReceivedCheckbox"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col" },
                            [
                              _c("app-input", {
                                attrs: {
                                  name: "acceptedCheckbox",
                                  label: "aceitos",
                                  type: "checkbox",
                                  required: true,
                                  form: _vm.form,
                                  inline: "true"
                                },
                                model: {
                                  value: _vm.acceptedCheckbox,
                                  callback: function($$v) {
                                    _vm.acceptedCheckbox = $$v
                                  },
                                  expression: "acceptedCheckbox"
                                }
                              }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("app-input", {
                                attrs: {
                                  name: "notAcceptedCheckbox",
                                  label: "não aceitos",
                                  type: "checkbox",
                                  required: true,
                                  form: _vm.form,
                                  inline: "true"
                                },
                                model: {
                                  value: _vm.notAcceptedCheckbox,
                                  callback: function($$v) {
                                    _vm.notAcceptedCheckbox = $$v
                                  },
                                  expression: "notAcceptedCheckbox"
                                }
                              }),
                              _vm._v(" "),
                              _c("app-input", {
                                attrs: {
                                  name: "declinedCheckbox",
                                  label: "declinados",
                                  type: "checkbox",
                                  required: true,
                                  form: _vm.form,
                                  inline: "true"
                                },
                                model: {
                                  value: _vm.declinedCheckbox,
                                  callback: function($$v) {
                                    _vm.declinedCheckbox = $$v
                                  },
                                  expression: "declinedCheckbox"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col" },
                            [
                              _c("app-input", {
                                attrs: {
                                  name: "credentialsSentCheckbox",
                                  label: "credenciais enviadas",
                                  type: "checkbox",
                                  required: true,
                                  form: _vm.form,
                                  inline: "true"
                                },
                                model: {
                                  value: _vm.credentialsSentCheckbox,
                                  callback: function($$v) {
                                    _vm.credentialsSentCheckbox = $$v
                                  },
                                  expression: "credentialsSentCheckbox"
                                }
                              }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("app-input", {
                                attrs: {
                                  name: "credentialsNotSentCheckbox",
                                  label: "credenciais não enviadas",
                                  type: "checkbox",
                                  required: true,
                                  form: _vm.form,
                                  inline: "true"
                                },
                                model: {
                                  value: _vm.credentialsNotSentCheckbox,
                                  callback: function($$v) {
                                    _vm.credentialsNotSentCheckbox = $$v
                                  },
                                  expression: "credentialsNotSentCheckbox"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col" },
                            [
                              _c("app-input", {
                                attrs: {
                                  name: "credentialsReceivedCheckbox",
                                  label: "credenciais recebidas",
                                  type: "checkbox",
                                  required: true,
                                  form: _vm.form,
                                  inline: "true"
                                },
                                model: {
                                  value: _vm.credentialsReceivedCheckbox,
                                  callback: function($$v) {
                                    _vm.credentialsReceivedCheckbox = $$v
                                  },
                                  expression: "credentialsReceivedCheckbox"
                                }
                              }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("app-input", {
                                attrs: {
                                  name: "credentialsNotReceivedCheckbox",
                                  label: "credenciais não recebidas",
                                  type: "checkbox",
                                  required: true,
                                  form: _vm.form,
                                  inline: "true"
                                },
                                model: {
                                  value: _vm.credentialsNotReceivedCheckbox,
                                  callback: function($$v) {
                                    _vm.credentialsNotReceivedCheckbox = $$v
                                  },
                                  expression: "credentialsNotReceivedCheckbox"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col" },
                            [
                              _c("app-input", {
                                attrs: {
                                  name: "notCheckedInCheckbox",
                                  label: "não fizeram check in",
                                  type: "checkbox",
                                  required: true,
                                  form: _vm.form,
                                  inline: "true"
                                },
                                model: {
                                  value: _vm.notCheckedInCheckbox,
                                  callback: function($$v) {
                                    _vm.notCheckedInCheckbox = $$v
                                  },
                                  expression: "notCheckedInCheckbox"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "app-table",
                        {
                          attrs: {
                            pagination: _vm.invitations.data.links.pagination,
                            columns: [
                              "Código",
                              "Convidado",
                              { title: "Pendências", trClass: "text-center" },
                              { title: "Convite", trClass: "text-center" },
                              { title: "Credencial", trClass: "text-center" },
                              { title: "Check in", trClass: "text-center" },
                              ""
                            ]
                          },
                          on: {
                            "goto-page": function($event) {
                              return _vm.invitationsGotoPage($event)
                            }
                          }
                        },
                        _vm._l(_vm.invitations.data.rows, function(invitation) {
                          return _c(
                            "tr",
                            {
                              class: {
                                "cursor-pointer": true,
                                "bg-primary-lighter text-white": _vm.isCurrent(
                                  invitation,
                                  _vm.invitations.selected
                                )
                              },
                              on: {
                                click: function($event) {
                                  return _vm.selectInvitation(invitation)
                                }
                              }
                            },
                            [
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(invitation.code))
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "align-middle" },
                                [
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(
                                        invitation.person_institution.person
                                          .name
                                      )
                                    )
                                  ]),
                                  _vm._v(
                                    "\n\n                            (" +
                                      _vm._s(
                                        invitation.person_institution.title
                                      ) +
                                      ")\n\n                            "
                                  ),
                                  _c("br"),
                                  _vm._v(
                                    "\n\n                            " +
                                      _vm._s(
                                        invitation.person_institution.role.name
                                      ) +
                                      " -\n                            " +
                                      _vm._s(
                                        invitation.person_institution
                                          .institution.name
                                      ) +
                                      "\n\n                            "
                                  ),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "badge bg-info text-white cursor-pointer",
                                      attrs: {
                                        to:
                                          "/events/" +
                                          invitation.sub_event.event.id +
                                          "/sub-events/" +
                                          invitation.sub_event.id +
                                          "/invitations/" +
                                          invitation.id +
                                          "/change",
                                        tag: "button",
                                        disabled:
                                          _vm.cannot("subevents:invite") ||
                                          _vm.cannot("people:modify"),
                                        title: "modificar instituição"
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-edit" })]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "align-middle text-center" },
                                _vm._l(invitation.pending, function(pending) {
                                  return _c("h6", { staticClass: "m-0" }, [
                                    _c(
                                      "span",
                                      { class: "badge badge-" + pending.type },
                                      [_vm._v(_vm._s(pending.label))]
                                    )
                                  ])
                                }),
                                0
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "align-middle text-center" },
                                [
                                  _c("h6", { staticClass: "mb-0" }, [
                                    invitation.sent_at
                                      ? _c(
                                          "span",
                                          {
                                            staticClass: "badge badge-success"
                                          },
                                          [
                                            _vm._v(
                                              "enviados:\n                                    " +
                                                _vm._s(
                                                  _vm.filterNotifications(
                                                    invitation.notifications,
                                                    "invitation"
                                                  ).length
                                                )
                                            )
                                          ]
                                        )
                                      : _c(
                                          "span",
                                          { staticClass: "badge badge-danger" },
                                          [_vm._v("não enviado")]
                                        )
                                  ]),
                                  _vm._v(" "),
                                  _c("h6", { staticClass: "mb-0" }, [
                                    invitation.received_at &&
                                    !invitation.received_by_id
                                      ? _c(
                                          "span",
                                          {
                                            staticClass: "badge badge-success"
                                          },
                                          [
                                            _vm._v(
                                              "recebidos:\n                                    " +
                                                _vm._s(
                                                  _vm.filterNotificationsReceived(
                                                    invitation.notifications,
                                                    "invitation"
                                                  ).length
                                                )
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    invitation.received_at &&
                                    invitation.received_by_id
                                      ? _c(
                                          "span",
                                          {
                                            staticClass: "badge badge-warning"
                                          },
                                          [_vm._v("recebido manualmente")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    !invitation.received_at
                                      ? _c(
                                          "span",
                                          { staticClass: "badge badge-danger" },
                                          [_vm._v("não recebido")]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "h6",
                                    { staticClass: "mb-0" },
                                    [
                                      invitation.accepted_at &&
                                      invitation.accepted_by_id
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-warning"
                                            },
                                            [_vm._v("aceito manualmente")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      invitation.declined_at &&
                                      invitation.declined_by_id
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-warning"
                                            },
                                            [_vm._v("declinado manualmente")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      invitation.sent_at
                                        ? [
                                            !invitation.received_at &&
                                            !invitation.accepted_at &&
                                            !invitation.declined_at
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "badge badge-danger"
                                                  },
                                                  [_vm._v("não recebido")]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            invitation.received_at &&
                                            !invitation.accepted_at &&
                                            !invitation.declined_at
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "badge badge-primary"
                                                  },
                                                  [_vm._v("não respondeu")]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            !invitation.accepted_by_id &&
                                            invitation.accepted_at
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "badge badge-success"
                                                  },
                                                  [_vm._v("aceitou")]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            !invitation.declined_by_id &&
                                            invitation.declined_at
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "badge badge-danger"
                                                  },
                                                  [_vm._v("declinou")]
                                                )
                                              : _vm._e()
                                          ]
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "align-middle text-center" },
                                [
                                  !invitation.declined_at
                                    ? _c("span", [
                                        _c("h6", { staticClass: "mb-0" }, [
                                          invitation.credentials_sent_at
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-success"
                                                },
                                                [
                                                  _vm._v(
                                                    "enviadas:\n                                        " +
                                                      _vm._s(
                                                        _vm.filterNotifications(
                                                          invitation.notifications,
                                                          "credentials"
                                                        ).length
                                                      )
                                                  )
                                                ]
                                              )
                                            : _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-danger"
                                                },
                                                [_vm._v("não enviada")]
                                              )
                                        ]),
                                        _vm._v(" "),
                                        _c("h6", { staticClass: "mb-0" }, [
                                          invitation.credentials_received_at &&
                                          !invitation.credentials_received_by_id
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-success"
                                                },
                                                [
                                                  _vm._v(
                                                    "recebidas:\n                                        " +
                                                      _vm._s(
                                                        _vm.filterNotificationsReceived(
                                                          invitation.notifications,
                                                          "credentials"
                                                        ).length
                                                      )
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          invitation.credentials_received_at &&
                                          invitation.credentials_received_by_id
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-warning"
                                                },
                                                [_vm._v("recebida manualmente")]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          !invitation.credentials_received_at
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-danger"
                                                },
                                                [_vm._v("não recebida")]
                                              )
                                            : _vm._e()
                                        ])
                                      ])
                                    : _c("span", [
                                        _c("h6", { staticClass: "mb-0" }, [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-primary"
                                            },
                                            [_vm._v("convite declinado")]
                                          )
                                        ])
                                      ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "align-middle text-center" },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(invitation.checkin_at) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "align-middle text-right" },
                                [
                                  _vm.can("subevents:invite") &&
                                  _vm.canSendEmail(invitation) &&
                                  invitation.sub_event.send_invitations
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-info btn-sm btn-sm btn-table-utility text-white ml-1 pull-right",
                                          attrs: {
                                            disabled: _vm.cannot(
                                              "subevents:invite"
                                            ),
                                            title: "Enviar convite"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.sendInvitation(
                                                invitation
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-mail-bulk"
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.can("subevents:invite") &&
                                  _vm.canSendEmail(invitation) &&
                                  invitation.sub_event.send_credentials
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-info btn-sm btn-sm btn-table-utility text-white ml-1 pull-right",
                                          attrs: {
                                            disabled:
                                              _vm.cannot("subevents:invite") ||
                                              !invitation.accepted_at,
                                            title: "Enviar credenciais"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.sendCredential(
                                                invitation
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-landmark"
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.can("subevents:modify") &&
                                  invitation.sub_event.confirmed_at &&
                                  !invitation.received_at
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-success btn-sm btn-table-utility ml-1 pull-right",
                                          attrs: {
                                            disabled: _vm.cannot(
                                              "subevents:invite"
                                            ),
                                            title:
                                              "Marcar o convite como 'recebido manualmente'"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.markAsReceived(
                                                invitation,
                                                "invitation"
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-check"
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.can("subevents:invite") &&
                                  invitation.sub_event.confirmed_at &&
                                  invitation.accepted_at &&
                                  !invitation.credentials_received_at
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-warning btn-sm btn-table-utility ml-1 pull-right",
                                          attrs: {
                                            disabled: _vm.cannot(
                                              "subevents:invite"
                                            ),
                                            title:
                                              "Marcar as credenciais como 'recebida manualmente'"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.markAsReceived(
                                                invitation,
                                                "credentials"
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-check"
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.can("subevents:invite") &&
                                  invitation.sub_event.confirmed_at &&
                                  !invitation.accepted_at
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-success btn-sm btn-table-utility ml-1 pull-right",
                                          attrs: {
                                            disabled: _vm.cannot(
                                              "subevents:invite"
                                            ),
                                            title:
                                              "Aceitar o convite manualmente"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.markAsAccepted(
                                                invitation
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-check-double"
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.can("subevents:invite") &&
                                  invitation.sub_event.confirmed_at &&
                                  !invitation.declined_at
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-danger btn-sm btn-table-utility ml-1 pull-right",
                                          attrs: {
                                            disabled: _vm.cannot(
                                              "subevents:invite"
                                            ),
                                            title:
                                              "Declinar o convite manualmente"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.markAsDeclined(
                                                invitation
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-calendar-times"
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.can("subevents:read") &&
                                  _vm.canSendEmail(invitation) &&
                                  invitation.accepted_at
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-warning btn-sm btn-table-utility ml-1 pull-right",
                                          attrs: {
                                            title: "Baixar PDF das credenciais"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.downloadInvitation(
                                                invitation
                                              )
                                            }
                                          }
                                        },
                                        [
                                          !invitation.busy
                                            ? _c("i", {
                                                staticClass: "fa fa-id-badge"
                                              })
                                            : _vm._e(),
                                          _vm._v(" "),
                                          invitation.busy
                                            ? _c("i", {
                                                staticClass: "fa fa-cog fa-spin"
                                              })
                                            : _vm._e()
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "btn btn-warning btn-sm btn-table-utility ml-1 pull-right",
                                      attrs: {
                                        to:
                                          "/events/" +
                                          invitation.sub_event.event.id +
                                          "/sub-events/" +
                                          invitation.sub_event.id +
                                          "/invitations/" +
                                          invitation.id +
                                          "/show",
                                        tag: "button",
                                        title: "Ver todos os dados do convite"
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-eye" })]
                                  ),
                                  _vm._v(" "),
                                  !invitation.sent_at
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-danger btn-sm btn-table-utility ml-1 pull-right",
                                          attrs: {
                                            disabled: _vm.cannot(
                                              "subevents:invite"
                                            ),
                                            title:
                                              "Excluir convite (ainda não foi enviado)"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.unInvite(invitation)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-trash"
                                          })
                                        ]
                                      )
                                    : _vm._e()
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
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [_c("h2", [_vm._v("Eventos")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Events.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Events.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Events_vue_vue_type_template_id_1b973310___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Events.vue?vue&type=template&id=1b973310& */ "./resources/js/views/Events.vue?vue&type=template&id=1b973310&");
/* harmony import */ var _Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events.vue?vue&type=script&lang=js& */ "./resources/js/views/Events.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Events_vue_vue_type_template_id_1b973310___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Events_vue_vue_type_template_id_1b973310___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Events.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Events.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Events.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Events.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Events.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Events.vue?vue&type=template&id=1b973310&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Events.vue?vue&type=template&id=1b973310& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_1b973310___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Events.vue?vue&type=template&id=1b973310& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Events.vue?vue&type=template&id=1b973310&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_1b973310___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_1b973310___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/mixins/events.js":
/*!*********************************************!*\
  !*** ./resources/js/views/mixins/events.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('events', ['clearForm'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    events: function events(state) {
      return state.events;
    },
    subEvents: function subEvents(state) {
      return state.subEvents;
    },
    invitations: function invitations(state) {
      return state.invitations;
    }
  }))
});

/***/ })

}]);