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
                    :add-button="{ uri: '/events/create', disabled: cannot('create') }"
                >
                    <app-table
                        :pagination="events.data.links.pagination"
                        @goto-page="gotoPage($event)"
                        :columns="['#','Nome','Confirmado em']"
                    >
                        <tr
                            @click="select(event)"
                            v-for="event in events.data.rows"
                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(event, selected)}"
                        >
                            <td>{{ event.id }}</td>
                            <td>{{ event.name }}</td>
                            <td>{{ event.confirmed_at }}</td>
                        </tr>
                    </app-table>
                </app-table-panel>
            </div>

            <div class="col-8">
                <app-table-panel
                    v-if="selected.id && subEvents.data.links"
                    :title="selected.name + '(' + pagination.total + ' subeventos)'"
                    :add-button="{ uri: '/events/sub-event/create', disabled: cannot('create') }"
                >
                    <app-table
                        :pagination="subEvents.data.links.pagination"
                        @goto-page="gotoPage($event)"
                        :columns="['#','Nome','Data','Hora',]"
                    >
                        <tr
                            @click="selectSubEvent(subEvent)"
                            v-for="subEvent in subEvents.data.rows" class="cursor-pointer"
                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(subEvent, subEvents.selected)}"
                        >
                            <td>{{ subEvent.id }}</td>
                            <td>{{ subEvent.name }}</td>
                            <td>{{ subEvent.date }}</td>
                            <td>{{ subEvent.time }}</td>
                        </tr>
                    </app-table>
                </app-table-panel>
            </div>
        </div>

        <div class="row" v-if="subEvents && subEvents.selected.id">
            <div class="col-12">
                <app-table-panel
                    v-if="selected.id && invitations.data.links"
                    :title="invitations.data.links.pagination.total + ' convidados para ' + subEvents.selected.name + ' de ' + selected.name"
                    :add-button="{ uri: '/events/create', disabled: cannot('create') }"
                >
                    <app-table
                        :pagination="invitations.data.links.pagination"
                        @goto-page="gotoPage($event)"
                        :columns="['#','Nome','Instituição','Cargo',]"
                    >
                        <tr
                            @click="selectInvitation(invitation)"
                            v-for="invitation in invitations.data.rows"
                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(invitation, invitations.selected)}"
                        >
                            <td>{{ invitation.id }}</td>
                            <td>{{ invitation.person_institution.title }} {{ invitation.person_institution.person.name }}</td>
                            <td>{{ invitation.person_institution.institution.name }}</td>
                            <td>{{ invitation.person_institution.role.name }}</td>
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

const serviceName = 'events'

export default {
    mixins: [crud, events, permissions],

    data() {
        return {
            serviceName: serviceName,
        }
    },

    methods: {
        ...mapActions(serviceName, [
            'selectEvent',
            'selectSubEvent',
            'selectInvitation',
        ]),
    },

    mounted() {
        this.boot()
    },
}
</script>

<style>
</style>
