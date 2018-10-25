<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Pessoas</h2>
        </div>

        <div class="row">
            <div class="col-4">
                <app-table-panel
                    v-if="people.data.links"
                    :title="'Pessoas (' + pagination.total + ')'"
                    :add-button="{ uri: '/people/create', disabled: cannot('create') }"
                    :per-page="peoplePerPage"
                    @set-per-page="peoplePerPage = $event"
                    :filter-text="peopleFilterText"
                    @input-filter-text="peopleFilterText = $event.target.value"
                >
                    <app-table
                        :pagination="people.data.links.pagination"
                        @goto-page="peopleGotoPage($event)"
                        :columns="['#','Tratamento','Nome', 'Nome público', '']"
                    >
                        <tr
                                @click="selectPerson(person)"
                                v-for="person in people.data.rows"
                                :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(person, selected)}"
                        >
                            <td class="align-middle">{{ person.id }}</td>
                            <td class="align-middle">{{ person.title }}</td>
                            <td class="align-middle">{{ person.name }}</td>
                            <td class="align-middle">{{ person.nickname }}</td>
                            <td>
                                <router-link
                                    :to="'/people/'+person.id+'/update'"
                                    tag="div"
                                    class="btn btn-danger btn-sm mr-1 pull-right"
                                    :disabled="cannot('update')"
                                >
                                    <i class="fa fa-edit"></i>
                                </router-link>
                            </td>
                        </tr>
                    </app-table>
                </app-table-panel>
            </div>
            <div class="col-8">
                <app-table-panel
                        v-if="selected.id && personInstitutions.data.links"
                        :title="selected.name + ' (' + personInstitutions.data.links.pagination.total + ' funções)'"
                        :add-button="{ uri: '/people/'+personInstitutions.person.id+'/person-institutions/create', disabled: cannot('create') }"
                        :per-page="personInstitutionsPerPage"
                        @set-per-page="personInstitutionsPerPage = $event"
                        :filter-text="personInstitutionsFilterText"
                        @input-filter-text="personInstitutionsFilterText = $event.target.value"
                >
                    <app-table
                            :pagination="personInstitutions.data.links.pagination"
                            @goto-page="personInstitutionsGotoPage($event)"
                            :columns="['#','Title']"
                    >
                        <tr
                                @click="selectSubEvent(personInstitution)"
                                v-for="personInstitution in personInstitutions.data.rows" class="cursor-pointer"
                                :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(personInstitution, personInstitutions.selected)}"
                        >
                            <td>{{ personInstitution.id }}</td>
                            <td>{{ personInstitution.title }}</td>
                            <!--<td>-->
                                <!--<router-link-->
                                        <!--:to="'people/'+personInstitutions.event.id+'/person-institutions/'+personInstitution.id+'/update'"-->
                                        <!--tag="div"-->
                                        <!--class="btn btn-danger btn-sm mr-1 pull-right"-->
                                        <!--:disabled="cannot('update')"-->
                                <!--&gt;-->
                                    <!--<i class="fa fa-edit"></i>-->
                                <!--</router-link>-->
                            <!--</td>-->
                        </tr>
                    </app-table>
                </app-table-panel>
            </div>
        </div>
    </div>
</template>

<script>
    import crud from './mixins/crud'
    import people from './mixins/people'
    import permissions from './mixins/permissions'
    import { mapActions, mapState } from 'vuex'

    const service = { name: 'people', uri: 'people' }

    export default {
        mixins: [crud, people, permissions],

        data() {
            return {
                service: service,
            }
        },

        methods: {
            ...mapActions(service.name, [
                'selectPerson',
                'selectPersonInstitution',
                'selectAddress',
                'selectContact',
            ]),

            peopleGotoPage(page) {
                this.gotoPage(page, 'people', this.people.data.links.pagination)
            },

            personInstitutionsGotoPage(page) {
                this.gotoPage(page, 'personInstitutions', this.personInstitutions.data.links.pagination)
            },

            // addressesGotoPage(page) {
            //     this.gotoPage(
            //         page,
            //         'addresses',
            //         this.addresses.data.links.pagination,
            //     )
            // },
            //
            // contactsGotoPage(page) {
            //     this.gotoPage(
            //         page,
            //         'contacts',
            //         this.contacts.data.links.pagination,
            //     )
            // },
        },

        computed: {
            peopleFilterText: {
                get() {
                    return this.$store.state['people'].data.filter.text
                },

                set(filter) {
                    return this.$store.dispatch(
                        this.service.name + '/mutateSetQueryFilterText',
                        filter,
                    )
                },
            },

            peoplePerPage: {
                get() {
                    return this.$store.state['people'].data.links.pagination.per_page
                },

                set(perPage) {
                    return this.$store.dispatch('people/setPerPage', perPage)
                },
            },

            personInstitutionsFilterText: {
                get() {
                    return this.$store.state['personInstitutions'].data.filter.text
                },

                set(filter) {
                    return this.$store.dispatch(
                        'personInstitutions/mutateSetQueryFilterText',
                        filter,
                    )
                },
            },

            personInstitutionsPerPage: {
                get() {
                    return this.$store.state['personInstitutions'].data.links.pagination.per_page
                },

                set(perPage) {
                    return this.$store.dispatch('personInstitutions/setPerPage', perPage)
                },
            },

            // addressesFilterText: {
            //     get() {
            //         return this.$store.state['addresses'].data.filter.text
            //     },
            //
            //     set(filter) {
            //         return this.$store.dispatch(
            //             'addresses/mutateSetQueryFilterText',
            //             filter,
            //         )
            //     },
            // },
            //
            // addressesPerPage: {
            //     get() {
            //         return this.$store.state['addresses'].data.links.pagination
            //             .per_page
            //     },
            //
            //     set(perPage) {
            //         return this.$store.dispatch('addresses/setPerPage', perPage)
            //     },
            // },
            //
            // contactsFilterText: {
            //     get() {
            //         return this.$store.state['contacts'].data.filter.text
            //     },
            //
            //     set(filter) {
            //         return this.$store.dispatch(
            //             'contacts/mutateSetQueryFilterText',
            //             filter,
            //         )
            //     },
            // },
            //
            // contactsPerPage: {
            //     get() {
            //         return this.$store.state['contacts'].data.links.pagination
            //             .per_page
            //     },
            //
            //     set(perPage) {
            //         return this.$store.dispatch('contacts/setPerPage', perPage)
            //     },
            // },
        },
    }
</script>

<style>
</style>
