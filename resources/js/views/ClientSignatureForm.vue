<template>
    <div>
        <div class="py-2 text-center">
            <h2>
                {{ this.mode === 'create' ? 'Nova ' : 'Editar ' }}Assinatura
            </h2>

            <h2>&nbsp;{{ form.fields.name ? form.fields.name : '' }}</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-8">
                <form>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <app-markdown-text-area
                                v-if="currentClient"
                                @input="changeText($event)"
                                :form="form"
                                label="Assinatura para os e-mails"
                                id="signature"
                                :value="currentClient.signature"
                            ></app-markdown-text-area>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button
                                @click.prevent="saveModel()"
                                class="btn btn-outline-secondary"
                                type="submit"
                                :disabled="cannot('events:modify')"
                            >
                                gravar
                            </button>

                            <router-link
                                to="/dashboard"
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
import clients from './mixins/clients'
import permissions from './mixins/permissions'

const service = {
    name: 'clients',
    uri: 'clients',
    performLoad: false,
}

export default {
    props: ['mode'],

    mixins: [crud, clients, permissions],

    data() {
        return {
            service: service,
        }
    },

    methods: {
        changeText($event) {
            this.$store.commit('clients/mutateSetFormField', {
                field: 'signature',
                value: $event,
            })
        },
    },

    mounted() {
        this.load().then(() => {
            setTimeout(() => {
                this.select(this.$store.state.clients.data.rows[0])
            }, 1500)
        })
    },
}
</script>

<style></style>
