<template>
  <section v-if=" this.$route.name !== 'checkout'" class="shadow bg-secondary fixed top-0   z-40  flex flex-col justify-between
     gap-3 items-center px-3  py-4 w-full">
    <div class="flex items-center justify-between w-full">

      <div class="flex flex-col text-lg roboto-condensed ">
        <p class="text-white sm:text-sm md:text-2xl" style="line-height: 25px">Olá, <br> {{ loginGoogle.getName }}
          &#128075;</p>
        <small class="text-gray-300 font-light sm:text-sm md:text-xs">{{
            loginGoogle.getEmail
          }}</small>
      </div>

<!--      <div @click="showMenu.show()"-->
<!--           class="flex flex-col items-center cursor-pointer  gap-1">-->
<!--        <div class=" h-[2px] rounded w-[15px] bg-white"></div>-->
<!--        <div class=" h-[2px] rounded w-[20px] bg-white"></div>-->
<!--        <div class=" h-[2px] rounded w-[15px] bg-white"></div>-->
<!--      </div>-->
      <img class="w-[50px] h-[50px] object-cover rounded-full "
           :src="loginGoogle.getPicture" alt="">


    </div>
    <div v-if="agendamento.agendamentoIsVisible !== null && this.$route.name !== 'checkout'" class="flex w-full">
      <div class="flex flex-col items-end gap-3 w-full  ">
        <div class="flex  items-center gap-2 w-full">
          <div class="h-[2px] w-full flex-1 bg-gradient-to-r to-accent300 from-transparent"></div>
          <p class="text-white font-medium roboto-condensed text-right sm:text-base">
            {{ agendamento.agendamentoIsVisible ? `Agendamento: ${agendamento.agendamentoIsVisible}` :'Agende seu horário!' }}
          </p>
        </div>
        <div class="flex w-full items-stretch justify-evenly gap-3">
          <Transition name="slide-fade">
            <button @click="cleanApointment()"
                class=" hover:bg-white hover:text-primary  hover:border-primary
                      w-auto p-2 bg-transparent border-2 border-white text-white rounded-lg font-medium roboto-condensed text-lg">
              Limpar agendamento
            </button>
          </Transition>
          <Transition name="slide-fade">
            <button @click="this.$router.push('/checkout')"
                class="flex-1 bg-gradient-to-r to-[#11998e] from-[#11FFBD]  hover:bg-gradient-to-r hover:to-white hover:from-white hover:text-primary
                      w-auto p-2   shadow-sm shadow-green-400 border-white text-white rounded-lg font-medium roboto-condensed text-lg ">
              Agendar
            </button>
          </Transition>
        </div>

      </div>
    </div>


  </section>
</template>
<script>
import { useLoginGoogleStore } from '../store/googleLogin.js'
import { useShowMenu } from '../store/ShowMenu.js'
import { useAgendamento } from '../store/agendamento.js'
import $ from 'jquery'

export default {
  data () {
    return {
      showOptions: false,
      activeMenu: true
    }
  },
  methods:{
    cleanApointment () {
      const agendamento = useAgendamento()
      agendamento.agendar(null)
    }
  },
  watch: {
    showOptions () {
      let body = $('body')
      body.toggleClass('overflow-hidden')
    },

  },
  setup () {
    const loginGoogle = useLoginGoogleStore()
    const showMenu = useShowMenu()
    const agendamento = useAgendamento()
    return {
      loginGoogle,
      showMenu,
      agendamento
    }
  },
}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
