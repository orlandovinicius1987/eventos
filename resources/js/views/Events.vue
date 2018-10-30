<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Eventos</h2>
        </div>

        <div class="row">
            <div class="col-4">
                <app-table-panel
                    v-if="events.data.links"
                    :title="'Eventos (' + pagination.total + ')'"
                    :add-button="{ uri: '/events/create', disabled: cannot('create'), dusk:'createEventButton' }"
                    :per-page="eventsPerPage"
                    @set-per-page="eventsPerPage = $event"
                    :filter-text="eventsFilterText"
                    @input-filter-text="eventsFilterText = $event.target.value"
                >
                    <app-table
                        :pagination="events.data.links.pagination"
                        @goto-page="eventsGotoPage($event)"
                        :columns="['#','Nome','Confirmado em', '']"
                    >
                        <tr
                            @click="selectEvent(event)"
                            v-for="event in events.data.rows"
                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(event, selected)}"
                        >
                            <td class="align-middle">{{ event.id }}</td>
                            <td class="align-middle">{{ event.name }}</td>
                            <td class="align-middle">{{ event.confirmed_at }}</td>
                            <td class="align-middle">
                                <router-link
                                        :to="'/events/'+event.id+'/update'"
                                        tag="div"
                                        class="btn btn-danger btn-sm mr-1 pull-right"
                                        :disabled="cannot('update')"
                                >
                                    <i class="fa fa-edit"></i>
                                </router-link>
                            </td>
                        </tr>
                    </app-table>
                </app-table-panel>
            </div>

            <div class="col-8">
                <app-table-panel
                    v-if="selected.id && subEvents.data.links"
                    :title="selected.name + ' (' + subEvents.data.links.pagination.total + ' subeventos)'"
                    :add-button="{ uri: '/events/'+subEvents.event.id+'/sub-events/create', disabled: cannot('create') }"
                    :per-page="subEventsPerPage"
                    @set-per-page="subEventsPerPage = $event"
                    :filter-text="subEventsFilterText"
                    @input-filter-text="subEventsFilterText = $event.target.value"
                >
                    <app-table
                        :pagination="subEvents.data.links.pagination"
                        @goto-page="subEventsGotoPage($event)"
                        :columns="['#','Nome','Data','Hora','Confirmado em','']"
                    >
                        <tr
                            @click="selectSubEvent(subEvent)"
                            v-for="subEvent in subEvents.data.rows" class="cursor-pointer"
                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(subEvent, subEvents.selected)}"
                        >
                            <td class="align-middle">{{ subEvent.id }}</td>
                            <td class="align-middle">{{ subEvent.name }}</td>
                            <td class="align-middle">{{ subEvent.date }}</td>
                            <td class="align-middle">{{ subEvent.time }}</td>
                            <td class="align-middle">{{ subEvent.confirmed_at }}</td>
                            <td class="align-middle text-right">
                                <router-link
                                    :to="'events/'+subEvents.event.id+'/sub-events/'+subEvent.id+'/update'"
                                    tag="div"
                                    class="btn btn-danger btn-sm mr-1 pull-right"
                                    :disabled="cannot('update')"
                                >
                                    <i class="fa fa-edit"></i>
                                </router-link>

                                <button
                                    class="btn btn-success btn-sm mr-1 pull-right"
                                    @click="confirmSubEvent(subEvent)"
                                    title="Confirmar Sub-evento"
                                    :disabled="cannot('update')"
                                >
                                    <i class="fa fa-check"></i>
                                </button>
                            </td>
                        </tr>
                    </app-table>
                </app-table-panel>
            </div>
        </div>

        <div class="row" v-if="invitations.subEvent.id">
            <div class="col-12">
                <app-table-panel
                    v-if="selected.id && invitations.data.links"
                    :title="invitations.data.links.pagination.total + ' convidados para ' + subEvents.selected.name + ' de ' + selected.name"
                    :add-button="{ uri: '/events/'+subEvents.event.id+'/sub-events/'+subEvents.selected.id+'/invitations/create', disabled: cannot('create') }"
                    :per-page="invitationsPerPage"
                    @set-per-page="invitationsPerPage = $event"
                    :filter-text="invitationsFilterText"
                    @input-filter-text="invitationsFilterText = $event.target.value"
                >
                    <app-table
                        :pagination="invitations.data.links.pagination"
                        @goto-page="invitationsGotoPage($event)"
                        :columns="[
                                    '#',
                                    'Nome',
                                    'Instituição',
                                    'Cargo',
                                    {title: 'Convite', trClass: 'text-center'},
                                    {title: 'Recebido', trClass: 'text-center'},
                                    {title: 'Aceito', trClass: 'text-center'},
                                    {title: 'Check in', trClass: 'text-center'},
                                    ''
                                ]"
                    >
                        <tr
                            @click="selectInvitation(invitation)"
                            v-for="invitation in invitations.data.rows"
                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(invitation, invitations.selected)}"
                        >
                            <td class="align-middle">{{ invitation.id }}</td>

                            <td class="align-middle">{{ invitation.person_institution.title }} {{ invitation.person_institution.person.name }}</td>

                            <td class="align-middle">{{ invitation.person_institution.institution.name }}</td>

                            <td class="align-middle">{{ invitation.person_institution.role.name }}</td>

                            <td class="align-middle text-center">
                                <h6 class="mb-0">
                                    <span v-if="invitation.sent_at" class="badge badge-success">enviado</span>
                                    <span v-else class="badge badge-danger">não enviado</span>
                                </h6>
                            </td>

                            <td class="align-middle text-center">
                                <h6 class="mb-0">
                                    <span v-if="invitation.received_at" class="badge badge-success">sim</span>
                                    <span v-else class="badge badge-danger">não</span>
                                </h6>
                            </td>

                            <td class="align-middle text-center">
                                <h6 v-if="invitation.sent_at" class="mb-0">
                                    <span v-if="invitation.accepted_at" class="badge badge-success">aceitou</span>
                                    <span v-if="invitation.declined_at" class="badge badge-danger">declinou</span>
                                    <span v-if="!invitation.accepted_at && !invitation.declined_at" class="badge badge-primary">não respondeu</span>
                                </h6>

                                <h6 v-if="!invitation.sent_at" class="mb-0">
                                    <span class="badge badge-danger">convite não enviado</span>
                                </h6>
                            </td>

                            <td class="align-middle text-center">
                                {{ invitation.checkin_at }}
                            </td>

                            <td class="align-middle">
                                <a
                                    @click="confirmUnInvite(invitation)"
                                    class="btn btn-danger btn-sm mr-1 pull-right"
                                    v-if="can('update') && !invitation.sent_at"
                                    href="#"
                                >
                                    <i class="fa fa-trash"></i>
                                </a>
                            </td>
                        </tr>
                    </app-table>
                </app-table-panel>
            </div>
        </div>
    </div>
