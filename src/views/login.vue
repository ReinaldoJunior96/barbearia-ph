<script>
import { decodeCredential, GoogleLogin } from 'vue3-google-login'
import { useAlert } from '../store/Alert.js'

export default {
  components: {
    GoogleLogin
  },
  data () {
    return {
      callback: (response => {
        const alert = useAlert()
        localStorage.removeItem('token')
        let user = decodeCredential(response.credential)
        if (user) {
          localStorage.setItem('token', response.credential)
          alert.push('Success', 'Bem vindo! Faça seu agendamento')
          this.$router.push({ name: 'home' })
        } else {
          alert.push('Error', 'Erro ao realizar login!')
          this.$router.push({ name: 'login' })
        }
      }),
      loggedIn: false,
      showcard: false
    }
  },
  methods: {
    seePassword() {
      let inputPassword = document.querySelector('.password'); // Seleciona o elemento com a classe 'password'

      if (inputPassword.type === 'text') {
        inputPassword.type = 'password'; // Altera o tipo de entrada para 'password'
      } else {
        inputPassword.type = 'text'; // Altera o tipo de entrada para 'text'
      }
    }

  }
}

</script>

<template>
  <section class="bg-secondary h-screen">
    <div class="flex flex-col h-full  items-center ">
      <img class="w-full h-[350px] object-contain" src="../assets/images/picole.png" alt="">

      <div class="flex flex-col gap-5 w-9/12">
        <div class="flex items-center w-full shadow text-primary p-1.5 rounded-2xl bg-white px-3">
          <i class="fa-solid fa-user text-accent300"></i>
          <input type="text"
                 class=" w-full outline-0 text-center text-base roboto-condensed " placeholder="E-mail">
        </div>
        <div class="flex items-center w-full shadow text-primary p-1.5 rounded-2xl bg-white px-3">
          <i class="fa-solid fa-unlock text-accent300"></i>
          <input type="password" placeholder="Senha"
                 class=" w-full outline-0 text-center text-base password roboto-condensed font-medium ">
          <i @click="this.seePassword()" class="fa-solid fa-eye  text-accent300"></i>
        </div>
        <div class="flex gap-3 items-center">
          <div class="h-[2px] w-full bg-white rounded-full"></div>
          <p class="text-white roboto-condensed">Ou</p>
          <div class="h-[2px] w-full bg-white rounded-full"></div>
        </div>
        <div class="flex justify-center w-full">
          <GoogleLogin :callback="callback" prompt auto-login/>
        </div>

      </div>

    </div>
  </section>
</template>
<style scoped>
</style>

