<template>
    <div>
        <div class="py-2 text-center">
            <div class="row">
                <div class="col-12"><h2>Lista Telefônica e Contatos</h2></div>
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
            <div class="col-4">
                <app-table-panel
                    :title="'Pessoas (' + pagination.total + ')'"
                    :per-page="perPage"
                    :filter-text="filterText"
                    @input-filter-text="filterText = $event.target.value"
                    @set-per-page="perPage = $event"
                >
                    <app-institution-filter-for-person
                        name="institution_id"
                        label="Instituição"
                        :required="true"
                        :form="form"
                        :options="environment.tables.institutions"
                    ></app-institution-filter-for-person>

                    <app-role-filter-for-person
                        name="role_id"
                        label="Funções"
                        :required="true"
                        :form="form"
                        :options="environment.tables.roles"
                    ></app-role-filter-for-person>

                    <app-table
                        :pagination="people.data.links.pagination"
                        @goto-page="gotoPage($event)"
                        :columns="['#', 'Tratamento', 'Nome', 'Nome público']"
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

                            <td class="align-middle">{{ person.name }}</td>

                            <td class="align-middle">{{ person.nickname }}</td>
                        </tr>
                    </app-table>
                </app-table-panel>
            </div>

            <div class="col-8">
                <app-table-panel
                    v-if="
                        phoneBook.data &&
                            phoneBook.data.rows &&
                            phoneBook.data.rows.length > 0
                    "
                    :title="'Contatos (' + phoneBook.data.rows.length + ')'"
                >
                    <app-table
                        :columns="[
                            'Pertence a',
                            'Função',
                            'Instituição',
                            'Tipo',
                            'Contato',
                        ]"
                    >
                        <tr
                            @click="selectPerson(person)"
                            v-for="person in phoneBook.data.rows"
                        >
                            <td class="align-middle">{{ person.from }}</td>

                            <td class="align-middle">{{ person.role }}</td>

                            <td class="align-middle">
                                {{ person.institution }}
                            </td>

                            <td class="align-middle">{{ person.type }}</td>

                            <td class="align-middle">{{ person.contact }}</td>
                        </tr>
                    </app-table>
                </app-table-panel>
            </div>
        </div>
    </div>
</template>

<script>
import crud from './mixins/crud'
import phoneBook from './mixins/phoneBook'
import people from './mixins/people'
import { mapActions } from 'vuex'

const service = { name: 'people', uri: 'people' }

export default {
    mixins: [crud, people, phoneBook],

    data() {
        this.$store.dispatch('environment/loadRoles')
        this.$store.dispatch('environment/loadInstitutions')
        return {
            service: service,
        }
    },

    methods: {
        ...mapActions(service.name, ['selectPerson']),

        selectPerson(payload) {
            this.$store.dispatch('people/select', payload, { root: true })

            this.$store.dispatch('phoneBook/setPerson', payload, {
                root: true,
            })
        },
    },
}
</script>

<style></style>
