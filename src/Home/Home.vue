<template>
  <div class="row" style="width: 90%; margin: auto">
      <brand class="col-sm-4" v-for="bread in brands" :key="bread"></brand>
  </div>
</template>

<script>
import brand from "@/Home/Brand/brand";
export default {
  data(){
    return{
      brands:[1,1,1,1,1,1,1,1,1]
    }
  },
  components:{
    brand
  }
}
</script>

<style scoped>

</style>
