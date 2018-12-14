<template>
    <div>
        <div class="py-2 text-center"><h2>Importar Dados</h2></div>

        <div class="row">
            <div class="col-12 text-center">
                <p>
                    Por favor converta o arquivo para o padrão CSV, separado por
                    ponto-e-vírgula (;) antes de importar aqui
                </p>

                <p>
                    <app-upload-file
                        v-model="file"
                        :busy="busy"
                    ></app-upload-file>
                </p>

                <p v-if="file">
                    <button
                        class="btn btn-danger btn-lg"
                        @click="uploadFile()"
                        :disabled="busy"
                    >
                        <i v-if="busy" class="fas fa-spinner fa-spin"></i>
                        Importar
                    </button>
                </p>

                <div
                    v-if="error && error[0]"
                    class="alert alert-danger"
                    role="alert"
                >
                    {{ error[0] }}
                </div>

                <div v-if="success" class="alert alert-success" role="alert">
                    arquivo importado
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mixins: [],

    data() {
        return {
            service: { name: 'import', uri: 'import' },
            file: null,
            error: null,
            success: false,
            busy: false,
        }
    },

    methods: {
        uploadFile() {
            this.readFile()
        },

        readFile() {
            const reader = new FileReader()

            reader.onload = event => this.sendFile(event)

            reader.readAsText(this.file)
        },

        sendFile(event) {
            this.error = null

            this.success = false

            this.busy = true

            post('/api/v1/import', { file: event.target.result })
                .then(response => {
                    this.success = true
                })
                .catch(error => {
                    this.error = error.response.data.errors['field']
                })
                .then(() => {
                    this.busy = false
                })
        },
    },
}
</script>

<style></style>
