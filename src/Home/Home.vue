<template>
  <div class="row" style="width: 90%; margin: auto">
      <brand class="col-sm-4" v-for="bread in brands" :key="bread" :brandDetails="bread"></brand>
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
    axios.get('http://localhost:3000/category/getcategory')
        .then(res =>{
          this.brands = res.data
          // console.log(res)
        })
        .catch()
  }
}
</script>

<style scoped>

</style>
