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
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button @click.prevent="saveModel()" class="btn btn-outline-secondary" type="submit">gravar</button>

                            <router-link to="/roles" tag="button" class="btn btn-success">
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
import roles from './mixins/roles'
import { mapActions } from 'vuex'

const service = { name: 'roles', uri: 'roles', isForm: true }

export default {
    props: ['mode'],

    mixins: [crud, roles],

    data() {
        return {
            service: service,
        }
    },

    methods: {
        ...mapActions(service.name, ['selectRole']),
    },
}
</script>

<style>
</style>
