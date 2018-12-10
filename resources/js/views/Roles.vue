<template>
    <div>
        <div class="py-2 text-center">
            <h2>Funções</h2>
        </div>

        <div class="row">
            <div class="col-4">
                <app-table-panel
                    :title="'Funções (' + pagination.total + ')'"
                    :add-button="{ uri: '/roles/create', disabled: cannot('create') }"
                    :per-page="perPage"
                    :filter-text="filterText"
                    @input-filter-text="filterText = $event.target.value"
                    @set-per-page="perPage = $event"
                >
                    <app-table
                        :pagination="pagination"
                        @goto-page="gotoPage($event)"
                        :columns="['#', 'Nome', '']"
                    >
                        <tr
                            @click="select(role)"
                            v-for="role in roles.data.rows"
                            :class="{'cursor-pointer': true, 'bg-primary-lighter text-white': isCurrent(role, selected)}"
                        >
                            <td class="align-middle">{{ role.id }}</td>

                            <td class="align-middle">{{ role.name }}</td>

                            <td class="align-middle text-right">
                                <router-link
                                    :to="'/roles/'+role.id+'/update'"
                                    tag="button"
                                    class="btn btn-danger btn-sm ml-1 pull-right"
                                    :disabled="cannot('create')"
                                    title="Editar Função"
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
import roles from './mixins/roles'
import permissions from './mixins/permissions'
import { mapActions, mapState } from 'vuex'

const service = { name: 'roles', uri: 'roles' }

export default {
    mixins: [crud, roles, permissions],

    data() {
        return {
            service: service,
        }
    },
}
</script>

<style>
</style>
