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
                            :pagination="receptiveInvitations.data.links.pagination"
                            @goto-page="gotoPage($event)"
                            :columns="['#', 'Convidado', 'Código', 'Check-in']"

                    >
                        <tr
                                v-for="invitation in receptiveInvitations.data.rows" class="cursor-pointer"
                                @click="confirmCheckin(invitation)"
                        >
                            <td>{{invitation.id}}</td>
                            <td>{{invitation.person_institution.person.name}}</td>
                            <td>{{invitation.code}}</td>
                            <td>
                                <h6 class="mb-0">
                                    <span v-if="invitation.checkin_at" class="badge badge-success">Feito às {{invitation.checkin_at}}</span>
                                    <span v-if="!invitation.checkin_at" class="badge badge-danger">Não chegou</span>
                                </h6>
                                </td>
                        </tr>
                    </app-table>
                </app-table-panel>
            </div>

            <div class="col-4">
                <p class="one-line">Código: <b>{{ result }}</b></p>
                <qrcode-drop-zone @decode="onDecode">
                    <qrcode-stream @decode="onDecode" @init="onInit" />
                </qrcode-drop-zone>

                <qrcode-capture v-if="noStreamApiSupport" @decode="onDecode" />

            </div>

            <div class="col-4">
                <p class="one-line">Ultimo Check-in Realizado:</p>
                <div v-if="receptiveInvitations.selected.id">
                <div class="col-4">
                    <img
                            :src="receptiveInvitations.selected.person_institution.person.photoUrl"
                            class="img-thumbnail rounded mx-auto d-block mb-2"
                            width="200"
                            height="200"
                    >
                    <div class="row">
                        <b>Nome:</b> {{receptiveInvitations.selected.person_institution.person.name}}
                    </div>
                    <div class="row">
                        <b>Check-in:</b> {{receptiveInvitations.selected.checkin_at}}
                    </div>
                    <!--<div class="row">-->
                        <!--<b>Categoria:</b> {{receptiveInvitations.receptiveInvitation.person_institution.category.name}}-->
                    <!--</div>-->
                    <div class="row">
                        <b>Categoria:</b> {{receptiveInvitations.selected.person_institution.role.name}}
                    </div>
                </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import crud from './mixins/crud'
    import permissions from './mixins/permissions'
    import receptive from './mixins/receptive'
    import events from './mixins/events'
    import subEvents from './mixins/sub-events'
    import { mapActions, mapState } from 'vuex'
    import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

    const service = {
        name: 'receptiveInvitations',
        uri: 'events/{events.selected.id}/sub-events/{subEvents.selected.id}/receptive',
        isForm: true,
    }

    export default {
        props: ['mode'],

        mixins: [crud, receptive, permissions, events,subEvents],

        components: { QrcodeStream, QrcodeDropZone, QrcodeCapture },

        data() {
            return {
                service: service,
                result: '',
                noStreamApiSupport: false,
                inv: '',

            }

        },

        computed: {
            ...mapState({
                invitations: state=> state.receptive.invitations,
            }),
        },

        methods: {
            ...mapActions(service.name, [
                'selectReceptiveInvitation',
            ]),

            confirmCheckin(invitation){
                const $this = this

                dd('invitation.ckeckin_at - ',invitation.checkin_at)
                if(invitation.checkin_at == null) {

                    confirm(
                        'Deseja realizar o checkin de ' +
                        invitation.person_institution.person.name +
                        '?', this,
                    ).then(function (value) {
                        if (value) {
                            $this.makeCheckin(invitation)
                            $this.$store.dispatch('receptive/selectReceptiveInvitation', invitation)
                        }
                    })

                }

            },

            makeCheckin(invitation) {
                return this.$store.dispatch('receptiveInvitations/makeCheckin', invitation)
            },

            onDecode (result) {
                this.result = result
              return this.makeCheckinWithCode(result)
            },

            makeCheckinWithCode(code){
                const $this = this

                dd('this.receptiveInvitations.data.rows',this.receptiveInvitations.data.rows)
                this.receptiveInvitations.data.rows.forEach(function(invitation){
                        if(invitation.code == code){
                            $this.$store.dispatch('receptiveInvitations/makeCheckin', invitation)
                            $this.$store.dispatch('receptive/selectReceptiveInvitation', invitation)
                        }
                })

            },
            async onInit (promise) {
                try {
                    await promise
                } catch (error) {
                    if (error.name === 'StreamApiNotSupportedError') {
                        this.noStreamApiSupport = true
                    }
                }
            },

            findInvitationByCode(code){
                dd(this.$store.state['receptiveInvitations'].data.filter.text = code)
            },
        },

        mounted(){
            this.$store.dispatch('receptiveInvitations/load')
        }
    }
</script>

<style>
</style>


