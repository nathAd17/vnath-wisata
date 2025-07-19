<template>
    <section id="tentang flobamora" class="relative px-6 py-16 mx-auto my-10 lg:max-w-screen-xl lg:py-20">
        <div class="assets">
            <img src="/assets/mountain1.svg" class="absolute origin-bottom right-4 top-8 h-14 w-14 -rotate-12"
                alt="mountain">
        </div>
        <div class="max-w-xl mx-auto mb-5 text-center lg:max-w-2xl">
            <h2 class="inline-block p-2 mb-2 text-xs font-bold tracking-wider text-center uppercase rounded-full shadow-xl bg-primary font-poppins text-light md:mb-4"
                role="heading" aria-level="2">
                PESONA FLOBAMORA
            </h2>
            <div class="mb-4">
                <h1 class="inline-block max-w-2xl text-xl font-bold leading-tight font-poppins text-primarydark dark:text-graylight md:text-3xl"
                    role="heading" aria-level="1">
                    Tentang Flobamora
                </h1>
            </div>
            <p class="text-base font-normal font-inter text-graydark dark:text-graylight" role="heading" aria-level="2">
                Keliling Flobamora dan Rasakan Pesona Alam Indonesia yang Menakjubkan
            </p>
        </div>

        <div class="flex flex-col gap-10 px-4 py-10 overflow-x-hidden md:px-10">
            <div class="flex flex-col justify-center gap-5 duration-500 md:flex-row lg:gap-10">
                <section
                    class="flex flex-col items-start justify-center flex-1 gap-2 py-5 text-sm text-left lg:gap-7 lg:text-base"
                    style="opacity: 1; transform: none;">
                    <p class="leading-7 font-inter dark:text-graylight" aria-label="tentang flobamora">Flobamora,
                        singkatan
                        dari Flores, Sumba, Timor (Timor, Rote, Sabu), dan Alor, adalah sebuah wilayah yang memadukan
                        keindahan alam dengan
                        kekayaan budaya yang luar biasa. Di sini, Anda akan menemukan pantai-pantai berpasir putih, air
                        terjun yang memukau,
                        hingga pegunungan megah yang menyimpan cerita sejarah. Tidak hanya alamnya yang mempesona,
                        tetapi
                        juga tradisi lokal
                        yang sarat makna, tarian adat yang penuh warna, dan senyum hangat penduduknya yang membuat
                        setiap
                        kunjungan menjadi
                        pengalaman berharga.
                        <br><br>
                        Flobamora juga dikenal sebagai destinasi bagi para pecinta petualangan dan penikmat keunikan
                        budaya.
                        Dari menapaki jejak
                        komodo di Pulau Rinca hingga menikmati indahnya tenun ikat khas Nusa Tenggara, setiap sudut
                        Flobamora menyimpan kejutan
                        yang tidak akan Anda temukan di tempat lain. Bersiaplah untuk menjelajahi surga tersembunyi ini
                        dan
                        biarkan Pesona
                        Flobamora membawa Anda lebih dekat dengan keajaiban Indonesia Timur!
                    </p>
                    <a href="/post"
                        class="relative z-10 inline-flex items-center justify-center gap-2 px-2 py-1 mt-2 overflow-hidden text-base border-2 rounded-full group isolation-auto border-light bg-primary font-inter text-light backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-primarydark before:transition-all before:duration-700 hover:text-light before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 md:px-4 md:py-2 md:text-lg lg:font-semibold"
                        aria-label="jelajahi-destinasi">
                        Jelajahi sekarang
                        <svg class="justify-end w-8 h-8 p-2 duration-300 ease-linear rotate-45 border rounded-full border-light text-light group-hover:rotate-90 group-hover:bg-light"
                            viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                class="fill-light group-hover:fill-dark" />
                        </svg>
                    </a>
                </section>
                <section class="hidden flex-1 justify-end gap-5 duration-500 sm:flex md:min-w-[400px] lg:gap-10">
                    <div class="flex flex-col flex-1 gap-5 lg:gap-10">
                        <!-- Loop untuk 2 gambar pertama di kolom kiri -->
                        <div v-for="(tour, index) in leftColumnTours" :key="tour.id" class="flex-1"
                            style="opacity: 1; transform: scale(1);">
                            <a :href="`destinasi/${tour.slug}`">
                                <img :src="`/src/assets/${tour.image.image}`" :alt="tour.name"
                                    class="object-cover w-full min-h-72 rounded-3xl">
                            </a>
                        </div>
                    </div>

                    <!-- Gambar ketiga di kolom kanan -->
                    <div v-if="rightColumnTour" class="flex-1" style="opacity: 1; transform: scale(1);">
                        <a :href="`/destinasi/${rightColumnTour.slug}`">
                            <img :src="`/src/assets/${rightColumnTour.image.image}`" :alt="rightColumnTour.name"
                                class="object-cover w-full h-full rounded-3xl">
                        </a>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>
<script>
import { tours } from '../data/tours.js'

export default {
  name: 'DynamicToursSection',
  data() {
    return {
      allTours: tours
    }
  },
  computed: {
    // Mengambil tours berdasarkan topWisata atau 3 pertama
    featuredTours() {
      // Filter tours yang memiliki topWisata = 1, atau ambil 3 pertama jika tidak ada
      const topTours = this.allTours.filter(tour => tour.topWisata === 1)
      return topTours.length >= 3 ? topTours.slice(0, 3) : this.allTours.slice(0, 3)
    },
    
    // 2 tours pertama untuk kolom kiri
    leftColumnTours() {
      return this.featuredTours.slice(0, 2)
    },
    
    // 1 tour terakhir untuk kolom kanan
    rightColumnTour() {
      return this.featuredTours[2] || null
    }
  }
}
</script>