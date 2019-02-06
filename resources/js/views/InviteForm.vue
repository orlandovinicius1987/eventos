<template>
    <div>
        <div class="py-2 text-center">
            <h1>Convidar pessoas para o sub-evento</h1>

            <h2>{{ events.selected.name }}</h2>

            <h2>{{ subEvents.selected.name }}</h2>

            <app-sector-badge
                key="invitation.id"
                class="mt-2 p-4"
                :sector="subEvents.selected.sector"
                font-size="2em"
                uppercase="true"
                :complement="subEvents.selected.place"
                complementFontSize="1.2em"
                padding="3"
            ></app-sector-badge>
        </div>

        <div class="row justify-content-center">
            <div class="col-12">
                <app-table-panel
                    v-if="invitables.data.links"
                    title="Pessoas"
                    :per-page="invitablesPerPage"
                    @set-per-page="invitablesPerPage = $event"
                    :filter-text="invitablesFilterText"
                    @input-filter-text="
                        invitablesFilterText = $event.target.value
                    "
                >
                    <template slot="checkboxes">
                        <app-input
                            name="not_invited"
                            label="Somente não convidados"
                            type="checkbox"
                            v-model="notInvited"
                            :required="true"
                            :form="form"
                            inline="true"
                        ></app-input>
                    </template>

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

                        <app-topic-filter-for-invitation
                                name="topic_id"
                                label="Interesses"
                                :required="true"
                                :form="form"
                                :options="environment.tables.topics"
                        ></app-topic-filter-for-invitation>

                        <app-category-filter-for-invitation
                                name="category_id"
                                label="Categoria"
                                :required="true"
                                :form="form"
                                :options="environment.tables.categories"
                        ></app-category-filter-for-invitation>

                        <app-select
                            name="sub_event_id"
                            label="Filtrar convidados de outro sub-evento"
                            v-model="subEventSelectFilter"
                            :required="true"
                            :form="form"
                            :options="
                                except(
                                    this.environment.tables.sub_events,
                                    this.subEvents.form.fields.id,
                                )
                            "
                        ></app-select>
                    </template>

                    <template slot="buttons">
                        <div
                            class="btn btn-primary btn-sm pull-right"
                            @click="invite()"
                            dusk="dusk-invite-button"
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
                            { title: 'Convites', trClass: 'text-center' },
                            '',
                        ]"
                    >
                        <tr
                            v-for="invitable in invitables.data.rows"
                            :class="{
                                'cursor-pointer': true,
                                'bg-primary-lighter text-white': isCurrent(
                                    invitable,
                                    invitables.selected,
                                ),
                            }"
                        >
                            <td class="align-middle">{{ invitable.id }}</td>

                            <td class="align-middle">
                                <input
                                    v-if="!invitable.is_invited_to_sub_event"
                                    :checked="isChecked(invitable)"
                                    @input="toggleCheck(invitable)"
                                    type="checkbox"
                                    dusk="dusk-invite"
                                />
                            </td>

                            <td class="align-middle">{{ invitable.title }}</td>

                            <td class="align-middle">
                                {{ invitable.person.name }}
                            </td>

                            <td class="align-middle">
                                {{ invitable.institution.name }}
                            </td>

                            <td class="align-middle">
                                {{ invitable.role.name }}
                            </td>

                            <td class="align-middle text-center">
                                <span
                                    v-for="(invitation,
                                    key,
                                    index) in sortInvitations(
                                        invitable.invitations,
                                    )"
                                >
                                    <app-sector-badge
                                        key="invitation.id"
                                        :class="key > 0 ? 'mt-2' : ''"
                                        :sector="invitation.sub_event.sector"
                                        uppercase="true"
                                        :complement="invitation.sub_event.place"
                                    ></app-sector-badge>

                                    <br
                                        v-if="
                                            sortInvitations(
                                                invitable.invitations,
                                            ).length > 1 &&
                                                key <
                                                    sortInvitations(
                                                        invitable.invitations,
                                                    ).length -
                                                        1
                                        "
                                    />
                                </span>
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
import permissions from './mixins/permissions'
import { mapState } from 'vuex'

const service = {
    name: 'invitables',
    uri:
        'events/{events.selected.id}/sub-events/{subEvents.selected.id}/invitations/invitables',
}

export default {
    props: ['mode'],

    mixins: [crud, invitables, subEvents, permissions],

    data() {
        this.$store.dispatch('environment/loadSubEvents')
        this.$store.dispatch('environment/loadRoles')
        this.$store.dispatch('environment/loadCategories')
        this.$store.dispatch('environment/loadInstitutions')
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

        notInvited: {
            get() {
                return this.$store.state['invitations'].data.filter.checkboxes
                    .not_invited
            },

            set(filter) {
                if (filter) {
                    this.$store.commit('invitables/mutateFilterCheckbox', {
                        field: 'not_invited',
                        value: this.subEvents.selected.id,
                    })
                } else {
                    this.$store.commit('invitables/mutateFilterCheckbox', {
                        field: 'not_invited',
                        value: null,
                    })
                }

                this.$store.dispatch('invitables/load')
            },
        },

        selectedSubEvent: {
            get() {
                return this.$store.state['invitables'].data.filter.selects[
                    'sub_event'
                ]
            },
        },

        recordButtonText: {
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
                return _.debounce(() => {
                    this.$store.state['invitables'].data.filter.selects[
                        'sub_event'
                    ]
                }, 650)
            },

            set(id) {
                this.resetCheckedPeople()

                return this.$store.dispatch('invitables/mutateFilterSelect', {
                    field: 'sub_event',
                    value: id,
                })
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

        resetCheckedPeople() {
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

            this.resetCheckedPeople()

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

            this.resetCheckedPeople()

            this.$store.dispatch('invitables/moveInvitations', invitees)

            // this.$router.go(0)
        },

        except(list, id) {
            let items = clone(list)

            items.rows = except(list.rows, id)

            return items
        },

        sortInvitations(invitations) {
            return _.sortBy(invitations, 'order')
        },
    },

    beforeDestroy() {
        this.$store.state['invitables'].data.filter.text = null

        this.$store.commit('invitables/clearFilterSelects')
    },
}
</script>

<style></style>
