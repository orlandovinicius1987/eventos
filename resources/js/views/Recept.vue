<template>
    <div v-if="can('receptive')">
        <div class="py-2 text-center">
            <h2><i class="fas fa-cogs"></i> Receptivo</h2>
        </div>

        <div class="row">
            <div class="col-12">
                <div v-if="eventsHappening().length > 0 || true">
                    <div class="card-deck mb-3 text-center">
                        <div
                            v-for="subEvent in eventsHappening()"
                            class="card mb-4 shadow-sm bg-info"
                        >
                            <div class="card-header bg-info">
                                <h4
                                    class="my-0 mb-3 font-weight-normal text-white"
                                >
                                    {{ subEvent.event.name }}
                                </h4>
                            </div>

                            <div class="card-body">
                                <button
                                    @click="receptive(subEvent)"
                                    class="btn btn-sm btn-block btn-danger bnt-lg"
                                >
                                    <h4 class="mb-1">RECEPCIONAR CONVIDADOS</h4>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import crud from './mixins/crud'
import permissions from './mixins/permissions'
import { mapState, mapActions } from 'vuex'
import subEventsDashBoard from '../store/modules/subEventsDashBoard'

export default {
    mixins: [crud, subEventsDashBoard, permissions],

    data() {
        return {
            service: { name: 'dashboard', uri: 'dashboard' },
        }
    },

    methods: {
        ...mapActions('dashboard', ['selectEventDashBoard', 'clearForm']),

        receptive(subEvent) {
            this.selectEventDashBoard(subEvent)

            this.$router.push({ path: '/receptive/' + subEvent.event.id })
        },

        eventsHappening() {
            return _.uniqBy(
                _.filter(this.subEventsDashBoard.data.rows, subEvent => {
                    return subEvent.is_happening
                }),
                'event_id',
            )
        },
    },

    computed: {
        ...mapState({
            subEventsDashBoard: state => state.subEventsDashBoard,
        }),
    },

    mounted() {
        this.$store.dispatch('subEventsDashBoard/load')
    },
}
</script>

<style></style>
