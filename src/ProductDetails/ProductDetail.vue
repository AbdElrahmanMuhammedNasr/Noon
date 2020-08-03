<template>
  <div class="row" style="width: 80% ; margin: auto">
    <section class="col">
      <img :src="singleProdut.image">
    </section>
    <section class="col offset-1">
        <p class="text-muted" style="font-size:13px">{{singleProdut.type}}</p>
        <section style="padding-left: 15px">
          <h6>{{singleProdut.name}}</h6>
          <small class="text-muted" > Model Number: {{singleProdut.modelNumber}}</small>
          <br>
          <p v-if="singleProdut.discount"> <small class="text-muted" style="font-size:15px">was:</small> <del style="font-size: 15px"> 200 EGP</del></p>
          <p> <small class="text-muted" style="font-size:15px">Now:</small> <strong style="font-size: 20px">150 EGP</strong></p>
          <p v-if="singleProdut.discount"> <small class="text-muted" style="font-size:15px">Save:</small> 50 EGP <small style="background-color: #b3f65d; color: green;padding: 5px">20%Off</small></p>
        </section>

      <hr>
      <h6>Deliver to Cairo</h6>
      <h6>Deliver by form today <span style="color: green; font-weight: bolder">sat Aug 22</span></h6>
      <h6>Time : 1 day</h6>

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
        <button class="col btn btn-primary">ADD TO CART</button>
      </section>

    </section>
    <section class="col offset-1">
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
export default {
    data(){
      return{
        singleProdut:{
          image:'https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475__340.jpg',
          type:'Laptop',
          modelNumber:'1120f1f',
          name:'Dell 3350 E',
          discount:false,
          overview :[
              'Force Touch trackpad accounts for precise cursor control and pressure-sensing capabilities',
              'High‑performance processors with powerful integrated graphics offer blazing fast performance',
              'Secure Enclave coprocessor provides the foundation for secure boot and storage capabilities',
              'Power through your whole day with long hours of battery life',
              'Touch-pad with multi-touch gesture support'
          ]

        }
      }
    }
}
</script>

<style scoped>
img{
  width: 100%;
  height: 500px;
}

</style>
