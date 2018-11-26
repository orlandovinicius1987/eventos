<template>
    <div>
        <div :id="id"></div>
    </div>
</template>

<script>
    import Editor from '../../classes/MarkdownTextArea'

export default {
    props: [
        'id'
    ],

    mounted(){
        let editor = new Editor({
            el: document.querySelector('#'+this.id),
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: '300px'
        });
    }
}
</script>
