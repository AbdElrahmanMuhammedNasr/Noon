<template>
  <div class="row" style=" height: 100vh;">

    <div style="height: 9vh" class="col-sm-12 d-none d-sm-block">
      <FilterProduct :ResultNumner="productsArray.length"></FilterProduct>
    </div>

    <product  class="col-12 col-sm-2 col-md-4 col-lg-3 col-xl-3" v-for="pro in productsArray" :key="pro" :Product="pro"></product>
  </div>
</template>

<script>
import product from "@/Center/Products/Product/product";
import FilterProduct from "@/Center/Products/Filter/FilterProduct";
import axios from 'axios';
export default {
  data(){
    return{
      productsArray: [],
      type : this.$route.query.Type,

    }
  },
  components:{
    product,
    FilterProduct,
  },
  created() {
    axios.get('http://localhost:3000/shortCutProducts/getProductsShortCut', {params :{Type:this.type}})
          .then(res =>{
            // console.log(res)
            this.productsArray = res.data
            // console.log(this.productsArray[0]._id)
          })
          .catch()
  }
}
</script>

<style scoped>

</style>
