<template>
  <div v-if="isLoading" id="loading-screen" class="loading-overlay">
    <div class="fixed inset-0 z-[9999] flex items-center justify-center overflow-x-hidden overflow-y-hidden bg-transparent backdrop-blur-sm dark:bg-dark">
      <div class="relative">
        <div class="h-52 w-52 animate-spin rounded-full border-[8px] border-dashed border-green-500"></div>
        <img src="/src/assets/logo.png" alt="Loading" class="absolute inset-0 z-10 w-32 h-32 m-auto">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.loading-overlay {
  transition: opacity 0.3s ease-in-out;
}

/* Animasi fade in/out */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>