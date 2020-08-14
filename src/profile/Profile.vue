<template>
  <div class="row" style="width: 80% ; margin: auto; background-color: #efefef; height: 90vh">
    <section class="col-sm-2 row" style=" height: 100%; padding: 20px">
      <h5 class="col-sm-12">AbdElrahman Nasr</h5>
      <hr>
      <button class="col-sm-12  ">
        <span class="fa fa-location-arrow"></span>

        Orders
      </button>

      <button class="col-sm-12  ">
        <span class="fa fa-map	"></span>
        Address</button>

      <button class="col-sm-12  ">
        <span class="fa fa-money"></span>
        Payment</button>

      <button class="col-sm-12  ">
        <span class="	fa fa-credit-card"></span>
        Noon Credits</button>

      <button class="col-sm-12  ">
        <span class="fa fa-refresh"></span>
        Returns</button>

      <button class="col-sm-12  ">
        <span class="fa fa-file-zip-o"></span>
        Claims</button>

      <button class="col-sm-12  ">
        <span class="	fa fa-gears"></span>
        Preference</button>

      <button class="col-sm-12  ">
        <span class="fa fa-user"></span>
        Profile</button>

    </section>

    <section class="col-sm-10" style=" height: 100%"></section>
  </div>
</template>

<script>
export default {
name: "profile"
}
</script>

<style scoped>
  button{
    height: 50px;
    outline: none;
    border: none;
    margin: 0px 10px;
    color: #6e6d6d;
  }
  span{
    padding-right: 15px;

  }
  button:hover{
    color: black;

  }

</style>
