<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Novo Endereço</h2>
            <!--<h2>{{ addresses.form.fields.name ? addresses.form.fields.name : 'Novo Endereço' }}</h2>-->
        </div>

        <div class="row justify-content-center">
            <div class="col-8">
                <form>
                    <div class="row">
                        <div class="col-12 mb-3">

                            <label :for="zipcode" class="mb-0 mt-4">CEP</label>

                            <input
                                    v-model="addresses.form.fields.zipcode"
                                    @keyup="typeKeyZipcode(addresses.form.fields.zipcode)"
                                    class="form-control"
                                    id="zipcode"
                                    required="required"
                                    dusk="zipcode"
                                    v-mask='["##.###-###"]'
                            >

                            <small class="text-danger" v-if="form.errors.has(zipcode)" >
                                {{ form.errors.get(zipcode) }}
                            </small>


                            <app-input
                                    name="street"
                                    label="Endereço"
                                    v-model="addresses.form.fields.street"
                                    :required="true"
                                    :form="form"
                            ></app-input>
                            <app-input
                                    name="number"
                                    label="Número"
                                    v-model="addresses.form.fields.number"
                                    :required="true"
                                    :form="form"
                            ></app-input>
                            <app-input
                                    name="complement"
                                    label="Complemento"
                                    v-model="addresses.form.fields.complement"
                                    :required="true"
                                    :form="form"
                            ></app-input>
                            <app-input
                                    name="neighbourhood"
                                    label="Bairro"
                                    v-model="addresses.form.fields.neighbourhood"
                                    :required="true"
                                    :form="form"
                            ></app-input>
                            <app-input
                                    name="city"
                                    label="Cidade"
                                    v-model="addresses.form.fields.city"
                                    :required="true"
                                    :form="form"
                            ></app-input>
                            <app-input
                                    name="state"
                                    label="Estado"
                                    v-model="addresses.form.fields.state"
                                    :required="true"
                                    :form="form"
                            ></app-input>
                            <app-input
                                    name="latitude"
                                    label="Latitude"
                                    v-model="addresses.form.fields.latitude"
                                    :required="true"
                                    :form="form"
                            ></app-input>
                            <app-input
                                    name="longitude"
                                    label="Longitude"
                                    v-model="addresses.form.fields.longitude"
                                    :required="true"
                                    :form="form"
                            ></app-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button @click.prevent="saveModel()" class="btn btn-outline-secondary" type="submit">gravar</button>

                            <router-link to="/addresses" tag="button" class="btn btn-success">
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
    import addresses from './mixins/addresses'
    import { mapState } from 'vuex'

    const service = { name: 'addresses', uri: 'addresses', isForm: true }

    export default {
        props: ['mode'],

        mixins: [crud, addresses],

        data() {
            return {
                service: service,
            }
        },

        computed: {
            ...mapState('addresses', ['selectedEvent', 'selectedSubEvent']),
        }
    }
</script>

<style>
</style>
