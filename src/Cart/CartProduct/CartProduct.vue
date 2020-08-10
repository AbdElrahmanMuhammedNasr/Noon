<template>
  <div class="row" style="margin: 20px; background-color: white; padding: 20px">
    <img class="col-sm-2" :src="car.image" @click="goToDetail" style="cursor: pointer">
    <section class="col-sm-5 offset-1">

      <h6 class="text-muted">{{car.dis}}</h6>
      <h5>{{car.productsType}}</h5>
      <h6>Delivered by <strong> {{new Date().toString().substring(0,11)}} </strong></h6>
      <h6>Deliver in <strong> {{ car.deliverIn}} </strong></h6>
    </section>
    <section class="col-sm-2">
      <h5>
        <del v-if="car.discount <=0 ? false: true"> EGP {{car.price}}</del>
        <small> EGP</small>{{car.discount ? car.price - car.discount : car.price}}
      </h5>
    </section>
    <section class="col-sm-2">
      <select class="  browser-default float-right custom-select" >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </section>

  </div>
</template>

<script>
export default {
  props:['car'],
  methods:{
    goToDetail(){
      this.$router.push('/productDetails')
    }
  }
}
</script>

<style scoped>

</style>
