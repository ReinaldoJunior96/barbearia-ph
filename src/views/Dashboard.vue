<template>
  <main>
    <div class="">
      <Menu></Menu>
    </div>

    <Transition name="slide-fade">
      <div :class="{
        'pt-[100px] ': this.$route.name !== 'checkout',
        'mb-20 ': this.$route.name === 'checkout',
      } ">
        <router-view></router-view>
      </div>
    </Transition>
    <keep-alive>
      <Transition name="slide-fade">
        <nav v-show="menu.showMenu"
             class="  flex justify-evenly items-center w-full fixed bottom-0 bg-white h-[68px] ">
          <router-link v-for="item in optionsNavigation" :key="item"
                       :to="{name: item.routeNamePush}"
                       class="flex flex-col text-center   justify-center
                        h-full items-center gap-2 transition-all w-[15%]  "
                       :class="{
                        'translate-y-[-20px]   rounded-full': $route.name === item.routeNamePush,
                        'bg-white': $route.name !== item.routeNamePush
                      }">
            <div class=" flex flex-col"
                 :class="{'p-2.5 px-2 rounded-full bg-secondary ': $route.name === item.routeNamePush}">
              <i :class="[item.icone, 'p-2 bg-white px-4 rounded-full text-xl '] "></i>
            </div>
            <p
                :class="{
              '-translate-y-0.5 text-gray-600 font-medium roboto ': $route.name === item.routeNamePush,
              '-translate-y-3 text-gray-300 ': $route.name !== item.routeNamePush,

            }"
                class="  text-xs relative z-50      ">
              {{ item.text }}
            </p>


          </router-link>
          <div @click="google.logout()"
               class="transition-all  rounded-full"
          >
            <div class="flex flex-col items-center  mb-2"
            >
              <i class="fa-regular fa-calendar-check text-xl bg-white px-3 py-1 rounded-full text-gray-400   "></i>
              <p class="text-gray-400 text-xs">Sair</p>
            </div>
          </div>
        </nav>
      </Transition>
    </keep-alive>
  </main>
</template>
<script>

import Menu from '../components/Navbar.vue'
import { useShowMenu } from '../store/ShowMenu.js'
import { useLoginGoogleStore } from '../store/googleLogin.js'

export default {
  components: { Menu },
  data () {
    return {
      showOptions: false,
      optionsNavigation: [
        {
          icone: 'fa-solid fa-clock',
          text: 'Agendar',
          routeNamePush: 'agendar-horario'
        },
        {
          icone: 'fa-solid fa-chair',
          text: 'Servicos',
          routeNamePush: 'servicos'
        },
        {
          icone: 'fa-solid fa-fire',
          text: 'ìnicio',
          routeNamePush: 'home'
        },
        {
          icone: 'fa-solid fa-calendar-check',
          text: 'Agendamentos',
          routeNamePush: 'meus-agendamentos'
        }
      ]
    }
  },
  setup () {
    const menu = useShowMenu()
    const google = useLoginGoogleStore()
    return {
      menu,
      google
    }
  }
}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
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
