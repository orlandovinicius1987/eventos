<template>
    <div>
        <label :for="name" class="mb-0 mt-4">{{ label }}</label>
        <select
                v-bind:value="value"
                v-on:input="$emit('input', $event.target.value)"
                class="custom-select custom-select-sm"
                :id="name"
                :required="required"
        >
            <option
                    value="value"
                     selected>5
            </option>
        </select>

        <small class="text-danger" v-if="form.errors.has(name)" >
            {{ form.errors.get(name) }}
        </small>
    </div>
</template>

<script>
export default {
    props: ['value', 'name', 'label', 'required', 'form', 'type'],
}
</script>
