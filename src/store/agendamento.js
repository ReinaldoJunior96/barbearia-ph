import { defineStore } from 'pinia'
import { decodeCredential, googleLogout } from 'vue3-google-login'
import { useRoute, useRouter } from 'vue-router'

export const useAgendamento = defineStore('agendamento', {
  state: () => {
    return {
      textoAgendamento: null,
      servico: null,
      day: null,
      month: null,
      year: null,
      time: null

    }
  },
  actions: {
    agendar (texto) {
      this.textoAgendamento = texto // Correção: Use state.textoAgendamento

    },
    addServico (servico) {
      this.servico = servico // Correção: Use state.textoAgendamento
    },
    addTime (time) {
      this.time = time // Correção: Use state.textoAgendamento
    },
    cleanAppointment () {
      this.servico = null
      this.day = null
      this.month = null
      this.year = null
      this.time = null
    },
  },

  getters: {
    agendamentoIsVisible: (state) => state.textoAgendamento,
    getServico: (state) => state.servico,
    getTime: (state) => state.time,
  },
})
