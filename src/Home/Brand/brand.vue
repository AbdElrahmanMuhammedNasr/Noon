<template>
  <div style="text-align: center;  margin: 20px auto; cursor: pointer" @click="goToProducts">
      <img class="ProductImg" src="../../assest/b1.jpg">
      <h1 style="border-bottom: 5px solid blue;padding: 15px 0px">Labtops</h1>
  </div>
</template>

<script>
export default {
    methods:{
      goToProducts(){
        this.$router.push('/products')
      }
    }
}
</script>

<style scoped>
.ProductImg{
  width: 100%;
  height: 70%;
  margin-bottom: 6px;
}

</style>
