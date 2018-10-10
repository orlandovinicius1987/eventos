<template>
    <div class="card card-shadow mb-4">
        <div class="card-header border-0">
            <div :class="'custom-title-wrap ' + _color">
                <div class="custom-title">{{ title }}</div>
            </div>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'color'],

    computed: {
        _color() {
            return this.color ? this.color : 'bar-primary'
        },
    },
}
</script>

<style>
</style>
