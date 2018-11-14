<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>{{ this.mode === 'create' ? 'Nova ':'Editar '}}Pessoa</h2>
            <h2>{{ form.fields.name ? form.fields.name : '' }}</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-8">
                <form>
                    <div class="row">
                        <div class="col-12">
                            <img
                                @click="showCropper = true"
                                :src="form.fields.photoUrl"
                                class="img-thumbnail rounded mx-auto d-block"
                                width="200"
                                height="200"
                            >

                            <p>{{ form.fields.photoUrl }}</p>

                            <b-modal
                                id="croppaModal"
                                body-class="mx-auto"
                                v-model="showCropper"
                                centered
                            >
                                <vue-croppa
                                    v-model="photo"
                                    placeholder="Selecione uma imagem"
                                    :width="400"
                                    :height="400"
                                    :prevent-white-space="true"
                                ></vue-croppa>

                                <div slot="modal-footer" class="w-100">
                                    <div class="float-right btn btn-success" @click="showCropper = false">
                                        Cancelar
                                    </div>

                                    <div class="float-right btn btn-outline-secondary mr-2" @click="usePhoto()">
                                        OK
                                    </div>
                                </div>
                            </b-modal>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 mb-3">
                            <app-input
                                name="name"
                                label="Nome"
                                v-model="form.fields.name"
                                :required="true"
                                :form="form"
                            ></app-input>

                            <app-input
                                name="cpf"
                                label="CPF"
                                v-model="form.fields.cpf"
                                :required="false"
                                :form="form"
                                v-mask="'###.###.###-##'"
                            ></app-input>

                            <app-input
                                name="nickname"
                                label="Nome público"
                                v-model="form.fields.nickname"
                                :required="true"
                                :form="form"
                            ></app-input>

                            <app-input
                                name="title"
                                label="Tratamento"
                                v-model="form.fields.title"
                                :required="true"
                                :form="form"
                            ></app-input>

                            <app-input
                                name="birthdate"
                                label="Data de nascimento"
                                v-model="form.fields.birthdate"
                                type="date"
                                :form="form"
                            ></app-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button
                                @click.prevent="saveModel()"
                                class="btn btn-outline-secondary"
                                type="submit"
                            >
                                gravar
                            </button>

                            <router-link
                                to="/people"
                                tag="button"
                                class="btn btn-success"
                            >
                                cancelar
                            </router-link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import crud from './mixins/crud'
import people from './mixins/people'
import { mapActions } from 'vuex'

const service = { name: 'people', uri: 'people', performLoad: false }

export default {
    props: ['mode'],

    mixins: [crud, people],

    data() {
        return {
            service: service,
            photo: null,
            photoUrl: 'https://dummyimage.com/200x200/fff/aaa',
            photoBlob: null,
            showCropper: false,
        }
    },

    methods: {
        ...mapActions(service.name, ['selectPerson']),

        generatePhoto() {
            this.mutatePhotoUrl(this.photo.generateDataUrl())

            this.photo.generateBlob(
                blob => {
                    this.mutatePhoto(blob)
                },
                'image/jpeg',
                0.85
            );
        },

        usePhoto() {
            this.generatePhoto()

            this.showCropper = false
        },

        mutatePhoto(blob) {
            blob_to_base64(blob, (result) => {
                this.mutateSetFormField({
                    field: 'photo',
                    value: blob.type + ';' + result,
                })
            })
        },

        mutatePhotoUrl(url) {
            this.mutateSetFormField({
                field: 'photoUrl',
                value: url,
            })
        },
    }
}
</script>

<style></style>
