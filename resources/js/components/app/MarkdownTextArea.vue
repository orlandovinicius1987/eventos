<template>
    <div>
        <label :for="id" class="mb-0 mt-4">{{ label }}</label>

        <div :id="id"></div>

        <small class="text-danger" v-if="form.errors.has(id)" >
            {{ form.errors.get(id) }}
        </small>
    </div>
</template>

<script>
    import Editor from '../../classes/MarkdownTextArea'

export default {
    props: [
        'id',
        'value',
        'label',
        'form',
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
            events: {change: () => {
                    this.$emit('changeText', {text: this.editor.getValue(), fieldName: this.id})}
                },
            initialValue: this.value,
            height: '300px'
        });
    }
}
</script>
