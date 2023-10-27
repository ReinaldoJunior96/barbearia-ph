<template>
  <main>
    <Menu></Menu>

    <Transition name="slide-fade">
      <router-view></router-view>
    </Transition>


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
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(10, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
