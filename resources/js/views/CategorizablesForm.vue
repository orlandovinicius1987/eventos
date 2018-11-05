<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h1>{{ people.selected.name }}</h1>
            <h2>Associar Categorias a Pessoas</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-6">
                <app-table-panel
                    v-if="categorizables.data.links"
                    title="Categorias"
                    :per-page="categorizablesPerPage"
                    @set-per-page="categorizablesPerPage = $event"
                    :filter-text="categorizablesFilterText"
                    @input-filter-text="categorizablesFilterText = $event.target.value"
                >
                    <template slot="buttons">
                        <button
                            v-if="categorizablesChecked.length > 0"
                            class="btn btn-primary btn-sm pull-right"
                            @click="categorize()"
                        >
                            associar categorias
                        </button>
                    </template>

                    <app-table
                        :pagination="categorizables.data.links.pagination"
                        @goto-page="categorizablesGotoPage($event)"
                        :columns="[
                                    '#',
                                    'Nome',
                                    ''
                                ]"
                    >
                        <tr
                            v-for="categorizable in categorizables.data.rows"
                            :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(categorizable, categorizables.selected)}"
                        >
                            <td class="align-middle">{{ categorizable.id }}</td>

                            <td class="align-middle">
                                <input
                                    :checked="isChecked(categorizable)"
                                    @input="toggleCheck(categorizable)"
                                    type="checkbox"
                                >
                            </td>

                            <td class="align-middle">{{ categorizable.name }}</td>

                        </tr>
                    </app-table>
                </app-table-panel>
            </div>
        </div>
    </div>
</template>

<script>
import crud from './mixins/crud'
import categorizables from './mixins/categorizables'
import { mapState } from 'vuex'

const service = {
    name: 'categorizables',
    uri: 'people/{people.selected.id}/categories/categorizables',
}

export default {
    props: ['mode'],

    mixins: [crud, categorizables],

    data() {
        return {
            service: service,

            categorizablesChecked: {},

            checkedCategory: {},
        }
    },

    computed: {
        categorizablesFilterText: {
            get() {
                return this.$store.state['categorizables'].data.filter.text
            },

            set(filter) {
                return this.$store.dispatch(
                    this.service.name + '/mutateSetQueryFilterText',
                    filter,
                )
            },
        },

        categorizablesPerPage: {
            get() {
                return this.$store.state['categorizables'].data.links.pagination
                    .per_page
            },

            set(perPage) {
                return this.$store.dispatch(
                    'categorizables/setPerPage',
                    perPage,
                )
            },
        },
    },

    methods: {
        categorizablesGotoPage(page) {
            this.gotoPage(
                page,
                'categorizables',
                this.categorizables.data.links.pagination,
            )
        },

        isChecked(categorizable) {
            return this.checkedCategory.hasOwnProperty(categorizable.id)
                ? this.checkedCategory[categorizable.id].checked
                : false
        },

        toggleCheck(categorizable) {
            if (!this.checkedCategory.hasOwnProperty(categorizable.id)) {
                this.checkedCategory[categorizable.id] = {
                    id: categorizable.id,
                    checked: false,
                }
            }

            this.checkedCategory[categorizable.id].checked = !this
                .checkedCategory[categorizable.id].checked

            this.categorizablesChecked = this.getCategorizablesChecked()
        },

        categorize() {
            const categories = {
                personId: this.people.selected.id,

                categories: this.categorizablesChecked,
            }

            this.$store.dispatch('categorizables/categorize', categories)

            this.$router.go(-1)
        },

        getCategorizablesChecked() {
            return _.filter(this.checkedCategory, category => {
                return category.checked
            })
        },
    },
}
</script>

<style>
</style>
