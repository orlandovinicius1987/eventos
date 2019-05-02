<template>
    <div v-if="can('receptive')">
        <div class="py-2 text-center">
            <h3>{{ events.selected.name }}</h3>
        </div>

        <div class="row" v-if="getCheckedIn().data">
            <div class="col-12">
                <div
                    v-if="getCheckedIn() && getCheckedIn().data"
                    class="text-center"
                >
                    <h4 class="text-center">
                        {{ getCheckedIn().data.person_institution.person.name }}
                    </h4>

                    <h6 class="text-center">
                        {{ getCheckedIn().data.person_institution.role.name }}
                    </h6>

                    <h6 class="text-center">
                        {{
                            getCheckedIn().data.person_institution.institution
                                .name
                        }}
                    </h6>

                    <br />

                    <span
                        class="badge text-white mb-4 pt-2 pb-3 pl-5 pr-5"
                        :style="{
                            'background-color': getCheckedIn().data.sub_event
                                .sector
                                ? getColor(
                                      getCheckedIn().data.sub_event.sector
                                          .color,
                                      0,
                                  )
                                : '',
                            color: getColor(
                                getCheckedIn().data.sub_event.sector.color,
                                1,
                            ),
                            'text-transform': 'uppercase',
                        }"
                    >
                        <h3 class="mb-0">
                            {{
                                getCheckedIn().data.sub_event.sector
                                    ? getCheckedIn().data.sub_event.sector.name
                                    : ''
                            }}
                        </h3>

                        <br />

                        {{ getCheckedIn().data.sub_event.place }}
                    </span>

                    <img
                        :src="
                            getCheckedIn().data.person_institution.person
                                .photoUrl
                        "
                        class="img-thumbnail rounded mx-auto d-block mb-2"
                        width="200"
                        height="200"
                    />

                    <h2 class="text-center">{{ getCheckedIn().data.code }}</h2>

                    <br />

                    <div
                        @click="clearCheckedIn()"
                        :class="
                            'btn btn-lg btn-block ' +
                                (getCheckedIn().success
                                    ? 'btn-success'
                                    : 'btn-danger')
                        "
                        v-html="
                            getCheckedIn().errors
                                ? checkedIn.errors
                                : 'Check-in feito com sucesso!'
                        "
                    ></div>
                </div>
            </div>
        </div>

        <div class="row" v-if="!getCheckedIn().data">
            <div class="col-12">
                <div class="card card-block bg-faded">
                    <div class="row">
                        <div
                            class="col-6 text-center"
                            v-if="receptive.data.statistics"
                        >
                            confirmados:
                            {{ receptive.data.statistics.confirmed }}
                        </div>

                        <div
                            class="col-6 text-center"
                            v-if="receptive.data.statistics"
                        >
                            ingressaram:
                            {{ receptive.data.statistics.totalcheckedin }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-md-6">
                <app-table-panel title="Leitura QRCode">
                    <div class="m-4">
                        <qrcode-drop-zone @decode="onDecode">
                            <qrcode-stream @decode="onDecode" @init="onInit" />
                        </qrcode-drop-zone>
                        <qrcode-capture
                            v-if="noStreamApiSupport"
                            @decode="onDecode"
                        />
                    </div>

                    {{ qrCodeError }}
                </app-table-panel>
            </div>

            <div class="col-sm-12 col-md-6">
                <app-table-panel
                    :title="'Convidados'"
                    :per-page="perPage"
                    :filter-text="filterText"
                    @input-filter-text="filterText = $event.target.value"
                    @set-per-page="perPage = $event"
                >
                    <app-table
                        :pagination="receptive.data.links.pagination"
                        @goto-page="gotoPage($event)"
                        :columns="[
                            'Convite',
                            {
                                type: 'label',
                                title: 'Setor',
                                trClass: 'text-center',
                            },
                            'Convidado',
                            {
                                type: 'label',
                                title: 'Check-in',
                                trClass: 'text-center',
                            },
                            {
                                type: 'label',
                                title: 'Foto',
                                trClass: 'text-center',
                            },
                        ]"
                    >
                        <tr
                            v-for="invitation in receptive.data.rows"
                            class="cursor-pointer"
                            @click="confirmCheckin(invitation)"
                        >
                            <td class="align-middle text-center">
                                {{ invitation.code }}
                            </td>

                            <td class="align-middle text-center">
                                <span
                                    class="badge text-white p-2"
                                    :style="{
                                        'background-color': invitation.sub_event
                                            .sector
                                            ? getColor(
                                                  invitation.sub_event.sector
                                                      .color,
                                                  0,
                                              )
                                            : '',
                                        color: getColor(
                                            invitation.sub_event.sector.color,
                                            1,
                                        ),
                                        'text-transform': 'uppercase',
                                    }"
                                >
                                    {{
                                        invitation.sub_event.sector
                                            ? invitation.sub_event.sector.name
                                            : ''
                                    }}
                                </span>
                            </td>

                            <td class="align-middle">
                                <strong>{{
                                    invitation.person_institution.person.name
                                }}</strong>

                                <br />

                                {{ invitation.sub_event.name }}<br />
                            </td>

                            <td class="align-middle text-center">
                                <h6 class="mb-0">
                                    <div v-if="invitation.checkin_at">
                                        <span class="badge badge-success">{{
                                            getCheckedInTime(invitation)
                                        }}</span>

                                        <br />

                                        <span class="text-sm"
                                            ><small>{{
                                                firstLast(
                                                    invitation.checked_in_by
                                                        .name,
                                                )
                                            }}</small></span
                                        >
                                    </div>

                                    <span
                                        v-if="!invitation.checkin_at"
                                        class="badge badge-danger"
                                        >não</span
                                    >
                                </h6>
                            </td>

                            <td class="align-middle text-center">
                                <img
                                    :src="
                                        invitation.person_institution.person
                                            .photoUrl
                                    "
                                    class="img-thumbnail rounded mx-auto d-block mb-2"
                                    width="50"
                                    height="50"
                                />
                            </td>
                        </tr>
                    </app-table>
                </app-table-panel>
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
import { parse, format } from 'date-fns'

