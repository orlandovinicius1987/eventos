<template>
    <div class="card shadow-sm mb-4">
        <div class="align-items-end card-header">
            <div class="row">
                <div class="col-12">
                    <div class="bg-dark text-white p-2 mb-2 mt-4 text-center">
                        <h4 class="mb-0">{{ title }}</h4>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <div v-if="perPage" class="col-4">
                            <input
                                    class="form-control form-control-sm"
                                    :value="filterText"
                                    @input="$emit('input-filter-text', $event)"
                                    placeholder="filtrar"
                            />
                        </div>

                        <div v-if="perPage" class="col-2 p-0">
                            <app-per-page
                                    :value="perPage"
                                    @input="$emit('set-per-page', $event)"
                            ></app-per-page>
                        </div>

                        <div class="col-6 text-right">
                            <div class="row">
                                <div class="col-6">
                                    <slot name="buttons"></slot>
                                </div>

                                <div class="col-6">
                                    <router-link
                                            v-if="addButton"
                                            :to="addButton.uri"
                                            tag="div"
                                            class="btn btn-primary btn-sm pull-right"
                                            :disabled="addButton.disabled"
                                            dusk="createEventButton"
                                    >
                                        <i class="fa fa-plus"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class=" text-center p-12 mb-2 mt-2 bg-cyan">
                                <slot name="filters"></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

        <div class="row">
            <div class="col-12"><slot></slot></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'add-button',
            'add-button-disabled',
            'columns',
            'filter-text',
            'per-page',
        ],
    }
</script>
