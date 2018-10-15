<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Novo Evento</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-8">
                <form>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <label for="name">Nome do evento</label>
                            <input v-model="form.fields.name" class="form-control" id="name" required>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button @click.prevent="store()" class="btn btn-outline-secondary" type="submit">gravar</button>

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

import { mapActions, mapMutations, mapState } from 'vuex'

const serviceName = 'events'

export default {
    props: [],

    mixins: [crud],

    data() {
        return {
            serviceName: serviceName,

            apiBaseUri: '/api/v1/' + serviceName,
        }
    },

    methods: {
        ...mapActions(serviceName, ['load', 'store']),

        ...mapMutations(serviceName, [
            'setDataUrl',
            'setStoreUrl',
            'setErrors',
            'setFormData',
            'storeFormField',
        ]),

        isLoading() {
            return this.loading.environment || this.loading.table
        },
    },

    computed: {
        ...mapState({
            events: state => state.events.data,
            form: state => state.events.form,
            environment: state => state.environment,
        }),
    },

    mounted() {
        this.boot()
    },
}
</script>

<style>
</style>

