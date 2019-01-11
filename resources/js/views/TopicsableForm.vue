<template>
    <div>
        <div class="py-2 text-center">
            <h1>{{ people.selected.name }}</h1>
            <h2>Associar Assuntos a Pessoas</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-6">
                <app-table-panel
                        v-if="topicsables.data.links"
                        title="Assuntos"
                        :per-page="topicsablesPerPage"
                        @set-per-page="topicsablesPerPage = $event"
                        :filter-text="topicsablesFilterText"
                        @input-filter-text="
                        topicsablesFilterText = $event.target.value
                    "
                >
                    <template slot="buttons">
                        <button
                                v-if="personTopicsChecked.length > 0"
                                class="btn btn-primary btn-sm pull-right"
                        >
                            associar categorias
                        </button>
                    </template>

                    <app-table
                            :pagination="topicsables.data.links.pagination"
                            @goto-page="personTopicsGotoPage($event)"
                            :columns="['#', 'Nome']"
                    >
                        <tr
                                v-for="topic in topicsables.data.rows"
                                :class="{
                                'cursor-pointer': true,
                                'bg-primary-lighter text-white': isCurrent(
                                    topic,
                                    topic.selected,
                                ),
                            }"
                        >
                            <td class="align-middle">{{ topic.id }}</td>

                            <td class="align-middle">
                                <input
                                        :checked="isChecked(topic)"
                                        @input="toggleCheck(topic)"
                                        type="checkbox"
                                />
                            </td>

                            <td class="align-middle">
                                {{ topic.name }}
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
    import topicsables from './mixins/topicsables'
    import { mapState } from 'vuex'

    const service = {
        name: 'topicsables',
        uri: 'people/{people.selected.id}/person-topics/topicsables',
        isForm: true,
    }

    export default {
        props: ['mode'],

        mixins: [crud,topicsables],

        data() {
            return {
                service: service,

                personTopicsChecked: {},

                checkedTopic: {},
            }
        },

        computed: {
            personTopicsFilterText: {
                get() {
                    return this.$store.state['topicsables'].data.filter.text
                },

                set(filter) {
                    return this.$store.dispatch(
                        this.service.name + '/mutateSetQueryFilterText',
                        filter,
                    )
                },
            },

            topicsablesPerPage: {
                get() {
                    return this.$store.state['topicsables'].data.links.pagination
                        .per_page
                },

                set(perPage) {
                    return this.$store.dispatch(
                        'topicsables/setPerPage',
                        perPage,
                    )
                },
            },
        },

        methods: {
            topicsablesGotoPage(page) {
                this.gotoPage(
                    page,
                    'topicsables',
                    this.topicsables.data.links.pagination,
                )
            },

            isChecked(personTopic) {
                return this.checkedTopic.hasOwnProperty(personTopic.id)
                    ? this.checkedTopic[personTopic.id].checked
                    : false
            },

            getCategorizablesChecked() {
                return _.filter(this.checkedTopic, category => {
                    return category.checked
                })
            },
        },
    }
</script>

<style></style>
