<template>
    <div>
        <app-select
            :name="name"
            :label="label"
            v-model="institutionSelectFilter"
            :required="required"
            :form="form"
            :options="options"
            labelAttribute="composite_name"
        ></app-select>
    </div>
</template>

<script>
export default {
    props: ['value', 'name', 'label', 'required', 'form', 'options', 'model'],

    computed: {
        institutionSelectFilter: {
            get() {
                return this.$store.state['people'].data.filter.selects
                    .institution
            },

            set(id) {
                this.$store.dispatch('people/mutateFilterSelect', {
                    field: 'institution',
                    value: id,
                })
            },
        },
    },
}
</script>
