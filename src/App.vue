<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import LoadingScreen from './components/LoadingScreen.vue';

export default {
  components: {
    LoadingScreen,
    Navbar,
    Footer
  },
  data() {
    return {
      loading: false,
    }
  },
  // methods: {
  //   simulateLoading() {
  //     this.loading = true
      
  //     // Simulasi API call atau proses loading
  //     setTimeout(() => {
  //       this.loading = false
  //     }, 3000)
  //   },
  // }
}
</script>

<template>
  <LoadingScreen :isLoading="loading" />
  <div v-if="!loading">
    <Navbar />
    <main class="min-h-sceen">
      <!-- <button @click="simulateLoading">Simulasi Loading</button> -->
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>

</style>
