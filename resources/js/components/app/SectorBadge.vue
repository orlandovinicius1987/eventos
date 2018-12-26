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
                'font-size': fontSize,
            }"
        >
            {{ sector ? sector.name : '' }}
        </span>

        <span v-if="complement">
            <br />

            <span
                style="{'font-size': complementFontSize ? complementFontSize : '0.7em'}"
                class="mt-2"
            >
                <br v-if="fontSize > '1em'" />

                {{ complement }}
            </span>
        </span>
    </span>
</template>

<script>
export default {
    props: [
        'sector',
        'complement',
        'uppercase',
        'padding',
        'fontSize',
        'complementFontSize',
    ],

    methods: {
        getPadding() {
            return this.padding ? this.padding : 1
        },
    },
}
</script>
