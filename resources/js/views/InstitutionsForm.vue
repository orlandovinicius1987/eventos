<template>
    <div>
        <div class="py-2 text-center">
            <h2>
                {{ this.mode === 'create' ? 'Nova ' : 'Editar ' }}Instituição
            </h2>
            <h2>&nbsp;{{ form.fields.name ? form.fields.name : '' }}</h2>
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

                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check mt-4">
                                        <input
                                            v-model="form.fields.is_party"
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="defaultCheck1"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                        >
                                            É partido politico?
                                        </label>
                                    </div>
                                </div>

                                <div class="col-8">
                                    <app-input
                                        v-if="form.fields.is_party"
                                        name="party_number"
                                        label="Numero do Partido"
                                        v-model="form.fields.party_number"
                                        :required="false"
                                        :form="form"
                                    ></app-input>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button
                                @click.prevent="saveModel()"
                                class="btn btn-outline-secondary"
                                type="submit"
                            >
                                gravar
                            </button>

                            <router-link
                                to="/institutions"
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
import institutions from './mixins/institutions'
import { mapActions } from 'vuex'

const service = {
    name: 'institutions',
    uri: 'institutions',
    performLoad: false,
}

export default {
    props: ['mode'],

    mixins: [crud, institutions],

    data() {
        return {
            service: service,
        }
    },

    methods: {
        ...mapActions(service.name, ['selectInstitution']),
    },
}
</script>

<style></style>
