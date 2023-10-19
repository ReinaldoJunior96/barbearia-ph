import { defineStore } from 'pinia'
export const useShowMenu
  = defineStore('menu', {
  state: () => {
    return {
      visible: false,
    }
  },
  actions: {
    show(){
      this.visible = !this.visible
    }
  },
  getters:{
    showMenu(){
      return this.visible
    }
  }

})
