<template>
    <div>
        <div class="py-2 mb-4 text-center">
            <h2>Dia do Evento</h2>
        </div>

        <div class="row" v-if="can('read')">
            <div class="col-4">
                <app-table-panel
                        :title="'Convidados'"
                        :per-page="perPage"
                        :filter-text="filterText"
                        @input-filter-text="filterText = $event.target.value"
                        @set-per-page="perPage = $event"
                >
                    <app-table
                            :pagination="pagination"
                            @goto-page="gotoPage($event)"
                            :columns="['#', 'Convidado', 'Código']"
                    >
                        <tr
                                v-for="invitation in invitations" class="cursor-pointer"

                        >
                            <td v-if="invitation.accepted_at != null">{{invitation.id}}</td>
                            <td v-if="invitation.accepted_at != null">{{invitation.person_institution.person.name}}</td>
                            <td v-if="invitation.accepted_at != null">{{invitation.code}}</td>
                        </tr>
                    </app-table>
                </app-table-panel>
              </div>

            <div class="col-4">
                <form>
                    <!--<app-input-->
                            <!--name="code"-->
                            <!--label="Código"-->
                            <!--:required="true"-->
                            <!--:form="form"-->
                    <!--&gt;</app-input>-->

                    <button @click.prevent="saveModel()" class="btn btn-outline-secondary" type="submit">Check-in</button>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
import crud from './mixins/crud'
import permissions from './mixins/permissions'
import receptive from './mixins/receptive'
import { mapState } from 'vuex'

const service = {
    name: 'receptive',
    uri: 'events/{events.selected.id}/sub-events/{sub-events.selected.id}/receptive',
    isForm: true,
}

export default {
    props: ['mode'],

    mixins: [crud, receptive, permissions],

    data() {
        return {
            service: service,
        }
    },

    computed: {
        ...mapState({
            //invitations: state=> state.invitations.data.rows,
        }),
    },
}
</script>

<style>
</style>
