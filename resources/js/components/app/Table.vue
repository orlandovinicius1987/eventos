<template>
    <div class="row mt-1">
        <div class="col-12">
            <div class="card p-4">
                <table class="table table-sm table-hover table-borderless table-striped">
                    <thead>
                        <tr>
                            <slot name="thead"></slot>
                        </tr>
                    </thead>

                    <tbody>
                        <slot name="tbody"></slot>
                    </tbody>
                </table>

                <app-pagination
                    :pagination="pagination"
                    @goto-page="$emit('goto-page', $event)"
                ></app-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['pagination'],
}
</script>

<style>
</style>
