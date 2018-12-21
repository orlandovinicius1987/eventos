<template>
    <div>
        <div class="py-2 text-center">
            <h1>{{ events.selected.name }}</h1>
            <h2>
                {{ this.mode === 'create' ? 'Novo ' : 'Editar ' }}Sub Evento
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
                                <div class="col-6 text-right">
                                    <app-input
                                        name="send_invitations"
                                        label="pode enviar convites"
                                        type="checkbox"
                                        v-model="subEvents.form.fields.send_invitations"
                                        :required="true"
                                        :form="form"
                                        inline="true"
                                    ></app-input>
                                </div>

                                <div class="col-6">
                                    <app-input
                                        name="send_credentials"
                                        label="pode enviar credenciais"
                                        type="checkbox"
                                        v-model="subEvents.form.fields.send_credentials"
                                        :required="true"
                                        :form="form"
                                        inline="true"
                                    ></app-input>
                                </div>
                            </div>

                            <app-input
                                name="name"
                                label="Nome"
                                v-model="subEvents.form.fields.name"
                                :required="true"
                                :form="form"
                                dusk="sub-nome"
                            ></app-input>

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
                                        v-model="subEvents.form.fields.confirmations_end_date"
                                        :required="true"
                                        :form="form"
                                    ></app-input>
                                </div>
                            </div>

                            <app-input
                                name="time"
                                label="Horário"
                                type="time"
                                v-model="subEvents.form.fields.time"
                                :required="true"
                                :form="form"
                                dusk="sub-hora"
                            ></app-input>

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

                            <app-select
                                name="associated_subevent_id"
                                label="Subevento Associado"
                                v-model="
                                    subEvents.form.fields.associated_subevent_id
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

                            <app-select
                                name="costume_id"
                                label="Traje"
                                v-model="subEvents.form.fields.costume_id"
                                :required="true"
                                :form="form"
                                :options="environment.tables.costumes"
                            ></app-select>

                            <app-select
                                name="sector_id"
                                label="Setor"
                                v-model="subEvents.form.fields.sector_id"
                                :required="true"
                                :form="form"
                                :options="environment.tables.sectors"
                            ></app-select>

                            <app-markdown-text-area
                                @input="
                                    changeText({
                                        field: 'invitation_text',
                                        text: $event,
                                    })
                                "
                                :form="form"
                                label="Email: texto do convite"
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
                                label="Email: texto de envio das credencials de acesso ao evento"
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
                                label="Email: texto de agradecimento pela presença"
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
                                label="Email: texto de declinação do convite"
                                id="rejection_text"
                                :value="subEvents.form.fields.rejection_text"
                            ></app-markdown-text-area>

                            <app-table-panel
                                v-if="mode == 'create'"
                                :title="
                                    'Endereços disponíveis (' +
                                        subEvents.data.available_addresses
                                            .length +
                                        ' endereços)'
                                "
                            >
                                <app-table
                                    :columns="['#', 'Endereço']"
                                    :rows="subEvents.data.available_addresses"
                                >
                                    <tr
                                        @click="
                                            selectAddressInsideEvent(address)
                                        "
                                        v-for="address in subEvents.data
                                            .available_addresses"
                                        class="cursor-pointer"
                                        :class="{
                                            'cursor-pointer': true,
                                            'bg-primary-lighter text-white': isCurrent(
                                                address,
                                                addresses.selected,
                                            ),
                                        }"
                                    >
                                        <td>{{ address.id }}</td>
                                        <td>{{ address.full_address }}</td>
                                    </tr>
                                </app-table>
                            </app-table-panel>

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

        selectAddressInsideEvent(address) {
            this.$store.commit('subEvents/mutateSetFormField', {
                object: 'address',
                field: 'zipcode',
                value: address.zipcode,
            })
            this.$store.commit('subEvents/mutateSetFormField', {
                object: 'address',
                field: 'street',
                value: address.street,
            })
            this.$store.commit('subEvents/mutateSetFormField', {
                object: 'address',
                field: 'number',
                value: address.number,
            })
            this.$store.commit('subEvents/mutateSetFormField', {
                object: 'address',
                field: 'complement',
                value: address.complement,
            })
            this.$store.commit('subEvents/mutateSetFormField', {
                object: 'address',
                field: 'neighbourhood',
                value: address.neighbourhood,
            })
            this.$store.commit('subEvents/mutateSetFormField', {
                object: 'address',
                field: 'city',
                value: address.city,
            })
            this.$store.commit('subEvents/mutateSetFormField', {
                object: 'address',
                field: 'state',
                value: address.state,
            })
            this.$store.commit('subEvents/mutateSetFormField', {
                object: 'address',
                field: 'latitude',
                value: address.latitude,
            })
            this.$store.commit('subEvents/mutateSetFormField', {
                object: 'address',
                field: 'longitude',
                value: address.longitude,
            })
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
