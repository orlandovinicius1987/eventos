<template>
    <div>
        <app-select
                :name="name"
                :label="label"
                v-model="subEventSelectFilter"
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
        subEventSelectFilter: {
            get() {
                return this.$store.state['invitables'].data.filter.selects.subEvent
            },

            set(id) {
                this.$store.dispatch(
                    'invitables/mutateFilterSelect', {
                        field: 'sub_event', value: id
                    }
                )
            },
        },
    },
}
</script>
