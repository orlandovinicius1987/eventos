<template>
    <div>
        <label :for="id" class="mb-0 mt-4">{{ label }}</label>

        <editor :id="id" v-model="text" />

        <small class="text-danger" v-if="form.errors.has(id)">
            {{ form.errors.get(id) }}
        </small>
    </div>
</template>

<script>
import { Editor } from '@toast-ui/vue-editor'

export default {
    components: {
        editor: Editor,
    },

    computed: {
        text: {
            get() {
                return this.value
            },

            set(newText) {
                this.$emit('input', newText)
            },
        },
    },

    props: ['id', 'value', 'label', 'form'],

    data() {
        return {}
    },

    mounted() {
        this.text = this.value
    },
}
</script>
