<template>
    <div class="table-responsive">
        <table
            class="table table-sm table-hover table-borderless table-striped card-body mb-0"
        >
            <thead>
                <tr>
                    <slot name="thead"></slot>

                    <th
                        v-if="columns"
                        v-for="column in columns"
                        :class="is_object(column) ? column.trClass : ''"
                        v-html="is_object(column) ? column.title : column"
                    ></th>
                </tr>
            </thead>

            <tbody>
                <slot></slot>
            </tbody>
        </table>

        <app-pagination
            v-if="pagination"
            :pagination="pagination"
            @goto-page="$emit('goto-page', $event)"
        ></app-pagination>
    </div>
</template>

<script>
export default {
    props: ['pagination', 'columns', 'rows'],

    methods: {
        is_object(target) {
            return is_object(target)
        },
    },
}
</script>
