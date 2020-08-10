<template>

  <div>
    <div class="spinner-border text-primary" style="margin:15% 50%" role="status" v-if="brands.length <= 0 && found">
    <span class="sr-only">Loading...</span>
  </div>

    <div v-if="!found" style="width: 90%; margin: auto;">
      <h1  class="text-muted" style="text-align: center">Not Found</h1>
    </div>


  <div class="row" style="width: 90%; margin: auto" v-if="brands.length > 0 && found">
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
      brands:[],
      type : this.$route.query.Type,
      found:true,
    }
  },

  watch:{
    '$route'(to){
      this.type = to.query.Type
      this.getCategory()
    }
  },
  methods:{
    getCategory(){
      axios.get('http://localhost:3000/category/getCategory', {params: {Type:this.type}})
          .then(res =>{
              if(res.data == 'noData'){
                this.found =false;

            }else {
                this.found = true;
                this.brands = res.data

              }
            // console.log(res)
          })
          .catch()

    }

  },
  created() {
    this.getCategory()
  },

  components:{
    brand
  },

}
</script>

<style scoped>

</style>
