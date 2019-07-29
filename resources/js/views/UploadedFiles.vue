<template>
    <div>
        <div class="py-2 text-center"><h2>Imagens</h2></div>

        <b-alert
            :show="image.copyAlert.dismissCountDown"
            dismissible
            variant="warning"
            @dismiss-count-down="countDownChanged"
        >
            URL copiada para a área de transferência
        </b-alert>

        <div class="row">
            <div class="col-12 col-lg-4">
                <app-table-panel
                    v-if="can('events:read') || can('events:modify')"
                    :title="'Imagens (' + pagination.total + ')'"
                    :per-page="perPage"
                    :filter-text="filterText"
                    @input-filter-text="filterText = $event.target.value"
                    @set-per-page="perPage = $event"
                >
                    <template slot="buttons">
                        <b-button
                            class="btn btn-primary btn-sm pull-right"
                            @click="createDocument()"
                            title="Novo documento"
                        >
                            <i class="fa fa-plus"></i>
                        </b-button>
                    </template>

                    <app-table
                        :pagination="pagination"
                        @goto-page="gotoPage($event)"
                        :columns="['#', 'Nome', '']"
                    >
                        <tr
                            @click="select(file)"
                            v-for="file in uploadedFiles.data.rows"
                            :class="{
                                'cursor-pointer': true,
                                'bg-primary-lighter text-white': isCurrent(
                                    file,
                                    selected,
                                ),
                            }"
                        >
                            <td class="align-middle">{{ file.id }}</td>

                            <td class="align-middle">
                                {{ file.original_name }}
                            </td>

                            <td class="align-middle text-right">
                                <button
                                    v-clipboard:copy="file.sharing_url"
                                    v-clipboard:success="onCopy"
                                    v-clipboard:error="onError"
                                    title="Copiar link da imagem para convite"
                                    class="btn btn-info btn-sm btn-table-utility text-white ml-1 pull-right"
                                >
                                    <i class="fa fa-copy"></i>
                                </button>

                                <a
                                    :href="file.url"
                                    target="_blank"
                                    title="Visualizar imagem"
                                    class="btn btn-sm btn-micro btn-warning cursor-pointer"
                                >
                                    <i class="fa fa-eye"></i>
                                </a>
                            </td>
                        </tr>
                    </app-table>

                    <app-document-form
                        :show.sync="showModal"
                        :environment.sync="environment"
                    ></app-document-form>
                </app-table-panel>
            </div>
        </div>
    </div>
</template>

<script>
import crud from './mixins/crud'
import uploadedFiles from './mixins/uploaded-files'
import permissions from './mixins/permissions'

const service = { name: 'uploadedFiles', uri: 'uploaded-files' }

export default {
    mixins: [crud, uploadedFiles, permissions],

    data() {
        return {
            service: service,

            showModal: false,

            image: {
                copyAlert: {
                    dismissSecs: 2,
                    dismissCountDown: 0,
                    show: false,
                },
            },

            modalShow: false,
        }
    },

    methods: {
        countDownChanged(dismissCountDown) {
            this.image.copyAlert.dismissCountDown = dismissCountDown
        },

        onCopy: function(e) {
            this.image.copyAlert.dismissCountDown = this.image.copyAlert.dismissSecs
        },

        onError: function(e) {
            alert('Failed to copy texts')
        },

        createDocument() {
            this.showModal = true
        },
    },
}
</script>

<style></style>
