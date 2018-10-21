<!--<template>-->
    <!--<div>-->
        <!--<div class="py-2 mb-4 text-center">-->
            <!--<h2>Instituições</h2>-->
        <!--</div>-->

        <!--<div class="row">-->
            <!--<div class="col-4">-->
                <!--<div class="row align-items-end">-->
                    <!--<div class="col-4">-->
                        <!--<h4 class="mb-0">Instituições ({{ pagination.total }})</h4>-->
                    <!--</div>-->

                    <!--<div class="col-8">-->
                        <!--<div class="row">-->
                            <!--<div class="col-4 pr-0">-->
                                <!--<router-link-->
                                    <!--to="/institutions/create"-->
                                    <!--tag="div"-->
                                    <!--class="btn btn-primary btn-sm mr-1 pull-right"-->
                                    <!--:disabled="cannot('create')"-->
                                <!--&gt;-->
                                    <!--<i class="fa fa-plus"></i>-->
                                <!--</router-link>-->
                            <!--</div>-->

                            <!--<div class="col-6 pl-0 pr-1">-->
                                <!--<input class="form-control form-control-sm" v-model="filterText">-->
                            <!--</div>-->

                            <!--<div class="col-2 pl-0">-->
                                <!--<app-per-page v-model="perPage"></app-per-page>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->

                <!--<app-table-->
                    <!--:pagination="pagination"-->
                    <!--@goto-page="gotoPage($event)"-->
                <!--&gt;-->
                    <!--<template slot="thead">-->
                        <!--<th scope="col">#</th>-->
                        <!--<th scope="col">Nome</th>-->
                        <!--<th scope="col">Sigla</th>-->
                        <!--<th scope="col">Número do Partido</th>-->
                        <!--<th scope="col"></th>-->
                    <!--</template>-->

                    <!--<template slot="tbody">-->
                        <!--<tr-->
                                <!--@click="selectInstitution(institution)"-->
                                <!--v-for="institution in rows"-->
                                <!--:class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(institution, selectedInstitution)}"-->
                        <!--&gt;-->
                            <!--<td class="align-middle">{{ institution.id }}</td>-->
                            <!--<td class="align-middle">{{ institution.name }}</td>-->
                            <!--<td class="align-middle">{{ institution.initials }}</td>-->
                            <!--<td class="align-middle">{{ institution.party_number }}</td>-->
                            <!--<td>-->
                                <!--<router-link-->
                                        <!--:to="'/institutions/'+institution.id+'/update'"-->
                                        <!--tag="div"-->
                                        <!--class="btn btn-danger btn-sm mr-1 pull-right"-->
                                        <!--:disabled="cannot('create')"-->
                                <!--&gt;-->
                                    <!--<i class="fa fa-edit"></i>-->
                                <!--</router-link>-->
                            <!--</td>-->
                        <!--</tr>-->
                    <!--</template>-->
                <!--</app-table>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--import crud from './mixins/crud'-->
<!--import institutions from './mixins/institutions'-->
<!--import permissions from './mixins/permissions'-->
<!--import { mapActions, mapState } from 'vuex'-->

<!--const serviceName = 'institutions'-->

<!--export default {-->
    <!--mixins: [crud, institutions, permissions],-->

    <!--data() {-->
        <!--return {-->
            <!--serviceName: serviceName,-->
        <!--}-->
    <!--},-->

    <!--computed: {-->
        <!--...mapState(serviceName, ['selectedInstitution']),-->
    <!--},-->

    <!--methods: {-->
        <!--...mapActions(serviceName, ['selectInstitution']),-->
    <!--},-->

    <!--mounted() {-->
        <!--this.boot()-->
    <!--},-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--</style>-->