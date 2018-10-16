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
                        <router-link to="/events/create" tag="div" class="btn btn-primary btn-sm m-1 pull-right">
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="event in events">
                                        <td>{{ event.id }}</td>
                                        <td>{{ event.name }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-8">
                <div class="row align-items-end">
                    <div class="col-6">
                        <h4 class="mb-0">Subeventos de whatever</h4>
                    </div>
                    <div class="col-6">
                        <router-link to="/events/create" tag="div" class="btn btn-primary btn-sm m-1 pull-right">
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="event in events">
                                        <td>{{ event.id }}</td>
                                        <td>{{ event.name }}</td>
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

export default {
    mixins: [crud, events],

    data() {
        return {
            serviceName: 'events',
        }
    },

    mounted() {
        this.boot()
    },
}
</script>

<style>
</style>
