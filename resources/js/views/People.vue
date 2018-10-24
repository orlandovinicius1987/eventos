<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Pessoas</h2>
        </div>

        <div class="row">
            <div class="col-4">
                <app-table-panel
                    :title="'Pessoas (' + pagination.total + ')'"
                    :add-button="{ uri: '/people/create', disabled: cannot('create') }"
                    :per-page="perPage"
                    :filter-text="filterText"
                    @input-filter-text="filterText = $event.target.value"
                    @set-per-page="perPage = $event"
                >
                    <app-table
                        :pagination="pagination"
                        @goto-page="gotoPage($event)"
                        :columns="['#','Tratamento','Nome', 'Nome público']"
                    >
                        <tr
                            @click="select(person)"
                            v-for="person in people.data.rows"
                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(person, selected)}"
                        >
                            <td class="align-middle">{{ person.id }}</td>
                            <td class="align-middle">{{ person.title }}</td>
                            <td class="align-middle">{{ person.name }}</td>
                            <td class="align-middle">{{ person.nickname }}</td>
                            <td>
                                <router-link
                                    :to="'/people/'+person.id+'/update'"
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
import people from './mixins/people'
import permissions from './mixins/permissions'

const service = { name: 'people', uri: 'people', isForm: false }

export default {
    mixins: [crud, people, permissions],

    data() {
        return {
            service: service,
        }
    },
}
</script>

<style>
</style>
