<template>
    <span
        class="badge text-white"
        :class="' p-' + getPadding()"
        :style="{
            'background-color': sector ? sector.color : '',
        }"
    >
        <span
            :style="{
                'text-transform': uppercase ? 'uppercase' : 'none',
            }"
        >
            {{ sector ? sector.name : '' }}
        </span>

        <span v-if="complement" style="font-size: 0.7em;">
            <br />

            {{ complement }}
        </span>
    </span>
</template>

<script>
export default {
    props: ['sector', 'complement', 'uppercase', 'padding'],

    methods: {
        getPadding() {
            return this.padding ? this.padding : 1
        },
    },
}
</script>
