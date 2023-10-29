<script>
import { useAlert } from '../store/Alert.js'
import axios from 'axios'
import $ from 'jquery'
import Alert from '../components/Alert.vue'

export default {
  components: {
    Alert,
  },
  data () {
    return {
      loggedIn: false,
      showcard: false,
      user: '',
      password: ''
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
    login () {
      const alert = useAlert()
      if(this.user === '' || this.password === ''){
        alert.push('Error', 'Informe suas credenciais!')
        return
      }

      $('.lds-dual-ring').toggle()
      $('.textBtn').toggle()

      localStorage.removeItem('token')
      self = this
      axios.post('http://18.233.12.172:3000/api/users/login', {
        'email': this.user,
        'password': this.password
      })
          .then((res) => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('name', res.data.user.name)
            localStorage.setItem('email', res.data.user.email)

            this.$router.push('/home')
          })
          .catch((error) => {
            $('.lds-dual-ring').toggle()
            $('.textBtn').toggle()

            alert.push('Error', 'Usuário ou senha incorretos!!')
            console.error('Erro no registro', error)
          })
    }

  },
  mounted () {
    $('.lds-dual-ring').hide()
    $('.textBtn').show()
    if (localStorage.getItem('token')) {
      this.$router.push('/home')
    }

  },

}

</script>

<template>
  <section class="bg-[#070C17] min-h-screen">
    <div class="flex flex-col h-full  items-center ">
      <img class="w-full h-[320px] object-contain pt-5"
           src="../assets/images/pack-logo/logo-sem-fundo.png" alt="">

      <div class="flex flex-col gap-4 w-9/12">

        <div class="flex items-center w-full shadow text-primary p-1.5 rounded-lg bg-white px-3">
          <i class="fa-solid fa-user text-accent300"></i>
          <input v-model="this.user" type="text"
                 class=" w-full outline-0 text-center text-base roboto-condensed " placeholder="E-mail">
        </div>
        <div class="flex items-center w-full shadow text-primary p-1.5 rounded-lg bg-white px-3">
          <i class="fa-solid fa-unlock text-accent300"></i>
          <input v-model="this.password" type="password" placeholder="Senha"
                 class=" w-full outline-0 text-center text-base password roboto-condensed font-medium ">
          <i @click="this.seePassword()" class="fa-solid fa-eye  text-accent300"></i>
        </div>
        <div class="flex flex-col items-center justify-between gap-5 ">

          <button @click="login()" class="btn-login montserrat  ">
            <span class="textBtn">Login</span>
            <span class="lds-dual-ring"></span>
          </button>



          <div class="">
            <p class="text-white ">
              Não tem conta?
              <router-link :to="{name: 'cadastro'}">
                <strong>Cadastre-se aqui</strong>
              </router-link>
            </p>
          </div>

        </div>

      </div>

    </div>
    <Transition name="slide-fade">
      <Alert></Alert>
    </Transition>

  </section>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(10, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>

