<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>{{ form.fields.name ? form.fields.name : 'Nova pessoa' }}</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-8">
                <form>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <label for="name">Nome</label>
                            <input v-model="form.fields.name" class="form-control" id="name" required>
                            <small class="text-danger" v-if="form.errors.has('name')" >
                                {{ form.errors.get('name') }}
                            </small>

                            <label for="nickname">Nome público</label>
                            <input v-model="form.fields.nickname" class="form-control" id="nickname" required>
                            <small class="text-danger" v-if="form.errors.has('nickname')" >
                                {{ form.errors.get('nickname') }}
                            </small>

                            <label for="title">Tratamento</label>
                            <input v-model="form.fields.title" class="form-control" id="title" required>
                            <small class="text-danger" v-if="form.errors.has('title')" >
                                {{ form.errors.get('title') }}
                            </small>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-right mb-3">
                            <button @click.prevent="saveModel()" class="btn btn-outline-secondary" type="submit">gravar</button>

                            <router-link to="/people" tag="button" class="btn btn-success">
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
import { mapActions } from 'vuex'

const serviceName = 'people'

export default {
    props: ['mode'],

    mixins: [crud, people],

    data() {
        return {
            serviceName: serviceName,
        }
    },

    methods: {
        ...mapActions(serviceName, ['selectPerson']),
    },

    mounted() {
        this.boot()
    },
}
</script>

<style>
</style>
