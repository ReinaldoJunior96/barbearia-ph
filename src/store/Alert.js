import { defineStore } from 'pinia'
export const useAlert
  = defineStore('alert', {
  state: () => {
    return {
      showAlert: false,
      type: String,
      mgs: String
    }
  },
  actions: {
    push (type, mgs) {
      this.showAlert = true
      this.type = type
      this.mgs = mgs
      setTimeout(() => {
        this.showAlert = false
      }, 2500) // 2000 milissegundos (2 segundos)
    },
  },

})
