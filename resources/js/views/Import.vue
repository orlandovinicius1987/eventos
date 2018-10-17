<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Importar Dados</h2>
        </div>

        <div class="row">
            <div class="col-12 text-center">
                <p>Por favor converta o arquivo para o padrão CSV, separado por ponto-e-vírgula (;) antes de importar aqui</p>

                <p>
                    <upload-file v-model="file"></upload-file>
                </p>

                <p v-if="file">
                    <button class="btn btn-danger btn-lg" @click="uploadFile()">Importar</button>
                </p>

                <div v-if="error && error[0]" class="alert alert-danger" role="alert">
                    {{ error[0] }}
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
            serviceName: 'import',
            file: null,
            error: null,
        }
    },

    methods: {
        uploadFile() {
            this.readFile()
        },

        readFile() {
            const reader = new FileReader();

            reader.onload = event => this.sendFile(event);

            dd(reader)

            reader.readAsText(this.file);
        },

        sendFile(event) {
            const $this = this

            $this.error = null

            post('/api/v1/import', {file: event.target.result}).then(response => {
                dd('success', response)
            }).catch(error => {
                $this.error = error.response.data.errors['field']
            })
        },
    }
}
</script>

<style>
</style>
