<template>
    <div>
        <div class="py-2 text-center"><h2>Interesses</h2></div>

        <div class="row">
            <div class="col-12 col-lg-4">
                <app-table-panel
                    v-if="can('topics:read') || can('topics:modify')"
                    :title="'Interesses (' + pagination.total + ')'"
                    :add-button="{
                        uri: '/topics/create',
                        disabled: cannot('topics:modify'),
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
                            @click="select(topic)"
                            v-for="topic in topics.data.rows"
                            :class="{
                                'cursor-pointer': true,
                                'bg-primary-lighter text-white': isCurrent(
                                    topic,
                                    selected,
                                ),
                            }"
                        >
                            <td class="align-middle">{{ topic.id }}</td>

                            <td class="align-middle">{{ topic.name }}</td>

                            <td class="align-middle text-right">
                                <router-link
                                    :to="'/topics/' + topic.id + '/update'"
                                    tag="button"
                                    class="btn btn-danger btn-sm ml-1 pull-right"
                                    :disabled="cannot('topics:modify')"
                                    title="Editar Interesse"
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
