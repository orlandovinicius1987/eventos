<template>
    <div>
        <div class="py-2 text-center">
            <h4>Modificar convite</h4>

            <h2>{{ invitations.selected.person_institution.person.name }}</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-12 col-lg-6">
                <app-table-panel title="Instituições">
                    <app-table>
                        <tr v-for="personInstitution in personInstitutions">
                            <td class="text-left">
                                {{ personInstitution.institution.name }}
                            </td>

                            <td class="text-right">
                                <button
                                    v-if="
                                        personInstitution.id ===
                                            currentPersonIntitution.id
                                    "
                                    @click="back()"
                                    class="btn btn-success btn-sm ml-1 pull-right"
                                >
                                    manter esta
                                </button>

                                <button
                                    v-if="
                                        personInstitution.id !==
                                            currentPersonIntitution.id
                                    "
                                    @click="changeTo(personInstitution)"
                                    class="btn btn-danger btn-sm ml-1 pull-right"
                                    :disabled="cannot('people:modify')"
                                >
                                    mudar para esta
                                </button>
                            </td>
                        </tr>
                    </app-table>
                </app-table-panel>

                <div class="row">
                    <div class="col-12 text-right mb-3">
                        <button
                            @click="back()"
                            class="btn btn-outline-secondary"
                        >
                            cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import crud from './mixins/crud'
import permissions from './mixins/permissions'

const service = {
    name: 'subEvents',
    uri: 'events/{events.selected.id}/sub-events',
    performLoad: false,
}

export default {
    props: ['mode'],

    mixins: [crud, permissions],

    data() {
        return {
            service: service,
        }
    },

    computed: {
        invitations() {
            return this.$store.state['invitations']
        },

        personInstitutions() {
            return this.invitations.selectedInstitutions
        },

        currentPersonIntitution() {
            return this.invitations.selected.person_institution
        },
    },

    methods: {
        changeTo(personInstitution) {
            this.$store.dispatch('invitations/changePersonInstitution', {
                invitation: this.invitations.selected,
                personInstitution: personInstitution,
            })

            this.back()
        },
    },

    mounted() {
        this.$store.dispatch(
            'invitations/loadInstitutions',
            this.invitations.selected,
        )
    },
}
</script>

<style></style>
