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
                                <router-link to="/people/create" tag="div" class="btn btn-primary btn-sm mr-1 pull-right" :disabled="cannot('create')">
                                    <i class="fa fa-plus"></i> nova pessoa
                                </router-link>
                            </div>

                            <div class="col-6 pl-0 pr-1">
                                <input class="form-control form-control-sm" v-model="filterText">
                            </div>

                            <div class="col-2 pl-0">
                                <div class="input-group">
                                    <select v-model="pageSize" class="custom-select custom-select-sm" id="inputGroupSelect02">
                                        <option value="5" selected>5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                        <option value="250">250</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12">
                        <div class="card p-4">
                            <table class="table table-sm table-hover table-borderless table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tratamento</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Nome público</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr
                                        @click="selectPerson(person)"
                                        v-for="person in people"
                                        :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(person, selectedPerson)}"
                                    >
                                        <td class="align-middle">{{ person.id }}</td>
                                        <td class="align-middle">{{ person.title }}</td>
                                        <td class="align-middle">{{ person.name }}</td>
                                        <td class="align-middle">{{ person.nickname }}</td>
                                        <td>
                                            <router-link :to="'/people/'+person.id+'/update'" tag="div" class="btn btn-danger btn-sm mr-1 pull-right" :disabled="cannot('create')">
                                                <i class="fa fa-edit"></i>
                                            </router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <nav class="text-center" v-if="pagination.total > 0">
                                <ul class="pagination justify-content-center mb-0">
                                    <li class="page-item" @click="gotoPage(pagination.current_page - 1)">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span class="sr-only">Anterior</span>
                                        </a>
                                    </li>

                                    <li
                                        :class="{'page-item': true, active: page === pagination.current_page}"
                                        v-for="page in pagination.pages"
                                        @click="gotoPage(page)"
                                    >
                                        <a class="page-link" href="#">
                                            {{ page }}
                                        </a>
                                    </li>

                                    <li class="page-item" @click="gotoPage(pagination.current_page + 1)">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span class="sr-only">Próxima</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
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

        pageSize: {
            get() {
                return this.pagination.per_page
            },

            set(value) {
                this.$store.dispatch(this.serviceName + '/setPerPage', value)
            },
        },
    },

    methods: {
        ...mapActions(serviceName, ['selectPerson']),

        edit(person) {
            this.selectPerson(person)
        },

        isCurrent(person, selected) {
            return person.id === selected.id
        },
    },

    mounted() {
        this.boot()
    },
}
</script>

<style>
</style>
