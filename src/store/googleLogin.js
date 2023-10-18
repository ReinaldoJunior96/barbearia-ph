import { defineStore } from 'pinia'
import { decodeCredential, googleLogout } from 'vue3-google-login'
import { useRoute, useRouter } from 'vue-router' // Importe o Vue Router
export const useLoginGoogleStore
  = defineStore('loginGoogle', {
  state: () => {
    return {
      name: String,
      email: String,
      picture: String,
    }
  },
  actions: {
    logout () {
      localStorage.removeItem('token');
      googleLogout()
      window.location.href = '/'
    },
    setName (name) {
      return this.name = name
    },
    setEmail (email) {
      return this.email = email
    },
    setPicture (picture) {
      return this.picture = picture
    },
  },

  getters: {
    getName () {
      return this.name
    },
    getPicture () {
      return this.picture
    },
    getEmail () {
      return this.email
    },

  },

})
