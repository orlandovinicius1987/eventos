<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>{{ form.fields.name ? form.fields.name : 'Nova pessoa' }}</h2>
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
                                name="nickname"
                                label="Nome público"
                                v-model="form.fields.nickname"
                                :required="true"
                                :form="form"
                            ></app-input>

                            <app-input
                                name="title"
                                label="Tratamento"
                                v-model="form.fields.title"
                                :required="true"
                                :form="form"
                            ></app-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button @click.prevent="saveModel()" class="btn btn-outline-secondary" type="submit">gravar</button>

                            <router-link to="/people" tag="button" class="btn btn-success">
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
import people from './mixins/people'
import { mapActions } from 'vuex'

const service = { name: 'people', uri: 'people' }

export default {
    props: ['mode'],

    mixins: [crud, people],

    data() {
        return {
            service: service,
        }
    },

    methods: {
        ...mapActions(service.name, ['selectPerson']),
    }
}
</script>

<style>
</style>
