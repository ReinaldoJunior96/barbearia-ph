<script>
import { useAlert } from '../store/Alert.js'

export default {
  setup () {
    const alert = useAlert()
    return {
      alert
    }
  }
}
</script>


<template>
  <Transition name="slide-fade">
    <div v-show="alert.showAlert"
         :class="{
            'bg-erro':  alert.type === 'Error',
            'bg-success':  alert.type === 'Success',
         }"
         class="flex justify-center absolute bottom-6 left-5 sm:text-sm md:text-base
         h-auto w-auto rounded-lg ">
      <p class="roboto-condensed text-white p-2 px-3 ">
        {{ alert.mgs }}
      </p>
    </div>

  </Transition>
</template>

<style scoped>

</style>
