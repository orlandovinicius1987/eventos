<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>{{ form.fields.name ? form.fields.name : 'Novo Contato' }}</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-8">
                <form>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <app-select
                                    name="contact_type_id"
                                    label="Tipo de Contato"
                                    v-model="form.fields.contact_type_id"
                                    :required="true"
                                    :form="form"
                                    :elements="environment.tables.contact_types"
                            ></app-select>

                            <app-input
                                    name="contact"
                                    label="Contato"
                                    v-model="form.fields.contact"
                                    :required="true"
                                    :form="form"
                                    :mask='makeMask(form.fields.contact_type_id)'
                                    :type="makeType(form.fields.contact_type_id)"
                            ></app-input>

                        </div>
                    </div>



                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button @click.prevent="saveModel()" class="btn btn-outline-secondary" type="submit">gravar</button>

                            <router-link to="/" tag="button" class="btn btn-success">
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

    const service = { name: 'contacts', uri: 'people/{people.selected.id}/person-institutions/{personInstitutions.selected.id}/contacts', isForm: true }

    export default {
        props: ['mode'],

        mixins: [crud, contacts],

        data() {
            return {
                service: service,
            }
        },
        methods:{
            makeMask(id){
                if(id == null){
                    return ''
                }
                  const type = findById(this.environment.tables.contact_types,id)
                switch (type.code) {
                    case 'mobile':
                        return '(##)#####-####'
                    case 'whatsapp':
                        return '(##)#####-####'
                    case 'phone':
                        return '(##)####-####'
                }
            },
            makeType(id){
                if(id == null){
                    return ''
                }
                const type = findById(this.environment.tables.contact_types,id);
                if(type.code == 'email'){
                    return 'email'
                }
            }
        }
    }
</script>

<style>
</style>
