<template>
    <div>
        <div class="py-2 text-center">
            <h2>{{ this.mode === 'create' ? 'Criar ' : 'Editar ' }}Assuntos</h2>
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
                        <div class="col-12 text-right mb-3">
                            <button
                                @click.prevent="saveModel()"
                                class="btn btn-outline-secondary"
                                type="submit"
                            >
                                gravar
                            </button>

                            <router-link
                                to="/topics"
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
import topics from './mixins/topics'

const service = { name: 'topics', uri: 'topics', performLoad: false }

export default {
    props: ['mode'],

    mixins: [crud, topics],

    data() {
        return {
            service: service,
        }
    },
}
</script>

<style></style>
