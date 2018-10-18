<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Pessoas</h2>
        </div>

        <div class="row">
            <div class="col-4">
                <div class="row align-items-end">
                    <div class="col-6">
                        <h4 class="mb-0">Pessoas</h4>
                    </div>
                    <div class="col-6">
                        <router-link to="/people/create" tag="div" class="btn btn-primary btn-sm m-1 pull-right" :disabled="cannot('create')">
                            <i class="fa fa-plus"></i> nova pessoa
                        </router-link>
                    </div>
                    <!--<div class="col-6">-->
                        <!--<router-link to="/people/create" tag="div" class="btn btn-primary btn-sm m-1 pull-right" :disabled="cannot('create')">-->
                            <!--<i class="fa fa-plus"></i> nova pessoa-->
                        <!--</router-link>-->
                    <!--</div>-->
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="card p-4">
                            <table class="table table-sm table-hover table-borderless table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tratamento</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Nome público</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        @click="selectPerson(person)"
                                        v-for="person in people"
                                        :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(person, selectedPerson)}"
                                    >
                                        <td>{{ person.id }}</td>
                                        <td>{{ person.title }}</td>
                                        <td>{{ person.name }}</td>
                                        <td>{{ person.nickname }}</td>
                                    </tr>
                                </tbody>
                            </table>
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
    },

    methods: {
        ...mapActions(serviceName, ['selectPerson']),

        isCurrent(person, selected) {
            return person.id === selected.id
        },
    },

    mounted() {
        this.boot()
    }
}
</script>

<style>
</style>
