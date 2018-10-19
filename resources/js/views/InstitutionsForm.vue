<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>{{ form.fields.name ? form.fields.name : 'Nova função' }}</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-8">
                <form>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <app-input
                                name="name"
                                label="Nome"
                                v-model="form.fields.name"
                                :required="true"
                                :form="form"
                            ></app-input>

                            <app-input
                                    name="initials"
                                    label="Sigla"
                                    v-model="form.fields.initials"
                                    :required="false"
                                    :form="form"
                            ></app-input>

                            <app-input
                                    name="is_party"
                                    label="Partido Politico?"
                                    v-model="form.fields.is_party"
                                    :required="true"
                                    :form="form"
                            ></app-input>

                            <app-input
                                    name="party_number"
                                    label="Numero do Partido"
                                    v-model="form.fields.party_number"
                                    :required="false"
                                    :form="form"
                            ></app-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button @click.prevent="saveModel()" class="btn btn-outline-secondary" type="submit">gravar</button>

                            <router-link to="/institutions" tag="button" class="btn btn-success">
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
import institutions from './mixins/institutions'
import { mapActions } from 'vuex'

const serviceName = 'institutions'

export default {
    props: ['mode'],

    mixins: [crud, institutions],

    data() {
        return {
            serviceName: serviceName,
        }
    },

    methods: {
        ...mapActions(serviceName, ['selectInstitution']),
    },

    mounted() {
        this.boot()
    },
}
</script>

<style>
</style>
