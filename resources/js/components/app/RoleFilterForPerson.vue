<template>
    <div>
        <app-select
                :name="name"
                :label="label"
                v-model="roleSelectFilter"
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
        roleSelectFilter: {
            get() {
                return this.$store.state['people'].data.filter.selects.role
            },

            set(id) {
                this.$store.dispatch(
                    'people/mutateFilterSelect', {
                        field: 'role', value: id
                    }
                )
            },
        },
    },
}
</script>
