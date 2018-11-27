<template>
    <div>
        <div :id="id"></div>
    </div>
</template>

<script>
    import Editor from '../../classes/MarkdownTextArea'

export default {
    props: [
        'id',
        'value'
    ],

    data(){
        return{
            editor: null
        }
    },

    mounted(){
        this.editor = new Editor({
            el: document.querySelector('#'+this.id),
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            events: {change: () => {$emit(this.id+'Changed', page)}},
            initialValue: this.value,
            height: '300px'
        });
    }
}
</script>
