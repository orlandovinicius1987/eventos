<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Categorias</h2>
        </div>

        <div class="row">
            <div class="col-4">
                <app-table-panel
                    :title="'Categorias (' + pagination.total + ')'"
                    :add-button="{ uri: '/categories/create', disabled: cannot('create') }"
                    :per-page="perPage"
                    :filter-text="filterText"
                    @input-filter-text="filterText = $event.target.value"
                    @set-per-page="perPage = $event"
                >
                    <app-table
                        :pagination="pagination"
                        @goto-page="gotoPage($event)"
                        :columns="['#', 'Nome']"
                    >
                        <tr
                            @click="select(category)"
                            v-for="category in categories.data.rows"
                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(category, selected)}"
                        >
                            <td class="align-middle">{{ category.id }}</td>
                            <td class="align-middle">{{ category.name }}</td>
                            <td>
                                <router-link
                                    :to="'/categories/'+category.id+'/update'"
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
import categories from './mixins/categories'
import permissions from './mixins/permissions'

const serviceName = 'categories'

export default {
    mixins: [crud, categories, permissions],

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
