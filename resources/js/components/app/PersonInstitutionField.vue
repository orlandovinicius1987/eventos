<template>
    <div>
        <app-select
            name="institution_id"
            label="Instituição"
            v-model="form.fields.institution_id"
            :required="true"
            :form="form"
            :options="environment.tables.institutions"
            dusk="institution-select-dusk"
            labelAttribute="composite_name"
        ></app-select>

        <app-select
            name="role_id"
            label="Funções"
            v-model="form.fields.role_id"
            :required="true"
            :form="form"
            :options="environment.tables.roles"
            dusk="function-select-dusk"
        ></app-select>

        <app-input
            name="title"
            label="Tratamento"
            v-model="form.fields.title"
            :required="true"
            :form="form"
            dusk="title-dusk"
        ></app-input>

        <app-textarea
            label="Observações"
            v-model="form.fields.notes"
            name="notes"
            :form="form"
            :rows="15"
        ></app-textarea>

        <app-input
            name="is_active"
            label="Ativo"
            v-model="form.fields.is_active"
            type="checkbox"
            :required="true"
            :form="form"
            dusk="ativo-dusk"
        ></app-input>
    </div>
</template>

<script>
export default {
    props: ['form', 'environment'],
}
</script>
