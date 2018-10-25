<template>
    <div>
        <div class="row align-items-end">
            <div class="col-12">
                <div class="bg-dark text-white p-2 mb-2 mt-4 text-center">
                    <h4 class="mb-0">{{ title }}</h4>
                </div>
            </div>

            <div class="col-12">
                <div class="row">
                    <div class="col-6">
                        <input
                            class="form-control form-control-sm"
                            :value="filterText"
                            @input="$emit('input-filter-text', $event)"
                            placeholder="filtrar"
                        >
                    </div>

                    <div class="col-4 p-0">
                        <app-per-page
                            :value="perPage"
                            @input="$emit('set-per-page', $event)"
                        ></app-per-page>
                    </div>

                    <div class="col-2 text-right">
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

                        <slot name="buttons"></slot>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <slot></slot>
            </div>
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
