<template>
    <div>
        <div class="py-2 text-center">
            <h2>Convite {{ invitation.code }}</h2>
            <h3>{{ invitation.person_institution.person.name }}</h3>
        </div>

        <div class="row justify-content-center">
            <div class="col-8">

                <app-table-panel
                    :title="'Notificações (' + invitation.notifications.length + ')'"
                >
                    <app-table
                        :columns="[
                            '#',
                            'Tipo',
                            'Assunto',
                            'Destino',
                            'Criado em',
                            'Enviado em',
                            'Recebido'
                        ]"
                    >
                        <tr
                            v-for="notification in invitation.notifications"
                        >
                            <td class="align-middle">{{ notification.id }}</td>

                           <td class="align-middle">
                                <span v-if="notification.content_type === 'invitation'" class="badge badge-primary p-2">
                                    CONVITE
                                </span>

                                <span v-if="notification.content_type === 'credentials'" class="badge badge-info p-2">
                                    CREDENCIAIS
                                </span>

                                <span v-if="notification.content_type === 'rejection'" class="badge badge-warning p-2">
                                    DECLINAÇÃO
                                </span>
                            </td>

                            <td class="align-middle">
                                <h6 class="mb-0">
                                    <span v-if="notification.received_at" class="badge badge-success">recebido</span>
                                    <span v-else class="badge badge-danger">não recebido</span>
                                </h6>
                            </td>

                            <td class="align-middle">{{ notification.subject }}</td>

                            <td class="align-middle">{{ notification.destination }}</td>

                            <td class="align-middle">{{ notification.created_at }}</td>

                            <td class="align-middle">{{ notification.sent_at }}</td>
                        </tr>
                    </app-table>
                </app-table-panel>

                <router-link to="/events" tag="button" class="btn btn-success">
                    voltar
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import crud from './mixins/crud'
    import categories from './mixins/categories'

    const service = { name: 'categories', uri: 'categories', performLoad: false }

    export default {
        props: ['mode'],

        mixins: [crud, categories],

        data() {
            return {
                service: service,
            }
        },

        computed: {
            invitation: {
                get() {
                    return this.$store.state['invitations'].selected
                }
            },
        }
    }
</script>

<style>
</style>
