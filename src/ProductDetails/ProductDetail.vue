<template>
  <div class="row" style="width: 80% ; margin: auto">
    <section class="col-sm-4 col-12">
      <img :src="singleProdut.image">
    </section>
    <section class="col-sm-3 offset-1 col-12" style="border: 1px solid lightgray; padding: 20px;margin-top: 20px">
        <p class="text-muted" style="font-size:13px">{{singleProdut.type}}</p>
        <section style="padding-left: 15px">
          <h6>{{singleProdut.name}}</h6>
          <section>
            <small class="text-muted" style="font-size: 15px; "> Model Number: {{singleProdut.modelNumber}}</small>
          </section>

          <section style="margin-top: 15px">
            <p v-if="singleProdut.discount"> <small class="text-muted" style="font-size:15px">was:</small> <del style="font-size: 15px"> {{singleProdut.price}}  EGP</del></p>
            <p> <small class="text-muted" style="font-size:15px">Now:</small> <strong style="font-size: 20px">{{ singleProdut.discount == false ? singleProdut.price : singleProdut.price-singleProdut.discount}} EGP</strong></p>
            <p v-if="singleProdut.discount"> <small class="text-muted" style="font-size:15px">Save:</small> {{singleProdut.discount}} EGP <small style="background-color: #b3f65d; color: green;padding: 5px">{{ (singleProdut.discount / singleProdut.price) *100 }} %Off</small></p>

          </section>

        </section>

      <hr>
      <h6>Deliver to <strong style="color: green">{{singleProdut.city}}</strong> </h6>
      <h6>Deliver by form today <span style="color: green; font-weight: bolder">sat Aug 22</span></h6>
      <h6>Deliver in : <strong style="color: green">{{singleProdut.deliverIn}}</strong></h6>

      <section v-if="singleProdut.type == 'clothes'" >
        <hr>
        <h6 class="text-muted">Size</h6>
        <select  class="browser-default float-right custom-select" style="outline: none">
          <option value="1">L</option>
          <option value="2">XL</option>
          <option value="3">XXL</option>
          <option value="4">XXL</option>
        </select>
        <hr>

      </section>

      <br>
      <h6 class="text-muted">Quantity</h6>
      <section class="row">
        <input type="number" style="width: 50px; margin: 0px 20px" value="1">
        <button class="col btn btn-primary" @click="addToCart">ADD TO CART</button>
      </section>

    </section>
    <section class="col-sm-3 offset-1 col-12" style="border: 1px solid lightgray; padding: 20px; margin-top: 20px">
        <p>1 year warranty</p>
        <p>Sold by noon</p>
      <hr>
        <section>
          <h5>FREE RETURNS</h5>
          <p class="text-muted">Get free returns on eligible items</p>
        </section>

      <section>
        <h5>TRUSTED SHIPPING</h5>
        <p class="text-muted">free shipping when you spend EGP 350 and above</p>
      </section>

      <section>
        <h5>SECURE SHOPPING</h5>
        <p class="text-muted">Your data is always protected</p>
      </section>


    </section>


    <div class="col-sm-12" style="margin-top:5vh ">
      <h3>OVERVIEW</h3>
      <ul>
        <li v-for="deti in singleProdut.overview" :key="deti">{{deti}} </li>
      </ul>

<!--      <h3>SPECIFICATIONS</h3>-->
      
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
      return{
        singleProdut:{}
    }
    },
  created() {
    axios.get('http://localhost:3000/detailsProduct/getProduct')
        .then(res =>{
          this.singleProdut = res.data
          // console.log(res)
        })
        .catch()

  },
  methods:{
      addToCart(){
       return  this.$store.state.cartNumber ++;
      }
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: 500px;
  border-radius: 50px 0px;
}

</style>
