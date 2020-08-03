<template>
  <div style="width: 88%;height: 250vh ;margin: auto;">
    <TopPath></TopPath>
    <div class="row">
        <Category class="col-sm-2 d-none d-sm-block"></Category>
        <Products class="col-sm-10 col-12 mx-auto" style="text-align: center"></Products>
    </div>

  </div>
</template>

<script>
import TopPath from "@/Center/TopPath/TopPath";
import Category from "@/Center/Category/Category";
import Products from "@/Center/Products/Products";
export default {
name: "Center",
  components:{
  TopPath,
  Category,
    Products,
  }
}
</script>

<style scoped>

</style>
