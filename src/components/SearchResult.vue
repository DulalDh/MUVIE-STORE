<template>
<div>
<app-navber></app-navber>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="row">

        <!--Movie Search Result with Poster & title  area start /-->
          <div v-for="(movie, index) in movieList.Search" :key="index" class="contant">
            <div class="card card-cascade narrower">
              <div class="view view-cascade overlay">
                <img class="card-img-top" :src="movie.Poster"  alt="Card image cap" style="height:25rem"/>
                <div class="card-body card-body-cascade text-center">
                  <h4 class="font-weight-bold card-title text-center">{{ movie.Title }}</h4>

                <!--View Details Button click to show Single movie details page /-->
                  <center>
                    <button  class="btn btn-outline-success"  @click="details(movie.imdbID)">View Details</button>
                  </center>

                </div>
              </div>
            </div>
          </div>
          <!--Movie Search Result with Poster & title area end /-->

        </div>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
import Navber from './Navber.vue'
import { eventBus } from "../main";
import axios from "axios";
export default {
  components: 
  {
    appNavber: Navber,
  },

  data()
  {
    return {  searchKey: "Avenger",
              movieList: []
           };
  },

  methods: {

    //This function provide Search result using search key
    search() 
    {
      var self = this;
      axios.get("http://www.omdbapi.com/?s=" + this.searchKey + "&apikey=63d830c9")
        .then(response => {
          self.movieList = response.data;
        });
    },

    //This function routing to show any single movie details page using View Details button & OMDB id
    details(id) 
    {
      this.$router.push("/details/" + id);
    }

  },

//Receive search key from Navber using eventBus and function call automatically
  created() 
  {
    eventBus.$on("search", key => {
      this.searchKey = key;
      this.search();
    });
    this.search();
  }

};
</script>

<style scoped>
  .contant 
  {
    margin-left: 3%;
    width: 21rem;
    margin-top: 3%;
  }
</style>