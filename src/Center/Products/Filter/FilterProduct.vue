<template>
  <div class=""  style=" padding: 10px;">

    <h6  class="float-left " style="font-size: 20px; padding: 10px 0px" > <strong>{{ResultNumner}}</strong>  results found</h6>


    <select  class="float-right  browser-default  custom-select" style="outline: none; width: 200px">
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
