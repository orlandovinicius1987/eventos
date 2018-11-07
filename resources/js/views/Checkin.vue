<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Dia do Evento</h2>
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
                                <h1 class="card-title pricing-card-title">{{ item.count }}</small></h1>

                                <router-link :to="item.route" tag="button" class="btn btn-sm btn-block btn-primary">
                                    ver
                                </router-link>
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
import { mapState } from 'vuex'

export default {
    mixins: [crud, permissions],

    data() {
        return {
            service: { name: 'dashboard', uri: 'dashboard' },
        }
    },

    computed: {
        ...mapState({
            dashboard: state => state.dashboard.data.rows,
        }),
    },
}
</script>

<style>
</style>
