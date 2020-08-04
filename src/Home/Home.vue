<template>

  <div>
  <div class="spinner-border text-primary" style="margin:15% 50%" role="status" v-if="brands.length <= 0">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="row" style="width: 90%; margin: auto" v-if="brands.length > 0">
      <brand  class="col-sm-4" v-for="bread in brands" :key="bread" :brandDetails="bread"></brand>
  </div>

  </div>
</template>

<script>
import brand from "@/Home/Brand/brand";
import axios from "axios";
export default {
  data(){
    return{
      brands:[]
    }
  },
  components:{
    brand
  },created() {
    axios.get('http://localhost:3000/category/getCategory')
        .then(res =>{
          this.brands = res.data
          console.log(res.data )
        })
        .catch()
  }
}
</script>

<style scoped>

</style>
