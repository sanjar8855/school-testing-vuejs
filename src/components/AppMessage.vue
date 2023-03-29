<template>
  <div v-if="message" aria-live="polite" aria-atomic="true">
    <div :class="['toast', 'border','position-fixed', 'border-'+message.type ]"
         style="bottom: 50px; right: 50px; opacity: 1; z-index: 1;">
      <div class="toast-header">
        <span :class="['m-1', 'bg-'+message.type ]" style="width: 15px;height: 15px;"></span>
        <strong class="mr-auto">{{ title }}</strong>
        <button @click="close" type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        {{ message.value }}
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
  setup(){
    const store = useStore()
    const message = computed(()=> store.state.message)
    const Title_map = {
      success:'Muvaffaqiyatli bajarildi',
      danger:'Xatolik',
      warning:'Ogohlantirish'
    }
    const title = computed(()=>message.value ? Title_map[message.value.type] : null)

    return {
      message,
      title,
      close:()=>{ store.commit('clearMessage')}
    }
  }
}
</script>

<style scoped>

</style>