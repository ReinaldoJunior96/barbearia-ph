<template>
  <section class="flex items-center justify-between w-full relative">
    <div class="flex items-center w-full">
      <div class="flex justify-between px-5  w-full bg-secondary shadow-lg shadow-gray-400
          rounded-b-[45px] h-[150px] ">

        <div class=" flex-col ml-4 gap-1 flex pt-2  ">
          <span class="pt-10 gap-1 text-white text-lg montserrat">
              E aí,
                  <strong class=" text-2xl montserrat font-bold">Reinaldo 🤙</strong>
            </span>
          <div class="text-white montserrat">
            <p>Em que podemos ajudar você?</p>
          </div>
        </div>
        <div class="flex justify-center items-center    ">
          <div @click="showSideBar"
               class="flex flex-col items-start cursor-pointer  gap-1">

            <div class=" h-[2px] rounded w-[15px] bg-white"></div>

            <div class=" h-[2px] rounded w-[20px] bg-white"></div>
            <div class=" h-[2px] rounded w-[15px] bg-white"></div>
          </div>

        </div>
      </div>
    </div>


    <Transition name="slide-fade">
      <nav v-show="showMenu.showMenu" class=" h-screen w-8/12 bg-secondary fixed top-0 z-50 pt-10">
        <div class="flex gap-1.5 items-center ">
          <div class="m-2 p-2 rounded-full shadow-gray-500 bg-amber-400">
            <img class="w-[40px] h-[40px] object-cover " src="../assets/images/icones/novos/icone-user.png" alt="">
          </div>
          <div class=" montserrat text-base">
            <p class="text-white">Reinaldo</p>
            <p class="text-gray-400">reinaldo@gmail.com</p>
          </div>
        </div>

        <ul class="flex flex-col gap-3 px-3 pt-10">
          <li class="">
            <router-link :to="{name: 'home'}"
                         class="flex items-center gap-2 py-2
           hover:bg-secondary rounded hover:text-white montserrat px-2 cursor-pointer text-sm">
              <img class="w-[25px] h-[25px] object-contain" src="../assets/images/icones/novos/tesoura-branca.png" alt="">
              <p class="text-white montserrat text-base">Serviços</p>
            </router-link>

          </li>
          <li class="">
            <router-link :to="{name: 'meus-agendamentos'}"
                         class="flex items-center gap-2 py-2
           hover:bg-secondary rounded hover:text-white montserrat px-2 cursor-pointer text-sm">
              <img class="w-[25px] h-[25px] object-contain" src="../assets/images/icones/novos/agenda-branca.png" alt="">
              <p class="text-white montserrat text-base">Meus agendamentos</p>
            </router-link>

          </li>
        </ul>
      </nav>
    </Transition>
    <div @click="showSideBar()"
         class="fundo-escuro hidden opacity-50 fixed bg-black w-full h-screen top-0 z-40 "></div>
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
      activeMenu: true,
      optionsNavigation: [
        {
          icone: 'https://cdn-icons-png.flaticon.com/128/12371/12371068.png',
          text: 'Ínicio',
          routeNamePush: 'home'
        },
        {
          icone: 'https://cdn-icons-png.flaticon.com/128/10147/10147619.png',
          text: 'Horários',
          routeNamePush: 'agendar-horario'
        },

        {
          icone: 'https://cdn-icons-png.flaticon.com/128/9747/9747296.png',
          text: 'Meus agendamentos',
          routeNamePush: 'meus-agendamentos'
        }
      ]
    }
  },
  methods: {
    cleanApointment () {
      const agendamento = useAgendamento()
      agendamento.agendar(null)
    },
    showSideBar () {
      const showMenu = useShowMenu()
      showMenu.show()
      $('.fundo-escuro').toggleClass('hidden')
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
  transition: all 0.1s ease;
}

.slide-fade-leave-active {
  transition: all 0.1s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3ms ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
