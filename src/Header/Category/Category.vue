<template>
  <div style=" width: 70%; margin: 15px auto; text-align: center;  padding:0px 10px">

    <nav class="navbar navbar-expand-lg navbar-light" style="height: 20px">

      <div class="collapse navbar-collapse" >
        <ul class="navbar-nav row mr-auto">



          <li class="nav-item col active">
            <router-link :to="{name:'Home', query:{Type:'Electronics'} }">
              <a class="nav-link" >Electronics</a>
            </router-link>
          </li>

          <li class="nav-item col">
            <router-link :to="{name:'Home', query:{Type:'Mobile'} }">
              <a class="nav-link" >Mobile</a>
            </router-link>
          </li>
          <li class="nav-item col">

            <router-link :to="{name:'Home', query:{Type:'Fashion'} }">
              <a class="nav-link" >Fashion</a>
            </router-link>

          </li>
          <li class="nav-item col">
            <router-link :to="{name:'Home', query:{Type:'Electronics'} }">
              <a class="nav-link" >Home</a>
            </router-link>

          </li>
          <li class="nav-item col">
            <router-link :to="{name:'Home', query:{Type:'Baby'} }">
              <a class="nav-link" >Baby</a>
            </router-link>
          </li>
          <li class="nav-item col">
            <router-link :to="{name:'Home', query:{Type:'Health'} }">
              <a class="nav-link" >Health</a>
            </router-link>
          </li>
          <li class="nav-item col">
            <router-link :to="{name:'Home', query:{Type:'SuperMarket'} }">
              <a class="nav-link" >SuperMarket</a>
            </router-link>
          </li>
          <li class="nav-item col">
            <router-link :to="{name:'Home', query:{Type:'Deals'} }">
              <a class="nav-link" >Deals</a>
            </router-link>
          </li>


        </ul>


      </div>
    </nav>

    <hr>

  </div>

</template>

<script>
export default {
name: "Categore"
}
</script>

<style scoped>

</style>
