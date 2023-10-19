<template>
  <section
      class=" bg-secondary fixed top-0   z-40  flex flex-col justify-between
     gap-3 items-center px-5  py-3 w-full">
    <div class="flex items-center justify-between w-full">
      <div v-show="this.$route.name === 'home'" @click="showSideBar"
           class="flex flex-col items-start cursor-pointer  gap-1">
        <div class=" h-[2px] rounded w-[20px] bg-white"></div>
        <div class=" h-[2px] rounded w-[18px] bg-white"></div>
        <div class=" h-[2px] rounded w-[15px] bg-white"></div>
      </div>
      <div @click="this.$router.go(-1);" v-show="this.$route.name !== 'home'" class="">
        <img class="w-[30px] h-[30px] object-contain" src="https://cdn-icons-png.flaticon.com/128/545/545781.png"
             alt="">
      </div>
      <img class="w-[50px] h-[50px] object-cover rounded-full "
           :src="loginGoogle.getPicture" alt="">
      <Transition name="slide-fade">
        <nav v-show="showMenu.showMenu" class=" h-screen w-8/12 bg-white fixed top-0 z-50">
          <div class="flex flex-col items-center">
            <img class="w-auto h-[200px] object-contain" src="../assets/images/picole.png" alt="">
          </div>

          <ul class="flex flex-col gap-3 px-3">
            <li @click="this.$router.push({name: item.routeNamePush})" v-for="item in optionsNavigation" class="flex items-center gap-2 py-2
           hover:bg-secondary rounded hover:text-white montserrat px-2 cursor-pointer text-sm">
              <img class="w-[25px] h-[25px] object-contain" :src="item.icone" alt="">
              <p>{{ item.text }}</p>
            </li>
          </ul>
        </nav>
      </Transition>
      <div @click="showSideBar()"
           class="fundo-escuro hidden opacity-50 fixed bg-black w-full h-screen top-0 z-40 "></div>
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
