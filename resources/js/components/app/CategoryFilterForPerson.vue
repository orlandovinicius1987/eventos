<template>
    <div>
        <app-select
            :name="name"
            :label="label"
            v-model="categorySelectFilter"
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
        categorySelectFilter: {
            get() {
                return this.$store.state['people'].data.filter.selects
                    .category
            },

            set(id) {
                this.$store.dispatch('people/mutateFilterSelect', {
                    field: 'category',
                    value: id,
                })
            },
        },
    },
}
</script>
