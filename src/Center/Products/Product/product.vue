<template>
    <div class="Product" @click="goToProduct" >
        <img class="ProductImg" :src="Product.image">
        <p class="card-text text-muted" style="font-size: 13px">{{Product.dis}}</p>
        <p><small> EGP</small> <strong>{{Product.price}}</strong> </p>

        <small v-if="Product.express">
          <img class="ExpressImg" src="https://k.nooncdn.com/s/app/2019/noon-bigalog/48dde9a7d3fdcbdf1d6d56f7d4158a22f65859dd/static/images/noon-express-en.png">
        </small>
        <small v-if="Product.discount" class="col" style="padding: 5px; background-color: #b3f65d; color: green">EGP {{Product.discount}} off</small>


    </div>
</template>

<script>
export default {
  props:['Product'],
  methods:{
    goToProduct(){
      this.$router.push({
        name: 'ProductDetails',
        query: {ProductId: this.Product._id}
      }

    )
    }
  }
}
</script>

<style scoped>
    .Product{
      cursor: pointer;
      width:200px;
      height:51vh;
      margin: 15px auto;
      padding: 10px;
      /*border: 1px solid black;*/
      /*background-color: darkorange;*/

    }
    .ProductImg{
      width: 100%;
      height: 70%;
      border-radius: 30px 0px;
      margin-bottom: 6px;
    }
    .ExpressImg{
        width: 30%;
        margin: 0px 20px;
        /*size: 20px;*/
    }

</style>
