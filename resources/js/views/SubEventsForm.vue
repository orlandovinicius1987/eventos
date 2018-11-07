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

                            <app-select
                                    name="costume_id"
                                    label="Traje"
                                    v-model="subEvents.form.fields.costume_id"
                                    :required="true"
                                    :form="form"
                                    :elements="environment.tables.costumes"
                            ></app-select>

                            <app-select
                                    name="sector_id"
                                    label="Galeria"
                                    v-model="subEvents.form.fields.sector_id"
                                    :required="true"
                                    :form="form"
                                    :elements="environment.tables.sectors"
                            ></app-select>

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


                            <!--:add-button="{ uri: 'events/{events.selected.id}/sub-event/'+subEvent.selected.id+'/addresses/create', disabled: cannot('create') }"-->

                            <app-table-panel
                                    v-if="mode == 'create'"
                                    :title="'Endereços disponíveis (' +subEvents.data.available_addresses.length+ ' endereços)'"
                            >
                                <app-table
                                        :columns="['#', 'Endereço']"
                                        :rows="subEvents.data.available_addresses"
                                >
                                    <tr
                                            @click="selectAddressInsideEvent(address)"
                                            v-for="address in subEvents.data.available_addresses" class="cursor-pointer"
                                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(address, addresses.selected)}"
                                    >
                                        <td>{{ address.id }}</td>

                                        <td>{{ address.street + ', ' + address.number + (address.complement ? ' - '+address.complement : '')}}</td>

                                        <td class="align-middle text-right">
                                            <router-link
                                                    :to="'events/{events.selected.id}/sub-event/'+subEvents.selected.id+'/addresses/'+address.id+'/update'"
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

                            <app-address-form
                                :form="subEvents.form"
                                :address="subEvents.form.fields.address"
                                :google-maps="environment.google_maps"
                            >
                            </app-address-form>
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
import subEvents from './mixins/sub-events'
import permissions from './mixins/permissions'
import { mapState } from 'vuex'
import * as VueGoogleMaps from 'vue2-google-maps'

const service = {
    name: 'subEvents',
    uri: 'events/{events.selected.id}/sub-events',
    performLoad: false,
}

export default {
    props: ['mode'],

    mixins: [crud, subEvents, permissions],

    data() {
        return {
            service: service,
        }
    },

    methods: {
        selectAddressInsideEvent(address) {
            context.commit('mutateSetFormField', {
                field: 'zipcode',
                value: address.zipcode,
            })
            context.commit('mutateSetFormField', {
                field: 'street',
                value: address.street,
            })
            context.commit('mutateSetFormField', {
                field: 'number',
                value: address.number,
            })
            context.commit('mutateSetFormField', {
                field: 'complement',
                value: address.complement,
            })
            context.commit('mutateSetFormField', {
                field: 'neighbourhood',
                value: address.neighbourhood,
            })
            context.commit('mutateSetFormField', {
                field: 'city',
                value: address.city,
            })
            context.commit('mutateSetFormField', {
                field: 'state',
                value: address.state,
            })
            context.commit('mutateSetFormField', {
                field: 'latitude',
                value: address.latitude,
            })
            context.commit('mutateSetFormField', {
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
    },

    mounted() {},
}
</script>

<style>
</style>
