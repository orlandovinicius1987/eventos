<template>
 <div>
  <div class="py-2 mb-4 text-center">
   <h2>Categoria</h2>
  </div>

  <div class="row">
   <div class="col-4">
    <div class="row align-items-end">
     <div class="col-6">
      <h4 class="mb-0">Categoria</h4>
     </div>
     <div class="col-6">
      <router-link to="/categories/create" tag="div" class="btn btn-primary btn-sm m-1 pull-right" :disabled="cannot('create')">
       <i class="fa fa-plus"></i> nova categoria
      </router-link>
     </div>
    </div>

    <div class="row">
     <div class="col-12">
      <div class="card p-4">
       <table class="table table-sm table-hover table-borderless table-striped">
        <thead>
        <tr>
         <th scope="col">#</th>
         <th scope="col">Nome</th>
        </tr>
        </thead>
        <tbody>
           <tbody>
           <tr
                   @click="selectCategory(category)"
                   v-for="category in categories"
                   :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(category, selectedCategory)}"
           >
               <td>{{ category.id }}</td>
               <td>{{ category.name }}</td>
           </tr>
           </tbody>

        </tbody>
       </table>
      </div>
     </div>
    </div>
   </div>
   </div>
  </div>

 </div>

</template>

<script>
    import crud from './mixins/crud'
    import events from './mixins/events'
    import permissions from './mixins/permissions'
    import { mapActions, mapState } from 'vuex'

    const serviceName = 'categories'

    export default {
        mixins: [crud, events, permissions],

        data() {
            return {
                serviceName: serviceName,
            }
        },

        computed: {
            ...mapState(serviceName, ['selectedCategory', 'selectedSubCategory']),
        },

        methods: {
            ...mapActions(serviceName, ['selectCategory']),

            isCurrent(event, selected) {
                return event.id === selected.id
            },
        },

    mounted()
    {
        this.boot()
    }
    }
</script>

<style>
</style>
