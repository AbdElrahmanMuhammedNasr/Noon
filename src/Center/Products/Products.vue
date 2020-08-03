<template>
  <div class="row" style=" height: 100vh;">
    <FilterProduct class="col-sm-12" ></FilterProduct>
    <product class="col-sm-2 col-md-4 col-lg-3 col-xl-2" v-for="pro in pros" :key="pro"></product>
  </div>
</template>

<script>
import product from "@/Center/Products/Product/product";
import FilterProduct from "@/Center/Products/Filter/FilterProduct";
export default {
name: "Products",
  data(){
  return{
    pros :[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
  }
  },
  components:{
    product,
    FilterProduct,
  }
}
</script>

<style scoped>

</style>
