<template>
    <div>
        <div class="py-2 text-center">
            <h2>{{ this.mode === 'create' ? 'Criar ' : 'Editar ' }}Traje</h2>
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
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 mb-3">
                            <app-textarea
                                    name="description"
                                    label="Descrição"
                                    v-model="form.fields.description"
                                    :form="form"
                                    :rows="5"
                                    :required="true"
                            ></app-textarea>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button
                                @click.prevent="saveModel()"
                                class="btn btn-outline-secondary"
                                type="submit"
                                :disabled="cannot('costumes:modify')"
                            >
                                gravar
                            </button>

                            <router-link
                                to="/costumes"
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
import costumes from './mixins/costumes'
import permissions from './mixins/permissions'
import { mapActions } from 'vuex'

const service = {
    name: 'costumes',
    uri: 'costumes',
    performLoad: false,
}

export default {
    props: ['mode'],

    mixins: [crud, costumes, permissions],

    data() {
        return {
            service: service,
        }
    },
}
</script>

<style></style>
