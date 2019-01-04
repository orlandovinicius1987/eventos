<template>
    <div>
        <div class="py-2 text-center"><h2>Setores</h2></div>

        <div class="row">
            <div class="col-12 col-lg-4">
                <app-table-panel
                    :title="'Setores (' + pagination.total + ')'"
                    :per-page="perPage"
                    :filter-text="filterText"
                    @input-filter-text="filterText = $event.target.value"
                    @set-per-page="perPage = $event"
                >
                    <app-table
                        :pagination="pagination"
                        @goto-page="gotoPage($event)"
                        :columns="['#', 'Nome', 'Cor', '']"
                    >
                        <tr
                            @click="select(sector)"
                            v-for="sector in sectors.data.rows"
                            :class="{
                                'cursor-pointer': true,
                                'bg-primary-lighter text-white': isCurrent(
                                    sector,
                                    selected,
                                ),
                            }"
                        >
                            <td class="align-middle">{{ sector.id }}</td>

                            <td class="align-middle">
                                <app-sector-badge
                                    key="sector.id"
                                    class="mt-2 p-4"
                                    :sector="sector"
                                    font-size="1.2em"
                                    uppercase="true"
                                    padding="1"
                                ></app-sector-badge>
                            </td>

                            <td class="align-middle">{{ sector.color }}</td>

                            <td class="align-middle text-right">
                                <!-- <router-link -->
                                <!--
                                    :to="'/sectors/' + sector.id + '/update'"
                                -->
                                <!-- tag="button" -->
                                <!--
                                    class="btn btn-danger btn-sm ml-1 pull-right"
                                -->
                                <!-- :disabled="cannot('create')" -->
                                <!-- title="Editar Função" -->
                                <!-- &gt; -->
                                <!-- <i class="fa fa-edit"></i> -->
                                <!-- </router-link> -->
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
import sectors from './mixins/sectors'
import permissions from './mixins/permissions'

const service = { name: 'sectors', uri: 'sectors' }

export default {
    mixins: [crud, sectors, permissions],

    data() {
        return {
            service: service,
        }
    },
}
</script>

<style></style>
