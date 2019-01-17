<template>
    <div>
        <div class="py-2 text-center">
            <div class="row">
                <div class="col-12"><h2>Pessoas</h2></div>
            </div>

            <div
                v-if="selected.id && personInstitutions.data.links"
                class="row bg-primary text-white"
            >
                <div class="col-12 mt-2">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-8">
                            <h1 class="display-4 mb-0">{{ selected.name }}</h1>
                        </div>

                        <div class="col-4">
                            <img
                                :src="makePhotoUrl(selected.photoUrl)"
                                class="img-thumbnail rounded mx-auto d-block mb-2"
                                width="200"
                                height="200"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <!-- LEFT COLUMN - PEOPLE -->
            <div class="col-12 col-lg-4">
                <app-table-panel
                    v-if="people.data.links"
                    :title="'Pessoas (' + pagination.total + ')'"
                    :add-button="{
                        uri: '/people/create',
                        disabled: cannot('create'),
                        dusk: 'create-people-button',
                    }"
                    :per-page="peoplePerPage"
                    @set-per-page="peoplePerPage = $event"
                    :filter-text="peopleFilterText"
                    @input-filter-text="peopleFilterText = $event.target.value"
                >
                    <template slot="selects">
                        <app-institution-filter-for-person
                            name="institution_id"
                            label="Instituição"
                            :required="true"
                            :form="form"
                            :options="environment.tables.institutions"
                        ></app-institution-filter-for-person>

                        <app-role-filter-for-person
                            name="role_id"
                            label="Função"
                            :required="true"
                            :form="form"
                            :options="environment.tables.roles"
                        ></app-role-filter-for-person>
                    </template>

                    <template slot="checkboxes">
                        <app-input
                            name="hasNoPhotoCheckbox"
                            label="sem foto"
                            type="checkbox"
                            v-model="hasNoPhotoCheckbox"
                            :required="true"
                            :form="form"
                            inline="true"
                        ></app-input>
                    </template>

                    <app-table
                        :pagination="people.data.links.pagination"
                        @goto-page="peopleGotoPage($event)"
                        :columns="[
                            '#',
                            'Tratamento',
                            'Nome',
                            'Nome público',
                            '',
                        ]"
                    >
                        <tr
                            @click="selectPerson(person)"
                            v-for="person in people.data.rows"
                            :class="{
                                'cursor-pointer': true,
                                'bg-primary text-white': isCurrent(
                                    person,
                                    selected,
                                ),
                            }"
                        >
                            <td class="align-middle">{{ person.id }}</td>

                            <td class="align-middle">{{ person.title }}</td>

                            <td dusk="dusk-da-pessoa" class="align-middle">
                                {{ person.name }}
                            </td>

                            <td class="align-middle">{{ person.nickname }}</td>

                            <td class="align-middle text-right">
                                <router-link
                                    :to="'/people/' + person.id + '/update'"
                                    tag="button"
                                    class="btn btn-danger btn-sm ml-1 pull-right"
                                    :disabled="cannot('edit')"
                                    title="Editar Pessoa"
                                >
                                    <i class="fa fa-edit"></i>
                                </router-link>
                            </td>
                        </tr>
                    </app-table>
                </app-table-panel>
            </div>

            <!-- RIGHT COLUMN - ALL OTHER SUBTABLES -->
            <div class="col-12 col-lg-8">
                <div class="row">
                    <div class="col-12">
                        <app-table-panel
                            v-if="selected.id && personCategories.data.links"
                            :title="
                                'Categorias: ' +
                                    personCategories.data.links.pagination.total
                            "
                            :add-button="{
                                uri:
                                    '/people/' +
                                    people.selected.id +
                                    '/categories/create',
                                disabled: cannot('create'),
                                dusk: 'add-category',
                            }"
                            :per-page="personCategoriesPerPage"
                            @set-per-page="personCategoriesPerPage = $event"
                            :filter-text="personCategoriesFilterText"
                            @input-filter-text="
                                personCategoriesFilterText = $event.target.value
                            "
                        >
                            <app-table
                                :pagination="
                                    personCategories.data.links.pagination
                                "
                                @goto-page="personCategoriesGotoPage($event)"
                                :columns="['#', 'Nome', '']"
                            >
                                <tr
                                    v-for="personCategory in personCategories
                                        .data.rows"
                                    class="cursor-pointer"
                                    :class="{
                                        'cursor-pointer': true,
                                        'bg-primary text-white': isCurrent(
                                            personCategory,
                                            personCategories.selected,
                                        ),
                                    }"
                                >
                                    <td class="align-middle">
                                        {{ personCategory.id }}
                                    </td>
                                    <td class="align-middle">
                                        {{ personCategory.name }}
                                    </td>

                                    <td class="align-middle text-right">
                                        <div
                                            @click="
                                                confirmDeletePersonCategory(
                                                    personCategory,
                                                )
                                            "
                                            class="btn btn-danger btn-sm mr-1 pull-right"
                                            title="Excluir Categoria"
                                        >
                                            <i class="fa fa-trash"></i>
                                        </div>
                                    </td>
                                </tr>
                            </app-table>
                        </app-table-panel>
                    </div>

                    <div class="col-12">
                        <app-table-panel
                                v-if="selected.id && personTopics.data.links"
                                :title="
                                'Interesses: ' +
                                    personTopics.data.links.pagination.total
                            "
                                :add-button="{
                                uri:
                                    '/people/' +
                                    people.selected.id +
                                    '/person-topics/create',
                                disabled: cannot('create'),
                            }"
                                :per-page="personTopicsPerPage"
                                @set-per-page="personTopicsPerPage = $event"
                                :filter-text="personTopicsFilterText"
                                @input-filter-text="
                                personTopicsFilterText = $event.target.value
                            "
                        >
                            <app-table
                                    :pagination="
                                    personTopics.data.links.pagination
                                "
                                    @goto-page="personTopicsGotoPage($event)"
                                    :columns="['#', 'Nome', '']"
                            >
                                <tr
                                        v-for="personTopic in personTopics
                                        .data.rows"
                                        class="cursor-pointer"
                                        :class="{
                                        'cursor-pointer': true,
                                        'bg-primary text-white': isCurrent(
                                            personTopic,
                                            personTopics.selected,
                                        ),
                                    }"
                                >
                                    <td class="align-middle">
                                        {{ personTopic.id }}
                                    </td>
                                    <td class="align-middle">
                                        {{ personTopic.topic.name }}
                                    </td>

                                    <td class="align-middle text-right">
                                        <div
                                                @click="
                                                confirmDeletePersonTopic(
                                                    personTopic,
                                                )
                                            "
                                                class="btn btn-danger btn-sm mr-1 pull-right"
                                                title="Excluir Assunto"
                                        >
                                            <i class="fa fa-trash"></i>
                                        </div>
                                    </td>
                                </tr>
                            </app-table>
                        </app-table-panel>
                    </div>

                    <div class="col-12">
                        <app-table-panel
                            v-if="selected.id && personInstitutions.data.links"
                            :title="
                                'Funções: ' +
                                    personInstitutions.data.links.pagination
                                        .total
                            "
                            :add-button="{
                                uri:
                                    '/people/' +
                                    personInstitutions.person.id +
                                    '/person-institutions/create',
                                disabled: cannot('create'),
                                dusk: 'add-function',
                            }"
                            :per-page="personInstitutionsPerPage"
                            @set-per-page="personInstitutionsPerPage = $event"
                            :filter-text="personInstitutionsFilterText"
                            @input-filter-text="
                                personInstitutionsFilterText =
                                    $event.target.value
                            "
                        >
                            <app-table
                                :pagination="
                                    personInstitutions.data.links.pagination
                                "
                                @goto-page="personInstitutionsGotoPage($event)"
                                :columns="[
                                    '#',
                                    'Tratamento',
                                    'Instituição',
                                    'Função',
                                    'Status',
                                    '',
                                ]"
                            >
                                <tr
                                    @click="
                                        selectPersonInstitution(
                                            personInstitution,
                                        )
                                    "
                                    v-for="personInstitution in personInstitutions
                                        .data.rows"
                                    class="cursor-pointer"
                                    :class="{
                                        'cursor-pointer': true,
                                        'bg-primary text-white': isCurrent(
                                            personInstitution,
                                            personInstitutions.selected,
                                        ),
                                    }"
                                >
                                    <td class="align-middle">
                                        {{ personInstitution.id }}
                                    </td>

                                    <td dusk="role-click" class="align-middle">
                                        {{ personInstitution.title }}
                                    </td>

                                    <td class="align-middle">
                                        {{ personInstitution.institution.name }}
                                    </td>

                                    <td class="align-middle">
                                        {{ personInstitution.role.name }}
                                    </td>

                                    <td class="align-middle">
                                        <h6 class="m-0">
                                            <app-active-badge
                                                :value="
                                                    personInstitution.is_active
                                                "
                                                :labels="['ativo', 'inativo']"
                                            ></app-active-badge>
                                        </h6>
                                    </td>

                                    <td
                                        class="align-middle text-right"
                                        v-if="
                                            personInstitution.advised_id == null
                                        "
                                    >
                                        <router-link
                                            :to="
                                                '/people/' +
                                                    personInstitutions.person
                                                        .id +
                                                    '/person-institutions/' +
                                                    personInstitution.id +
                                                    '/update'
                                            "
                                            tag="button"
                                            class="btn btn-danger btn-sm ml-1 pull-right"
                                            :disabled="cannot('edit')"
                                            title="Editar Função"
                                        >
                                            <i class="fa fa-edit"></i>
                                        </router-link>
                                    </td>
                                </tr>
                            </app-table>
                        </app-table-panel>
                    </div>

                    <div class="col-12">
                        <app-table-panel
                            v-if="
                                personInstitutions.selected.id &&
                                    contacts.data.links
                            "
                            :title="
                                'Contatos: ' +
                                    contacts.data.links.pagination.total
                            "
                            :add-button="{
                                uri:
                                    '/people/' +
                                    personInstitutions.person.id +
                                    '/person-institutions/' +
                                    contacts.personInstitution.id +
                                    '/contacts/create',
                                disabled: cannot('create'),
                                dusk: 'add-contact',
                            }"
                            :per-page="contactsPerPage"
                            @set-per-page="contactsPerPage = $event"
                            :filter-text="contactsFilterText"
                            @input-filter-text="
                                contactsFilterText = $event.target.value
                            "
                        >
                            <app-table
                                :pagination="contacts.data.links.pagination"
                                @goto-page="contactsGotoPage($event)"
                                :columns="[
                                    '#',
                                    'Tipo',
                                    'Contato',
                                    'Status',
                                    '',
                                ]"
                            >
                                <tr
                                    @click="selectContact(contact)"
                                    v-for="contact in contacts.data.rows"
                                    class="cursor-pointer"
                                    :class="{
                                        'cursor-pointer': true,
                                        'bg-primary text-white': isCurrent(
                                            contact,
                                            contacts.selected,
                                        ),
                                    }"
                                >
                                    <td class="align-middle">
                                        {{ contact.id }}
                                    </td>

                                    <td class="align-middle">
                                        {{ contact.contact_type.name }}
                                    </td>

                                    <td class="align-middle">
                                        {{ contact.contact }}
                                    </td>

                                    <td class="align-middle">
                                        <h6 class="m-0">
                                            <app-active-badge
                                                :value="contact.is_active"
                                                :labels="['ativo', 'inativo']"
                                            ></app-active-badge>
                                        </h6>
                                    </td>

                                    <td class="align-middle text-right">
                                        <router-link
                                            :to="
                                                '/people/' +
                                                    personInstitutions.person
                                                        .id +
                                                    '/person-institutions/' +
                                                    contacts.personInstitution
                                                        .id +
                                                    '/contacts/' +
                                                    contact.id +
                                                    '/update'
                                            "
                                            tag="button"
                                            class="btn btn-danger btn-sm ml-1 pull-right"
                                            :disabled="cannot('edit')"
                                            title="Editar Contato"
                                        >
                                            <i class="fa fa-edit"></i>
                                        </router-link>
                                    </td>
                                </tr>
                            </app-table>
                        </app-table-panel>
                    </div>

                    <div class="col-12">
                        <app-table-panel
                            v-if="
                                personInstitutions.selected.id &&
                                    addresses.data.links
                            "
                            :title="
                                'Endereços: ' +
                                    addresses.data.links.pagination.total
                            "
                            :add-button="{
                                uri:
                                    '/people/' +
                                    personInstitutions.person.id +
                                    '/person-institutions/' +
                                    addresses.personInstitution.id +
                                    '/addresses/create',
                                disabled: cannot('create'),
                            }"
                            :per-page="addressesPerPage"
                            @set-per-page="addressesPerPage = $event"
                            :filter-text="addressesFilterText"
                            @input-filter-text="
                                addressesFilterText = $event.target.value
                            "
                        >
                            <app-table
                                :pagination="addresses.data.links.pagination"
                                @goto-page="addressesGotoPage($event)"
                                :columns="[
                                    '#',
                                    'Rua',
                                    'Numero',
                                    'Complemento',
                                    'Bairro',
                                    'Cidade',
                                    '',
                                ]"
                                :rows="addresses.data.rows"
                            >
                                <tr
                                    @click="selectAddress(address)"
                                    v-for="address in addresses.data.rows"
                                    class="cursor-pointer"
                                    :class="{
                                        'cursor-pointer': true,
                                        'bg-primary text-white': isCurrent(
                                            address,
                                            addresses.selected,
                                        ),
                                    }"
                                >
                                    <td class="align-middle">
                                        {{ address.id }}
                                    </td>

                                    <td class="align-middle">
                                        {{ address.street }}
                                    </td>

                                    <td class="align-middle">
                                        {{ address.number }}
                                    </td>

                                    <td class="align-middle">
                                        {{ address.complement }}
                                    </td>

                                    <td class="align-middle">
                                        {{ address.neighbourhood }}
                                    </td>

                                    <td class="align-middle">
                                        {{ address.zipcode }}
                                    </td>

                                    <td class="align-middle">
                                        {{ address.city }}
                                    </td>

                                    <td class="align-middle">
                                        {{ address.state }}
                                    </td>

                                    <td class="align-middle text-right">
                                        <router-link
                                            :to="
                                                '/people/' +
                                                    personInstitutions.person
                                                        .id +
                                                    '/person-institutions/' +
                                                    addresses.personInstitution
                                                        .id +
                                                    '/addresses/' +
                                                    address.id +
                                                    '/update'
                                            "
                                            tag="button"
                                            class="btn btn-danger btn-sm ml-1 pull-right"
                                            :disabled="cannot('edit')"
                                            title="Editar Endereço"
                                        >
                                            <i class="fa fa-edit"></i>
                                        </router-link>
                                    </td>
                                </tr>
                            </app-table>
                        </app-table-panel>
                    </div>

                    <div class="col-12">
                        <app-table-panel
                            v-if="
                                personInstitutions.selected.id &&
                                    advisors.data.links
                            "
                            :title="
                                'Assessores: ' +
                                    advisors.data.links.pagination.total
                            "
                            :add-button="{
                                uri:
                                    '/people/' +
                                    personInstitutions.person.id +
                                    '/person-institutions/' +
                                    advisors.personInstitution.id +
                                    '/advisors/create',
                                disabled: cannot('create'),
                            }"
                            :per-page="advisorsPerPage"
                            @set-per-page="advisorsPerPage = $event"
                            :filter-text="advisorsFilterText"
                            @input-filter-text="
                                advisorsFilterText = $event.target.value
                            "
                        >
                            <app-table
                                :pagination="advisors.data.links.pagination"
                                @goto-page="advisorsGotoPage($event)"
                                :columns="[
                                    '#',
                                    'Tratamento',
                                    'Nome',
                                    'Nome Público',
                                    '',
                                ]"
                            >
                                <tr
                                    @click="selectAdvisor(advisor)"
                                    v-for="advisor in advisors.data.rows"
                                    class="cursor-pointer"
                                    :class="{
                                        'cursor-pointer': true,
                                        'bg-primary text-white': isCurrent(
                                            advisor,
                                            advisors.selected,
                                        ),
                                    }"
                                >
                                    <td class="align-middle">
                                        {{ advisor.id }}
                                    </td>
                                    <td class="align-middle">
                                        {{ advisor.person.title }}
                                    </td>
                                    <td class="align-middle">
                                        {{ advisor.person.name }}
                                    </td>
                                    <td class="align-middle">
                                        {{ advisor.person.nickname }}
                                    </td>
                                    <td class="align-middle">
                                        <router-link
                                            :to="
                                                '/people/' +
                                                    personInstitutions.person
                                                        .id +
                                                    '/person-institutions/' +
                                                    advisors.personInstitution
                                                        .id +
                                                    '/advisors/' +
                                                    advisor.id +
                                                    '/update'
                                            "
                                            tag="button"
                                            class="btn btn-danger btn-sm ml-1 pull-right"
                                            :disabled="cannot('edit')"
                                            title="Editar Assessor"
                                        >
                                            <i class="fa fa-edit"></i>
                                        </router-link>
                                    </td>
                                </tr>
                            </app-table>
                        </app-table-panel>
                    </div>

                    <div class="col-12">
                        <app-table-panel
                            v-if="
                                advisors.selected.id &&
                                    advisorContacts.data.links
                            "
                            :title="
                                'Contatos de ' +
                                    advisors.selected.person.name +
                                    ': ' +
                                    advisorContacts.data.links.pagination.total
                            "
                            :add-button="{
                                uri:
                                    '/people/' +
                                    advisors.person.id +
                                    '/person-institutions/' +
                                    personInstitutions.selected.id +
                                    '/advisors/' +
                                    advisorContacts.personInstitution.id +
                                    '/contacts/create',
                                disabled: cannot('create'),
                            }"
                            :per-page="advisorContactsPerPage"
                            @set-per-page="advisorContactsPerPage = $event"
                            :filter-text="advisorContactsFilterText"
                            @input-filter-text="
                                advisorContactsFilterText = $event.target.value
                            "
                        >
                            <app-table
                                :pagination="
                                    advisorContacts.data.links.pagination
                                "
                                @goto-page="advisorContactsGotoPage($event)"
                                :columns="['#', 'Tipo', 'Contato', '']"
                            >
                                <tr
                                    @click="
                                        selectAdvisorContacts(advisorContact)
                                    "
                                    v-for="advisorContact in advisorContacts
                                        .data.rows"
                                    class="cursor-pointer"
                                    :class="{
                                        'cursor-pointer': true,
                                        'bg-primary text-white': isCurrent(
                                            advisorContact,
                                            advisorContacts.selected,
                                        ),
                                    }"
                                >
                                    <td class="align-middle">
                                        {{ advisorContact.id }}
                                    </td>

                                    <td class="align-middle">
                                        {{ advisorContact.contact_type.name }}
                                    </td>

                                    <td class="align-middle">
                                        {{ advisorContact.contact }}
                                    </td>

                                    <td class="align-middle text-right">
                                        <router-link
                                            :to="
                                                '/people/' +
                                                    advisors.person.id +
                                                    '/person-institutions/' +
                                                    personInstitutions.selected
                                                        .id +
                                                    '/advisors/' +
                                                    advisorContacts
                                                        .personInstitution.id +
                                                    '/contacts/' +
                                                    advisorContact.id +
                                                    '/update'
                                            "
                                            tag="button"
                                            class="btn btn-danger btn-sm ml-1 pull-right"
                                            :disabled="cannot('edit')"
                                            title="Editar Contato do Assessor"
                                        >
                                            <i class="fa fa-edit"></i>
                                        </router-link>
                                    </td>
                                </tr>
                            </app-table>
                        </app-table-panel>
                    </div>
                </div>
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
            'selectAdvisorContacts',
        ]),

        peopleGotoPage(page) {
            this.gotoPage(page, 'people', this.people.data.links.pagination)
        },

        personInstitutionsGotoPage(page) {
            this.gotoPage(
                page,
                'personInstitutions',
                this.personInstitutions.data.links.pagination,
            )
        },

        personTopicsGotoPage(page) {
            this.gotoPage(
                page,
                'personTopics',
                this.personTopics.data.links.pagination,
            )
        },

        addressesGotoPage(page) {
            this.gotoPage(
                page,
                'addresses',
                this.addresses.data.links.pagination,
            )
        },

        contactsGotoPage(page) {
            this.gotoPage(page, 'contacts', this.contacts.data.links.pagination)
        },

        advisorContactsGotoPage(page) {
            this.gotoPage(
                page,
                'advisorContacts',
                this.contacts.data.links.pagination,
            )
        },

        personCategoriesGotoPage(page) {
            this.gotoPage(
                page,
                'personCategories',
                this.personCategories.data.links.pagination,
            )
        },

        advisorsGotoPage(page) {
            this.gotoPage(page, 'advisors', this.advisors.data.links.pagination)
        },

        confirmDeletePersonCategory(personCategory) {
            confirm(
                'Deseja realmente desassociar ' + personCategory.name + '?',
                this,
            ).then(value => {
                if (value) {
                    this.deletePersonCategory(personCategory)
                }
            })
        },

        deletePersonCategory(personCategory) {
            return this.$store.dispatch(
                'personCategories/unCategorize',
                personCategory,
            )
        },


        confirmDeletePersonTopic(personTopic) {
            confirm(
                'Deseja realmente desassociar ' + personTopic.topic.name + '?',
                this,
            ).then(value => {
                if (value) {
                    this.deletePersonTopic(personTopic)
                }
            })
        },

        deletePersonTopic(personTopic) {
            return this.$store.dispatch(
                'personTopics/unTopicize',
                personTopic,
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
                return this.$store.state['people'].data.links.pagination
                    .per_page
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
                return this.$store.state['personInstitutions'].data.links
                    .pagination.per_page
            },

            set(perPage) {
                return this.$store.dispatch(
                    'personInstitutions/setPerPage',
                    perPage,
                )
            },
        },

        personTopicsFilterText: {
            get() {
                return this.$store.state['personTopics'].data.filter.text
            },

            set(filter) {
                return this.$store.dispatch(
                    'personTopics/mutateSetQueryFilterText',
                    filter,
                )
            },
        },

        personTopicsPerPage: {
            get() {
                return this.$store.state['personTopics'].data.links
                    .pagination.per_page
            },

            set(perPage) {
                return this.$store.dispatch(
                    'personTopics/setPerPage',
                    perPage,
                )
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

        personCategoriesFilterText: {
            get() {
                return this.$store.state['personCategories'].data.filter.text
            },

            set(filter) {
                return this.$store.dispatch(
                    'personCategories/mutateSetQueryFilterText',
                    filter,
                )
            },
        },

        personCategoriesPerPage: {
            get() {
                return this.$store.state['personCategories'].data.links
                    .pagination.per_page
            },

            set(perPage) {
                return this.$store.dispatch(
                    'personCategories/setPerPage',
                    perPage,
                )
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
        advisorContactsFilterText: {
            get() {
                return this.$store.state['advisorContacts'].data.filter.text
            },

            set(filter) {
                return this.$store.dispatch(
                    'advisorContacts/mutateSetQueryFilterText',
                    filter,
                )
            },
        },

        advisorContactsPerPage: {
            get() {
                return this.$store.state['advisorContacts'].data.links
                    .pagination.per_page
            },

            set(perPage) {
                return this.$store.dispatch(
                    'advisorContacts/setPerPage',
                    perPage,
                )
            },
        },

        hasNoPhotoCheckbox: {
            get() {
                return this.$store.state['people'].data.filter.checkboxes
                    .hasNoPhoto
            },

            set(filter) {
                this.$store.dispatch('people/mutateFilterCheckbox', {
                    field: 'hasNoPhoto',
                    value: filter,
                })
            },
        },
    },
}
</script>

<style></style>
