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

        <div class="col-4">
            <div class="form-check mt-4">
                <input v-model="form.fields.is_active" class="form-check-input" type="checkbox" value="" id="is_active" >
                <label class="form-check-label" for="is_active">
                    Ativo
                </label>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: ['form', 'environment'],
}
</script>
