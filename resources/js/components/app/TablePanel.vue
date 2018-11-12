<template>
    <div class="card shadow-sm mb-4">
        <div class="align-items-end card-header">
            <div class="row">
                <div class="col-12">
                    <div class="p-2 mb-2 ">
                        <h4 class="mb-0">{{ title }}</h4>
                    </div>
                </div>

                <div v-if="perPage" class="col-12 card-filters bg-filters py-2">
                    <div class="row">
                        <div class="col-6">
                            <input
                                    class="form-control"
                                    :value="filterText"
                                    @input="$emit('input-filter-text', $event)"
                                    placeholder="filtrar"
                            >
                        </div>

                        <div class="col-2 p-0">
                            <app-per-page
                                    :value="perPage"
                                    @input="$emit('set-per-page', $event)"
                            ></app-per-page>
                        </div>

                        <div class="col-4 text-right">
                            <router-link
                                    v-if="addButton"
                                    :to="addButton.uri"
                                    tag="div"
                                    class="btn btn-primary pull-right"
                                    :disabled="addButton.disabled"
                                    dusk="createEventButton"
                            >
                                <i class="fa fa-plus"></i>
                            </router-link>

                            <slot name="buttons"></slot>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <slot></slot>

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