const service = {
    name: 'receptive',
    uri: 'events/{events.selected.id}/receptive',
    isForm: true,
}

export default {
    props: ['mode'],

    mixins: [crud, receptive, permissions, events, subEvents],

    components: { QrcodeStream, QrcodeDropZone, QrcodeCapture },

    data() {
        return {
            service: service,
            result: '',
            noStreamApiSupport: false,
            inv: '',
            qrCodeError: null,
        }
    },

    computed: {
        ...mapState({
            checkedIn: state => state.receptive.checkedIn,
        }),
    },

    methods: {
        ...mapActions(service.name, ['selectInvitation']),

        confirmCheckin(invitation) {
            if (invitation.checkin_at == null) {
                confirm(
                    'Deseja realizar o check-in de ' +
                        invitation.person_institution.person.name +
                        '?',
                    this,
                ).then(value => {
                    if (value) {
                        this.makeCheckin(invitation.uuid)
                    }
                })
            } else {
                showMessage('Este convidado já fez check-in no evento', this)
            }
        },

        makeCheckin(invitation) {
            // this.result = 'Seja Bem-vindo(a) ' + invitation.person_institution.title + ' '+invitation.person_institution.person.name

            return this.$store.dispatch('receptive/makeCheckin', invitation)
        },

        onDecode(result) {
            return this.makeCheckin(result)
        },

        async onInit(promise) {
            try {
                await promise
            } catch (error) {
                if (error.name === 'NotAllowedError') {
                    this.qrCodeError =
                        'ERROR: you need to grant camera access permisson'
                } else if (error.name === 'NotFoundError') {
                    this.qrCodeError = 'ERROR: no camera on this device'
                } else if (error.name === 'NotSupportedError') {
                    this.qrCodeError =
                        'ERROR: secure context required (HTTPS, localhost)'
                } else if (error.name === 'NotReadableError') {
                    this.qrCodeError = 'ERROR: is the camera already in use?'
                } else if (error.name === 'OverconstrainedError') {
                    this.qrCodeError =
                        'ERROR: installed cameras are not suitable'
                } else if (error.name === 'StreamApiNotSupportedError') {
                    this.qrCodeError =
                        'ERROR: Stream API is not supported in this browser'
                }
            }
        },

        getCheckedIn() {
            return this.$store.state.receptive.checkedIn
        },

        clearCheckedIn() {
            return this.$store.commit('receptive/clearCheckedIn')
        },

        getCheckedInTime(invitation) {
            return format(parse(invitation.checkin_at), 'HH[h]mm')
        },

        firstLast(name) {
            return first_last(name)
        },
    },

    mounted() {
        this.$store.dispatch('receptive/load')
    },
}
</script>

<style>
</style>
