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
                                    name="advised_id"
                                    label="Assessor"
                                    v-model="form.fields.person_id"
                                    :required="true"
                                    :form="form"
                                    :options="environment.tables.people"
                            ></app-select>
                            <app-person-institution-field
                                    :form="form"
                                    :environment="environment"
                            >
                            </app-person-institution-field>
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
    import people from './mixins/people'
    import advisors from './mixins/advisors'
    import roles from './mixins/roles'

    const service = {
        name: 'advisors',
        uri: 'people/{people.selected.id}/person-institutions/{personInstitutions.selected.id}/advisors',
        isForm: true
    }

    export default {
        props: ['mode', 'source'],

        mixins: [crud, people, advisors, roles],

        data() {
            this.$store.dispatch('environment/loadRoles')
            this.$store.dispatch('environment/loadInstitutions')
            this.$store.dispatch('environment/loadPeople')
            return {
                service: service
            }
        },

        methods: {
            fillAdditionalFormFields() {
                const $this = this

                if (this.mode === 'create') {
                    this.$store.dispatch('advisors/clearForm', {
                        root: true
                    })
                } else if (this.mode === 'update') {
                    this.$store.commit(
                        'advisors/mutateFormData',
                        $this.advisors.selected
                    )
                }
                this.$store.commit('advisors/mutateSetFormField', {
                    field: 'advised_id',
                    value: this.personInstitutions.selected.id
                })
            }
        }
    }
</script>

<style></style>
