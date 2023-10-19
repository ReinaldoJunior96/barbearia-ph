<script>
import { useLoginGoogleStore } from '../store/googleLogin.js'
import { useAgendamento } from '../store/agendamento.js'

export default {
  data () {
    return {
      checkAcceptTerms: true
    }
  },
  setup () {
    const loginGoogle = useLoginGoogleStore()
    const agendamento = useAgendamento()
    return {
      loginGoogle,
      agendamento
    }
  },
  methods:{
    clearAppoitment(){
      const agendamento = useAgendamento()
      agendamento.cleanAppointment()
      this.$router.push({name: 'home'})
    }
  }

}
</script>

<template>
  <section class="flex flex-col justify-between   items-center pt-20">
    <div class="flex flex-col rounded-full w-full text-center px-3 ">
      <img src="https://cdn-icons-png.flaticon.com/128/6452/6452497.png" class="w-auto h-24 object-contain mb-3" alt="">
      <div class="flex  items-center gap-2 w-full">
        <div class="h-[2px] w-full flex-1 bg-gradient-to-r to-[#457fca] from-transparent"></div>
        <p class="text-white font-medium roboto-condensed text-right sm:text-base">
          Revise seu agendamento
        </p>
        <div class="h-[2px] w-full flex-1 bg-gradient-to-r to-transparent from-[#457fca]"></div>
      </div>
      <div class="flex flex-col justify-between  w-full h-[250px] text-left  mt-5 bg-white  rounded-lg relative">
        <div class="
        flex justify-center items-center
        bg-gradient-to-r to-[#457fca] from-[#5691c8] rounded-t-lg h-[40px]">
          <p class="text-white font-medium roboto-condensed text-right sm:text-base">Agendamento realizado </p>
        </div>
        <div class="w-full flex px-3 justify-between items-center roboto-condensed ">
          <div class="flex flex-col ">
            <p class="text-base text-gray-400 ">Agendamento</p>
            <p class="text-primary font-bold text-2xl">{{ agendamento.agendamentoIsVisible }}</p>
          </div>
          <div class="flex flex-col">
            <p class="text-base text-gray-400 ">Nome</p>
            <p class="text-primary font-bold text-2xl">{{ loginGoogle.getName }}</p>
          </div>
        </div>

        <div class="">
          <div class="h-[35px] w-[35px] rounded-full bg-secondary absolute top-[53%] -right-3 z-50"></div>
          <div class="absolute top-[59%]  border-dotted  border-secondary border-t-4 w-full"></div>
          <div class="h-[35px] w-[35px] rounded-full bg-secondary absolute top-[53%] -left-3 z-50"></div>
        </div>


        <div class="w-full flex px-3 justify-between items-center pt-5 mb-5 roboto-condensed">
          <div class="flex flex-col">
            <p class="text-base text-gray-400 ">Serviço</p>
            <p class="text-primary font-bold text-2xl">{{agendamento.getServico}}</p>
          </div>
          <div class="flex flex-col">
            <p class="text-base text-gray-400 ">Valor</p>
            <p class="text-primary font-bold text-2xl">R$ 30,00</p>
          </div>
        </div>
      </div>
      <div class="flex items-center text-white gap-2 roboto-condensed mt-3">
        <i class="fa-brands fa-pix"></i>
        <p>Pagamentos com Pix</p>
      </div>
      <div class="flex items-center text-white gap-2 roboto-condensed mb-3">
        <i class="fa-solid fa-credit-card"></i>
        <p>Cartões de crédito ou débito</p>
      </div>
    </div>


    <div class="flex flex-col gap-3 px-3">
      <div class="flex flex-row-reverse gap-3 items-start">
        <label for="checkConcordo" class="text-left text-white text-sm">
          Estou de acordo em chegar 15 minutos antes do meu horário. Caso não consiga, você pode cancelar meu horário.
        </label>

        <input @change="this.checkAcceptTerms =  !this.checkAcceptTerms" class="mt-1.5" type="checkbox"
               id="checkConcordo">
      </div>
      <button
          @click="clearAppoitment()"
          class="flex-1 bg-gradient-to-r to-[#457fca] from-[#5691c8]  hover:bg-gradient-to-r hover:to-white
            hover:text-primary  w-full p-2  hover:from-white   border-white
            text-white rounded-lg font-medium roboto-condensed text-lg cursor-pointer"

          :class="{
              'bg-gradient-to-r to-gray-500 from-gray-500  shadow-sm shadow-black-400  hover:to-gray-500 hover:from-gray-500 shadow-gray-400': checkAcceptTerms,
              '': !checkAcceptTerms,
            }"
          :disabled="checkAcceptTerms">
        Finalizar
      </button>
    </div>
  </section>
</template>

<style scoped>

</style>
