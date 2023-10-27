<script>

import { useAgendamento } from '../store/agendamento.js'
import Menu from '../components/Navbar.vue'
import Alert from '../components/Alert.vue'
import { useAlert } from '../store/Alert.js'


export default {
  components: { Menu, Alert },
  data () {
    return {
      name: localStorage.getItem('name'),  }
  },
  methods: {
    iniciarAgendamento (service) {
      const agendamento = useAgendamento()
      agendamento.addServico(service)
      localStorage.setItem('service', service)
      this.$router.push({ name: 'agendar-horario' })
    }
  }

}
</script>

<template>
  <section class="relative  ">


    <div class="grid grid-cols-2 gap-x-10 gap-y-10 p-10 justify-items-center">

      <div
          class="transition-all hover:scale-[1.1] flex items-center justify-center bg-white p-3 rounded-lg shadow-gray-300 shadow-lg w-[150px] h-[130px]">
        <div @click="iniciarAgendamento('Corte masculino')" class="flex flex-col items-center justify-items-center">
          <img src="../assets/images/icones/novos/penteado.png"
               class="w-[60px] h-[60px] object-contain" alt="">
          <p class="text-[13px] py-2 montserrat">Cortes masculinos</p>
        </div>
      </div>
      <div
          class="transition-all hover:scale-[1.1] flex items-center justify-center bg-white p-3 rounded-lg shadow-gray-300 shadow-lg w-[150px] h-[130px]">
        <div @click="iniciarAgendamento('Barba')" class="flex flex-col items-center justify-items-center">
          <img src="../assets/images/icones/novos/corte-de-barba.png"
               class="w-[60px] h-[60px] object-contain" alt="">
          <p class="text-[13px] py-2 montserrat">Barbas</p>
        </div>
      </div>
      <div
          class="transition-all hover:scale-[1.1] flex items-center justify-center bg-white p-3 rounded-lg shadow-gray-300 shadow-lg w-[150px] h-[130px]">
        <div @click="iniciarAgendamento('Cabelo e Barba')" class="flex flex-col items-center justify-items-center">
          <img src="../assets/images/icones/novos/homem.png"
               class="w-[60px] h-[60px] object-contain" alt="">
          <p class="text-[13px] py-2 montserrat">Cabelo e Barba</p>
        </div>
      </div>


    </div>
    <img src="../assets/images/pack-logo/tesoura.png" class=" w-[320px] fixed -bottom-32 -right-20" alt="">
<!--    <img src="../assets/images/pack-logo/logo-sozinha.png" class=" w-[200px] fixed -bottom-10 left-5" alt="">-->

  </section>
</template>

<style scoped>

</style>
