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

}
</script>

<template>
  <section class="flex flex-col justify-between   items-center pt-10">
    <div class="flex flex-col rounded-full w-full text-center px-3 ">
      <img src="../assets/images/calendar.png" class="w-auto h-24 object-contain mb-3" alt="">
      <div class="flex  items-center gap-2 w-full">
        <div class="h-[2px] w-full flex-1 bg-gradient-to-r to-accent300 from-transparent"></div>
        <p class="text-white font-medium roboto-condensed text-right sm:text-base">
          Revise seu agendamento
        </p>
        <div class="h-[2px] w-full flex-1 bg-gradient-to-r to-transparent from-accent300"></div>
      </div>
      <div class="flex flex-col justify-between  w-full h-[250px] text-left  mt-5 bg-white  rounded-lg relative">
        <div class="
        flex justify-center items-center
        bg-gradient-to-r to-[#11998e] from-[#11FFBD] rounded-t-lg h-[40px]">
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
          <div class="absolute top-[59%]  border-dotted  border-gray-400 border-t-4 w-full"></div>
          <div class="h-[35px] w-[35px] rounded-full bg-secondary absolute top-[53%] -left-3 z-50"></div>
        </div>


        <div class="w-full flex px-3 justify-between items-center pt-5 mb-5 roboto-condensed">
          <div class="flex flex-col">
            <p class="text-base text-gray-400 ">Serviço</p>
            <p class="text-primary font-bold text-2xl">Corte de cabelo</p>
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
          class="flex-1 bg-gradient-to-r to-[#11998e] from-[#11FFBD]  hover:bg-gradient-to-r hover:to-white  hover:text-primary  w-full p-2  hover:from-white shadow-sm shadow-green-400 border-white text-white rounded-lg font-medium roboto-condensed text-lg"
          :class="{
        'bg-gradient-to-r to-gray-500 from-gray-500 text-black  shadow-sm shadow-black-400  hover:to-gray-500 hover:from-gray-500 shadow-gray-400': checkAcceptTerms,
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
