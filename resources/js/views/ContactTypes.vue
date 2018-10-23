<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Tipos de Contatos</h2>
        </div>

        <div class="row">
            <div class="col-4">
                <div class="row align-items-end">
                    <div class="col-3">
                        <h4 class="mb-0">Tipos de Contatos ({{ pagination.total }})</h4>
                    </div>

                    <!--<div class="col-9">-->
                        <!--<div class="row">-->
                            <!--<div class="col-4 pr-0">-->
                                <!--<router-link-->
                                        <!--to="/contactTypes/create"-->
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
                <!--&lt;!&ndash;<app-table&ndash;&gt;-->
                        <!--&lt;!&ndash;:pagination="pagination"&ndash;&gt;-->
                        <!--&lt;!&ndash;@goto-page="gotoPage($event)"&ndash;&gt;-->
                <!--&lt;!&ndash;&gt;&ndash;&gt;-->
                    <!--&lt;!&ndash;<template slot="thead">&ndash;&gt;-->
                        <!--&lt;!&ndash;<th scope="col">#</th>&ndash;&gt;-->
                        <!--&lt;!&ndash;<th scope="col">Nome</th>&ndash;&gt;-->
                    <!--&lt;!&ndash;</template>&ndash;&gt;-->

                    <!--&lt;!&ndash;&lt;!&ndash;<template slot="tbody">&ndash;&gt;&ndash;&gt;-->
                        <!--&lt;!&ndash;&lt;!&ndash;<tr&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;@click="select(contactType)"&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;v-for="contactType in rows"&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;:class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(contactType, selected)}"&ndash;&gt;&ndash;&gt;-->
                        <!--&lt;!&ndash;&lt;!&ndash;&gt;&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;<td class="align-middle">{{ contactType.id }}</td>&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;<td class="align-middle">{{ contactType.name }}</td>&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;<td>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<router-link&ndash;&gt;&ndash;&gt;-->
                                    <!--&lt;!&ndash;&lt;!&ndash;:to="'/contactTypes/'+contactType.id+'/update'"&ndash;&gt;&ndash;&gt;-->
                                    <!--&lt;!&ndash;&lt;!&ndash;tag="div"&ndash;&gt;&ndash;&gt;-->
                                    <!--&lt;!&ndash;&lt;!&ndash;class="btn btn-danger btn-sm mr-1 pull-right"&ndash;&gt;&ndash;&gt;-->
                                    <!--&lt;!&ndash;&lt;!&ndash;:disabled="cannot('create')"&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;&gt;&ndash;&gt;&ndash;&gt;-->
                                    <!--&lt;!&ndash;&lt;!&ndash;<i class="fa fa-edit"></i>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;</router-link>&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;</td>&ndash;&gt;&ndash;&gt;-->
                        <!--&lt;!&ndash;&lt;!&ndash;</tr>&ndash;&gt;&ndash;&gt;-->
                    <!--&lt;!&ndash;&lt;!&ndash;</template>&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;</app-table>&ndash;&gt;-->
            </div>
        </div>
    </div>


    </div>

</template>

<script>
import crud from './mixins/crud'
import contactTypes from './mixins/contact-types'
import permissions from './mixins/permissions'

const serviceName = 'contactType'

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
