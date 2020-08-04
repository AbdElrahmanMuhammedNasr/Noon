<template>
  <div class="row" style="margin: 20px; background-color: white; padding: 20px">
    <img class="col-sm-2" src="../../assest/b1.jpg" @click="goToDetail" style="cursor: pointer">
    <section class="col-sm-5 offset-1">

      <h6 class="text-muted">Zara</h6>
      <h5>chose</h5>
      <h6>Delivered by <strong> Aug 12 </strong></h6>
      <h6>Deliver in <strong> 12h </strong></h6>
    </section>
    <section class="col-sm-2">
      <h5><small>EGP</small> 200</h5>
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
  props:[],
  methods:{
    goToDetail(){
      this.$router.push('/productDetails')
    }
  }
}
</script>

<style scoped>

</style>