</template>

<script>
import crud from './mixins/crud'
import events from './mixins/events'
import permissions from './mixins/permissions'
import { mapActions, mapState } from 'vuex'

const service = { name: 'events', uri: 'events' }

export default {
    mixins: [crud, events, permissions],

    data() {
        return {
            service: service,
        }
    },

    methods: {
        ...mapActions(service.name, [
            'selectEvent',
            'selectSubEvent',
            'selectInvitation',
        ]),

        eventsGotoPage(page) {
            this.gotoPage(page, 'events', this.events.data.links.pagination)
        },

        subEventsGotoPage(page) {
            this.gotoPage(
                page,
                'subEvents',
                this.subEvents.data.links.pagination,
            )
        },

        invitationsGotoPage(page) {
            this.gotoPage(
                page,
                'invitations',
                this.invitations.data.links.pagination,
            )
        },

        confirmUnInvite(invitation) {
            const $this = this

            confirm(
                'Deseja realmente desconvidar ' +
                    invitation.person_institution.person.name +
                    '?',
                this,
            ).then(function(value) {
                if (value) {
                    $this.unInvite(invitation)
                }
            })
        },

        unInvite(invitation) {
            return this.$store.dispatch('invitations/unInvite', invitation)
        },

        confirmSubEvent(subEvent) {
            const $this = this

            confirm(
                'Deseja realmente confirmar ' +
                subEvent.name +
                '?',
                this,
            ).then(function(value) {
                if (value) {
                    $this.doConfirmSubEvent(subEvent)
                }
            })
        },

        doConfirmSubEvent(subEvent) {
            return this.$store.dispatch('subEvents/confirm', subEvent)
        },
    },

    computed: {
        eventsFilterText: {
            get() {
                return this.$store.state['events'].data.filter.text
            },

            set(filter) {
                return this.$store.dispatch(
                    this.service.name + '/mutateSetQueryFilterText',
                    filter,
                )
            },
        },

        eventsPerPage: {
            get() {
                return this.$store.state['events'].data.links.pagination
                    .per_page
            },

            set(perPage) {
                return this.$store.dispatch('events/setPerPage', perPage)
            },
        },

        subEventsFilterText: {
            get() {
                return this.$store.state['subEvents'].data.filter.text
            },

            set(filter) {
                return this.$store.dispatch(
                    'subEvents/mutateSetQueryFilterText',
                    filter,
                )
            },
        },

        subEventsPerPage: {
            get() {
                return this.$store.state['subEvents'].data.links.pagination
                    .per_page
            },

            set(perPage) {
                return this.$store.dispatch('subEvents/setPerPage', perPage)
            },
        },

        invitationsFilterText: {
            get() {
                return this.$store.state['invitations'].data.filter.text
            },

            set(filter) {
                return this.$store.dispatch(
                    'invitations/mutateSetQueryFilterText',
                    filter,
                )
            },
        },

        invitationsPerPage: {
            get() {
                return this.$store.state['invitations'].data.links.pagination
                    .per_page
            },

            set(perPage) {
                return this.$store.dispatch('invitations/setPerPage', perPage)
            },
        },
    },

    mounted() {
        this.$store.dispatch('subEvents/load')

        this.$store.dispatch('invitations/load')
    },
}
</script>

<style>
</style>
