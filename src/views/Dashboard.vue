<template>
  <main>
    <Menu></Menu>

    <TransitionGroup name="slide-fade">
      <router-view></router-view>
    </TransitionGroup>

    <Alert></Alert>

  </main>

</template>
<script>

import Menu from '../components/Navbar.vue'
import { useShowMenu } from '../store/ShowMenu.js'
import { useAgendamento } from '../store/agendamento.js'
import Alert from '../components/Alert.vue'

export default {
  components: { Alert, Menu },
  data () {
    return {
      showOptions: false,

    }
  },
  setup () {
    const menu = useShowMenu()
    return {
      menu,
    }
  },
  mounted () {
    const agendamento = useAgendamento()
    agendamento.addServico(localStorage.getItem('service'))
    agendamento.agendar(localStorage.getItem('dateService'))

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

.slide-fade2-enter-active {
  transition: all 0.3s ease;
}

.slide-fade2-leave-active {
  transition: all 0.8s cubic-bezier(10, 0.5, 0.8, 1);
}

.slide-fade2-enter-from,
.slide-fade2-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
