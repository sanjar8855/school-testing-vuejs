<template>
  <component :is="layout+'-layout'"></component>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import {computed} from 'vue'
import {useRoute} from 'vue-router'
export default {
  setup(){
    const route = useRoute()
    const layout = computed ( ()=> route.meta.layout)

    return {
      layout
    }
  },
  components:{
    AuthLayout,
    MainLayout,
    DashboardLayout,
  }
}
</script>

