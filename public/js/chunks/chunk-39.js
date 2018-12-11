webpackJsonp([39],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/views/Events.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_crud__ = __webpack_require__("./resources/js/views/mixins/crud.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_events__ = __webpack_require__("./resources/js/views/mixins/events.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_permissions__ = __webpack_require__("./resources/js/views/mixins/permissions.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var service = { name: 'events', uri: 'events' };

/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_crud__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_events__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_permissions__["a" /* default */]],

    data: function data() {
        return {
            service: service,
            downloading: false
        };
    },


    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["mapActions"])(service.name, ['selectEvent', 'selectSubEvent', 'selectInvitation']), {
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
                    return _this3.$store.dispatch('invitations/markAsReceived', { invitation: invitation, type: type });
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
        },
        downloadSubEventPDF: function downloadSubEventPDF(subEvent) {
            var _this12 = this;

            this.downloading = true;

            downloadPDF(this.$store.getters['subEvents/getDataUrl'] + '/' + subEvent.id + '/download').then(function () {
                _this12.downloading = false;
            });
        },
        canSendEmail: function canSendEmail(invitation) {
            return invitation.has_email && invitation.sub_event.confirmed_at;
        },
        replicateCommonInfo: function replicateCommonInfo(subEvent) {
            var _this13 = this;

            confirm('Você tem certeza que replicar os textos de "' + subEvent.name + ' - ' + subEvent.sector.name + '" para os outros sub-eventos?', this).then(function (value) {
                confirm('CERTEZA ABSOLUTA?', _this13).then(function (value) {
                    if (value) {
                        subEvent.busy = true;

                        return _this13.$store.dispatch('subEvents/replicateCommonInfo', subEvent).then(function () {
                            subEvent.busy = false;
                        });
                    }
                });
            });
        },
        filterNotifications: function filterNotifications(notifications, type) {
            return _.filter(notifications, function (notification) {
                return notification.content_type === type;
            });
        },
        filterNotificationsReceived: function filterNotificationsReceived(notifications, type) {
            return _.filter(this.filterNotifications(notifications, type), function (notification) {
                return notification.received_at;
            });
        }
    }),

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
                this.$store.commit('invitations/mutateFilterCheckbox', { field: 'hasNoEmail', value: filter });

                this.$store.dispatch('invitations/load');
            }
        },

        sentCheckbox: {
            get: function get() {
                return this.$store.state['invitations'].data.filter.checkboxes.sent;
            },
            set: function set(filter) {
                this.$store.commit('invitations/mutateFilterCheckbox', { field: 'sent', value: filter });

                this.$store.dispatch('invitations/load');
            }
        },

        notSentCheckbox: {
            get: function get() {
                return this.$store.state['invitations'].data.filter.checkboxes.notSent;
            },
            set: function set(filter) {
                this.$store.commit('invitations/mutateFilterCheckbox', { field: 'notSent', value: filter });

                this.$store.dispatch('invitations/load');
            }
        },

        receivedCheckbox: {
            get: function get() {
                return this.$store.state['invitations'].data.filter.checkboxes.received;
            },
            set: function set(filter) {
                this.$store.commit('invitations/mutateFilterCheckbox', { field: 'received', value: filter });

                this.$store.dispatch('invitations/load');
            }
        },

        notReceivedCheckbox: {
            get: function get() {
                return this.$store.state['invitations'].data.filter.checkboxes.notReceived;
            },
            set: function set(filter) {
                this.$store.commit('invitations/mutateFilterCheckbox', { field: 'notReceived', value: filter });

                this.$store.dispatch('invitations/load');
            }
        },

        credentialsSentCheckbox: {
            get: function get() {
                return this.$store.state['invitations'].data.filter.checkboxes.credentialsSent;
            },
            set: function set(filter) {
                this.$store.commit('invitations/mutateFilterCheckbox', { field: 'credentialsSent', value: filter });

                this.$store.dispatch('invitations/load');
            }
        },

        credentialsNotSentCheckbox: {
            get: function get() {
                return this.$store.state['invitations'].data.filter.checkboxes.credentialsNotSent;
            },
            set: function set(filter) {
                this.$store.commit('invitations/mutateFilterCheckbox', { field: 'credentialsNotSent', value: filter });

                this.$store.dispatch('invitations/load');
            }
        },

        credentialsReceivedCheckbox: {
            get: function get() {
                return this.$store.state['invitations'].data.filter.checkboxes.credentialsReceived;
            },
            set: function set(filter) {
                this.$store.commit('invitations/mutateFilterCheckbox', { field: 'credentialsReceived', value: filter });

                this.$store.dispatch('invitations/load');
            }
        },

        credentialsNotReceivedCheckbox: {
            get: function get() {
                return this.$store.state['invitations'].data.filter.checkboxes.credentialsNotReceived;
            },
            set: function set(filter) {
                this.$store.commit('invitations/mutateFilterCheckbox', { field: 'credentialsNotReceived', value: filter });

                this.$store.dispatch('invitations/load');
            }
        },

        acceptedCheckbox: {
            get: function get() {
                return this.$store.state['invitations'].data.filter.checkboxes.accepted;
            },
            set: function set(filter) {
                this.$store.commit('invitations/mutateFilterCheckbox', { field: 'accepted', value: filter });

                this.$store.dispatch('invitations/load');
            }
        },

        declinedCheckbox: {
            get: function get() {
                return this.$store.state['invitations'].data.filter.checkboxes.declined;
            },
            set: function set(filter) {
                this.$store.commit('invitations/mutateFilterCheckbox', { field: 'declined', value: filter });

                this.$store.dispatch('invitations/load');
            }
        },

        notAcceptedCheckbox: {
            get: function get() {
                return this.$store.state['invitations'].data.filter.checkboxes.notAccepted;
            },
            set: function set(filter) {
                this.$store.commit('invitations/mutateFilterCheckbox', { field: 'notAccepted', value: filter });

                this.$store.dispatch('invitations/load');
            }
        },

        notCheckedInCheckbox: {
            get: function get() {
                return this.$store.state['invitations'].data.filter.checkboxes.notCheckedIn;
            },
            set: function set(filter) {
                this.$store.commit('invitations/mutateFilterCheckbox', { field: 'notCheckedIn', value: filter });

                this.$store.dispatch('invitations/load');
            }
        },

        notAnsweredCheckbox: {
            get: function get() {
                return this.$store.state['invitations'].data.filter.checkboxes.notAnswered;
            },
            set: function set(filter) {
                this.$store.commit('invitations/mutateFilterCheckbox', { field: 'notAnswered', value: filter });

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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b973310\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/Events.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1b973310\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/views/Events.vue":
/***/ (function(module, exports, __webpack_require__) {

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
        { staticClass: "col-4" },
        [
          _vm.events.data.links
            ? _c(
                "app-table-panel",
                {
                  attrs: {
                    title: "Eventos (" + _vm.pagination.total + ")",
                    "add-button": {
                      uri: "/events/create",
                      disabled: _vm.cannot("create"),
                      dusk: "createEventButton"
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
                          _vm.eventsGotoPage($event)
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
                              _vm.selectEvent(event)
                            }
                          }
                        },
                        [
                          _c("td", { staticClass: "align-middle text-left" }, [
                            _vm._v(_vm._s(event.name))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "align-middle text-right" },
                            [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-info btn-sm text-white btn-table-utility ml-1 pull-right",
                                  attrs: {
                                    disabled:
                                      _vm.cannot("update") ||
                                      !_vm.environment.debug,
                                    title:
                                      "Enviar todas as credenciais não enviadas"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.sendCredentials(event)
                                    }
                                  }
                                },
                                [
                                  !event.busy
                                    ? _c("i", { staticClass: "fa fa-landmark" })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  event.busy
                                    ? _c("i", {
                                        staticClass: "fa fa-cog fa-spin"
                                      })
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
                                    disabled: _vm.cannot("update"),
                                    title:
                                      "Enviar todos os convites não enviados"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.sendInvitations(event)
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
                                    ? _c("i", {
                                        staticClass: "fa fa-cog fa-spin"
                                      })
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
                                    disabled: _vm.cannot("update"),
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
                    })
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
        { staticClass: "col-8" },
        [
          _vm.selected.id && _vm.subEvents.data.links
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
                      disabled: _vm.cannot("create")
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
                          _vm.subEventsGotoPage($event)
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
                              _vm.selectSubEvent(subEvent)
                            }
                          }
                        },
                        [
                          _c("td", { staticClass: "align-middle" }, [
                            _c(
                              "span",
                              {
                                staticClass: "badge text-white p-2",
                                style: {
                                  "background-color": subEvent.sector
                                    ? subEvent.sector.color
                                    : "",
                                  "text-transform": "uppercase"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      subEvent.sector
                                        ? subEvent.sector.name
                                        : ""
                                    ) +
                                    "\n                            "
                                )
                              ]
                            )
                          ]),
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
                            _vm._v(_vm._s(subEvent.invitations_count))
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
                            _vm._v(_vm._s(subEvent.confirmed_at))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(_vm._s(subEvent.ended_at))
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
                                        disabled: _vm.cannot("update"),
                                        title:
                                          "Replicar textos para todos os outros subeventos"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.replicateCommonInfo(subEvent)
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
                                          _vm.cannot("update") ||
                                          !_vm.environment.events.confirmation
                                            .enabled,
                                        title: "Confirmar Sub-evento"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.confirmSubEvent(subEvent)
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
                                        disabled: _vm.cannot("update"),
                                        title: "Finalizar Sub-evento"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.finalizeSubEvent(subEvent)
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
                                    disabled: _vm.cannot("update"),
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
                                      _vm.downloadSubEventPDF(subEvent)
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
                    })
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
              _vm.selected.id && _vm.invitations.data.links
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
                          disabled: _vm.cannot("create")
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
                              _vm.invitationsGotoPage($event)
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
                                  _vm.selectInvitation(invitation)
                                }
                              }
                            },
                            [
                              _c("td", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(invitation.code))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(
                                      invitation.person_institution.person.name
                                    )
                                  )
                                ]),
                                _vm._v(
                                  " (" +
                                    _vm._s(
                                      invitation.person_institution.title
                                    ) +
                                    ")"
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      invitation.person_institution.role.name
                                    ) +
                                    " - " +
                                    _vm._s(
                                      invitation.person_institution.institution
                                        .name
                                    ) +
                                    "\n                        "
                                )
                              ]),
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
                                })
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
                                              "enviados: " +
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
                                              "recebidos: " +
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
                                                    "enviadas: " +
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
                                                    "recebidas: " +
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
                                  _vm.can("update") &&
                                  _vm.canSendEmail(invitation)
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-info btn-sm btn-sm btn-table-utility text-white ml-1 pull-right",
                                          attrs: { title: "Enviar convite" },
                                          on: {
                                            click: function($event) {
                                              _vm.sendInvitation(invitation)
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
                                  _vm.can("update") &&
                                  _vm.canSendEmail(invitation)
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-info btn-sm btn-sm btn-table-utility text-white ml-1 pull-right",
                                          attrs: {
                                            title: "Enviar credenciais",
                                            disabled:
                                              !invitation.accepted_at &&
                                              !_vm.environment.debug
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.sendCredential(invitation)
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
                                  _vm.can("update") &&
                                  invitation.sub_event.confirmed_at &&
                                  !invitation.received_at
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-success btn-sm btn-table-utility ml-1 pull-right",
                                          attrs: {
                                            title:
                                              "Marcar o convite como 'recebido manualmente'"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.markAsReceived(
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
                                  _vm.can("update") &&
                                  invitation.sub_event.confirmed_at &&
                                  invitation.accepted_at &&
                                  !invitation.credentials_received_at
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-warning btn-sm btn-table-utility ml-1 pull-right",
                                          attrs: {
                                            title:
                                              "Marcar as credenciais como 'recebida manualmente'"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.markAsReceived(
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
                                  _vm.can("update") &&
                                  invitation.sub_event.confirmed_at &&
                                  !invitation.accepted_at
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-success btn-sm btn-table-utility ml-1 pull-right",
                                          attrs: {
                                            title:
                                              "Aceitar o convite manualmente"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.markAsAccepted(invitation)
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
                                  _vm.can("update") &&
                                  invitation.sub_event.confirmed_at &&
                                  !invitation.declined_at
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-danger btn-sm btn-table-utility ml-1 pull-right",
                                          attrs: {
                                            title:
                                              "Declinar o convite manualmente"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.markAsDeclined(invitation)
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
                                  _vm.can("update") &&
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
                                              _vm.downloadInvitation(invitation)
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
                                        disabled: _vm.cannot("update"),
                                        title: "Ver todos os dados do convite"
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-eye" })]
                                  ),
                                  _vm._v(" "),
                                  _vm.can("update") && !invitation.sent_at
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-danger btn-sm btn-table-utility ml-1 pull-right",
                                          attrs: {
                                            title:
                                              "Excluir convite (ainda não foi enviado)"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.unInvite(invitation)
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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1b973310", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b973310\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/Events.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b973310\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/Events.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("40b1c132", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b973310\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Events.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b973310\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Events.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/js/views/Events.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b973310\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/views/Events.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/views/Events.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1b973310\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/views/Events.vue")
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
Component.options.__file = "resources/js/views/Events.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b973310", Component.options)
  } else {
    hotAPI.reload("data-v-1b973310", Component.options)
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

/***/ "./resources/js/views/mixins/events.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["a"] = ({
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('events', ['clearForm'])),

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapState"])({
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

/***/ }),

/***/ "./resources/js/views/mixins/permissions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
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

});