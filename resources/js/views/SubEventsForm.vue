<template>
    <div>
        <div class="py-2 text-center">
            <h1>{{ events.selected.name }}</h1>
            <h2>
                {{ this.mode === 'create' ? 'Criar ' : 'Editar ' }}Sub Evento
            </h2>
            <h2>
                {{
                    subEvents.form.fields.name ? subEvents.form.fields.name : ''
                }}
            </h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-8">
                <form>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <div class="row pt-1 pb-1 bg-primary-lighter">
                                <div class="col-4 text-right">
                                    <app-input
                                        name="send_invitations"
                                        label="pode enviar convites"
                                        type="checkbox"
                                        v-model="
                                            subEvents.form.fields
                                                .send_invitations
                                        "
                                        :required="true"
                                        :form="form"
                                        inline="true"
                                    ></app-input>
                                </div>

                                <div class="col-4">
                                    <app-input
                                        name="send_credentials"
                                        label="pode enviar credenciais"
                                        type="checkbox"
                                        v-model="
                                            subEvents.form.fields
                                                .send_credentials
                                        "
                                        :required="true"
                                        :form="form"
                                        inline="true"
                                    ></app-input>
                                </div>

                                <div class="col-4">
                                    <app-input
                                        name="security_can_recept"
                                        label="segurança pode recepcionar"
                                        type="checkbox"
                                        v-model="
                                            subEvents.form.fields
                                                .security_can_recept
                                        "
                                        :required="true"
                                        :form="form"
                                        inline="true"
                                    ></app-input>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12 col-md-12">
                                    <app-input
                                        name="name"
                                        label="Nome"
                                        v-model="subEvents.form.fields.name"
                                        :required="true"
                                        :form="form"
                                        dusk="sub-nome"
                                    ></app-input>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12 col-md-6">
                                    <app-input
                                        name="date"
                                        label="Data"
                                        type="date"
                                        v-model="subEvents.form.fields.date"
                                        :required="true"
                                        :form="form"
                                        dusk="sub-data"
                                    ></app-input>
                                </div>

                                <div class="col-sm-12 col-md-6">
                                    <app-input
                                        name="confirmations_end_date"
                                        label="Data final para confirmação"
                                        type="date"
                                        v-model="
                                            subEvents.form.fields
                                                .confirmations_end_date
                                        "
                                        :required="true"
                                        :form="form"
                                    ></app-input>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12 col-md-12">
                                    <app-input
                                        name="time"
                                        label="Horário"
                                        type="time"
                                        v-model="subEvents.form.fields.time"
                                        :required="true"
                                        :form="form"
                                        dusk="sub-hora"
                                    ></app-input>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12 col-md-12">
                                    <app-input
                                        name="place"
                                        label="Local"
                                        v-model="subEvents.form.fields.place"
                                        :required="true"
                                        :form="form"
                                        rows="10"
                                        cols="100"
                                        dusk="sub-local"
                                    ></app-input>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12 col-md-12">
                                    <app-select
                                        name="associated_subevent_id"
                                        label="Subevento Associado"
                                        v-model="
                                            subEvents.form.fields
                                                .associated_subevent_id
                                        "
                                        :required="true"
                                        :form="form"
                                        :options="
                                            exceptSubEventList(
                                                environment.tables.sub_events,
                                                subEvents.form.fields.id,
                                                subEvents.form.fields.event_id,
                                            )
                                        "
                                    ></app-select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12 col-md-12">
                                    <app-select
                                        name="costume_id"
                                        label="Traje"
                                        v-model="
                                            subEvents.form.fields.costume_id
                                        "
                                        :required="true"
                                        :form="form"
                                        :options="environment.tables.costumes"
                                    ></app-select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12 col-md-12">
                                    <app-select
                                        name="sector_id"
                                        label="Setor"
                                        v-model="
                                            subEvents.form.fields.sector_id
                                        "
                                        :required="true"
                                        :form="form"
                                        :options="environment.tables.sectors"
                                    ></app-select>
                                </div>
                            </div>

                            <app-markdown-text-area
                                @input="
                                    changeText({
                                        field: 'invitation_text',
                                        text: $event,
                                    })
                                "
                                :form="form"
                                label="Texto do convite"
                                id="invitation_text"
                                :value="subEvents.form.fields.invitation_text"
                            ></app-markdown-text-area>

                            <app-markdown-text-area
                                @input="
                                    changeText({
                                        field: 'credentials_text',
                                        text: $event,
                                    })
                                "
                                :form="form"
                                label="Texto de envio das credencials de acesso ao evento"
                                id="credentials_text"
                                :value="subEvents.form.fields.credentials_text"
                            ></app-markdown-text-area>

                            <app-markdown-text-area
                                @input="
                                    changeText({
                                        field: 'thank_you_text',
                                        text: $event,
                                    })
                                "
                                :form="form"
                                label="Texto de agradecimento pela presença"
                                id="thank_you_text"
                                :value="subEvents.form.fields.thank_you_text"
                            ></app-markdown-text-area>

                            <app-markdown-text-area
                                @input="
                                    changeText({
                                        field: 'rejection_text',
                                        text: $event,
                                    })
                                "
                                :form="form"
                                label="Texto de declinação do convite"
                                id="rejection_text"
                                :value="subEvents.form.fields.rejection_text"
                            ></app-markdown-text-area>

                            <app-input
                                name="invitation_file"
                                label="Arquivo de imagem do convite"
                                type="text"
                                v-model="subEvents.form.fields.invitation_file"
                                :form="form"
                                inline="true"
                            ></app-input>

                            <div class="row" v-if="mode == 'create'">
                                <div class="col-sm-12 col-md-12">
                                    <app-select
                                        name="address_id"
                                        label="Endereço"
                                        v-model="
                                            subEvents.form.fields.address_id
                                        "
                                        :required="true"
                                        :form="form"
                                        :options="
                                            environment.tables
                                                .availableAddresses
                                        "
                                        @input="
                                            selectAddressInsideEvent(
                                                subEvents.form.fields
                                                    .address_id,
                                            )
                                        "
                                    ></app-select>
                                </div>
                            </div>

                            <app-address-field
                                :form="subEvents.form"
                                :address="subEvents.form.fields.address"
                                :google-maps="environment.google_maps"
                            >
                            </app-address-field>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button
                                @click.prevent="saveModel()"
                                class="btn btn-outline-secondary"
                                type="submit"
                                dusk="sub-gravar"
                            >
                                gravar
                            </button>

                            <router-link
                                to="/events"
                                tag="button"
                                class="btn btn-success"
                            >
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
import subEvents from './mixins/sub-events'
import permissions from './mixins/permissions'

