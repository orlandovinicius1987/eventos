<template>
    <div>
        <div class="py-2 text-center">
            <h2>{{ this.mode === 'create' ? 'Novo ' : 'Editar ' }}Contato</h2>

            <h2>&nbsp;{{ form.fields.contact ? form.fields.contact : '' }}</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-8">
                <form>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <app-contact-field
                                :contact="form.fields.contact"
                                :form="form"
                                :environment="environment"
                            >
                            </app-contact-field>

                            <app-input
                                name="is_active"
                                label="Ativo"
                                v-model="form.fields.is_active"
                                type="checkbox"
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
import contacts from './mixins/contacts'
import advisorContacts from './mixins/advisorContacts'

const service = {
    name: 'contacts',
    uri:
        'people/{people.selected.id}/person-institutions/{personInstitutions.selected.id}/contacts',
    isForm: true,
}

export default {
    props: ['mode', 'source'],

    mixins: [crud, contacts],

    data() {
        this.$store.dispatch('environment/loadContactTypes')

        return {
            service: service,
        }
    },

    methods: {
        fillAdditionalFormFields() {
            this.$store.commit('contacts/mutateSetFormField', {
                field: 'person_institution_id',
                value: this.contacts.personInstitution.id,
            })
        },
    },
}
</script>

<style></style>
