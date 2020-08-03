<template>
  <div class="row" style=" height: 100vh;">

    <div style="height: 5vh" class="col-sm-12">
      <FilterProduct :ResultNumner="productsArray.length"></FilterProduct>
    </div>

    <product class="col-sm-2 col-md-4 col-lg-3 col-xl-3" v-for="pro in productsArray" :key="pro" :Product="pro"></product>
  </div>
</template>

<script>
import product from "@/Center/Products/Product/product";
import FilterProduct from "@/Center/Products/Filter/FilterProduct";
export default {
name: "Products",
  data(){
  return{
    productsArray :[
      {
        id:'1',
        image:"https://cdn.pixabay.com/photo/2014/09/24/14/29/mac-459196__340.jpg",
        dis:"laptop for gamming and business",
        price:12000,
        discount:20,
        express:true
      },
      {
        id:'1',
        image:"https://cdn.pixabay.com/photo/2014/12/15/14/05/home-office-569153__340.jpg",
        dis:"laptop for gamming and business",
        price:12000,
        discount:false,
        express:true
      },
      {
        id:'1',
        image:"https://cdn.pixabay.com/photo/2017/06/20/23/15/coffee-2425303__340.jpg",
        dis:"laptop for gamming and business",
        price:12000,
        discount:50,
        express:false
      },
      {
        id:'1',
        image:"https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241__340.jpg",
        dis:"laptop for gamming and business",
        price:11000,
        discount:false,
        express:false
      },
      {
        id:'1',
        image:"https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475__340.jpg",
        dis:"laptop for gamming and business",
        price:12000,
        discount:10,
        express:true
      },
      {
        id:'1',
        image:"https://cdn.pixabay.com/photo/2014/09/24/14/29/mac-459196__340.jpg",
        dis:"laptop for gamming and business",
        price:12000,
        discount:20,
        express:true
      },
      {
        id:'1',
        image:"https://cdn.pixabay.com/photo/2014/12/15/14/05/home-office-569153__340.jpg",
        dis:"laptop for gamming and business",
        price:12000,
        discount:false,
        express:true
      },
      {
        id:'1',
        image:"https://cdn.pixabay.com/photo/2017/06/20/23/15/coffee-2425303__340.jpg",
        dis:"laptop for gamming and business",
        price:12000,
        discount:50,
        express:false
      },
      {
        id:'1',
        image:"https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241__340.jpg",
        dis:"laptop for gamming and business",
        price:11000,
        discount:false,
        express:false
      },
      {
        id:'1',
        image:"https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475__340.jpg",
        dis:"laptop for gamming and business",
        price:12000,
        discount:10,
        express:true
      },

    ]
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
