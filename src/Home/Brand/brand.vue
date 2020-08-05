<template>
  <div style="text-align: center;  margin: 20px auto; cursor: pointer" @click="goToProducts">
      <img class="ProductImg" :src="brandDetails.image">
      <h1 style="border-bottom: 5px solid blue;padding: 15px 0px">{{brandDetails.name}}</h1>
  </div>
</template>

<script>
export default {
    props:['brandDetails'],
    methods:{
      goToProducts(){
        this.$router.push({
            name:'Products',
            query : {Type : this.brandDetails.name}
        })
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
