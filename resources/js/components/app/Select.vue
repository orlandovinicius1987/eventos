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
                return this.makeObject(value)
            })
        },

        select(value) {
            this.$emit('input', value)
        },

        findById(id) {
            if (!this.elements) {
                return { name: null, id: null }
            }

            return _.find(this.elements.rows, value => {
                return value.id === id
            })
        },

        makeObject(value) {
            if (!value) {
                return null
            }

            return { label: value.name, value: value.id }
        }
    },

    computed: {
        selected: {
            get() {
                return this.makeObject(this.findById(this.value))
            },
            set(item) {
                if (!item) {
                    return null
                }

                return this.$emit('input', item.value)
            }
        }
    }
}
</script>
