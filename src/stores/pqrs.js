import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePqrsStore = defineStore('pqrs', () => {
  const booleanMenu = ref(true)

  const toggleBooleanMenu = () =>{
    booleanMenu.value = !booleanMenu.value
  }

  return { toggleBooleanMenu, booleanMenu }
})
