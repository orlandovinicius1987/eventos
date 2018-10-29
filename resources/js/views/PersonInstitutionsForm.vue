<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h1>{{ events.selected.name }}</h1>
            <h2>{{ subEvents.form.fields.name ? subEvents.form.fields.name : 'Novo Sub Evento' }}</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-8">
                <form>
                    <div class="row">
                        <div class="col-12 mb-3">
                            We need to check this
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button @click.prevent="saveModel()" class="btn btn-outline-secondary" type="submit">gravar</button>

                            <router-link to="/events" tag="button" class="btn btn-success">
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
    import { mapState } from 'vuex'

    const service = { name: 'personInstitutions', uri: 'people/{people.selected.id}/person-institutions', isForm: true }

    export default {
        props: ['mode'],

        mixins: [crud, people],

        data() {
            return {
                service: service,
            }
        },

        computed: {
            ...mapState('people', ['selectedPerson', 'selectedPersonInstitution']),
        }
    }
</script>

<style>
</style>
