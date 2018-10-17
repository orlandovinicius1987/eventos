<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h1>{{ selectedEvent.name }}</h1>
            <h2>{{ form.fields.name ? form.fields.name : 'Novo Sub Evento' }}</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-8">
                <form>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <label for="name">Nome do sub evento</label>

                            <input v-model="form.fields.name" class="form-control" id="name" required>

                            <small class="text-danger" v-if="form.errors.has('name')" >
                                {{ form.errors.get('name') }}
                            </small>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button @click.prevent="storeModel()" class="btn btn-outline-secondary" type="submit">gravar</button>

                            <router-link to="/events" tag="button" class="btn btn-success">
                                cancelar
                            </router-link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import crud from './mixins/crud'
import events from './mixins/events'
import { mapState } from 'vuex'

const serviceName = 'subEvents'

export default {
    props: [],

    mixins: [crud, events],

    data() {
        return {
            serviceName: serviceName,
        }
    },

    computed: {
        ...mapState('events', ['selectedEvent', 'selectedSubEvent']),
    },

    mounted() {
        this.boot()
    },
}
</script>

<style>
</style>
