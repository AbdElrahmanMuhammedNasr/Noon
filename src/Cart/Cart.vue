<template>
    <div style="width: 90%; margin: auto" class="row">
      <section class="col-sm-9">
        <section >
            <h3 >My Cart <small>({{carts.length}} item)</small></h3>
            <p >Deliver to : <strong style="color: blue"> Cairo </strong></p>
        </section>

        <div style="border: 1px solid #cccccc; background-color: #f4f4f4">
          <CartProduct v-for="cart in carts" :key="cart._id" :car="cart"></CartProduct>
        </div>
      </section>

      <section class="col-sm-3">
        <section style="border: 1px solid lightgray; padding: 30px; width: 100% ; margin: 10px auto" >
          <section class="row">
            <input type="text" class="form-control col-sm-8" style="outline: none" placeholder="Gift Card">
            <button class="col-sm-3 offset-1 btn btn-primary">Apply</button>
          </section>
          <br>

          <section class="row">
            <h3 class="col-sm-12" style="margin-bottom: 25px"> Order Summary</h3>


            <h5 class="col-sm-8 text-muted">Subtotal ({{carts.length}} item)</h5>
            <h5 class="col-sm-4">EGP {{total - discount}}</h5>
            <br>

            <h6 class="col-sm-8 text-muted">Shipping</h6>
            <h6 class="col-sm-4" style="color: blue">{{shipping = 0 ? 'Free' :shipping}} </h6>
            <br>
            <hr style="margin-bottom: 30px">

            <h3 class="col-sm-6">Total</h3>
            <h3 class="col-sm-6">EGP  {{  total - discount + shipping}}</h3>
          </section>
        </section>

        <button class="btn btn-primary btn-block" style="height: 50px">CHECKOUT NOW</button>
      </section>
    </div>
</template>

<script>
import CartProduct from "@/Cart/CartProduct/CartProduct";
import axios from 'axios';
export default {
  data(){
    return{
      carts :[],
      total:0,
      discount:0,
      shipping:10
    }
  },
  created() {
    axios.get("http://localhost:3000/cart/getCarts", {params:{email:'abde@gmial.com'}})
    .then(data=>{
          data.data.map(e=>{
            axios.get('http://localhost:3000/detailsProduct/getProduct', {params:{ID:e.productId}})
                .then(datadetails=>{
                      this.total += datadetails.data[0].price,
                      this.discount += datadetails.data[0].discount
                      this.carts.push(datadetails.data[0]);
                }).catch()
          });

    })
    .catch()
  }
  ,components:{
      CartProduct,
  }
}
</script>

<style scoped>

</style>
