<template>
  <div class="row" style="width: 80% ; margin: auto">
    <section class="col">
      <img src="../assest/b1.jpg">
    </section>
    <section class="col offset-1">
        <p class="text-muted" style="font-size:13px">book</p>
        <section style="padding-left: 15px">
          <h6>Go To hell Book</h6>
          <small class="text-muted" > Model Number: 1340</small>
          <br><br>
          <p> <small class="text-muted" style="font-size:15px">was:</small> <del style="font-size: 15px"> 200 EGP</del></p>
          <p> <small class="text-muted" style="font-size:15px">Now:</small> <strong style="font-size: 20px">150 EGP</strong></p>
          <p> <small class="text-muted" style="font-size:15px">Save:</small> 50 EGP <small style="background-color: #b3f65d; color: green;padding: 5px">20%Off</small></p>
        </section>

      <hr>
      <h6>Deliver to Cairo</h6>
      <h6>Deliver by form today <span style="color: green; font-weight: bolder">sat Aug 22</span></h6>
      <h6>Time : 1 day</h6>
      <hr>

      <h6 class="text-muted">Size</h6>
      <select class="browser-default float-right custom-select" style="outline: none">
        <option value="1">L</option>
        <option value="2">XL</option>
        <option value="3">XXL</option>
        <option value="4">XXL</option>
      </select>

      <hr>
      <br>
      <h6 class="text-muted">Quantity</h6>
      <section class="row">
        <input type="number" style="width: 50px; margin: 0px 20px" value="1">
        <button class="col btn btn-primary">ADD TO CART</button>
      </section>


    </section>
    <section class="col">

    </section>
    
  </div>
</template>

<script>
export default {
name: "ProductDetail"
}
</script>

<style scoped>
img{
  width: 100%;
  height: 500px;
}

</style>
