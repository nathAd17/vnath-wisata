<template>
  <div>
    <!-- Simple Version -->
    <transition name="fade">
      <button
        v-if="showButton"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-50 bg-primary hover:bg-primarydark text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        title="Kembali ke atas"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      </button>
    </transition>

    <!-- Floating Badge Version -->
    <transition name="slide-up">
      <div
        v-if="showButton && variant === 'badge'"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-50 bg-white border-2 border-gray-200 rounded-full px-4 py-2 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 hover:border-emerald-300 group"
      >
        <div class="flex items-center gap-2 text-sm font-medium text-gray-700">
          <svg class="w-4 h-4 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
          <span class="group-hover:text-primary transition-colors">Top</span>
        </div>
      </div>
    </transition>

    <!-- Minimal Corner Version -->
    <transition name="fade">
      <div
        v-if="showButton && variant === 'corner'"
        @click="scrollToTop"
        class="fixed bottom-0 right-0 z-50 bg-gray-900 text-white p-3 cursor-pointer hover:bg-black transition-colors"
        style="clip-path: polygon(0 100%, 100% 0, 100% 100%)"
      >
        <svg class="w-4 h-4 absolute bottom-2 right-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      </div>
    </transition>

    <!-- Text Version -->
    <transition name="fade">
      <button
        v-if="showButton && variant === 'text'"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-50 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all duration-300"
      >
        ↑ Kembali ke Atas
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'default', // 'default', 'badge', 'corner', 'text'
    },
    threshold: {
      type: Number,
      default: 200
    }
  },
  
  data() {
    return {
      showButton: false
    }
  },
  
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > this.threshold
    },
    
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>