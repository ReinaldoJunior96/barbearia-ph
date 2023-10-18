import { defineStore } from 'pinia'
export const useShowMenu
  = defineStore('menu', {
  state: () => {
    return {
      visible: true,
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
