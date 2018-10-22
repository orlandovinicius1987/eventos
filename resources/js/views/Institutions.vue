<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Instituições</h2>
        </div>

        <div class="row">
            <div class="col-4">
                <app-table-panel
                    :title="'Instituições (' + pagination.total + ')'"
                    :add-button="{ uri: '/institutions/create', disabled: cannot('create') }"
                    :per-page="perPage"
                    :filter-text="filterText"
                    @input-filter-text="filterText = $event.target.value"
                    @set-per-page="perPage = $event"
                >
                    <app-table
                        :pagination="pagination"
                        @goto-page="gotoPage($event)"
                        :columns="['#', 'Nome', 'Sigla', 'Número do partido']"
                    >
                        <tr
                            @click="select(institution)"
                            v-for="institution in institutions.data.rows"
                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(institution, selected)}"
                        >
                            <td class="align-middle">{{ institution.id }}</td>
                            <td class="align-middle">{{ institution.name }}</td>
                            <td class="align-middle">{{ institution.initials }}</td>
                            <td class="align-middle">{{ institution.party_number }}</td>
                            <td>
                                <router-link
                                    :to="'/institutions/'+institution.id+'/update'"
                                    tag="div"
                                    class="btn btn-danger btn-sm mr-1 pull-right"
                                    :disabled="cannot('create')"
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
</template>

<script>
import crud from './mixins/crud'
import institutions from './mixins/institutions'
import permissions from './mixins/permissions'

const serviceName = 'institutions'

export default {
    mixins: [crud, institutions, permissions],

    data() {
        return {
            serviceName: serviceName,
        }
    },
}
</script>

<style>
</style>
