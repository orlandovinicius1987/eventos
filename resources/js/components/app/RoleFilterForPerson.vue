<template>
    <div>
        <app-select
                :name="name"
                :label="label"
                v-model="roleSelectFilter"
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
        roleSelectFilter: {
            get() {
                return this.$store.state['people'].data.filter.selects.personInstitution.tables.role ? this.$store.state['people'].data.filter.selects.personInstitution.tables.role.where[0].filter : null
            },

            set(filter) {
                if(filter == null){
                    this.$store.commit(
                        'people/mutateFilterSelectPersonInstitutionField',{field: 'role', value: null}
                    )
                }else {
                    this.$store.commit(
                        'people/mutateFilterSelectPersonInstitutionField',
                        {
                            field: 'role', value: {
                                joins: [
                                    {
                                        first_table_name: 'roles',
                                        first_table_field: 'id',
                                        second_table_field: 'role_id'
                                    },
                                ],
                                where: [
                                    {table_name: 'roles', field_name: 'id', filter: filter},
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
