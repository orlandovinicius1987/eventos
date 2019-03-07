<template>
    <div>
        <div class="py-2 text-center">
            <h2>{{ this.mode === 'create' ? 'Criar' : 'Editar' }} Setor</h2>
            <h2>
                <app-badge
                    :caption="form.fields.name ? form.fields.name : ''"
                    :color="background + ',' + foreground"
                    :padding="4"
                >
                </app-badge>
            </h2>
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

                        <div class="col-12 mb-3">
                            <span class="d-inline">Cor de fundo:</span>
                            <div class="d-inline">
                                <swatches
                                    v-model="background"
                                    show-fallback
                                    colors="text-advanced"
                                />
                            </div>
                        </div>

                        <div class="col-12 mb-3">
                            <span class="d-inline">Cor da letra:</span>
                            <div class="d-inline">
                                <swatches
                                    v-model="foreground"
                                    show-fallback
                                    colors="text-advanced"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button
                                @click.prevent="saveModel()"
                                class="btn btn-outline-secondary"
                                type="submit"
                                :disabled="cannot('sectors:modify')"
                            >
                                gravar
                            </button>

                            <router-link
                                to="/sectors"
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
import sectors from './mixins/sectors'
import permissions from './mixins/permissions'
import Swatches from 'vue-swatches'

const service = { name: 'sectors', uri: 'sectors', performLoad: false }

export default {
    props: ['mode'],

    mixins: [crud, sectors, permissions],

    components: { Swatches },

    data() {
        return {
            service: service,
        }
    },

    computed: {
        background: {
            get() {
                return get_color(this.form.fields.color, 0)
            },

            set(color) {
                this.$store.commit('sectors/mutateSetFormField', {
                    field: 'color',
                    value: color + ',' + this.foreground,
                })
            },
        },

        foreground: {
            get() {
                return get_color(this.form.fields.color, 1)
            },

            set(color) {
                this.$store.commit('sectors/mutateSetFormField', {
                    field: 'color',
                    value: this.background + ',' + color,
                })
            },
        },
    },
}
</script>

<style></style>
