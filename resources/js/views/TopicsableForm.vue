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
                            :disabled="cannot('people:modify')"
                            v-if="topicsablesChecked.length > 0"
                            class="btn btn-primary btn-sm pull-right"
                            @click="topicize()"
                        >
                            associar interesses
                        </button>
                    </template>

                    <app-table
                        :pagination="topicsables.data.links.pagination"
                        @goto-page="personTopicsGotoPage($event)"
                        :columns="['#', '', 'Nome']"
                    >
                        <tr
                            v-for="topicsable in topicsables.data.rows"
                            :class="{
                                'cursor-pointer': true,
                                'bg-primary-lighter text-white': isCurrent(
                                    topicsable,
                                    topicsables.selected,
                                ),
                            }"
                        >
                            <td class="align-middle">{{ topicsable.id }}</td>

                            <td class="align-middle">
                                <input
                                    :checked="isChecked(topicsable)"
                                    @input="toggleCheck(topicsable)"
                                    type="checkbox"
                                />
                            </td>

                            <td class="align-middle">{{ topicsable.name }}</td>
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
import permissions from './mixins/permissions'
import { mapState } from 'vuex'

const service = {
    name: 'topicsables',
    uri: 'people/{people.selected.id}/person-topics/topicsables',
    isForm: true,
}

export default {
    props: ['mode'],

    mixins: [crud, topicsables, permissions],

    data() {
        return {
            service: service,

            topicsablesChecked: {},

            checkedTopic: {},
        }
    },

    computed: {
        topicsablesFilterText: {
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
                return this.$store.dispatch('topicsables/setPerPage', perPage)
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

        toggleCheck(topicsable) {
            if (!this.checkedTopic.hasOwnProperty(topicsable.id)) {
                this.checkedTopic[topicsable.id] = {
                    id: topicsable.id,
                    checked: false,
                }
            }

            this.checkedTopic[topicsable.id].checked = !this.checkedTopic[
                topicsable.id
            ].checked

            this.topicsablesChecked = this.getTopicsablesChecked()
        },

        isChecked(topic) {
            return this.checkedTopic.hasOwnProperty(topic.id)
                ? this.checkedTopic[topic.id].checked
                : false
        },

        topicize() {
            const topics = {
                personId: this.people.selected.id,

                topics: this.topicsablesChecked,
            }

            this.$store.dispatch('topicsables/topicize', topics)

            this.$router.go(-1)
        },

        getTopicsablesChecked() {
            return _.filter(this.checkedTopic, topic => {
                return topic.checked
            })
        },
    },
}
</script>

<style></style>
