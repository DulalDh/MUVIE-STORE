<template>
  <div>
     <router-view></router-view>
  </div>
</template>

<script>
import SearchResult from './components/SearchResult.vue'
export default{

  components:
 {
    appSearchResult: SearchResult
  }

}
</script>
