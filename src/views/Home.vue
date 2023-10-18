<script>

import { useLoginGoogleStore } from '../store/googleLogin.js'
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

}
</script>

<template>
  <section class="bg-secondary to-accent300 px-3 min-h-screen pt-10 ">

    <swiper
        :centeredSlides="true"
        :pagination="{ clickable: true }"
        :space-between="140"
        :slides-per-view="3"
    >
      <swiper-slide>

        <div class=" w-[170px]
        bg-transparent border-2 border-white rounded-full
        text-white flex justify-center items-center gap-2
        text-xs  p-1.5 mb-10 font-medium
cursor-pointer
        hover:bg-white hover:text-primary
        ">
          <img class="w-[30px] h-[30px] object-contain" src="../assets/images/icones/mohawk.png" alt="">
          <p>Cortes masculinos</p>
        </div>

      </swiper-slide>
      <swiper-slide>

        <div class=" w-[170px]
        bg-transparent border-2 border-white rounded-full
        text-white flex justify-center items-center gap-2
        text-xs  p-1.5 mb-10 font-medium
cursor-pointer
        hover:bg-white hover:text-primary">
          <img class="ww-[30px] h-[30px] object-contain" src="../assets/images/icones/beard.png" alt="">
          <p>Barbas</p>
        </div>

      </swiper-slide>
      <swiper-slide>

        <div class=" w-[170px]
        bg-transparent border-2 border-white rounded-full
        text-white flex justify-center items-center gap-2
        text-xs  p-1.5 mb-10 font-medium
cursor-pointer
        hover:bg-white hover:text-primary">
          <img class="w-[30px] h-[30px] object-contain" src="../assets/images/icones/hairstyle.png" alt="">
          <p>Luzes</p>
        </div>

      </swiper-slide>
      <swiper-slide>

        <div class=" w-[170px]
         bg-transparent border-2 border-white rounded-full
        text-white flex justify-center items-center gap-2
        text-xs  p-1.5 mb-10 font-medium
cursor-pointer
        hover:bg-white hover:text-primary">
          <img class="w-[30px] h-[30px] object-contain" src="../assets/images/icones/shampoo.png" alt="">
          <p>Platinado</p>
        </div>

      </swiper-slide>
    </swiper>


    <div class="flex items-center gap-3  mb-3">

      <p class="text-white font-medium roboto-condensed text-right sm:text-xl">Localização</p>
      <div class="h-[2px] w-full flex-1 bg-gradient-to-r from-accent300"></div>
    </div>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459.6938778994465!2d-47.09070323297011!3d-22.81909456713369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c1b257645463%3A0x4241baf53ae8f242!2sPH%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1697400579626!5m2!1spt-BR!2sbr"
        class="w-full h-[350px] border-0 rounded-lg" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>

  </section>
</template>

<style scoped>
.scrollable-div {
  scrollbar-width: thin; /* Largura da barra de rolagem (thin, auto ou none) */
  scrollbar-color: red green; /* Cor da barra de rolagem (barra, trilha) */

  /* Personalize a aparência da barra de rolagem (WebKit/Blink) */

  &::-webkit-scrollbar {
    width: 3px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: white; /* Cor do botão da barra de rolagem */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* Cor da trilha da barra de rolagem */
  }
}
</style>
