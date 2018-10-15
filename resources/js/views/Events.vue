<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Eventos</h2>
        </div>

        <div class="row">
            <div class="col-12">
                <div v-if="can('Criar')" class="btn btn-primary btn-sm m-1 pull-right">
                    <i class="fa fa-plus"></i> novo evento
                </div>
            </div>
        </div>

        <div v-if="can('Ver')" class="row">
            <div class="col-12">
                <div class="card p-4">
                    <table id="eventsTable" class="table table-striped table-hover" cellspacing="0" width="100%">
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Confirmado em</th>
                        </tr>
                        </thead>

                        <tr v-for="event in tables.events">
                            <td>{{ event.name }}</td>
                            <td>{{ event.confirmed_at }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

const serviceName = 'events'

export default {
    props: [],

    mixins: [],

    data() {
        return {
            serviceName: serviceName,

            apiBaseUri: '/api/v1/' + serviceName,

            refreshing: false,

            tables: {
                events: [],
            }
        }
    },

    methods: {
        ...mapActions(serviceName, ['load']),
        ...mapActions('gate', ['can']),

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

        refresh() {
            let $this = this

            $this.refreshing = true

            $this.errors = null

            $this.tables.events = null

            axios.post('/api/v1/events-search', {search: ''})
                .then(function(response) {
                    $this.tables.events = []
                    $this.errors = false

                    if (response.data.success) {
                        $this.tables.events = response.data.data
                        $this.errors = response.data.errors
                    }

                    $this.refreshing = false
                })
                .catch(function(error) {
                    console.log(error)

                    $this.refreshing = false
                })
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
        this.refresh()
    },
}
</script>

<style>
</style>