const service = {
    name: 'subEvents',
    uri: 'events/{events.selected.id}/sub-events',
    performLoad: false,
}

export default {
    props: ['mode'],

    mixins: [crud, events, subEvents, permissions],

    data() {
        this.$store.dispatch('environment/loadSubEvents')
        this.$store.dispatch('environment/loadCostumes')
        this.$store.dispatch('environment/loadSectors')
        this.$store.dispatch('environment/loadAddresses')
        return {
            service: service,
        }
    },

    methods: {
        changeText($event) {
            this.$store.commit('subEvents/mutateSetFormField', {
                field: $event.field,
                value: $event.text,
            })
        },

        selectAddressInsideEvent(address_id) {
            if (address_id) {
                this.$store.dispatch('subEvents/loadAddress', {
                    sub_event_id: this.events.selected.id,
                    address_id: address_id,
                })
            }
        },

        fillAdditionalFormFields() {
            this.$store.commit('subEvents/mutateSetFormField', {
                field: 'event_id',
                value: this.events.selected.id,
            })
        },

        exceptSubEventList(list, subEventId, eventId) {
            let items = clone(list)

            items.rows = except(list.rows, subEventId)

            items.rows = _.filter(items.rows, item => {
                return !eventId || !item.event_id || item.event_id == eventId
            })

            return items
        },
    },

    mounted() {},
}
</script>

<style></style>
