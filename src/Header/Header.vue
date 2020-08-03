<template >
  <div>
    <div style="background-color: yellow; height:8vh ; padding-top: 10px">
<!--      <div style="padding: 0px; width: 76%; margin: auto">-->
<!--        <nav class="navbar navbar-expand-lg navbar-light" style="height: 20px">-->

<!--          <div class="collapse navbar-collapse" id="navbarNav">-->
<!--            <ul class="navbar-nav mr-auto">-->
<!--              <li class="nav-item active">-->
<!--                <a class="nav-link" href="#">Arabic</a>-->
<!--              </li>-->
<!--              <li class="nav-item">-->
<!--                <a class="nav-link" href="#">Ship to</a>-->
<!--              </li>-->
<!--            </ul>-->

<!--            <ul class="navbar-nav ml-auto">-->
<!--              <li class="nav-item">-->
<!--                <a class="nav-link" href="#">Free & easy return</a>-->
<!--              </li>-->
<!--              <li class="nav-item">-->
<!--                <a class="nav-link" href="#">Beat Deal</a>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </nav>-->

<!--      </div>-->
      <div style="padding: 0px ; width: 76%; margin: auto">
        <nav class="navbar navbar-expand-lg navbar-light" >
        <router-link to="/home"><a class="navbar-brand font-weight-bolder" >Noon</a></router-link>

          <button class="navbar-toggler" type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto" style=" width: 100% ; background-color: yellow" >

              <div class="input-icons">
                <i class="fa fa-search icon" style="font-size: 20px"></i>

                <input class="mr-sm-2 border-0 "
                       style="width: 100%; outline:none; height: 5vh"
                       type="search"
                       placeholder="What are you looking for ?"
                       aria-label="Search">

              </div>

            </ul>

            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/login">
                  <a class="nav-link">login</a>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/cart">
                  <a class="nav-link" ><span style="font-size: 25px" class="fa fa-shopping-cart"></span></a>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/profile">
                  <a class="nav-link" ><span style="font-size: 25px" class="fa fa-user"></span></a>
                </router-link>
              </li>

            </ul>

          </div>
        </nav>
      </div>
    </div>
    <Category></Category>
  </div>


</template>

<script>
import Category from "@/Header/Category/Category";
export default {
  name: "Header",
  components:{
    Category,
  }
}
</script>

<style scoped>

.input-icons i {
  position: absolute;
  padding: 15px 10px;
}

.input-icons {
  width: 100%;
}

input {
  padding-left: 35px;
}

</style>
