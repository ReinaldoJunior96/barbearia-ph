<script>
import { useAgendamento } from '../store/agendamento.js'
import $ from 'jquery'

export default {
  setup () {
    const agendamento = useAgendamento()
    return {
      agendamento
    }
  },
  methods:{
    showOptionsCard(){
      console.log($('#dropdown').toggleClass('hidden'))
    }
  }
}
</script>

<template>
  <section>
    <div class="px-5">
      <div class="flex items-start gap-2 flex-col ">
        <div class="flex items-center gap-2">
          <img class="w-[30px] h-[30px] object-contain"
               src="https://cdn-icons-png.flaticon.com/128/9918/9918694.png"
               alt="">
          <p class="text-white text-base montserrat">
            Agendamentos realizados
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-3 mt-5 relative  ">
        <div class="bg-white rounded-lg p-3  border-l-[5px] border-accent400 montserrat text-lg  ">
          <div class="flex items-center justify-between">
            <div class="">
              <p class="text-gray-500 mb-2">Agendamento</p>
            </div>
            <div  @click="showOptionsCard()" class="relative">
              <i id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                 class="fa-solid fa-ellipsis-vertical"></i>

              <!-- Dropdown menu -->
              <div id="dropdown"
                   class="z-10  absolute hidden right-0 bg-white divide-y divide-gray-800
                   rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <a href="#"
                       class="flex items-center gap-2 text-danger px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <i class="fa-regular fa-circle-xmark"></i>
                      Cancelar
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          <div class="flex items-center gap-1">

            <img class="w-[20px] h-[20px] object-contain" src="https://cdn-icons-png.flaticon.com/128/5629/5629409.png"
                 alt="">
            <p class="text-gray-500 ">20/10/2023 - 08:00 AM</p>

          </div>
          <div class="h-[1px] my-2 w-full  bg-gradient-to-r to-accent400 from-accent500"></div>
          <div class="flex items-center">

            <img class="w-[20px] h-[20px] object-contain" src="https://cdn-icons-png.flaticon.com/128/4255/4255018.png"
                 alt="">

            <p class="text-gray-500 ">Corte de cabelo</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
