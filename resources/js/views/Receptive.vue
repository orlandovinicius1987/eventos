<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Dia do Evento</h2>
        </div>

        <div class="row" v-if="can('read')">
            <div class="col-4">
                <app-table-panel
                        :title="'Convidados'"
                        :per-page="perPage"
                        :filter-text="filterText"
                        @input-filter-text="filterText = $event.target.value"
                        @set-per-page="perPage = $event"
                >
                    <app-table
                            :pagination="pagination"
                            @goto-page="gotoPage($event)"
                            :columns="['#', 'Convidado', 'Código']"
                    >
                        <tr
                                v-for="invitation in invitations" class="cursor-pointer"

                        >
                            <td v-if="invitation.accepted_at != null">{{invitation.id}}</td>
                            <td v-if="invitation.accepted_at != null">{{invitation.person_institution.person.name}}</td>
                            <td v-if="invitation.accepted_at != null">{{invitation.code}}</td>
                        </tr>
                    </app-table>
                </app-table-panel>
            </div>

            <div class="col-4">
                <form>
                    <!--<app-input-->
                    <!--name="code"-->
                    <!--label="Código"-->
                    <!--:required="true"-->
                    <!--:form="form"-->
                    <!--&gt;</app-input>-->



                </form>
            </div>

            <div class="col-4">
                <p class="one-line">Last result: <b>{{ result }}</b></p>
                <qrcode-drop-zone @decode="onDecode">
                    <qrcode-stream @decode="onDecode" @init="onInit" />
                </qrcode-drop-zone>

                <qrcode-capture v-if="noStreamApiSupport" @decode="onDecode" />

            </div>
        </div>
    </div>
</template>

<script>
    import crud from './mixins/crud'
    import permissions from './mixins/permissions'
    import receptive from './mixins/receptive'
    import { mapState } from 'vuex'
    import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

    const service = {
        name: 'receptive',
        uri: 'events/{events.selected.id}/sub-events/{sub-events.selected.id}/receptive',
        isForm: true,
    }

    export default {
        props: ['mode'],

        mixins: [crud, receptive, permissions],

        components: { QrcodeStream, QrcodeDropZone, QrcodeCapture },

        data() {
            return {
                service: service,
                result: '',
                noStreamApiSupport: false
            }

        },

        computed: {
            ...mapState({
                //invitations: state=> state.invitations.data.rows,
            }),
        },

        methods: {
            onDecode (result) {
                this.result = result
            },
            async onInit (promise) {
                try {
                    await promise
                } catch (error) {
                    if (error.name === 'StreamApiNotSupportedError') {
                        this.noStreamApiSupport = true
                    }
                }
            }
        }
    }
</script>

<style>
</style>
