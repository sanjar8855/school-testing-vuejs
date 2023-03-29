<template>
  <div class="container-fluid pt-5">
    <div class="container pb-3">
      <div class="row">
        <div class="col-12">
          <h2>O'quvchilar ro'yxati</h2>
        </div>
        <div class="col-12">
          <table class="table">
            <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Telefon raqam</th>
              <th scope="col">Login</th>
              <th scope="col">Parol</th>
              <th scope="col">Maktab</th>
              <th scope="col">Amallar</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(items,idx) in students" :key="items.id">
              <th scope="row">{{idx+1}}</th>
              <td>{{ items.name }}</td>
              <td>{{ items.phone_number }}</td>
              <td>{{ items.login }}</td>
              <td>{{ items.password }}</td>
              <td>{{ items.maktab_id }}</td>
              <td>
                <router-link v-slot="navigate" :to="{name:'ViewStudentUpdate', params: {id:items.id} }">
                  <button class="btn btn-info" @click="navigate">O'zgartirish</button>
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props:['students'],
  name: "StudentsTable"
}
</script>

<style scoped>

</style>