<template>
    <div>
        <app-select
            name="contact_type_id"
            label="Tipo de Contato"
            v-model="form.fields.contact_type_id"
            :required="true"
            :form="form"
            :options="environment.tables.contact_types"
        ></app-select>

        <app-input
            v-if="!isEmail(form.fields.contact_type_id)"
            name="contact"
            label="Contato"
            v-model="form.fields.contact"
            :required="true"
            :form="form"
            v-mask='makeMask(form.fields.contact_type_id)'
            :type="makeType(form.fields.contact_type_id)"
        ></app-input>

        <app-input
            v-else
            name="contact"
            label="Contato"
            v-model="form.fields.contact"
            :required="true"
            :form="form"
            type="email"
        ></app-input>
    </div>
</template>

<script>

export default {
    props: ['contact', 'form', 'environment'],

    data() {
        return {

        }
    },
    methods: {
        makeMask(id) {
            if (id == null) {
                return ''
            }

            const type = findById(this.environment.tables.contact_types, id)

            switch (type.code) {
                case 'mobile':
                    return '(##)#####-####'
                case 'whatsapp':
                    return '(##)#####-####'
                case 'phone':
                    return '(##)####-####'
            }
        },

        makeType(id) {
            if (id == null) {
                return ''
            }
            const type = findById(this.environment.tables.contact_types, id)
            if (type.code == 'email') {
                return 'email'
            }
        },

        isEmail(id) {
            if (id == null) {
                return false
            }
            const type = findById(this.environment.tables.contact_types, id)
            return type.code == 'email'
        },
    },
}
</script>
