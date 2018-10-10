<template>
    <div>
        <div class="page-title mb-4 d-flex align-items-center">
            <div class="mr-auto">
                <h4 class="weight500 d-inline-block pr-3 mr-3">Painel de Controle</h4>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-12">
                Eventos
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

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
