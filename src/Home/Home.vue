<template>
  <div class="row" style="width: 90%; margin: auto">
      <brand class="col-sm-4" v-for="bread in brands" :key="bread" :brandDetails="bread"></brand>
  </div>
</template>

<script>
import brand from "@/Home/Brand/brand";
export default {
  data(){
    return{
      brands:[
          {category:'Labtop', image:"https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_960_720.jpg"},
          {category:'camera', image:"https://cdn.pixabay.com/photo/2016/03/07/00/01/photo-camera-1241441_960_720.jpg"},
          {category:'printer', image:"https://cdn.pixabay.com/photo/2015/05/30/15/45/printer-790396_960_720.jpg"},
          {category:'playStation', image:"https://cdn.pixabay.com/photo/2017/05/19/14/05/ps4-2326600_960_720.jpg"},
          {category:'Gaming', image:"https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_960_720.jpg"},
          {category:'Xbox', image:"https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_960_720.jpg"},
          {category:'Monitors', image:"https://cdn.pixabay.com/photo/2015/03/26/10/36/apple-691633__340.jpg"},
          {category:'NetWorking', image:"https://cdn.pixabay.com/photo/2017/04/04/17/22/netgear-2202273_960_720.jpg"},
          {category:'Storage', image:"https://cdn.pixabay.com/photo/2017/08/07/19/32/computer-2607018_960_720.jpg"},
          {category:'HeadPhone', image:"https://cdn.pixabay.com/photo/2016/11/18/22/20/headphones-1837146_960_720.jpg"},
          {category:'Accessories', image:"https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_960_720.jpg"},
      ]
    }
  },
  components:{
    brand
  }
}
</script>

<style scoped>

</style>
