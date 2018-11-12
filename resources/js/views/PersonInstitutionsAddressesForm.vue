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

                            <app-address-field
                                :address="addresses.form.fields"
                                :form="addresses.form"
                                :google-maps="environment.google_maps"
                            >
                            </app-address-field>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button @click.prevent="saveModel()" class="btn btn-outline-secondary" type="submit">gravar</button>

                            <router-link to="/people/" tag="button" class="btn btn-success">
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

const service = {
    name: 'addresses',
    uri:
        'people/{people.selected.id}/person-institutions/{personInstitutions.selected.id}/addresses',
    performLoad: false,
}

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
    },
}
</script>

<style>
</style>
