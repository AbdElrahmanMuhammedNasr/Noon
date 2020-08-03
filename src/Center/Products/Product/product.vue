<template>
    <div class="Product">
        <img class="ProductImg" src="../../../assest/b1.jpg">
        <p class="card-text text-muted" style="font-size: 13px">Galaxy M11 Dual SIM Blue 3GB RAM 32GB 4G LTE</p>
        <p><small> EGP</small> <strong>1200</strong> </p>

        <small class="">
          <img class="ExpressImg" src="https://k.nooncdn.com/s/app/2019/noon-bigalog/48dde9a7d3fdcbdf1d6d56f7d4158a22f65859dd/static/images/noon-express-en.png">
        </small>


        <small class="col" style="padding: 5px; background-color: #b3f65d; color: green">13%off</small>


    </div>
</template>

<script>
export default {
  name: "product"
}
</script>

<style scoped>
    .Product{
      cursor: pointer;
      width:200px;
      height:40vh;
      margin: 15px 0px;
      padding: 10px;
      /*border: 1px solid black;*/
      /*background-color: darkorange;*/

    }
    .ProductImg{
      width: 100%;
      height: 70%;
      border-radius: 30px 0px;
      margin-bottom: 3px;
    }
    .ExpressImg{
        width: 50%;
        margin: 0px 20px;
        /*size: 20px;*/
    }

</style>
