<script>

import { useLoginGoogleStore } from '../store/googleLogin.js'
import { useAgendamento } from '../store/agendamento.js'
import Menu from '../components/Navbar.vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  components: { Menu, Swiper, SwiperSlide },
  setup () {
    const loginGoogle = useLoginGoogleStore()

    return {
      loginGoogle,
      modules: [Pagination]
    }
  },
  data () {
    return {
      menuHome: [
        {
          'icone': 'fa-solid fa-calendar-check',
          'opcao': 'Agendamentos',
          'link': 'agendar-horario'
        },
        {
          'icone': 'fa-brands fa-servicestack',
          'opcao': 'Serviços',
          'link': ''
        },
      ],
      servicos: ['Cabelo', 'Barba', 'Luzes', 'Platinado', 'Platinado + Corte', 'Cabelo + Barba']
    }
  },
  methods: {
    iniciarAgendamento (service) {
      const agendamento = useAgendamento()
      agendamento.addServico(service)
      this.$router.push({ name: 'agendar-horario' })
    }
  }

}
</script>

<template>
  <section class="bg-secondary to-accent300  mb-20   ">
    <div class="px-5">
      <div class="flex items-end gap-1 ">
        <p class="text-white text-lg montserrat">Olá, </p>
        <h2 class="text-white text-3xl montserrat font-bold"> Reinaldo &#128075;</h2>
      </div>
      <div class="bg-accent400 p-4  rounded-lg mt-5 h-auto ">
        <p class="montserrat text-white text-sm">
          Bem-vindo à Barbearia PH! Convidamos você a nos visitar em breve e desfrutar de nossos serviços
          de qualidade. Esperamos vê-lo em breve!
        </p>
      </div>
    </div>


    <div class="  mt-7 ">
      <div class="flex items-center gap-2 px-5">
        <p class="text-white font-medium roboto-condensed text-right sm:text-xl">
          Serviços
        </p>
        <div class="h-[2px] w-full flex-1 bg-gradient-to-r to-transparent from-accent400 rounded"></div>

      </div>

      <div class="grid grid-cols-3 justify-items-center gap-y-5 mt-5 h-full">
        <div class="flex flex-col gap-2 items-center">
          <div @click="this.iniciarAgendamento('Cabelo')" class="
          hover:bg-white
          p-4 border border-accent400 rounded-full">
            <img src="https://cdn-icons-png.flaticon.com/128/10045/10045271.png"
                 class="w-[40px] h-[40px] object-contain" alt="">
          </div>
          <div class="text-white font-medium montserrat text-center">
            <p>Cabelo</p>
          </div>

        </div>
        <div class="flex flex-col gap-2 items-center">
          <div @click="this.iniciarAgendamento('Barba')" class="
          hover:bg-white
          p-4 border border-accent400 rounded-full">
            <img src="https://cdn-icons-png.flaticon.com/128/3397/3397664.png"
                 class="w-[40px] h-[40px] object-contain" alt="">
          </div>
          <div class="text-white font-medium montserrat text-center">
            <p>Barba</p>
          </div>

        </div>
        <div class="flex flex-col gap-2 items-center">
          <div @click="this.iniciarAgendamento('Luzes')" class="
          hover:bg-white
          p-3 border border-accent400 rounded-full">
            <img src="https://cdn-icons-png.flaticon.com/128/3296/3296774.png"
                 class="w-[50px] h-[50px] object-contain" alt="">
          </div>
          <div class="text-white font-medium montserrat text-center">
            <p>Luzes</p>
          </div>

        </div>
        <div class="flex flex-col gap-2 items-center">
          <div @click="this.iniciarAgendamento('Lavagem')" class="
          hover:bg-white
          p-4 border border-accent400 rounded-full">
            <img src="https://cdn-icons-png.flaticon.com/128/4632/4632289.png"
                 class="w-[40px] h-[40px] object-contain" alt="">
          </div>
          <div class="text-white font-medium montserrat text-center">
            <p>Lavagem</p>
          </div>

        </div>
        <div class="flex flex-col gap-2 items-center">
          <div @click="this.iniciarAgendamento('Platinado')" class="
          hover:bg-white
          p-4 border border-accent400 rounded-full">
            <img src="https://cdn-icons-png.flaticon.com/128/8802/8802878.png"
                 class="w-[40px] h-[40px] object-contain" alt="">
          </div>
          <div class="text-white font-medium montserrat text-center">
            <p>Platinado</p>
          </div>
        </div>
      </div>
    </div>

    <!--    <div class="grid grid-cols-2 justify-items-center gap-3 py-5" >-->
    <!--      <div @click="this.iniciarAgendamento()"-->
    <!--           class="w-[150px] h-[150px] bg-transparent border-2-->
    <!--           hover:bg-white hover:text-primary-->
    <!--           flex flex-col text-white justify-center items-center-->
    <!--           border-accent300 rounded-lg shadow-md ">-->
    <!--        <div class="bg-white p-1 rounded-full">-->
    <!--          <img class="w-[80px] h-[80px] object-contain" src="../assets/images/icones/mohawk.png" alt="">-->

    <!--        </div>-->
    <!--       <p class="roboto-condensed text-base pt-3 font-medium">Corte de cabelo</p>-->
    <!--      </div>-->


    <!--    </div>-->
    <!--    <swiper-->
    <!--        :centeredSlides="false"-->
    <!--        :pagination="{ clickable: true }"-->
    <!--        :space-between="20"-->
    <!--        :slides-per-view="1.9"-->
    <!--    >-->
    <!--      <swiper-slide>-->
    <!--        <section>-->
    <!--          <div class="-->
    <!--          rounded-full border-2 border-white-->
    <!--          flex items-center justify-center text-white gap-2 py-2 ">-->
    <!--            <div class="flex items-center">-->
    <!--              <img class="w-[30px] h-[30px] object-contain" src="../assets/images/icones/mohawk.png" alt="">-->
    <!--              <p class="whitespace-nowrap ">Cortes masculinos</p>-->
    <!--            </div>-->

    <!--          </div>-->
    <!--        </section>-->

    <!--      </swiper-slide>-->
    <!--      <swiper-slide class="mb-10">-->
    <!--        <section>-->
    <!--          <div class="-->

    <!--          rounded-full border-2 border-white-->
    <!--          flex items-center justify-center text-white gap-2 p-2">-->
    <!--            <img class="w-[30px] h-[30px] object-contain" src="../assets/images/icones/beard.png" alt="">-->
    <!--            <p class="whitespace-nowrap">Barbas</p>-->
    <!--          </div>-->
    <!--        </section>-->

    <!--      </swiper-slide>-->
    <!--      <swiper-slide class="">-->
    <!--        <section>-->
    <!--          <div class="-->
    <!--          rounded-full border-2 border-white-->
    <!--          flex items-center justify-center text-white gap-2 p-2">-->
    <!--            <img class="w-[30px] h-[30px] object-contain" src="../assets/images/icones/hairstyle.png" alt="">-->
    <!--            <p class="whitespace-nowrap">Luzes</p>-->
    <!--          </div>-->
    <!--        </section>-->

    <!--      </swiper-slide>-->
    <!--      <swiper-slide class="">-->
    <!--        <section>-->
    <!--          <div class="-->
    <!--          rounded-full border-2 border-white-->
    <!--          flex items-center justify-center text-white gap-2 p-2">-->
    <!--            <img class="w-[30px] h-[30px] object-contain" src="../assets/images/icones/shampoo.png" alt="">-->
    <!--            <p class="whitespace-nowrap">Platinado</p>-->
    <!--          </div>-->
    <!--        </section>-->

    <!--      </swiper-slide>-->
    <!--    </swiper>-->


    <!--    <div class="flex items-center gap-3  mb-3">-->

    <!--      <p class="text-white font-medium roboto-condensed text-right sm:text-xl">Localização</p>-->
    <!--      <div class="h-[2px] w-full flex-1 bg-gradient-to-r from-accent300"></div>-->
    <!--    </div>-->
    <!--    <iframe-->
    <!--        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459.6938778994465!2d-47.09070323297011!3d-22.81909456713369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c1b257645463%3A0x4241baf53ae8f242!2sPH%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1697400579626!5m2!1spt-BR!2sbr"-->
    <!--        class="w-full h-[350px] border-0 rounded-lg" allowfullscreen="" loading="lazy"-->
    <!--        referrerpolicy="no-referrer-when-downgrade"></iframe>-->

  </section>
</template>

<style scoped>
</style>
