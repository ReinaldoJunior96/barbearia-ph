<script>
import { decodeCredential, GoogleLogin } from 'vue3-google-login'
import { useAlert } from '../store/Alert.js'
import axios from 'axios'

export default {
  data () {
    return {
      email: '',
      password: '',
      name: ''
    }
  },
  methods: {
    seePassword () {
      let inputPassword = document.querySelector('.password') // Seleciona o elemento com a classe 'password'

      if (inputPassword.type === 'text') {
        inputPassword.type = 'password' // Altera o tipo de entrada para 'password'
      } else {
        inputPassword.type = 'text' // Altera o tipo de entrada para 'text'
      }
    },
    register () {
      axios
          .post('http://54.208.52.199:3000/api/users/created', {  // Use o URL relativo definido no proxy
            name: this.name,
            email: this.email,
            password: this.password
          })
          .then((res) => {
            if (res.status === 201) {
              return axios.post('http://54.208.52.199:3000/api/users/login', {
                email: res.data.user.email,
                password: res.data.user.password
              })
            } else {
              alert('Error')
            }
          })
          .then(loginRes => {
            localStorage.setItem('token', loginRes.data.token)
            localStorage.setItem('name', loginRes.data.user.name)
            this.$router.push('/home')
          })
          .catch((error) => {
            console.error('Erro no registro', error)
          })
    }

  }
}

</script>

<template>
  <section class="bg-[#070C17] h-screen">
    <div class="flex flex-col h-full  items-center ">
      <img class="w-full h-[320px] object-contain pt-5"
           src="../assets/images/render_final_2.png" alt="">

      <div class="flex flex-col gap-5 w-9/12">
        <div class="flex items-center w-full shadow text-primary p-1.5 rounded-lg bg-white px-3">
          <i class="fa-solid fa-user text-accent300"></i>
          <input v-model="name" type="text"
                 class=" w-full outline-0 text-center text-base roboto-condensed " placeholder="Nome">
        </div>
        <div class="flex items-center w-full shadow text-primary p-1.5 rounded-lg bg-white px-3">
          <i class="fa-solid fa-at text-accent300"></i>
          <input v-model="email" type="text"
                 class=" w-full outline-0 text-center text-base roboto-condensed " placeholder="E-mail">
        </div>
        <div class="flex items-center w-full shadow text-primary p-1.5 rounded-lg bg-white px-3">
          <i class="fa-solid fa-unlock text-accent300"></i>
          <input v-model="password" type="password" placeholder="Senha"
                 class=" w-full outline-0 text-center text-base password roboto-condensed font-medium ">
          <i @click="this.seePassword()" class="fa-solid fa-eye  text-accent300"></i>
        </div>
        <button class="btn-login" @click="register()">
          Registrar
        </button>
        <div class="text-center">
          <p class="text-white ">
            Já tem conta?
            <router-link :to="{name: 'login'}">
              <strong>Faça login</strong>
            </router-link>
          </p>
        </div>


      </div>

    </div>
  </section>
</template>
<style scoped>

</style>

