<template>
    <div>

    </div>
</template>

<script>
import crud from './mixins/crud'
import events from './mixins/events'
import { mapState } from 'vuex'

const service = { name: 'subEvents', uri: 'sub-events' }

export default {
    props: ['mode'],

    mixins: [crud, events],

    data() {
        return {
            service: service,
        }
    },

    computed: {
        ...mapState('events', ['selectedEvent', 'selectedSubEvent']),
    }
}
</script>

<style>
</style>
