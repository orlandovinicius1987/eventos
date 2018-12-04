recordButtonText<template>
    <div>
        <div class="py-2 text-center">
            <h1>Convidar pessoas para o sub-evento</h1>
            <h2>{{ events.selected.name }}</h2>
            <h2>{{ subEvents.selected.name }} - {{ subEvents.selected.sector ? subEvents.selected.sector.name : '' }}</h2>
            <h2>{{ subEvents.selected.place }}</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-6">
                <app-table-panel
                    v-if="invitables.data.links"
                    title="Pessoas"
                    :per-page="invitablesPerPage"
                    @set-per-page="invitablesPerPage = $event"
                    :filter-text="invitablesFilterText"
                    @input-filter-text="invitablesFilterText = $event.target.value"
                >
                    <template slot="selects">
                        <app-institution-filter-for-invitation
                            name="institution_id"
                            label="Instituição"
                            :required="true"
                            :form="form"
                            :options="environment.tables.institutions"
                        ></app-institution-filter-for-invitation>

                        <app-role-filter-for-invitation
                            name="role_id"
                            label="Função"
                            :required="true"
                            :form="form"
                            :options="environment.tables.roles"
                        ></app-role-filter-for-invitation>

                        <app-select
                            name="sub_event_id"
                            label="Filtrar convidados de outro sub-evento"
                            v-model="subEventSelectFilter"
                            :required="true"
                            :form="form"
                            :options="except(this.environment.tables.sub_events, this.subEvents.form.fields.id)"
                        ></app-select>
                    </template>

                    <template slot="buttons">
                        <div
                            class="btn btn-primary btn-sm pull-right"
                            @click="invite()"
                        >
                            {{ recordButtonText }}
                        </div>

                        <div
                            v-if="selectedSubEvent"
                            class="btn btn-danger btn-sm pull-right"
                            @click="moveInvitations()"
                        >
                            mover convidados
                        </div>
                    </template>

                    <app-table
                        :pagination="invitables.data.links.pagination"
                        @goto-page="invitablesGotoPage($event)"
                        :columns="[
                                    '#',
                                    'Convidar',
                                    'Tratamento',
                                    'Nome',
                                    'Instituição',
                                    'Cargo',
                                    ''
                                ]"
                    >
                        <tr
                            v-for="invitable in invitables.data.rows"
                            :class="{'cursor-pointer': true, 'bg-primary-lighter text-white': isCurrent(invitable, invitables.selected)}"
                        >
                            <td class="align-middle">{{ invitable.id }}</td>

                            <td class="align-middle">
                                <input
                                    :checked="isChecked(invitable)"
                                    @input="toggleCheck(invitable)"
                                    type="checkbox"
                                >
                            </td>

                            <td class="align-middle">{{ invitable.title }}</td>

                            <td class="align-middle">{{ invitable.person.name }}</td>

                            <td class="align-middle">{{ invitable.institution.name }}</td>

                            <td class="align-middle">{{ invitable.role.name }}</td>

                            <td class="align-middle">
                                <a
                                    @click="invite(invitable)"
                                    class="btn btn-danger btn-sm ml-1 pull-right"
                                    v-if="can('update')"
                                    href="#"
                                >
                                    <i class="fa fa-plus"></i>
                                </a>
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
import subEvents from './mixins/sub-events'
import invitables from './mixins/invitables'
import { mapState } from 'vuex'

const service = {
    name: 'invitables',
    uri:
        'events/{events.selected.id}/sub-events/{subEvents.selected.id}/invitations/invitables',
}

export default {
    props: ['mode'],

    mixins: [crud, invitables, subEvents],

    data() {
        this.$store.dispatch('environment/loadSubEvents')
        return {
            service: service,

            checkedPeople: {},
        }
    },

    computed: {
        ...mapState({
            events: state => state.events,

            subEvents: state => state.subEvents,
        }),

        selectedSubEvent:{
            get(){
                return this.$store.state['invitables'].data.filter.selects['sub_event']
            }
        },

        recordButtonText:{
            get() {
                return this.selectedSubEvent ? 'copiar convidados' : 'convidar'
            },
        },

        invitablesFilterText: {
            get() {
                return this.$store.state['invitables'].data.filter.text
            },

            set(filter) {
                this.resetCheckedPeople()

                return this.$store.dispatch(
                    this.service.name + '/mutateSetQueryFilterText',
                    filter,
                )
            },
        },

        invitablesPerPage: {
            get() {
                return this.$store.state['invitables'].data.links.pagination
                    .per_page
            },

            set(perPage) {
                this.resetCheckedPeople()

                return this.$store.dispatch('invitables/setPerPage', perPage)
            },
        },

        subEventSelectFilter: {
            get() {
                return _.debounce( () => {
                    this.$store.state['invitables'].data.filter.selects['sub_event']
                }, 650)
            },

            set(id) {
                this.resetCheckedPeople()

                return this.$store.dispatch(
                    'invitables/mutateFilterSelect', {
                        field: 'sub_event', value: id
                    }
                )
            },
        },
    },

    methods: {
        invitablesGotoPage(page) {
            this.gotoPage(
                page,
                'invitables',
                this.invitables.data.links.pagination,
            )
        },

        resetCheckedPeople(){
            for (let key in this.checkedPeople) {
                if (this.checkedPeople.hasOwnProperty(key)) {
                    this.checkedPeople[key].checked = false
                }
            }
        },

        isChecked(invitation) {
            return this.checkedPeople.hasOwnProperty(invitation.id)
                ? this.checkedPeople[invitation.id].checked
                : false
        },

        toggleCheck(invitation) {
            if (!this.checkedPeople.hasOwnProperty(invitation.id)) {
                this.checkedPeople[invitation.id] = {
                    id: invitation.id,
                    checked: false,
                }
            }

            this.checkedPeople[invitation.id].checked = !this.checkedPeople[
                invitation.id
            ].checked
        },

        invite() {
            const invitees = {
                eventId: this.events.selected.id,

                subEventId: this.subEvents.selected.id,

                invitees: _.filter(this.checkedPeople, person => {
                    return person.checked
                }),
            }

            this.$store.dispatch('invitables/invite', invitees)
        },

        moveInvitations() {
            const invitees = {
                eventId: this.events.selected.id,

                newSubEventId: this.subEvents.selected.id,

                currentSubEventId: this.selectedSubEvent,

                invitees: _.filter(this.checkedPeople, person => {
                    return person.checked
                }),
            }

            this.$store.dispatch('invitables/moveInvitations', invitees)

            // this.$router.go(0)
        },

        except(list, id) {
            let items = clone(list)

            items.rows = except(list.rows, id)

            return items
        },
    },
}
</script>

<style>
</style>
