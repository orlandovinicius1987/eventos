<template>
    <div>
        <div class="mt-5 text-center">
            <h2 class="mb-0">Endereço</h2>
        </div>

        <label for="zipcode" class="mb-0 mt-2">CEP</label>

        <input
            v-model="address.zipcode"
            @keyup="typeKeyZipcode(address.zipcode)"
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
            v-model="address.street"
            :required="true"
            :form="form"
        ></app-input>

        <app-input
            name="number"
            label="Número"
            v-model="address.number"
            :required="true"
            :form="form"
        ></app-input>

        <app-input
            name="complement"
            label="Complemento"
            v-model="address.complement"
            :required="true"
            :form="form"
        ></app-input>

        <app-input
            name="neighbourhood"
            label="Bairro"
            v-model="address.neighbourhood"
            :required="true"
            :form="form"
        ></app-input>

        <app-input
            name="city"
            label="Cidade"
            v-model="address.city"
            :required="true"
            :form="form"
        ></app-input>

        <app-input
            name="state"
            label="Estado"
            v-model="address.state"
            :required="true"
            :form="form"
        ></app-input>

        <app-input
            name="latitude"
            label="Latitude"
            v-model="address.latitude"
            :required="true"
            :form="form"
        ></app-input>

        <app-input
            name="longitude"
            label="Longitude"
            v-model="address.longitude"
            :required="true"
            :form="form"
        ></app-input>


        <div class="mt-4">
            <app-input
                name="url"
                label="URL do mapa"
                v-model="mapUrl"
                :required="true"
                :form="form"
                readonly="true"
            ></app-input>

            <GmapMap
                ref="addressMap"
                :center="{ lat: getLatitude(), lng: getLongitude() }"
                :zoom="getZoom()"
                map-type-id="roadmap"
                style="width: 100%; height: 400px"
                @center_changed="makeUrl($event)"
            >
                <GmapMarker
                    key="1"
                    :position="getMarkerPosition()"
                    :clickable="true"
                    :draggable="true"
                />
            </GmapMap>
        </div>
    </div>
</template>

<script>
export default {
    props: ['address', 'form', 'googleMaps'],

    data() {
        return {
            latitude: laravel.google_maps.geolocation.latitude,
            longitude: laravel.google_maps.geolocation.longitude,
        }
    },

    methods: {
        typeKeyZipcode(payload) {
            clearTimeout(this.timeout)

            const $this = this

            this.timeout = setTimeout(function() {
                axios
                    .get('/api/v1/zipcode/' + payload)
                    .then(function(response) {
                        if (response.data.addresses[0].street_name) {
                            $this.address.zipcode =
                                response.data.addresses[0].zip
                            $this.address.street =
                                response.data.addresses[0].street_name
                            $this.address.neighbourhood =
                                response.data.addresses[0].neighborhood
                            $this.address.city = response.data.addresses[0].city
                            $this.address.state =
                                response.data.addresses[0].state_id
                            document.getElementById('number').focus()
                        }
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            }, 500)
        },

        getLatitude() {
            this.latitude = this.latitude
                ? this.latitude
                : this.address.latitude
                    ? this.address.latitude
                    : laravel.google_maps.geolocation.latitude

            return parseFloat(this.latitude)
        },

        getLongitude() {
            this.longitude = this.longitude
                ? this.longitude
                : this.address.longitude
                    ? this.address.longitude
                    : laravel.google_maps.geolocation.longitude

            return parseFloat(this.longitude)
        },

        getZoom() {
            return 17
        },

        makeUrl(event) {
            this.address.latitude = event.lat()

            this.address.longitude = event.lng()
        },

        getMarkerPosition() {
            return {
                lat: Number(this.getLatitude()),
                lng: Number(this.getLongitude()),
            }
        },

        centerMap() {
            const $this = this

            if ($this.address.latitude && $this.address.longitude) {
                this.$refs.addressMap.$mapPromise.then((map) => {
                    map.panTo({
                        lat: parseFloat($this.address.latitude),
                        lng: parseFloat($this.address.longitude)
                    })
                })
            }
        }
    },

    computed: {
        mapUrl: {
            get() {
                if (this.address.latitude && this.address.longitude) {
                    return (
                        'https://www.google.com/maps/@' +
                        this.address.latitude +
                        ',' +
                        this.address.longitude +
                        ',17z'
                    )
                }

                return 'Preencha a latitude e longitude, ou localize o endereço no mapa'
            },
        },
    },

    mounted () {
        this.centerMap()
    }
}
</script>
