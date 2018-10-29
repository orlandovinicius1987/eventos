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

                            <app-address-form
                                :form="form"
                            >

                            </app-address-form>

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
