<script>
import { useLoginGoogleStore } from '../store/googleLogin.js'
import { useAgendamento } from '../store/agendamento.js'
import axios from 'axios'

export default {
  data () {
    return {
      checkAcceptTerms: true,
    }
  },
  setup () {
    const loginGoogle = useLoginGoogleStore()
    const agendamento = useAgendamento()
    const name = localStorage.getItem('name')
    return {
      loginGoogle,
      agendamento,
      name
    }
  },
  methods: {
    clearAppoitment () {
      const agendamento = useAgendamento()
      // Recupere o token do Local Storage
      const token = localStorage.getItem('token')
      if (token) {
        const axiosConfig = {
          headers: {
            'authorization': `Bearer ${token}` // Adicione o token ao cabeçalho de autorização
          }
        }
        const requestData = {
          dateTime: agendamento.dateAppointment,
          service: agendamento.getServico
        }

        axios.post('http://54.208.52.199:3000/api/appointments/created', requestData, axiosConfig) // Passando a configuração do cabeçalho como o terceiro argumento
            .then((res) => {
              agendamento.cleanAppointment()
              this.$router.push({ name: 'home' })
            })
            .catch((error) => {
              console.error('Erro no registro', error)
            })
      } else {
        console.error('Token de autorização não encontrado no Local Storage.')
        // Lidar com a situação em que o token não está disponível
      }

    },
    convertDate (date) {
      const dataObj = new Date(date)

      const dia = dataObj.getDate()
      const mes = dataObj.getMonth() + 1
      const ano = dataObj.getFullYear()
      const hora = dataObj.getHours()
      const minutos = dataObj.getMinutes()

      return `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${ano} ${hora < 10 ? '0' : ''}${hora}:${minutos < 10 ? '0' : ''}${minutos}`
    }
  }

}
</script>

<template>
  <section class="flex flex-col justify-between   items-center pt-10">
    <div class="flex flex-col rounded-full w-full text-center px-3 ">

      <div class="flex flex-col justify-between  w-full h-[200px] shadow-lg text-left
       bg-white  rounded-lg relative">
        <div class=" flex justify-center items-center  bg-secondary rounded-t-lg h-[40px]">
          <p class="text-white font-medium roboto-condensed text-right sm:text-base">Confirme seu agendamento </p>
        </div>
        <div class="w-full flex px-3 justify-between items-center montserrat ">
          <div class="flex flex-col ">
            <p class="text-base text-gray-400 ">Data e hora</p>
            <p class="text-primary font-bold text-base" v-html="convertDate(agendamento.dateAppointment)"></p>
          </div>
          <div class="flex flex-col">
            <p class="text-base text-gray-400 ">Nome</p>
            <p class="text-primary font-bold text-base">{{ name }}</p>
          </div>
        </div>
        <div class="w-full flex px-3 justify-between items-center  mb-5 montserrat">
          <div class="flex flex-col">
            <p class="text-base text-gray-400 ">Serviço</p>
            <p class="text-primary font-bold text-base">{{ agendamento.getServico }}</p>
          </div>
        </div>
      </div>
      <div class="flex items-center text-secondary gap-2 montserrat mt-3">
        <i class="fa-brands fa-pix"></i>
        <p>Pagamentos com Pix</p>
      </div>
      <div class="flex items-center text-secondary gap-2 montserrat mb-3">
        <i class="fa-solid fa-credit-card"></i>
        <p>Cartões de crédito ou débito</p>
      </div>
    </div>


    <div class="flex flex-col gap-3 px-3">
      <div class="flex flex-row-reverse gap-3 items-start">
        <label for="checkConcordo" class="text-left text-secondary text-base montserrat">
          Estou de acordo em chegar 15 minutos antes do meu horário. Caso não consiga, você pode cancelar meu horário.
        </label>

        <input  @change="this.checkAcceptTerms =  !this.checkAcceptTerms"
                class="mt-1.5 " type="checkbox"
               id="checkConcordo">
      </div>
      <button
          @click="clearAppoitment()"
          class="flex-1 bg-danger  hover:bg-gradient-to-r hover:to-white
            hover:text-primary  w-full p-2  hover:bg-white hover:border-primary hover:border
            text-white rounded-lg font-medium roboto-condensed text-lg cursor-pointer"

          :class="{
              'bg-gradient-to-r to-gray-500 from-gray-500  shadow-sm shadow-black-400  hover:to-gray-500 hover:from-gray-500 shadow-gray-400': checkAcceptTerms,
              '': !checkAcceptTerms,
            }"
          :disabled="checkAcceptTerms">
        Finalizar agendamento
      </button>
    </div>
  </section>
</template>

<style scoped>

</style>
