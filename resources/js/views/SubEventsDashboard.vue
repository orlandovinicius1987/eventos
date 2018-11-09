<template>
    <div>
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
                        :columns="['#','Nome','']"
                    >
                        <tr
                            @click="selectEvent(event)"
                            v-for="event in events.data.rows"
                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(event, selected)}"
                        >
                            <td class="align-middle">{{ event.id }}</td>

                            <td class="align-middle">{{ event.name }}</td>

                            <td class="align-middle text-right">
                                <router-link
                                    :to="'/events/'+event.id+'/update'"
                                    tag="div"
                                    class="btn btn-danger btn-sm ml-1 pull-right"
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
                        :columns="['#','Nome','Data','Hora','Confirmado em','Realizado em','']"
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
                            <td class="align-middle">{{ subEvent.ended_at }}</td>

                            <td class="align-middle text-right">
                                <button
                                    v-if="!subEvent.confirmed_at"
                                    class="btn btn-success btn-sm ml-1 pull-right"
                                    @click="confirmSubEvent(subEvent)"
                                    title="Confirmar Sub-evento"
                                    :disabled="cannot('update')"
                                >
                                    <i class="fa fa-check"></i>
                                </button>

                                <button
                                    v-if="!subEvent.ended_at && subEvent.confirmed_at"
                                    class="btn btn-primary btn-sm ml-1 pull-right"
                                    @click="finalizeSubEvent(subEvent)"
                                    title="Finalizar Sub-evento"
                                    :disabled="cannot('update')"
                                >
                                    <i class="fa fa-check"></i>
                                </button>

                                <router-link
                                        :to="'events/'+subEvents.event.id+'/sub-events/'+subEvent.id+'/update'"
                                        tag="div"
                                        class="btn btn-danger btn-sm ml-1 pull-right"
                                        :disabled="cannot('update')"
                                >
                                    <i class="fa fa-edit"></i>
                                </router-link>
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
                'Deseja realmente confirmar ' + subEvent.name + '?',
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

        finalizeSubEvent(subEvent) {
            const $this = this

            confirm(
                'Deseja realmente confirmar que o evento foi realizado ' +
                    subEvent.name +
                    '?',
                this,
            ).then(function(value) {
                if(value){
                    $this.finalizeSubEventReconfirmed(subEvent);
                }
            })
        },

        finalizeSubEventReconfirmed(subEvent){
            const $this = this
            confirm(
                'Você tem realmente certeza de marcar o evento como realizado ?',
                this,
            ).then(function(value) {
                if (value) {
                    $this.doFinalizeSubEvent(subEvent)
                }
            })
        },

        doFinalizeSubEvent(subEvent) {
            return this.$store.dispatch('subEvents/finalize', subEvent)
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
