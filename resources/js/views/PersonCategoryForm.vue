<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h1>{{ selected.name }}</h1> //events.selected.name
            <h2>Associar Categorias a Pessoas</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-6">
                <app-table-panel
                    v-if="personCategories.data.links"
                    title="Categorias"
                    :per-page="personCategoriesPerPage"
                    @set-per-page="personCategoriesPerPage = $event"
                    :filter-text="personCategoriesFilterText"
                    @input-filter-text="personCategoriesFilterText = $event.target.value"
                >
                    <template slot="buttons">
                        <a
                            href="#"
                            class="btn btn-primary btn-sm pull-right"
                            @click="partner()"
                        >
                            gravar convidados
                        </a>
                    </template>

                    <app-table
                        :pagination="personCategories.data.links.pagination"
                        @goto-page="personCategoriesGotoPage($event)"
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
                            v-for="partnerCategory in personCategories.data.rows"
                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(partnerCategory, personCategories.selected)}"
                        >
                            <td class="align-middle">{{ partnerCategory.id }}</td>

                            <td class="align-middle">
                                <input
                                    :checked="isChecked(partnerCategory)"
                                    @input="toggleCheck(partnerCategory)"
                                    type="checkbox"
                                >
                            </td>

                            <td class="align-middle">{{ partnerCategory.title }} {{ partnerCategory.person.name }}</td>

                            <td class="align-middle">{{ partnerCategory.institution.name }}</td>

                            <td class="align-middle">{{ partnerCategory.role.name }}</td>

                            <td class="align-middle">
                                <a
                                    @click="invite(partnerCategory)"
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
import personCategories from './mixins/personCategories'
import { mapState } from 'vuex'

const service = {
    name: 'personCategories',
    uri:
        'events/{events.selected.id}/sub-events/{subEvents.selected.id}/invitations/invitables',
}

export default {
    props: ['mode'],

    mixins: [crud, personCategories],

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

        personCategoriesFilterText: {
            get() {
                return this.$store.state['personCategories'].data.filter.text
            },

            set(filter) {
                return this.$store.dispatch(
                    this.service.name + '/mutateSetQueryFilterText',
                    filter,
                )
            },
        },

        personCategoriesPerPage: {
            get() {
                return this.$store.state['personCategories'].data.links.pagination
                    .per_page
            },

            set(perPage) {
                return this.$store.dispatch('personCategories/setPerPage', perPage)
            },
        },
    },

    methods: {
        personCategoriesGotoPage(page) {
            this.gotoPage(
                page,
                'personCategories',
                this.personCategories.data.links.pagination,
            )
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

            this.$store.dispatch('personCategories/categorize', invitees)

            this.$router.go(-1)
        },
    },
}
</script>

<style>
</style>
