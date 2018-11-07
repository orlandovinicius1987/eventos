<template>
    <div>
        <label :for="name" class="mb-0 mt-4">{{ label }}</label>

        <vue-select
            v-model="selected"
            :id="name"
            :name="name"
            :required="required"
            :options="makeOptions(elements.rows)"
        >
        </vue-select>

        <small class="text-danger" v-if="form.errors.has(name)">
            {{ form.errors.get(name) }}
        </small>
    </div>
</template>

<script>
export default {
    props: ['value', 'name', 'label', 'required', 'form', 'elements'],

    methods: {
        makeOptions(rows) {
            return _.map(rows, value => {
                return { label: value.name, value: value.id }
            })
        },
    },

    computed: {
        selected: {
            get() {
                return this.value
            },

            set(selected) {
                if (selected !== null && typeof selected != 'object') {
                    this.$emit('input', selected.value)
                }
            },
        },
    },
}
</script>
