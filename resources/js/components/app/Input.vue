<template>
    <div>
        <label :for="name">{{ label }}</label>

        <input
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
            class="form-control"
            id="name"
            :required="required"
        >

        <small class="text-danger" v-if="form.errors.has(name)" >
            {{ form.errors.get(name) }}
        </small>
    </div>
</template>

<script>
export default {
    props: ['value', 'name', 'label', 'required', 'form'],
}
</script>

<style>
</style>
