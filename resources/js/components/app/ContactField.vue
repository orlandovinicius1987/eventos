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
            v-mask="makeMask(form.fields.contact_type_id, form.fields.contact)"
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
            dusk="contact-email"
        ></app-input>
    </div>
</template>

<script>
export default {
    props: ['contact', 'form', 'environment'],

    methods: {
        makeMask(id, contact) {
            if (id == null) {
                return ''
            }

            contact = contact ? contact : ''

            const type = findById(this.environment.tables.contact_types, id)

            switch (type.code) {
                case 'mobile':
                case 'whatsapp':
                    const numbers = contact.replace(/\D/g, '')
                    if (numbers.length > 11) {
                        return '+##(##)#####-####'
                    } else {
                        return '(##)#####-####'
                    }
                case 'phone':
                    const regexMatch = contact.match(/(.*)\s[a-z]*?\s?(\d*?)$/)

                    if (regexMatch) {
                        if (regexMatch[1].replace(/\D/g, '').length > 10) {
                            return '+##(##)####-#### ramal ####'
                        } else {
                            return '(##)####-#### ramal ####'
                        }
                    } else {
                        if (contact.replace(/\D/g, '').length > 10) {
                            return '+##(##)####-####'
                        } else {
                            return '(##)####-####'
                        }
                    }
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
