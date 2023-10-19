<script>

import { useLoginGoogleStore } from '../store/googleLogin.js'
import { useAgendamento } from '../store/agendamento.js'
import { ref } from 'vue'

export default {
  data () {
    return {
      cards: [],
      isOpen: [],
      horaInicio: 9,  // Hora de início (09:00)
      horaFim: 17,    // Hora de término (17:00)
      duracao: 1,     // Duração de cada atendimento (1 hora)
      horarios: [],    // Lista de horários disponíveis
      isActive: true,
    }
  },
  setup () {
    const loginGoogle = useLoginGoogleStore()
    const agendamento = useAgendamento()

    const textoAgendamento = ref(null)
    return {
      loginGoogle,
      textoAgendamento,
      agendamento
    }
  },
  mounted () {
    // Gerar os dados dos cards automaticamente
    this.generateCards()
    this.calcularHorariosDisponiveis()
  },
  methods: {
    generateCards () {
      const today = new Date()
      for (let i = 0; i < 7; i++) {
        const date = new Date(today)
        date.setDate(today.getDate() + i)
        const dayOfWeek = this.getDayOfWeek(date.getDay())
        const day = date.getDate()
        const month = this.formatMonth(date.getMonth() + 1)
        const year = date.getFullYear() // Adicione esta linha para obter o ano
        this.cards.push({ dayOfWeek, day, month, year }) // Inclua o ano no objeto
      }
    },
    getDayOfWeek (day) {
      const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
      return daysOfWeek[day]
    },
    formatMonth (month) {
      return month.toLocaleString('pt-BR', { minimumIntegerDigits: 2 })
    },
    toggleCard (index) {
      // Verifique se o card está aberto
      if (this.isOpen[index]) {
        // Se já estiver aberto, feche-o
        this.isOpen[index] = false
      } else {
        // Se não estiver aberto, abra-o e feche os outros cards
        this.isOpen = this.isOpen.map(() => false)
        this.isOpen[index] = true
      }
    },
    calcularHorariosDisponiveis () {
      const horarios = []
      let horaAtual = this.horaInicio

      while (horaAtual < this.horaFim) {
        const horario = {
          time: `${horaAtual.toString().padStart(2, '0')}:00`,
          isActive: false  // Inicialmente, nenhum horário está selecionado
        }
        horarios.push(horario)

        horaAtual += this.duracao
      }

      this.horarios = horarios
    },
    selectHorario (day, month, year, indexHorario) {
      // console.log(this.horarios[indexHorario])
      this.horarios.map(function (item) {
        item.isActive = false
      })
      // Obtém o horário clicado
      const horario = this.horarios[indexHorario]
      // Alterna a propriedade isActive para selecionar ou deselecionar o horário
      horario.isActive = !horario.isActive
      const agendamento = useAgendamento()
      agendamento.agendar(`${day}/${month}/${year} às ${horario.time}`)
      agendamento.addTime(horario.time)
      //agendamento.agendar(`Agendamento: ${day}/${month}/${year} às ${horario.time}`)
      //console.log(agendamento.getTextAgendamentoIsVisible)
    },

  },
}
</script>

<template>
  <section class=" bg-secondary mb-28 px-5">
    <div class="">
      <div class="flex items-start gap-2 flex-col ">
        <div class="flex items-center gap-2">
          <img class="w-[30px] h-[30px] object-contain" src="https://cdn-icons-png.flaticon.com/128/3643/3643707.png"
               alt="">
          <p class="text-white text-base montserrat">
            {{ agendamento.getServico ? ` Agendamento para: ${agendamento.getServico}` : 'Nossos horários' }}

          </p>
        </div>
        <div v-show="agendamento.getServico !== null" class="w-full">
          <div v-show="agendamento.getTime === null" class="flex items-center gap-2">
            <p class="text-white text-2xl montserrat font-light">Escolha o </p>
            <p class="text-white text-2xl montserrat font-bold">dia e horário</p>
          </div>
          <div v-show="agendamento.getTime !== null" class="w-full">
            <button @click="this.$router.push({name: 'checkout'})"
                    class="w-full bg-gradient-to-r to-[#457fca] from-[#5691c8]
              hover:bg-gradient-to-r hover:to-white  hover:text-primary   p-2
              hover:from-white text-white rounded-lg font-medium roboto-condensed text-lg">
              Revisar agendamento
            </button>
          </div>
        </div>


      </div>

    </div>
    <div class="flex flex-col gap-5  pt-5">
      <div class="card " v-for="(card, index) in cards" :key="index">
        <div class="flex justify-between roboto cursor-pointer sm:text-sm md:text-lg  roboto-condensed"
             @click="toggleCard(index)">
          <div class="day-of-week mb-2 ">{{ card.dayOfWeek }}</div>
          <div class="day-and-month font-bold">{{ card.day }} / {{ card.month }}</div>
        </div>

        <div class="extra-content" :class="{ 'open': isOpen[index] }">
          <!-- Conteúdo adicional aqui -->
          <ul class="grid grid-cols-3 gap-3 roboto-condensed">
            <li
                class="horarios"
                :class="{
                  'bg-white text-primary': !horario.isActive,
                  ' bg-gradient-to-r to-[#457fca] from-[#5691c8] text-white border-white': horario.isActive
                }"
                @click="selectHorario(card.day, card.month, card.year, indexHorario)"
                v-for="(horario, indexHorario) in horarios"
                :key="indexHorario"
            >
              {{ horario.time }}
            </li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.card {
  @apply shadow shadow-white rounded-lg w-full px-4 font-medium
  bg-transparent border-2 border-white text-white p-2
}

.horarios {
  @apply rounded-full w-auto text-center p-2.5  border-2
  font-medium  cursor-pointer

  hover:bg-transparent hover:border-white hover:text-white
}

.extra-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out; /* Transição suave na expansão/fechamento */
}

.extra-content.open {
  max-height: 500px; /* Altura máxima quando aberto; ajuste conforme necessário */
}

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


</style>
