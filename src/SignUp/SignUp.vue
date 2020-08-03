<template>
  <div style="width: 50%; margin: auto;border: 1px solid lightgray; padding: 20px; background-color: #f4f2f2">
    <form>
      <div style="">
        <h3 style="width: 100%;margin: auto;padding: 20px 0px">SignUp</h3>
      </div>
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label >First name</label>
          <input type="text" class="form-control"  required>
        </div>

        <div class="col-md-6 mb-3">
          <label >Last name</label>
          <input type="text" class="form-control"  required>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label >Email</label>
          <input type="email" class="form-control"  required>
        </div>

        <div class="col-md-12 mb-3">
          <label >Passwrod</label>
          <input type="password" class="form-control"  required>
        </div>
      </div>


      <button class="btn btn-primary" type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
name: "SignUp"
}
</script>

<style scoped>

</style>
