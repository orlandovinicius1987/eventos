<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Categorias</h2>
        </div>

        <div class="row">
            <div class="col-4">
                <app-table-panel
                        :title="'Tipos de Contato (' + pagination.total + ')'"
                        :add-button="{ uri: '/contact-types/create', disabled: cannot('create') }"
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
                                v-for="contactType in contactTypes.data.rows"
                                :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(contactType, selected)}"
                        >
                            <td class="align-middle">{{ contactType.id }}</td>
                            <td class="align-middle">{{ contactType.name }}</td>
                            <td>
                                <router-link
                                        :to="'/categories/'+contactType.id+'/update'"
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
    import contactType from './mixins/contact-types'
    import permissions from './mixins/permissions'

    const service = { name: 'contactType', uri: 'contact-type' }

    export default {
        mixins: [crud, contactType, permissions],

        data() {
            return {
                service: service,
            }
        }
    }
</script>

<style>
</style>
