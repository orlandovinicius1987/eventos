<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Pessoas</h2>
        </div>

        <div class="row">
            <div class="col-4">
                <div class="row align-items-end">
                    <div class="col-3">
                        <h4 class="mb-0">Pessoas</h4>
                    </div>

                    <div class="col-9">
                        <div class="row">
                            <div class="col-4 pr-0">
                                <router-link
                                    to="/people/create"
                                    tag="div"
                                    class="btn btn-primary btn-sm mr-1 pull-right"
                                    :disabled="cannot('create')"
                                >
                                    <i class="fa fa-plus"></i> nova pessoa
                                </router-link>
                            </div>

                            <div class="col-6 pl-0 pr-1">
                                <input class="form-control form-control-sm" v-model="filterText">
                            </div>

                            <div class="col-2 pl-0">
                                <app-per-page v-model="perPage"></app-per-page>
                            </div>
                        </div>
                    </div>
                </div>

                <app-table
                    :pagination="pagination"
                    @goto-page="gotoPage($event)"
                >
                    <template slot="thead">
                        <th scope="col">#</th>
                        <th scope="col">Tratamento</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Nome público</th>
                        <th scope="col"></th>
                    </template>

                    <template slot="tbody">
                        <tr
                            @click="selectPerson(person)"
                            v-for="person in rows"
                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(person, selectedPerson)}"
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
                                    :disabled="cannot('create')"
                                >
                                    <i class="fa fa-edit"></i>
                                </router-link>
                            </td>
                        </tr>
                    </template>
                </app-table>
            </div>
        </div>
    </div>
</template>

<script>
import crud from './mixins/crud'
import people from './mixins/people'
import permissions from './mixins/permissions'
import { mapActions, mapState } from 'vuex'

const serviceName = 'people'

export default {
    mixins: [crud, people, permissions],

    data() {
        return {
            serviceName: serviceName,
        }
    },

    computed: {
        ...mapState(serviceName, ['selectedPerson']),
    },

    methods: {
        ...mapActions(serviceName, ['selectPerson']),

        edit(person) {
            this.selectPerson(person)
        },
    },

    mounted() {
        this.boot()
    },
}
</script>

<style>
</style>
