<template>
  <div class="row"  style=" padding: 10px">

    <h6  style="font-size: 20px" class="col-sm-2 float-left"> <strong>{{ResultNumner}}</strong>  results found</h6>

    <select class=" col-sm-2 offset-8 browser-default float-right custom-select" style="outline: none">
      <option selected disabled>Sort By</option>
      <option value="1">Price High to low</option>
      <option value="2">Price Low to High</option>
      <option value="3">Most</option>
    </select>

  </div>
</template>

<script>
export default {
    props:['ResultNumner']
}
</script>

<style scoped>

</style>
