<template>
  <link rel="stylesheet" type="text/css" href="fanadesh/css/bootstrap.css" />

  <app-message></app-message>

  <div class="container">
    <router-view></router-view>
  </div>

</template>

<script>
// import ViewAuth from "@/views/ViewAuth";
import AppMessage from "@/components/AppMessage";
export default {
  name: "AuthLayout",
  components:{
    AppMessage
    // ViewAuth
  }
}
</script>

<style scoped>

</style>