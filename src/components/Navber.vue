<template>
  <div class="row">
    <div class="col-sm-12">
  
  <!-- Nevigation ber start /-->
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div class="navbar-brand">MOVIE STORE</div>
      <div @submit.prevent="search" class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">

          <!-- Search key input area from users /-->
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="searchKey"/>
         
          <!-- Search button use to send Search key using Search function /-->
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

        </form>
      </div>
    </nav>
  <!-- Nevigation ber end /-->

    </div>
  </div>
</template>

<script>
import {eventBus} from '../main'
export default {

    data()
    {
        return{ searchKey: ''  }
    },

    methods: {

        //Search key send to SearchResult file  using eventBus & Search button
        search(){
          if(this.searchKey!=''){
            eventBus.$emit('search', this.searchKey)
          }
         
        }
    }
    
}
</script>