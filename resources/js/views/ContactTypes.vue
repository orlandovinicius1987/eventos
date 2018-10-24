<template>
    <div>

        <div class="py-2 mb-4 text-center">
            <h2>Tipos de Contato</h2>
        </div>

        <div class="row">
            <div class="col-4">
                <div class="row align-items-end">
                    <div class="col-3">
                        <h4 class="mb-0">Tipos de Contato ({{ pagination.total }})</h4>
                    </div>

                    <div class="col-9">
                        <div class="row">
                            <div class="col-4 pr-0">
                                <router-link
                                        to="/contact-types/create"
                                        tag="div"
                                        class="btn btn-primary btn-sm mr-1 pull-right"
                                        :disabled="cannot('create')"
                                >
                                    <i class="fa fa-plus"></i>
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
                        <th scope="col">Nome</th>
                    </template>

                    <template slot="tbody">
                        <tr
                            @click="select(contactType)"
                            v-for="contactType in contactTypes.data.rows"
                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(contactType, selected)}"
                        >
                            <td class="align-middle">{{ contactType.id }}</td>
                            <td class="align-middle">{{ contactType.name }}</td>
                            <td>
                                <router-link
                                    :to="'/contact-types/'+contactType.id+'/update'"
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
import contactTypes from './mixins/contact-types'
import permissions from './mixins/permissions'

const serviceName = 'contactTypes'

export default {
    mixins: [crud, contactTypes, permissions],

    data() {
        return {
            serviceName: serviceName,
        }
    },

    mounted() {
        this.boot()
    },
}
</script>

<style>
</style>
