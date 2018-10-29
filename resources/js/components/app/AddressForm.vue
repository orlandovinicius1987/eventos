<template>
    <div>
        <label for="zipcode" class="mb-0 mt-4">CEP</label>
        <input
                v-model="form.fields.zipcode"
                @keyup="typeKeyZipcode(form.fields.zipcode)"
                class="form-control"
                id="zipcode"
                required="required"
                dusk="zipcode"
                v-mask='["##.###-###"]'
        >
        <small class="text-danger" v-if="form.errors.has('zipcode')" >
            {{ form.errors.get('zipcode') }}
        </small>

        <app-input
                name="street"
                label="Endereço"
                v-model="form.fields.street"
                :required="true"
                :form="form"
        ></app-input>

        <app-input
                name="number"
                label="Número"
                v-model="form.fields.number"
                :required="true"
                :form="form"
        ></app-input>

        <app-input
                name="complement"
                label="Complemento"
                v-model="form.fields.complement"
                :required="true"
                :form="form"
        ></app-input>

        <app-input
                name="neighbourhood"
                label="Bairro"
                v-model="form.fields.neighbourhood"
                :required="true"
                :form="form"
        ></app-input>

        <app-input
                name="city"
                label="Cidade"
                v-model="form.fields.city"
                :required="true"
                :form="form"
        ></app-input>

        <app-input
                name="state"
                label="Estado"
                v-model="form.fields.state"
                :required="true"
                :form="form"
        ></app-input>

        <app-input
                name="latitude"
                label="Latitude"
                v-model="form.fields.latitude"
                :required="true"
                :form="form"
        ></app-input>

        <app-input
                name="longitude"
                label="Longitude"
                v-model="form.fields.longitude"
                :required="true"
                :form="form"
        ></app-input>

    </div>
</template>

<script>
export default {
    props: ['form'],

    methods: {
        typeKeyZipcode(payload){
            clearTimeout(this.timeout)

            const $this = this

            this.timeout = setTimeout(function () {
                axios.get('/api/v1/zipcode/'+payload)
                    .then(function(response) {
                        if (response.data.addresses[0].street_name) {
                            $this.form.fields.zipcode = response.data.addresses[0].zip
                            $this.form.fields.street = response.data.addresses[0].street_name
                            $this.form.fields.neighbourhood = response.data.addresses[0].neighborhood
                            $this.form.fields.city = response.data.addresses[0].city
                            $this.form.fields.state = response.data.addresses[0].state_id
                            document.getElementById("number").focus()
                        }
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            }, 500)
        }
    },

}
</script>
