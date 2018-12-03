<template>
    <div>
        <app-select
            name="institution_id"
            label="Instituição"
            v-model="form.fields.institution_id"
            :required="true"
            :form="form"
            :options="environment.tables.institutions"
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

        <app-input
            name="is_active"
            label="Ativo"
            v-model="form.fields.is_active"
            type="checkbox"
            :required="true"
            :form="form"
        ></app-input>
    </div>
</template>

<script>
export default {
    props: ['form', 'environment'],
}
</script>
