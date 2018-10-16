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
                                    <tr @click="selectEvent(event)" v-for="event in events" :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(event, selectedEvent)}">
                                        <td>{{ event.id }}</td>
                                        <td>{{ event.name }}</td>
                                        <td>{{ subEvent.confirmed_at }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-8">
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="subEvent in subEvents" class="cursor-pointer">
                                        <td>{{ subEvent.id }}</td>
                                        <td>{{ subEvent.name }}</td>
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
import { mapMutations, mapState } from 'vuex'

export default {
    mixins: [crud, events],

    data() {
        return {
            serviceName: 'events',
        }
    },

    computed: {
        ...mapState(serviceName, ['selectedEvent']),
    },

    methods: {
        ...mapMutations(serviceName, ['selectEvent']),
    },

    mounted() {
        this.boot()
    }
}
</script>

<style>
</style>
