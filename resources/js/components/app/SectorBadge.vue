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
            <span
                style="{'font-size': complementFontSize ? complementFontSize : '0.7em'}"
                class="mt-2"
            >
                <br />
                <span v-for="part in breakString(complement)">
                    <br />
                    {{ part }}
                </span>
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

        breakString(string) {
            return splitString(string, 30)
        },
    },
}
</script>
