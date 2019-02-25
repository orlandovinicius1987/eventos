<template>
    <div>
        <app-select
            :name="name"
            :label="label"
            v-model="topicSelectFilter"
            :required="required"
            :form="form"
            :options="options"
        ></app-select>
    </div>
</template>

<script>
export default {
    props: ['value', 'name', 'label', 'required', 'form', 'options', 'model'],

    computed: {
        topicSelectFilter: {
            get() {
                return this.$store.state['people'].data.filter.selects.topic
            },

            set(id) {
                this.$store.dispatch('people/mutateFilterSelect', {
                    field: 'topic',
                    value: id,
                })
            },
        },
    },

    beforeDestroy() {
        this.$store.state['people'].data.filter.selects.topic = null
    },
}
</script>
