<template>
    <div>
        <label :for="name" class="mb-0 mt-4">{{ label }}</label>

        <input
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
            class="form-control"
            :id="name"
            :type="type"
            :required="required"
            :dusk="dusk"
            :readonly="readonly"
        >

        <small class="text-danger" v-if="form.errors.has(name)" >
            {{ form.errors.get(name) }}
        </small>
    </div>
</template>

<script>
export default {
    props: [
        'value',
        'name',
        'label',
        'required',
        'form',
        'type',
        'dusk',
        'readonly',
    ],
}
</script>
