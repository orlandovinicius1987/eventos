<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h1>{{ events.selected.name }}</h1>
            <h2>{{ subEvents.form.fields.name ? subEvents.form.fields.name : 'Novo Sub Evento' }}</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-8">
                <form>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <app-input
                                name="name"
                                label="Nome"
                                v-model="subEvents.form.fields.name"
                                :required="true"
                                :form="form"
                            ></app-input>

                            <app-input
                                name="date"
                                label="Data"
                                type="date"
                                v-model="subEvents.form.fields.date"
                                :required="true"
                                :form="form"
                            ></app-input>

                            <app-input
                                name="time"
                                label="Horário"
                                type="time"
                                v-model="subEvents.form.fields.time"
                                :required="true"
                                :form="form"
                            ></app-input>

                            <app-input
                                name="place"
                                label="Local"
                                v-model="subEvents.form.fields.place"
                                :required="true"
                                :form="form"
                                rows="10"
                                cols="100"
                            ></app-input>

                            <app-text-area
                                name="invitation_text"
                                label="Texto de convite"
                                v-model="subEvents.form.fields.invitation_text"
                                :required="true"
                                :form="form"
                                rows="10"
                                cols="100"
                            ></app-text-area>

                            <app-text-area
                                name="confirmation_text"
                                label="Texto de confirmação"
                                v-model="subEvents.form.fields.confirmation_text"
                                :required="true"
                                :form="form"
                                rows="10"
                                cols="100"
                            ></app-text-area>

                            <app-text-area
                                name="credential_send_text"
                                label="Texto de envio de credencial"
                                v-model="subEvents.form.fields.credential_send_text"
                                :required="true"
                                :form="form"
                                rows="10"
                                cols="100"
                            ></app-text-area>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button @click.prevent="saveModel()" class="btn btn-outline-secondary" type="submit">gravar</button>

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

    const service = { name: 'subEvents', uri: 'events/{events.selected.id}/sub-events', performLoad: false }

    export default {
        props: ['mode'],

        mixins: [crud, events],

        data() {
            return {
                service: service,
            }
        },

        computed: {
            ...mapState('events', ['selectedEvent', 'selectedSubEvent']),
        }
    }
</script>

<style>
</style>
