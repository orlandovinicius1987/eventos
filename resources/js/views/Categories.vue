      <template>
       <div>
        <div class="py-2 mb-4 text-center">
         <h2>Categorias</h2>
        </div>

        <div class="row">
         <div class="col-4">
          <div class="row align-items-end">
           <div class="col-3">
            <h4 class="mb-0">Categorias</h4>
           </div>

           <div class="col-9">
            <div class="row">
             <div class="col-4 pr-0">
              <router-link
                      to="/categories/create"
                      tag="div"
                      class="btn btn-primary btn-sm mr-1 pull-right"
                      :disabled="cannot('create')"
              >
               <i class="fa fa-plus"></i> nova categoria
              </router-link>
             </div>

             <div class="col-6 pl-0 pr-1">
              <input class="form-control form-control-sm" v-model="filterText">
             </div>

             <div class="col-2 pl-0">
              <app-page-size v-model="pageSize"></app-page-size>
             </div>
            </div>
           </div>
          </div>
       <app-table
               :pagination="pagination"
               @goto-page="gotoPage($event)"
       >
        <template slot="thead">
         <th scope="col">#</th>
         <th scope="col">Nome</th>
        </template>

        <template slot="tbody">
         <tr
                 @click="selectCategory(category)"
                 v-for="category in rows"
                 :class="{'cursor-pointer': true, 'bg-primary text-white': isCurrent(category, selectedCategory)}"
         >
          <td class="align-middle">{{ category.id }}</td>
          <td class="align-middle">{{ category.name }}</td>
          <td>
           <router-link
                   :to="'/categories/'+category.id+'/update'"
                   tag="div"
                   class="btn btn-danger btn-sm mr-1 pull-right"
                   :disabled="cannot('create')"
           >
            <i class="fa fa-edit"></i>
           </router-link>
          </td>
         </tr>
        </template>
       </app-table>
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
    import categories from './mixins/categories'
    import permissions from './mixins/permissions'
    import { mapActions, mapState } from 'vuex'

    const serviceName = 'categories'

    export default {
        mixins: [crud, categories, permissions],

        data() {
            return {
                serviceName: serviceName,
            }
        },

        computed: {
            ...mapState(serviceName, ['selectedCategory']),
        },

        methods: {
            ...mapActions(serviceName, ['selectCategory']),
        },

    mounted()
    {
        this.boot()
    }
    }
</script>

<style>
</style>
