<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./Header/Header";
  // import CenterHome from "@/Center/Center";
  import Footer from "./Footer/Footer";

export default {
  components:{
    Header,
    Footer,
    // CenterHome
  }

}
</script>

