<template>
    <div>
        <b-modal v-model="showModal" title="Novo documento" @shown="onShow()">
            <template>
                <app-dropzone
                    :url="uploadUrl"
                    :token="environment.token"
                ></app-dropzone>
            </template>

            <template slot="modal-footer">
                <button @click="close()" class="btn btn-success btn-sm">
                    Fechar
                </button>
            </template>
        </b-modal>
    </div>
</template>

<script>
const service = {
    name: 'uploadedFiles',

    uri: 'uploaded-files',
}

export default {
    props: ['show', 'environment'],

    data() {
        return {
            busy: false,

            service: service,
        }
    },

    methods: {
        close() {
            this.showModal = false
        },

        closeModal() {
            this.showModal = false
        },

        onShow() {
            this.busy = false
        },
    },

    computed: {
        showModal: {
            get() {
                return this.show
            },

            set(showModal) {
                this.$emit('update:show', showModal)

                document.getElementById('dropzone').dropzone.removeAllFiles()
                document.getElementById('dropzone').dropzone.options[
                    'url'
                ] = this.uploadUrl
            },
        },

        uploadUrl() {
            return buildApiUrl(this.service.uri, this.$store.state)
        },
    },
}
</script>
