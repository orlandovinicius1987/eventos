<template>
    <app-badge
        :caption="sector ? sector.name : ''"
        :complement="complement"
        :complementFontSize="complementFontSize"
        :color="sector && sector.color ? sector.color : '#000000,#FFFFFF'"
        :uppercase="uppercase"
        :padding="padding"
        :fontSize="fontSize"
    >
    </app-badge>
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
}
</script>
