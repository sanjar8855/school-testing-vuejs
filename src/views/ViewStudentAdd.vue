<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <form @submit.prevent="onSubmit" class="col-6 border rounded">
        <h2 class="mt-2">O'quvchi qo'shish</h2>
        <div class="mb-3">
          <label for="inputFish" class="col-form-label">FISH</label>
          <input v-model="name" type="text" :class="['form-control', { 'is-invalid': nError }]" id="inputFish" @blur="nBlur">
          <small class="text-danger">{{ nError }}</small>
        </div>
        <div class="mb-3">
          <label for="inputPhone" class="col-form-label">Telefon raqam</label>
          <input v-model="phone_number" type="text" :class="['form-control', { 'is-invalid': pnError }]" id="inputPhone" @blur="pnBlur">
          <small class="text-danger">{{ pnError }}</small>
        </div>
       <div class="mb-3">
          <label for="inputLogin" class="col-form-label">Login</label>
          <input v-model="login" type="text" :class="['form-control', { 'is-invalid': lError }]" id="inputLogin" @blur="lBlur">
          <small class="text-danger">{{ lError }}</small>
        </div>
        <div class="mb-3">
          <label for="inputPassword" class="col-form-label">Parol</label>
          <input v-model="password" type="password" :class="['form-control', { 'is-invalid': pError }]" id="inputPassword" @blur="pBlur">
          <small class="text-danger">{{ pError }}</small>
        </div>
        <div class="mb-3">
          <label for="inputStatus" class="col-form-label">Status</label>
          <select v-model="status" id="inputStatus" class="form-control">
            <option value="1">Faol</option>
            <option value="0">NoFaol</option>
          </select>
        </div>
        <button class="btn btn-primary mb-3" :disabled="isSubmitting">Qo'shish</button>
      </form>
    </div>
  </div>
</template>

<script>
import {useStudentAddForm} from "@/use/student-add";
export default {
  name: "ViewStudentAdd",
  setup(){
    return {
      ...useStudentAddForm()
    }
  }
}
</script>

<style scoped>

</style>