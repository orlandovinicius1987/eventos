<template>
    <div>
        <div class="py-2 text-center"><h2>Assuntos</h2></div>

        <div class="row">
            <div class="col-12 col-lg-4">
                <app-table-panel
                    :title="'Assuntos (' + pagination.total + ')'"
                    :add-button="{
                        uri: '/topics/create',
                        disabled: cannot('create'),
                    }"
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
                            @click="select(category)"
                            v-for="category in topics.data.rows"
                            :class="{
                                'cursor-pointer': true,
                                'bg-primary-lighter text-white': isCurrent(
                                    category,
                                    selected,
                                ),
                            }"
                        >
                            <td class="align-middle">{{ category.id }}</td>

                            <td class="align-middle">{{ category.name }}</td>

                            <td class="align-middle text-right">
                                <router-link
                                    :to="
                                        '/topics/' + category.id + '/update'
                                    "
                                    tag="button"
                                    class="btn btn-danger btn-sm ml-1 pull-right"
                                    :disabled="cannot('create')"
                                    title="Editar Categoria"
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
import topics from './mixins/topics'
import permissions from './mixins/permissions'

const service = { name: 'topics', uri: 'topics' }

export default {
    mixins: [crud, topics, permissions],

    data() {
        return {
            service: service,
        }
    },
}
</script>

<style></style>
