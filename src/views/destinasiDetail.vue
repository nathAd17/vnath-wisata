<template>
  <div class="min-h-screen max-w-screen-xl mx-auto bg-gray-50">
    <div v-if="tour" class="pb-12">
      <!-- Hero Section -->
      <div
        class="relative rounded-3xl bg-transparent h-[60vh] bg-cover bg-center"
        :style="`background-image: url('/src/assets/${tour.image.image}')`"
      >
        <div class="absolute inset-0 bg-black rounded-3xl bg-opacity-40"></div>
        <div class="container relative z-10 flex items-end h-full p-4 mx-auto">
          <div class="text-white bg-transparent rounded-xl p-2 backdrop-blur-lg">
            <nav class="mb-4">
              <ol class="flex items-center space-x-2 text-sm">
                <li><router-link to="/" class="hover:text-blue-300">Beranda</router-link></li>
                <li class="text-gray-300">/</li>
                <li><router-link to="/destinasi" class="hover:text-blue-300">Destinasi</router-link></li>
                <li class="text-gray-300">/</li>
                <li class="text-gray-300">{{ tour.name }}</li>
              </ol>
            </nav>
            <h1 class="mb-2 text-4xl font-bold md:text-5xl">{{ tour.name }}</h1>
            <p class="mb-4 text-xl text-gray-200">{{ tour.regency.name }}, {{ tour.island.name }}</p>
            <div class="flex items-center space-x-4">
              <div class="flex items-center">
                <span class="mr-1">📍</span>
                <span>{{ tour.category.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container px-4 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div class="lg:col-span-2">
            <div class="p-6 mb-8 bg-white rounded-lg shadow-md">
              <h2 class="mb-4 text-2xl font-bold">Tentang {{ tour.name }}</h2>
              <p class="mb-4 text-gray-600">{{ tour.description }}</p>
              <p class="leading-relaxed text-gray-700">{{ tour.fullDescription }}</p>
            </div>

            <div v-if="tour.gallery && tour.gallery.length > 0" class="p-6 mb-8 bg-white rounded-lg shadow-md">
              <h2 class="mb-4 text-2xl font-bold">Galeri Foto</h2>
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="(photo, index) in tour.gallery"
                  :key="index"
                  class="relative cursor-pointer group"
                >
                  <img
                    :src="`/src/assets/${photo.image}`"
                    :alt="tour.name"
                    class="object-cover w-full h-48 transition-transform rounded-lg group-hover:scale-105"
                  />
                  <div
                    class="absolute inset-0 transition-opacity bg-black bg-opacity-0 rounded-lg group-hover:scale-105 group-hover:bg-opacity-20"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="p-6 mb-6 bg-white rounded-lg shadow-md">
              <h3 class="mb-4 text-xl font-bold">Informasi Singkat</h3>
              <div class="space-y-3">
                <div class="flex items-center">
                  <span class="mr-2 text-gray-500">📍</span>
                  <span class="text-sm text-gray-700">{{ tour.location }}</span>
                </div>
                <div class="flex items-center">
                  <span class="mr-2 text-gray-500">🕒</span>
                  <span class="text-sm text-gray-700">{{ tour.openingHours }}</span>
                </div>
                <div class="flex items-center">
                  <span class="mr-2 text-gray-500">🏷️</span>
                  <span class="text-sm text-gray-700">{{ tour.category.name }}</span>
                </div>
              </div>
            </div>

            <div v-if="tour.facilities && tour.facilities.length > 0" class="p-6 mb-6 bg-white rounded-lg shadow-md">
              <h3 class="mb-4 text-xl font-bold">Fasilitas</h3>
              <div class="grid grid-cols-1 gap-2">
                <div v-for="facility in tour.facilities" :key="facility" class="flex items-center">
                  <span class="mr-2 text-green-600">✓</span>
                  <span class="text-sm text-gray-700">{{ facility }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { tours as toursData } from '../data/tours.js'
import { categories } from '../data/categories.js'
import { regencies } from '../data/regencies.js'
import { islands } from '../data/islands.js'

export default {
  setup() {
    const route = useRoute()
    const tour = ref(null)

    const getTourDetail = () => {
      const slug = route.params.slug
      const data = toursData.find((t) => t.slug === slug)

      if (!data) {
        console.warn('Data tour tidak ditemukan')
        return
      }

      const category = categories.find((c) => c.slug === data.category.slug)
      const regency = regencies.find((r) => r.name === data.regency.name)
      const island = islands.find((i) => i.name === data.island.name)

      tour.value = {
        ...data,
        category: category || { name: 'Tidak Diketahui' },
        regency: regency || { name: 'Tidak Diketahui' },
        island: island || { name: 'Tidak Diketahui' }
      }
    }

    onMounted(() => {
      getTourDetail()
    })

    return {
      tour
    }
  }
}
</script>
