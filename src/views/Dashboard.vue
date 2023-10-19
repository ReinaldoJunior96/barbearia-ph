<template>
  <main>
    <div class="">
      <Menu></Menu>
    </div>

    <Transition name="slide-fade">
      <div :class="{
        'pt-[80px] ': this.$route.name !== 'checkout',
        'mb-20 ': this.$route.name === 'checkout',
      } ">
        <router-view></router-view>
      </div>
    </Transition>

<!--    <nav v-show="menu.showMenu"-->
<!--         class="  flex justify-evenly items-center w-full fixed bottom-0 bg-white h-[68px] ">-->
<!--      <router-link v-for="item in optionsNavigation" :key="item"-->
<!--                   :to="{name: item.routeNamePush}"-->
<!--                   class="flex flex-col text-center   justify-center-->
<!--                        h-full items-center gap-2 transition-all w-[15%]  "-->
<!--                   :class="{-->
<!--                        'translate-y-[-20px]   rounded-full': $route.name === item.routeNamePush,-->
<!--                        'bg-white': $route.name !== item.routeNamePush-->
<!--                      }">-->
<!--        <div class=" flex flex-col"-->
<!--             :class="{'p-2.5 px-3 rounded-full bg-secondary ': $route.name === item.routeNamePush}">-->
<!--          <img class="w-[30px] h-[30px] object-contain"-->
<!--               :src="item.icone" alt="">-->
<!--        </div>-->
<!--        <p-->
<!--            :class="{-->
<!--              'translate-y-[10px] text-gray-600 font-medium roboto ': $route.name === item.routeNamePush,-->
<!--              ' text-gray-300 ': $route.name !== item.routeNamePush,-->

<!--            }"-->
<!--            class="  text-sm font-medium  relative z-50      ">-->
<!--          {{ item.text }}-->
<!--        </p>-->


<!--      </router-link>-->
<!--    </nav>-->


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
