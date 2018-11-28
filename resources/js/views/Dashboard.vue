<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2> <i class="fas fa-cogs"></i> Painel de Controle</h2>
        </div>

        <div class="row" v-if="can('read')">
            <div class="col-12">
                <div class="container">
                    <div class="card-deck mb-3 text-center">
                        <div v-for="item in dashboard" class="card mb-4 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">{{ item.name }}</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">{{ item.count }}</h1>

                                <router-link :to="item.route" tag="button" class="btn btn-sm btn-block btn-primary">
                                    ver
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="can('read')">
            <div class="col-12">
                <app-table-panel
                        v-if="subEventsDashBoard.data.links"
                        :title="'Eventos a serem iniciados (' + subEventsDashBoard.data.rows.length + ')'"
                        :filter-text="subEventsDashboardFilterText"
                        @input-filter-text="subEventsDashboardFilterText = $event.target.value"
                >
                    <app-table
                            :columns="['#','Nome do Evento','Nome do Subevento', 'Dia', 'Horário']"
                    >
                        <router-link
                            :to="'/events/'+ subEventDashBoard.event.id+'/sub-events/'+subEventDashBoard.id+'/receptive'"
                            tag="tr"
                            :disabled="cannot('update')"
                            v-for="subEventDashBoard in subEventsDashBoard.data.rows"
                            style="cursor: pointer;"
                            :key="subEventDashBoard.id"

                        >

                            <td @click="selectSubEventDashBoard(subEventDashBoard)" class="align-middle">{{ subEventDashBoard.id }}</td>
                            <td @click="selectSubEventDashBoard(subEventDashBoard)" class="align-middle">{{ subEventDashBoard.event.name }}</td>
                            <td @click="selectSubEventDashBoard(subEventDashBoard)" class="align-middle">{{ subEventDashBoard.name }}</td>
                            <td @click="selectSubEventDashBoard(subEventDashBoard)" class="align-middle">{{ subEventDashBoard.date}}</td>
                            <td @click="selectSubEventDashBoard(subEventDashBoard)" class="align-middle">{{ subEventDashBoard.time }}</td>

                        </router-link>
                    </app-table>
                </app-table-panel>
            </div>
        </div>
    </div>
</template>

<script>
import crud from './mixins/crud'
import permissions from './mixins/permissions'
import { mapState, mapActions } from 'vuex'
import subEventsDashBoard from "../store/modules/subEventsDashBoard";

export default {
    mixins: [crud, subEventsDashBoard, permissions],

    data() {
        return {
            service: { name: 'dashboard', uri: 'dashboard' },
        }
    },

    methods: {
        ...mapActions('dashboard', ['selectSubEventDashBoard','clearForm']),
    },

    computed: {
        ...mapState({
            dashboard: state => state.dashboard.data.rows,

            subEventsDashBoard: state => state.subEventsDashBoard,
        }),

        subEventsDashboardFilterText: {
            get() {
                return this.$store.state['subEventsDashBoard'].data.filter.text
            },

            set(filter) {
                return this.$store.dispatch(
                    'subEventsDashBoard/mutateSetQueryFilterText',
                    filter,
                )
            },
        },
    },

    mounted() {
        this.$store.dispatch('subEventsDashBoard/load')
    },
}
</script>

<style>
</style>
