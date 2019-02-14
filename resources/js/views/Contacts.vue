<template>
    <div>
        <div class="py-2 text-center"><h2>Categorias</h2></div>

        <div class="row">
            <div class="col-12 col-lg-4">
                <app-table-panel
                    v-if="
                        can('contacttypes:read') || can('contacttypes:modify')
                    "
                    :title="'Tipos de Contato (' + pagination.total + ')'"
                    :add-button="{
                        uri: '/contact-types/create',
                        disabled: cannot('contacttypes:modify'),
                    }"
                    :per-page="perPage"
                    :filter-text="filterText"
                    @input-filter-text="filterText = $event.target.value"
                    @set-per-page="perPage = $event"
                >
                    <app-table
                        :pagination="pagination"
                        @goto-page="gotoPage($event)"
                        :columns="['#', 'Nome', 'Código']"
                    >
                        <tr
                            @click="select(category)"
                            v-for="contactType in contactTypes.data.rows"
                            :class="{
                                'cursor-pointer': true,
                                'bg-primary-lighter text-white': isCurrent(
                                    contactType,
                                    selected,
                                ),
                            }"
                        >
                            <td class="align-middle">{{ contactType.id }}</td>

                            <td class="align-middle">{{ contactType.name }}</td>

                            <td class="align-middle">{{ contactType.code }}</td>
                        </tr>
                    </app-table>
                </app-table-panel>
            </div>
        </div>
    </div>
</template>

<script>
import crud from './mixins/crud'
import contactTypes from './mixins/contact-types'
import permissions from './mixins/permissions'

const service = { name: 'contactTypes', uri: 'contact-types' }

export default {
    mixins: [crud, contactTypes, permissions],

    data() {
        return {
            service: service,
        }
    },
}
</script>

<style></style>
