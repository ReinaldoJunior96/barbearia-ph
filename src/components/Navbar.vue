<template>
  <section class=" flex items-center justify-between w-full  ">
    <div class="flex items-center w-full">
      <div class="flex justify-between px-5 relative  w-full bg-secondary shadow-lg shadow-gray-400
          rounded-b-[45px] h-[150px] ">

        <div class="  gap-1 flex pt-2  ">
          <div v-if="$route.name === 'home'"
               class=" flex flex-col  -mt-2">
            <span class="pt-10 gap-1 text-white text-lg montserrat">
              E aí,
                  <strong class=" text-2xl montserrat font-bold">
                    {{ name }} 🤙
                  </strong>
            </span>
            <div class="text-white montserrat">
              <p>Em que podemos ajudar você?</p>
            </div>
          </div>
          <div v-if="$route.name === 'meus-agendamentos'"
               class=" flex items-center gap-2 -mt-2">
            <img src="../assets/images/icones/novos/agenda-branca.png"
                 class="w-[30px] h-[30px] object-contain" alt="">
            <p class="text-white text-xl montserrat">Meus agendamentos</p>
          </div>
          <div v-if="$route.name === 'agendar-horario'"
               class=" flex items-center gap-2 -mt-2">
            <img src="../assets/images/icones/novos/calendar-branco.png"
                 class="w-[25px] h-[25px] object-contain" alt="">
            <p class="text-white text-xl montserrat">Escolha o seu horário</p>
          </div>
          <div v-if="$route.name === 'checkout'"
               class=" flex items-center gap-2 -mt-2">
            <img src="../assets/images/icones/novos/calendar-date-branco.png"
                 class="w-[25px] h-[25px] object-contain" alt="">
            <p class="text-white text-xl montserrat">Confirme seu horário</p>
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
          <div class="m-2 p-1 rounded-full shadow-gray-500 bg-danger">
            <img class="w-[40px] h-[40px] object-cover "
                 src="../assets/images/icones/novos/user.png" alt="">
          </div>
          <div class=" montserrat text-base">
            <p class="text-white">{{name}}</p>
            <p class="text-gray-400">{{email}}</p>
          </div>
        </div>

        <ul class="flex flex-col gap-3 px-3 pt-10 ">
          <li class="">
            <router-link :to="{name: 'home'}"
                         class="flex items-center gap-2 py-2
           hover:bg-secondary rounded hover:text-white montserrat px-2 cursor-pointer text-sm">
              <img class="w-[25px] h-[25px] object-contain" src="../assets/images/icones/novos/tesoura-branca.png"
                   alt="">
              <p class="text-white montserrat text-base">Serviços</p>
            </router-link>

          </li>
          <li class="">
            <router-link :to="{name: 'meus-agendamentos'}"
                         class="flex items-center gap-2 py-2
           hover:bg-secondary rounded hover:text-white montserrat px-2 cursor-pointer text-sm">
              <img class="w-[25px] h-[25px] object-contain" src="../assets/images/icones/novos/agenda-branca.png"
                   alt="">
              <p class="text-white montserrat text-base">Meus agendamentos</p>
            </router-link>

          </li>
          <li class="">
            <div @click="logout"
                 class="flex items-center gap-2 py-2
           hover:bg-secondary rounded hover:text-white montserrat px-2 cursor-pointer text-sm">
              <img class="w-[25px] h-[25px] object-contain" src="../assets/images/icones/novos/logout.png" alt="">
              <p class="text-white montserrat text-base">Sair</p>
            </div>

          </li>
        </ul>
      </nav>
    </Transition>
    <div @click="showSideBar()"
         class="fundo-escuro hidden opacity-50 fixed bg-black w-full h-screen top-0 z-40 "></div>


  </section>


</template>
<script>
import { useShowMenu } from '../store/ShowMenu.js'
import { useAgendamento } from '../store/agendamento.js'
import $ from 'jquery'
import { onMounted } from 'vue'

export default {
  data () {
    return {
      showOptions: false,
      activeMenu: true,

    }
  },
  methods: {
    logout () {
      const menu = useShowMenu()
      menu.show()
      localStorage.clear();

      this.$router.push('/')
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
    const showMenu = useShowMenu()
    const agendamento = useAgendamento()
    const email = localStorage.getItem('email')

    const name = localStorage.getItem('name')

    console.log(email)
    return {
      showMenu,
      agendamento,
      name,
      email
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
