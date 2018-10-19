<template>
    <label class="file-select">
        <div class="select-button btn btn-primary btn-lg" :disabled="busy">
            <span v-if="value">Arquivo selecionado: {{ value.name }}</span>
            <span v-else>Selecionar Arquivo</span>
        </div>

        <input type="file" @change="handleFileChange"/>
    </label>
</template>

<script>
export default {
    props: {
        value: File,
        busy: false,
    },

    methods: {
        handleFileChange(e) {
            this.$emit('input', e.target.files[0])
        },
    },
}
</script>

<style scoped>
.file-select > input[type='file'] {
    display: none;
}
</style>
