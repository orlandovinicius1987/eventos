<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Painel de Controle</h2>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="container">
                    <div class="card-deck mb-3 text-center">
                        <div class="card mb-4 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">Free</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>10 users included</li>
                                    <li>2 GB of storage</li>
                                    <li>Email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                            </div>
                        </div>
                        <div class="card mb-4 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">Pro</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>20 users included</li>
                                    <li>10 GB of storage</li>
                                    <li>Priority email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
                            </div>
                        </div>
                        <div class="card mb-4 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">Enterprise</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>30 users included</li>
                                    <li>15 GB of storage</li>
                                    <li>Phone and email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <button type="button" class="btn btn-lg btn-block btn-primary" :disabled="!can('Criar')">Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import gate from "../store/modules/gate";

const serviceName = 'diario'

export default {
    props: [],

    mixins: [],

    data() {
        return {
            serviceName: serviceName,

            apiBaseUri: '/api/v1/' + serviceName,
        }
    },

    methods: {
        ...mapActions(serviceName, ['load']),

        ...mapMutations(serviceName, [
            'setDataUrl',
            'setErrors',
            'setFormData',
            'storeFormField',
        ]),

        isLoading() {
            return this.loading.environment || this.loading.table
        },

        log() {
            dd(...arguments)
        },

        can(permission) {
            return gate.actions.can(permission)
        },
    },

    computed: {
        ...mapState({
            diario: state => state.diario.data,
            form: state => state.diario.form,
            environment: state => state.environment,
        }),
    },

    mounted() {

    },
}
</script>

<style>
</style>

