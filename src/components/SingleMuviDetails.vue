<template>
  <div class="container">
    <div class="row" style="padding:4%">

      <!-- Single Movie Poster area start /-->
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" style="padding:2%">
        <router-view></router-view>
        <div class="card card-cascade narrower">
          <div class="view view-cascade overlay">
            <img class="card-img-top" :src="singleMovie.Poster" alt="Card image cap" style="height:35rem"/>
          </div>
        </div>
      </div>
      <!-- Single Movie Poster area End /-->


     <!-- Single Movie Details information area start /-->
      <div class="col-sm-6">
        <div class="card-body card-body-cascade" style="height:13rem">
          <h4
            class="font-weight-bold card-title text-center"
          >{{ singleMovie.Title }}-{{singleMovie.Year}}</h4>
          <hr />
          <p>{{ singleMovie.Plot}}</p>
          <hr />
        </div>
        <div class="row">
          <div class="col-sm-3">
            <h5>Directed by:</h5>
          </div>
          <div class="col-sm-9">
            {{singleMovie.Director}}
            <hr />
          </div>
          <div class="col-sm-3">
            <h5>Actors:</h5>
          </div>
          <div class="col-sm-9">
            {{singleMovie.Actors}}
            <hr />
          </div>
          <div class="col-sm-3">
            <h5>Awards:</h5>
          </div>
          <div class="col-sm-9">
            {{singleMovie.Awards}}
            <hr />
          </div>
          <div class="col-sm-3">
            <h5>Genre:</h5>
          </div>
          <div class="col-sm-9">
            {{singleMovie.Genre}}
            <hr />
          </div>
          <div class="col-sm-3">
            <h5>Release:</h5>
          </div>
          <div class="col-sm-9">{{singleMovie.Released}}</div>
        </div>
        <hr />
        <center>
          <button type="button" class="btn btn-outline-success" @click="back">back</button>
        </center>
        <hr />
      </div>
     <!-- Single Movie Details information area End /-->


    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return { singleMovie: "" };
  },

  methods: {

    //This function routing to show home page with Default muvi search result using back button
    back() {
      this.$router.push("/");
    }

  },

  // Get single movie details result using OMDB id and the function call automatically 
  created() 
  {
    var self = this;
    axios .get("http://www.omdbapi.com/?i=" + this.$route.params.id + "&apikey=63d830c9")
        .then(response => {
        self.singleMovie = response.data;
      });
  }

};
</script>


  

