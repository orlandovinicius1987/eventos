<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Eventos</h2>
        </div>

        <div class="row">
            <div class="col-4">
                <div class="row align-items-end">
                    <div class="col-6">
                        <h4 class="mb-0">Eventos</h4>
                    </div>
                    <div class="col-6">
                        <router-link to="/events/create" tag="div" class="btn btn-primary btn-sm m-1 pull-right" :disabled="cannot('create')">
                            <i class="fa fa-plus"></i> novo evento
                        </router-link>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="card p-4">
                            <table class="table table-sm table-hover table-borderless table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Confirmado em</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        @click="selectEvent(event)"
                                        v-for="event in events"
                                        :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(event, selectedEvent)}"
                                    >
                                        <td>{{ event.id }}</td>
                                        <td>{{ event.name }}</td>
                                        <td>{{ event.confirmed_at }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-8" v-if="selectedEvent.id">
                <div class="row align-items-end">
                    <div class="col-10">
                        <h4 class="mb-0">{{ selectedEvent.name }} (subeventos)</h4>
                    </div>
                    <div class="col-2">
                        <router-link to="/events/create" tag="div" class="btn btn-primary btn-sm m-1 pull-right">
                            <i class="fa fa-plus"></i> novo subevento
                        </router-link>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="card p-4">
                            <table class="table table-sm table-hover table-borderless table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Data</th>
                                        <th scope="col">Hora</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        @click="selectSubEvent(subEvent)"
                                        v-for="subEvent in subEvents" class="cursor-pointer"
                                        :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(subEvent, selectedSubEvent)}"
                                    >
                                        <td>{{ subEvent.id }}</td>
                                        <td>{{ subEvent.name }}</td>
                                        <td>{{ subEvent.date }}</td>
                                        <td>{{ subEvent.time }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" v-if="selectedSubEvent.id">
            <div class="col-12">
                <div class="row align-items-end">
                    <div class="col-6">
                        <h4 class="mb-0">Convidados para {{ selectedSubEvent.name }} de {{ selectedEvent.name }} </h4>
                    </div>
                    <div class="col-6">
                        <router-link to="/events/create" tag="div" class="btn btn-primary btn-sm m-1 pull-right" :disabled="cannot('create')">
                            <i class="fa fa-plus"></i> adicionar convidado
                        </router-link>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="card p-4">
                            <table class="table table-sm table-hover table-borderless table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tratamento</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Instituição</th>
                                        <th scope="col">Cargo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        @click="selectEvent(invitation)"
                                        v-for="invitation in invitations"
                                        :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(invitation, selectedInvitation)}"
                                    >
                                        <td>{{ invitation.id }}</td>
                                        <td>{{ invitation.person_institution.title }}</td>
                                        <td>{{ invitation.person_institution.person.name }}</td>
                                        <td>{{ invitation.person_institution.institution.name }}</td>
                                        <td>{{ invitation.person_institution.role.name }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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

    computed: {
        ...mapState(serviceName, ['selectedEvent', 'selectedSubEvent', 'selectedInvitation']),
    },

    methods: {
        ...mapActions(serviceName, ['selectEvent', 'selectSubEvent', 'selectInvitation']),

        isCurrent(event, selected) {
            return event.id === selected.id
        },
    },

    mounted() {
        this.boot()
    }
}
</script>

<style>
</style>
