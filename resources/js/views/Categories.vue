<template>
 Categories

</template>

<script>
import crud from './mixins/crud'
import permissions from './mixins/permissions'
import { mapMutations, mapState } from 'vuex'

const serviceName = 'categories'

export default {
    mixins: [crud, events, permissions],

    data() {
        return {
            serviceName: serviceName,
        }
    },

    computed: {
        ...mapState(serviceName, ['selectedEvent']),
    },

    methods: {
        ...mapMutations(serviceName, ['selectEvent']),

        isCurrent(event, selected) {
            return event.id === selected.id
        },
    },

    mounted() {
        this.boot()
    }
}
</script>

<style>
</style>
