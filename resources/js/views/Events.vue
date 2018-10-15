<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Eventos</h2>
        </div>

        <div class="row">
            <div class="col-12">
                <router-link to="/events/create" tag="div" class="btn btn-primary btn-sm m-1 pull-right">
                    <i class="fa fa-plus"></i> novo evento
                </router-link>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card p-4">
                    <table class="table table-sm table-hover table-borderless table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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

