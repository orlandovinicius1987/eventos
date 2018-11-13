<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>{{ form.fields.name ? form.fields.name : 'Novo Cargo' }}</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-8">
                <form>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <app-select
                                name="institution_id"
                                label="Instituição"
                                v-model="form.fields.institution_id"
                                :required="true"
                                :form="form"
                                :options="environment.tables.institutions"
                            ></app-select>

                            <app-select
                                v-if="source == 'advisor'"
                                name="advised_id"
                                label="Assessor"
                                v-model="form.fields.person_id"
                                :required="true"
                                :form="form"
                                :options="environment.tables.people"
                            ></app-select>

                            <app-select
                                name="role_id"
                                label="Funções"
                                v-model="form.fields.role_id"
                                :required="true"
                                :form="form"
                                :options="environment.tables.roles"
                            ></app-select>

                            <app-input
                                name="title"
                                label="Título"
                                v-model="form.fields.title"
                                :required="true"
                                :form="form"
                            ></app-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button
                                @click.prevent="saveModel()"
                                class="btn btn-outline-secondary"
                                type="submit"
                            >
                                gravar
                            </button>

                            <router-link
                                to="/people/"
                                tag="button"
                                class="btn btn-success"
                            >
                                cancelar
                            </router-link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import crud from './mixins/crud'
import personInstitutions from './mixins/personInstitutions'
import people from './mixins/people'
import advisors from './mixins/advisors'
import roles from './mixins/roles'

const service = {
    name: 'personInstitutions',
    uri: 'people/{people.selected.id}/person-institutions',
    isForm: true
}

export default {

    props: ['mode', 'source'],

    mixins: [crud, personInstitutions, people, advisors, roles],

    data() {
        this.$store.dispatch('environment/loadRoles')
        return {
            service: service
        }
    },

    methods: {
        fillAdditionalFormFields() {
            const $this = this

            if (this.mode === 'create') {
                this.$store.dispatch('personInstitutions/clearForm', {
                    root: true
                })
            } else if (this.mode === 'update') {
                this.$store.commit(
                    'personInstitutions/mutateFormData',
                    $this.personInstitutions.selected
                )
            }

            if (this.source === 'advisor') {
                this.$store.commit('personInstitutions/mutateSetFormField', {
                    field: 'advised_id',
                    value: this.personInstitutions.selected.id
                })
            } else {
                this.$store.commit('personInstitutions/mutateSetFormField', {
                    field: 'person_id',
                    value: this.personInstitutions.person.id
                })
            }
        }
    }
}
</script>

<style></style>
