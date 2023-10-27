<script>
import { useAgendamento } from '../store/agendamento.js'
import $ from 'jquery'
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup () {
    const agendamento = useAgendamento()
    const appointments = ref([])
    const token = localStorage.getItem('token')
    const axiosConfig = {
      headers: {
        'authorization': `Bearer ${token}` // Adicione o token ao cabeçalho de autorização
      }
    }

    axios.get('http://54.208.52.199:3000/api/users/appointments', axiosConfig)
        .then((res) => {
          appointments.value = res.data.appointments

        })
        .catch((error) => {
          console.error('Erro no registro', error)
        })
    return {
      agendamento,
      appointments
    }
  },
  methods: {
    showOptionsCard (apId) {
      const selector = `#${apId}`
      $(selector).toggleClass('hidden')
    },
    convertDate (date) {
      const dataObj = new Date(date)

      if (isNaN(dataObj)) {
        return 'Data inválida'
      }

      const dia = dataObj.getDate().toString().padStart(2, '0')
      const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0')
      const ano = dataObj.getFullYear()
      const hora = dataObj.getHours().toString().padStart(2, '0')
      const minutos = dataObj.getMinutes().toString().padStart(2, '0')

      return `${dia}/${mes}/${ano} ${hora}:${minutos}`
    },
    deleteMyAppointment (appId, index) {
      const token = localStorage.getItem('token')
      const axiosConfig = {
        headers: {
          'authorization': `Bearer ${token}` // Adicione o token ao cabeçalho de autorização
        }
      }
      self = this
      axios.delete(`http://54.208.52.199:3000/api/api/appointments/delete/${appId}`, axiosConfig) // Passando o appId na URL
          .then((res) => {

            self.appointments.splice(index, 1)
          })
          .catch((error) => {
            console.error('Erro no registro', error)
          })
    }

  }
}
</script>

<template>
  <section>
    <div class="px-5 relative mb-10">
      <div class="flex flex-col gap-3 mt-5 relative  ">
        <div v-for="(ap, index) in appointments" :key="ap._id"
             class="bg-white rounded-lg p-3  border-l-[5px] border-secondary montserrat text-lg shadow-gray-300 shadow-sm  ">
          <div class="flex items-center justify-between">
            <div class="">
              <p class="text-secondary mb-2">Agendamento</p>
            </div>
            <div @click="showOptionsCard()" class="relative text-secondary">
              <i @click="showOptionsCard(ap._id)" data-dropdown-toggle="dropdown"
                 class="fa-solid fa-ellipsis-vertical"></i>

              <!-- Dropdown menu -->
              <div :id="ap._id"
                   class="z-10  absolute hidden right-0 bg-white divide-y divide-gray-800
                   rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li @click="deleteMyAppointment(ap._id, index)">
                    <a href="#"
                       class="flex items-center gap-2 text-danger px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <i class="fa-regular fa-circle-xmark"></i>
                      Cancelar
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          <div class="flex items-center gap-1">


            <p class="text-secondary ">{{ convertDate(ap.dateTime) }}</p>

          </div>
          <div class="h-[1px] my-2 w-full  bg-gradient-to-r from-secondary to-transparent"></div>
          <div class="flex items-center">
            <p class="text-secondary ">Serivço: {{ ap.service }}</p>
          </div>
        </div>
      </div>
    </div>
    </section>
</template>

<style scoped>

</style>
