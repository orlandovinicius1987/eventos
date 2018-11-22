<template>
    <div>
        <app-select
                :name="name"
                :label="label"
                v-model="institutionSelectFilter"
                :required="required"
                :form="form"
                :options="options"
        ></app-select>
    </div>
</template>

<script>
export default {
    props: ['value', 'name', 'label', 'required', 'form', 'options', 'model'],

    computed: {
        institutionSelectFilter: {
            get() {
                return this.$store.state['people'].data.filter.selects.personInstitution.tables.institution ? this.$store.state['people'].data.filter.selects.personInstitution.tables.institution.where[0].filter : null
            },

            set(filter) {
                if(filter == null){
                    this.$store.commit(
                        'people/mutateFilterSelectPersonInstitutionField',{field: 'institution', value:null}
                    )
                }else {
                    this.$store.commit(
                        'people/mutateFilterSelectPersonInstitutionField',
                        {
                            field: 'institution', value: {
                                joins: [
                                    {
                                        first_table_name: 'institutions',
                                        first_join_table_name: 'institutions',
                                        first_table_field: 'id',
                                        second_table_field: 'institution_id'
                                    },
                                ],
                                where: [
                                    {table_name: 'institutions', field_name: 'id', filter: filter},
                                ]
                            }
                        },
                    )
                }

                this.$store.dispatch(
                    'people/load'
                )
            },
        },
    },
}
</script>
