<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>

        <router-link to="/auth" class="btn btn-outline-success" v-if="!isAuthenticated">Kirish</router-link>
        <button class="btn btn-outline-danger" @click.prevent="logout" v-else>Chiqish</button>
      </div>
    </div>
  </nav>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter} from "vue-router";
import {computed} from 'vue'

export default {
  setup(){
    const store = useStore()
    const router = useRouter()
    const isAuthenticated = computed ( ()=> store.getters['auth/isAuthenticated'])
    return {
      isAuthenticated,
      logout: ()=>{
        store.commit('auth/logout')
        router.push('/')
      }
    }
  }
}
</script>

<style scoped>

</style>