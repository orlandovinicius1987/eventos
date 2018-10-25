<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h1>{{ events.selected.name }}</h1>
            <h2>{{ subEvents.selected.name }}</h2>
            <h2>Convidar Pessoas</h2>
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
                    <template slot="buttons">
                        <a
                            href="#"
                            class="btn btn-primary btn-sm pull-right"
                            @click="invite()"
                        >
                            gravar convidados
                        </a>
                    </template>

                    <app-table
                        :pagination="invitables.data.links.pagination"
                        @goto-page="invitablesGotoPage($event)"
                        :columns="[
                                    '#',
                                    'Convidar',
                                    'Nome',
                                    'Instituição',
                                    'Cargo',
                                    ''
                                ]"
                    >
                        <tr
                            v-for="invitable in invitables.data.rows"
                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(invitable, invitables.selected)}"
                        >
                            <td class="align-middle">{{ invitable.id }}</td>

                            <td class="align-middle">
                                <input
                                    :checked="isChecked(invitable)"
                                    @input="toggleCheck(invitable)"
                                    type="checkbox"
                                >
                            </td>

                            <td class="align-middle">{{ invitable.person_institution.title }} {{ invitable.person_institution.person.name }}</td>

                            <td class="align-middle">{{ invitable.person_institution.institution.name }}</td>

                            <td class="align-middle">{{ invitable.person_institution.role.name }}</td>

                            <td class="align-middle">
                                <a
                                    @click="invite(invitable)"
                                    class="btn btn-danger btn-sm mr-1 pull-right"
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
    import invitables from './mixins/invitables'
    import { mapState } from 'vuex'

    const service = {
        name: 'invitables',
        uri: 'events/{events.selected.id}/sub-events/{subEvents.selected.id}/invitations/invitables'
    }

    export default {
        props: ['mode'],

        mixins: [crud, invitables],

        data() {
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

            invitablesFilterText: {
                get() {
                    return this.$store.state['invitables'].data.filter.text
                },

                set(filter) {
                    return this.$store.dispatch(
                        this.service.name + '/mutateSetQueryFilterText',
                        filter,
                    )
                },
            },

            invitablesPerPage: {
                get() {
                    return this.$store.state['invitables'].data.links.pagination.per_page
                },

                set(perPage) {
                    return this.$store.dispatch('invitables/setPerPage', perPage)
                },
            },
        },

        methods: {
            invitablesGotoPage(page) {
                this.gotoPage(page, 'invitables', this.invitables.data.links.pagination)
            },

            isChecked(invitation) {
                return this.checkedPeople.hasOwnProperty(invitation.id)
                    ? this.checkedPeople[invitation.id].checked
                    : false
            },

            toggleCheck(invitation) {
                if (!this.checkedPeople.hasOwnProperty(invitation.id)) {
                    this.checkedPeople[invitation.id] = { id: invitation.id, checked: false }
                }

                this.checkedPeople[invitation.id].checked = !this.checkedPeople[invitation.id].checked
            },

            invite() {
                const invitees = {
                    eventId: this.events.selected.id,

                    subEventId: this.subEvents.selected.id,

                    invitees: _.filter(this.checkedPeople, (person) => {
                        return person.checked
                    })
                }

                return this.$store.dispatch('invitables/invite', invitees)
            },
        }
    }
</script>

<style>
</style>
