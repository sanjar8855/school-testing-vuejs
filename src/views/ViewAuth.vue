<template>
  <div class="row justify-content-center mt-5">
    <form @submit.prevent="onSubmit" class="col-6 border rounded">
      <h2 class="mt-2">Kirish</h2>
      <div class="mb-3">
        <label for="inputLogin" class="col-form-label">Login</label>
        <input v-model="login" type="text" :class="['form-control', {'is-invalid':lError}]" id="inputLogin" @blur="lBlur">
        <small class="text-danger">{{lError}}</small>
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="col-form-label">Password</label>
        <input v-model="password" type="password" :class="['form-control', {'is-invalid':pError}]" id="inputPassword" @blur="pBlur">
        <small class="text-danger">{{pError}}</small>
      </div>
      <button class="btn btn-success mb-3" :disabled="isSubmitting || urinishSoni">Kirish</button>
      <div class="text-danger" v-if="urinishSoni">Tizimga kirish uchun urinishlar soni ko'p. Iltimos keyinroq urinib ko'ring</div>
    </form>
  </div>
</template>

<script>
import {useLoginForm} from "@/use/login-form";
export default {
  name: "ViewAuth",
  setup(){
    return {
      ...useLoginForm()
    }
  }
}
</script>

<style scoped>

</style>