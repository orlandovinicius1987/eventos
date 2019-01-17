<template>
    <div>
        <div class="py-2 text-center"><h2>Trajes</h2></div>

        <div class="row">
            <div class="col-12 col-lg-4">
                <app-table-panel
                    :title="'Trajes (' + pagination.total + ')'"
                    :add-button="{
                        uri: '/costumes/create',
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
                        :columns="['#', 'Nome', 'Código', '']"
                    >
                        <tr
                            @click="select(costume)"
                            v-for="costume in costumes.data.rows"
                            :class="{
                                'cursor-pointer': true,
                                'bg-primary-lighter text-white': isCurrent(
                                    costume,
                                    selected,
                                ),
                            }"
                        >
                            <td class="align-middle">{{ costume.id }}</td>

                            <td class="align-middle">{{ costume.name }}</td>

                            <td class="align-middle">{{ costume.code }}</td>

                            <td class="align-middle text-right">
                                <router-link
                                    :to="'/costumes/' + costume.id + '/update'"
                                    tag="button"
                                    class="btn btn-danger btn-sm ml-1 pull-right"
                                    :disabled="cannot('create')"
                                    title="Editar Traje"
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
import costumes from './mixins/costumes'
import permissions from './mixins/permissions'

const service = { name: 'costumes', uri: 'costumes' }

export default {
    mixins: [crud, costumes, permissions],

    data() {
        return {
            service: service,
        }
    },
}
</script>

<style></style>
