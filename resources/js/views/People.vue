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
                            :columns="['#','Title','Instituição', 'Função']"
                    >
                        <tr
                                @click="selectPersonInstitution(personInstitution)"
                                v-for="personInstitution in personInstitutions.data.rows" class="cursor-pointer"
                                :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(personInstitution, personInstitutions.selected)}"
                        >
                            <td>{{ personInstitution.id }}</td>
                            <td>{{ personInstitution.title }}</td>
                            <td>{{ personInstitution.institution.name }}</td>
                            <td>{{ personInstitution.role.name }}</td>
                            <td>
                                <router-link
                                    :to="'people/'+personInstitutions.person.id+'/person-institutions/'+personInstitution.id+'/update'"
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
        </div>


        <div class="row">
            <div class="col-4">
                <app-table-panel
                        v-if="personInstitutions.selected.id &&contacts.data.links"
                        :title="selected.name + ' (' +contacts.data.links.pagination.total + ' contatos)'"
                        :add-button="{ uri: '/people/'+personInstitutions.person.id+'/person-institutions/'+contacts.personInstitution.id+'/contacts/create', disabled: cannot('create') }"
                        :per-page="contactsPerPage"
                        @set-per-page="contactsPerPage = $event"
                        :filter-text="contactsFilterText"
                        @input-filter-text="contactsFilterText = $event.target.value"
                >
                    <app-table
                            :pagination="contacts.data.links.pagination"
                            @goto-page="contactsGotoPage($event)"
                            :columns="['#', 'Tipo', 'Contato']"
                    >
                        <tr
                                @click="selectContact(contact)"
                                v-for="contact in contacts.data.rows" class="cursor-pointer"
                                :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(contact,contacts.selected)}"
                        >
                            <td>{{ contact.id }}</td>
                            <td>{{ contact.contact_type.name }}</td>
                            <td>{{ contact.contact }}</td>
                            <td>
                            <router-link
                            :to="'/people/'+personInstitutions.person.id+'/person-institutions/'+contacts.personInstitution.id+'/contacts/'+contact.id+'/update'"
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
                        v-if="personInstitutions.selected.id && addresses.data.links"
                        :title="selected.name + ' (' +addresses.data.links.pagination.total + ' endereços)'"
                        :add-button="{ uri: '/people/'+personInstitutions.person.id+'/person-institutions/'+addresses.personInstitution.id+'/addresses/create', disabled: cannot('create') }"
                        :per-page="addressesPerPage"
                        @set-per-page="addressesPerPage = $event"
                        :filter-text="addressesFilterText"
                        @input-filter-text="addressesFilterText = $event.target.value"
                >
                    <app-table
                            :pagination="addresses.data.links.pagination"
                            @goto-page="addressesGotoPage($event)"
                            :columns="['#', 'Rua', 'Numero','Complemento','Bairro','Cidade']"
                            :rows="addresses.data.rows"
                    >
                        <tr
                                @click="selectAddress(address)"
                                v-for="address in addresses.data.rows" class="cursor-pointer"
                                :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(address,addresses.selected)}"
                        >
                            <td>{{ address.id }}</td>
                            <td>{{ address.street }}</td>
                            <td>{{ address.number }}</td>
                            <td>{{ address.complement }}</td>
                            <td>{{ address.neighbourhood }}</td>
                            <td>{{ address.zipcode }}</td>
                            <td>{{ address.city }}</td>
                            <td>{{ address.state }}</td>
                            <td>
                                <router-link
                                        :to="'/people/'+personInstitutions.person.id+'/person-institutions/'+addresses.personInstitution.id+'/addresses/'+address.id+'/update'"
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
        </div>

        <div class="row">
            <div class="col-4">
                <app-table-panel
                        v-if="personInstitutions.selected.id && contacts.data.links"
                        :title="'Acessores'"
                        :add-button="{ uri: '/people/'+personInstitutions.person.id+'/person-institutions/'+contacts.personInstitution.id+'create', disabled: cannot('create') }"
                        :per-page="advisorsPerPage"
                        @set-per-page="advisorsPerPage = $event"
                        :filter-text="advisorsFilterText"
                        @input-filter-text="advisorsFilterText = $event.target.value"
                >
                    <app-table
                            :pagination="advisors.data.links.pagination"
                            @goto-page="advisorsGotoPage($event)"
                            :columns="['#','Tratamento', 'Nome', 'Nome Público']"
                    >
                        <tr
                                @click="selectAdvisor(advisor)"
                                v-for="advisor in advisors.data.rows" class="cursor-pointer"
                                :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(advisor,advisors.selected)}"
                        >
                            <td>{{ advisor.id }}</td>
                            <td>{{ advisor.name }}</td>
                            <td>{{ advisor.nickname }}</td>
                            <!--<td>-->
                            <!--<router-link-->
                            <!--:to="'people/'+advisors.event.id+'/person-institutions/'+advisor.id+'/update'"-->
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
                'selectAdvisor',
            ]),

            peopleGotoPage(page) {
                this.gotoPage(page, 'people', this.people.data.links.pagination)
            },

            personInstitutionsGotoPage(page) {
                this.gotoPage(page, 'personInstitutions', this.personInstitutions.data.links.pagination)
            },

            addressesGotoPage(page) {
                this.gotoPage(
                    page,
                    'addresses',
                    this.addresses.data.links.pagination,
                )
            },

            contactsGotoPage(page) {
                this.gotoPage(
                    page,
                    'contacts',
                    this.contacts.data.links.pagination,
                )
            },

            advisorssGotoPage(page) {
                this.gotoPage(
                    page,
                    'contacts',
                    this.contacts.data.links.pagination,
                )
            },
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

            addressesFilterText: {
                get() {
                    return this.$store.state['addresses'].data.filter.text
                },

                set(filter) {
                    return this.$store.dispatch(
                        'addresses/mutateSetQueryFilterText',
                        filter,
                    )
                },
            },

            addressesPerPage: {
                get() {
                    return this.$store.state['addresses'].data.links.pagination
                        .per_page
                },

                set(perPage) {
                    return this.$store.dispatch('addresses/setPerPage', perPage)
                },
            },

            contactsFilterText: {
                get() {
                    return this.$store.state['contacts'].data.filter.text
                },

                set(filter) {
                    return this.$store.dispatch(
                        'contacts/mutateSetQueryFilterText',
                        filter,
                    )
                },
            },

            contactsPerPage: {
                get() {
                    return this.$store.state['contacts'].data.links.pagination
                        .per_page
                },

                set(perPage) {
                    return this.$store.dispatch('contacts/setPerPage', perPage)
                },
            },

            advisorsFilterText: {
                get() {
                    return this.$store.state['advisors'].data.filter.text
                },

                set(filter) {
                    return this.$store.dispatch(
                        'advisors/mutateSetQueryFilterText',
                        filter,
                    )
                },
            },

            advisorsPerPage: {
                get() {
                    return this.$store.state['advisors'].data.links.pagination
                        .per_page
                },

                set(perPage) {
                    return this.$store.dispatch('advisors/setPerPage', perPage)
                },
            },
        },
    }
</script>

<style>
</style>
