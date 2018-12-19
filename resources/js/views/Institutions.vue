<template>
    <div>
        <div class="py-2 text-center"><h2>Instituições</h2></div>

        <div class="row">
            <div class="col-12 col-lg-4">
                <app-table-panel
                    :title="'Instituições (' + pagination.total + ')'"
                    :add-button="{
                        uri: '/institutions/create',
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
                        :columns="[
                            '#',
                            'Nome',
                            'Sigla',
                            'Número do partido',
                            '',
                        ]"
                    >
                        <tr
                            @click="select(institution)"
                            v-for="institution in institutions.data.rows"
                            :class="{
                                'cursor-pointer': true,
                                'bg-primary-lighter text-white': isCurrent(
                                    institution,
                                    selected,
                                ),
                            }"
                        >
                            <td class="align-middle">{{ institution.id }}</td>
                            <td class="align-middle">{{ institution.name }}</td>
                            <td class="align-middle">
                                {{ institution.initials }}
                            </td>
                            <td class="align-middle">
                                {{ institution.party_number }}
                            </td>
                            <td class="align-middle text-right">
                                <router-link
                                    :to="
                                        '/institutions/' +
                                            institution.id +
                                            '/update'
                                    "
                                    tag="button"
                                    class="btn btn-danger btn-sm ml-1 pull-right"
                                    :disabled="cannot('create')"
                                    title="Editar Instituição"
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

const service = { name: 'institutions', uri: 'institutions' }

export default {
    mixins: [crud, institutions, permissions],

    data() {
        return {
            service: service,
        }
    },
}
</script>

<style></style>
