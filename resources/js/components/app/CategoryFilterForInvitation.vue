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
                return this.$store.state['invitables'].data.filter.selects
                    .category
            },

            set(id) {
                this.$store.dispatch('invitables/mutateFilterSelect', {
                    field: 'category',
                    value: id,
                })
            },
        },
    },

    beforeDestroy() {
        this.$store.state['invitables'].data.filter.selects.category = null
    },
}
</script>
