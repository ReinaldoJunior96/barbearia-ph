import { defineStore } from 'pinia'
import { decodeCredential, googleLogout } from 'vue3-google-login'
import { useRoute, useRouter } from 'vue-router'

export const useAgendamento = defineStore('agendamento', {
  state: () => {
    return {
      textoAgendamento: null,
    }
  },
  actions: {
    agendar(texto) {
      this.textoAgendamento = texto; // Correção: Use state.textoAgendamento

    },
  },

  getters: {
    agendamentoIsVisible: (state) => state.textoAgendamento
  },
});
