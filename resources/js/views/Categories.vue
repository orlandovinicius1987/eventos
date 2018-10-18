<template>
 <div>
  <div class="py-2 mb-4 text-center">
   <h2>Eventos</h2>
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

        </tbody>
       </table>
      </div>
     </div>
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
         <th scope="col">Data</th>
         <th scope="col">Hora</th>
        </tr>
        </thead>
        <tbody>

        </tbody>
       </table>
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

    mounted()
    {
        this.boot()
    }
    }
</script>

<style>
</style>
