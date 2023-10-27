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
      agendamento.agendar(`${year}-${month}-${day}T${horario.time}`)
      agendamento.addTime(horario.time)
      //agendamento.agendar(`Agendamento: ${day}/${month}/${year} às ${horario.time}`)
      //console.log(agendamento.getTextAgendamentoIsVisible)
    },
    convertDate (date) {
      const dataObj = new Date(date)

      const dia = dataObj.getDate()
      const mes = dataObj.getMonth() + 1
      const ano = dataObj.getFullYear()
      const hora = dataObj.getHours()
      const minutos = dataObj.getMinutes()

      return `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${ano} ${hora < 10 ? '0' : ''}${hora}:${minutos < 10 ? '0' : ''}${minutos}`
    }

  },
}
</script>

<template>
  <section class=" bg-white mb-28 ">
    <div class="flex flex-col gap-3 px-3  pt-5">
      <div class="card " v-for="(card, index) in cards" :key="index">
        <div class="flex justify-between roboto cursor-pointer sm:text-sm md:text-lg  roboto-condensed"
             @click="toggleCard(index)">
          <div class="day-of-week mb-2 text-secondary ">{{ card.dayOfWeek }}</div>
          <div class="day-and-month font-bold text-secondary">{{ card.day }} / {{ card.month }}</div>
        </div>

        <div class="extra-content" :class="{ 'open': isOpen[index] }">
          <!-- Conteúdo adicional aqui -->
          <ul class="grid grid-cols-3 gap-3 roboto-condensed">
            <li
                class="horarios"
                :class="{
                  'bg-white text-primary': !horario.isActive,
                  'bg-gradient-to-r to-danger from-danger text-white border-white': horario.isActive
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

    <div class="flex items-center  fixed w-full bottom-0 z-40 bg-secondary h-[70px] px-5">
      <div class="flex justify-between items-center w-full ">
        <div class="flex items-center gap-3">
          <img src="../assets/images/icones/novos/tesoura-branca.png"
               class="w-[45px] h-[45px] rounded-full p-1 bg-gray-800" alt="">
          <div class="text-sm">
            <p class="text-white flex flex-1">Serviço:  {{agendamento.getServico}}</p>
            <p class="text-white flex flex-1 font-medium">
              {{agendamento.dateAppointment ? convertDate(agendamento.dateAppointment) : ' '}}
            </p>
          </div>

        </div>

        <router-link :to="{name: 'checkout'}" class="hover:bg-opacity-80 bg-danger p-2 rounded-lg text-white font-medium w-4/12 text-center">
          <button class="">
            Agendar
          </button>
        </router-link>

      </div>
    </div>

  </section>
</template>

<style scoped>
.card {
  @apply shadow-lg shadow-gray-300 rounded-lg w-full px-4 font-medium
  bg-white border-2 border-white text-white p-2
}

.horarios {
  @apply rounded-full w-auto text-center p-2.5  border-2
  font-medium  cursor-pointer bg-secondary text-white

  hover:bg-transparent hover:border-primary hover:text-primary
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
