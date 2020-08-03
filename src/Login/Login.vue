<template>
  <div style="width: 40%; margin: auto; border: 1px solid lightgray; padding: 20px; background-color: #f4f2f2" >
    <form style="margin-bottom: 30px">
      <div style="">
        <h3 style="width: 100%;margin: auto;padding: 20px 0px">Login</h3>
      </div>
      <div class="form-group">
        <label > Email</label>
        <input type="text" class="form-control"  placeholder="Enter Your Email">
      </div>
      <div class="form-group">
        <label > Password</label>
        <input type="text" class="form-control"  placeholder="Enter Your Password">
      </div>
      <button class="btn btn-primary btn-block">Login</button>
    </form>
    <router-link to="/SignUp" style="padding: 20px 0px;"><a>SignUp</a></router-link>

  </div>
</template>

<script>
export default {
name: "Login"
}
</script>

<style scoped>

</style>
