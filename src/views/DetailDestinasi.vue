<template>
    <div class="max-w-screen-xl min-h-screen px-4 mx-auto">
        <div class="mx-2 mb-8 sm:mx-4">
            <Breadcrumb />
        </div>
        <div v-if="tour" class="content">
            <header v-if="tour" class="max-w-xl mx-auto my-4 text-center">
                <h2 class="inline-block p-2 mb-4 text-xs font-bold tracking-wider text-center uppercase rounded-full bg-primary font-poppins text-light"
                    aria-label="beranda" role="heading" aria-level="2">
                    PESONA FLOBAMORA
                </h2>
                <h1 class="mx-auto mb-4 text-3xl font-bold leading-none tracking-tight uppercase font-poppins text-primarydark dark:text-graylight sm:text-4xl"
                    aria-label="nama wisata" title="nama wisata" role="heading" aria-level="1">
                    {{ tour.name }}
                </h1>
                <p class="my-4 text-base font-normal capitalize font-inter text-graydark dark:text-primarygray md:text-lg"
                    aria-label="quotes" role="heading" aria-level="2">
                    "Terbenamlah dalam pesona Nusa Tenggara Timur yang Menggoda Anda dengan Destinasi Wisata yang
                    Memukau dan Kaya Budaya!" </p>
                <a target="_blank" aria-label="lokasi-wisata"
                    :href="`https://www.google.com/maps/place/${tour.location}`"
                    class="flex items-center justify-center max-w-xl gap-2 my-4 text-sm font-inter text-dark dark:text-primarygray sm:mx-auto">
                    <svg class="w-6 h-6 text-gray-800 dark:text-graylight" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                            clip-rule="evenodd" />
                    </svg>
                    {{ tour.location }}
                </a>
            </header>
            <!-- Updated Gallery Section -->
            <section class="relative mb-4 container-img">
                <div class="flex gap-2 h-56 sm:h-64 md:h-[30rem]">
                    <!-- Main Image -->
                    <div class="relative flex-1">
                        <img id="elImg" class="object-cover w-full h-full cursor-pointer rounded-l-3xl"
                            :alt="tour.name" :src="`/assets/${tour.image.image}`"
                            @click="openGalleryModal" loading="lazy"/>
                    </div>
                    
                    <!-- Side Images -->
                    <div v-if="tour.gallery && tour.gallery.length > 0" class="flex flex-col w-1/3 gap-2">                        
                        <!-- Second gallery image or view more overlay -->
                        <div class="relative flex-1 cursor-pointer" @click="openGalleryModal">
                            <img v-if="tour.gallery.length > 1" 
                                :src="`/assets/${tour.gallery[0].image}`" 
                                :alt="tour.name"
                                class="object-cover w-full h-full rounded-r-3xl" loading="lazy"/>
                            <div v-else class="flex items-center justify-center w-full h-full bg-gray-200 rounded-br-3xl">
                                <span class="text-gray-500">Tidak ada foto lain</span>
                            </div>
                            
                            <!-- View more overlay if there are more than 2 gallery images -->
                            <div v-if="tour.gallery.length > 2" 
                                class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-r-3xl">
                                <div class="text-center text-white">
                                    <div class="text-xl font-bold">+{{ tour.gallery.length - 1 }}</div>
                                    <div class="text-sm">Foto lainnya</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Gallery Modal -->
            <div v-if="showGalleryModal" 
                class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                @click="closeGalleryModal">
                <div class="relative max-w-6xl max-h-[90vh] w-full mx-4 bg-white rounded-lg overflow-hidden"
                    @click.stop>
                    <!-- Modal Header -->
                    <div class="flex items-center justify-between p-4 border-b">
                        <h3 class="text-xl font-semibold text-gray-900">
                            Galeri Foto - {{ tour.name }}
                        </h3>
                        <button @click="closeGalleryModal" 
                            class="p-1 text-gray-400 rounded-lg hover:text-gray-600 hover:bg-gray-100">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <!-- Modal Content -->
                    <div class="p-4 max-h-[70vh] overflow-y-auto">
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <!-- Main image -->
                            <div class="relative cursor-pointer group" @click="openFullscreen(`/assets/${tour.image.image}`, tour.name, -1)">
                                <img :src="`/assets/${tour.image.image}`" loading="lazy" :alt="tour.name"
                                    class="object-cover w-full h-48 transition-transform rounded-lg group-hover:scale-105" />
                                <div class="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-0 rounded-lg group-hover:bg-opacity-20">
                                    <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                                    </svg>
                                </div>
                            </div>
                            
                            <!-- Gallery images -->
                            <div v-for="(photo, index) in tour.gallery" :key="index"
                                class="relative cursor-pointer group" @click="openFullscreen(`/assets/${photo.image}`, tour.name, index)">
                                <img :src="`/assets/${photo.image}`" loading="lazy" :alt="tour.name"
                                    class="object-cover w-full h-48 transition-transform rounded-lg group-hover:scale-105" />
                                <div class="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-0 rounded-lg group-hover:bg-opacity-20">
                                    <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fullscreen Modal -->
            <div v-if="showFullscreenModal" 
                class="fixed inset-0 z-[90] flex items-center justify-center bg-black"
                @click="closeFullscreen">
                
                <!-- Navigation arrows -->
                <button v-if="allImages.length > 1" 
                    @click.stop="previousImage"
                    class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-opacity">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>

                <button v-if="allImages.length > 1"
                    @click.stop="nextImage" 
                    class="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-opacity">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

                <!-- Close button -->
                <button @click="closeFullscreen" 
                    class="absolute top-4 right-4 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-opacity">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <!-- Image counter -->
                <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-black bg-opacity-50 text-white text-sm">
                    {{ currentImageIndex + 1 }} / {{ allImages.length }}
                </div>

                <!-- Fullscreen image -->
                <div class="relative w-full h-full flex items-center justify-center p-4" @click.stop>
                    <img :src="currentFullscreenImage" 
                         :alt="tour.name"
                         class="max-w-full max-h-full object-contain cursor-zoom-out"
                         @click="closeFullscreen" />
                </div>

                <!-- Image title -->
                <div class="absolute top-4 left-4 z-10 px-4 py-2 rounded bg-black bg-opacity-50 text-white">
                    <h4 class="font-semibold">{{ tour.name }}</h4>
                    <p class="text-sm opacity-75">Foto {{ currentImageIndex + 1 }}</p>
                </div>
            </div>

            <section class="flex flex-col my-4">
                <div class="flex flex-wrap md:block">
                    <!-- left section -->
                    <section class="text-center md:float-left md:mx-auto md:mb-2 md:w-2/3">
                        <!-- hal.deskripsi -->
                        <div class="relative mb-2 rounded-lg md:pr-2 sm:max-w-xl md:mx-auto md:max-w-full lg:max-w-screen-xl"
                            id="deskripsi">
                            <article
                                class="container p-3 mt-4 text-sm text-left bg-white shadow-lg dark:bg-dark rounded-xl dark:text-graylight font-inter text-primarydark md:text-lg">
                                <h2
                                    class="text-xl font-semibold underline text-primarydark dark:text-graylight underline-offset-8">
                                    Informasi Singkat</h2>
                                <div class="my-4 text-sm prose lg:text-base text-medium" aria-label="deskripsi-wisata"
                                    v-html="tour.fullDescription">
                                </div>
                            </article>
                            <div class="px-3 py-1 mt-3 bg-white shadow-lg dark:bg-dark rounded-xl">
                            <ol class="w-full my-4 text-left font-inter" role="list" aria-label="info-wisata">
                                <li>
                                    <div class="w-full p-2 border-l-2 border-secondarydark text-primarydark dark:text-secondary"
                                        role="alert">
                                        <div class="flex items-center justify-between">
                                            <span class="sr-only">Wisata info</span>
                                            <h3 class="text-sm font-medium md:text-lg"
                                                :title="`lokasi-wisata-${tour.name}`">Lokasi</h3>
                                        </div>
                                        <p class="pt-2 text-sm font-normal capitalize md:text-base text-dark dark:text-light"
                                            :aria-label="`lokasi-wisata-${tour.name}`">
                                            {{ tour.location }} - {{ tour.regency.name }}
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="w-full p-2 my-2 border-l-2 border-secondarydark text-primarydark dark:text-secondary"
                                        role="alert">
                                        <div class="flex items-center justify-between">
                                            <span class="sr-only">Wisata info</span>
                                            <h3 class="text-sm font-medium md:text-lg"
                                                :title="`jam-operasional-wisata-${tour.name}`">Jam Operasional
                                            </h3>
                                        </div>
                                        <p class="pt-2 text-sm md:text-base text-dark dark:text-light"
                                            :aria-label="`jam-operasional-wisata-${tour.name}`">
                                            Pkl. {{ tour.operationalHours }} WITA
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="w-full p-2 border-l-2 border-secondarydark text-primarydark dark:text-secondary"
                                        role="alert">
                                        <div class="flex items-center justify-between">
                                            <span class="sr-only">Wisata info</span>
                                            <h3 class="text-sm font-medium md:text-lg"
                                                :title="`fasilitas-wisata-${tour.name}`">Fasilitas</h3>
                                        </div>
                                        <div v-if="tour.facilities && tour.facilities.length > 0"
                                            class="pt-2 text-sm md:text-base text-dark dark:text-light"
                                            :aria-label="`fasilitas-wisata-${tour.name}`">
                                            <div v-for="facility in tour.facilities" :key="facility" class="">
                                                <span class="mr-2 text-green-600">✓</span>
                                                <span class="text-sm">{{ facility }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        </div>
                        <!-- akhir deskripsi -->
                    </section>
                    <!-- rigth section -->
                    <section class="w-full px-1 md:float-right md:w-1/3 font-inter">
                        
                        <div class="px-3 py-1 mt-4 overflow-x-auto bg-white shadow-lg md:block dark:bg-dark rounded-xl">
                            <div class="container-maps">
                                 <h2
                                    class="text-xl font-semibold underline text-primarydark dark:text-graylight underline-offset-8">
                                    Peta Lokasi Wisata</h2>
                                <div class="text-center rounded md:my-3">
                                    <iframe
                                        :src="`${tour.srcMaps}`"
                                        class="object-cover w-full h-48 rounded-md" allowfullscreen
                                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                        aria-label="peta wisata" :aria-details="`peta wisata - ${tour.name}`"></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
        <GoToTop 
      :threshold="300"
      variant="primary"
      :show-progress="true"
      position="bottom-right"
    />
    </div>
</template>

<script>
import { ref, onMounted, computed, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { tours as toursData } from '../data/tours.js'
import { categories } from '../data/categories.js'
import { regencies } from '../data/regencies.js'
import { islands } from '../data/islands.js'
import Breadcrumb from '../components/Breadcrumb.vue'
import GoToTop from '../components/GoToTop.vue'

export default {
    setup() {
        const route = useRoute()
        const tour = ref(null)
        const showGalleryModal = ref(false)
        const showFullscreenModal = ref(false)
        const currentImageIndex = ref(0)
        const currentFullscreenImage = ref('')

        // Computed property untuk menggabungkan semua gambar
        const allImages = computed(() => {
            if (!tour.value) return []
            
            const images = [
                {
                    src: `/assets/${tour.value.image.image}`,
                    alt: tour.value.name
                }
            ]
            
            if (tour.value.gallery) {
                tour.value.gallery.forEach(photo => {
                    images.push({
                        src: `/assets/${photo.image}`,
                        alt: tour.value.name
                    })
                })
            }
            
            return images
        })

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

        const openGalleryModal = () => {
            showGalleryModal.value = true
            document.body.style.overflow = 'hidden'
        }

        const closeGalleryModal = () => {
            showGalleryModal.value = false
            document.body.style.overflow = 'auto'
        }

        const openFullscreen = (imageSrc, alt, index) => {
            // Jika index adalah -1, berarti gambar utama
            if (index === -1) {
                currentImageIndex.value = 0
            } else {
                currentImageIndex.value = index + 1 // +1 karena gambar utama adalah index 0
            }
            
            currentFullscreenImage.value = imageSrc
            showGalleryModal.value = false
            showFullscreenModal.value = true
            document.body.style.overflow = 'hidden'
        }

        const closeFullscreen = () => {
            showFullscreenModal.value = false
            showGalleryModal.value = true
            document.body.style.overflow = 'auto'
        }

        const nextImage = () => {
            if (currentImageIndex.value < allImages.value.length - 1) {
                currentImageIndex.value++
            } else {
                currentImageIndex.value = 0
            }
            currentFullscreenImage.value = allImages.value[currentImageIndex.value].src
        }

        const previousImage = () => {
            if (currentImageIndex.value > 0) {
                currentImageIndex.value--
            } else {
                currentImageIndex.value = allImages.value.length - 1
            }
            currentFullscreenImage.value = allImages.value[currentImageIndex.value].src
        }

        // Keyboard navigation
        const handleKeydown = (event) => {
            if (showFullscreenModal.value) {
                switch (event.key) {
                    case 'Escape':
                        closeFullscreen()
                        break
                    case 'ArrowLeft':
                        previousImage()
                        break
                    case 'ArrowRight':
                        nextImage()
                        break
                }
            }
        }

        onMounted(() => {
            getTourDetail()
            document.addEventListener('keydown', handleKeydown)
        })

        // Cleanup event listener
        onUnmounted(() => {
            document.removeEventListener('keydown', handleKeydown)
        })

        return {
            tour,
            showGalleryModal,
            showFullscreenModal,
            currentImageIndex,
            currentFullscreenImage,
            allImages,
            openGalleryModal,
            closeGalleryModal,
            openFullscreen,
            closeFullscreen,
            nextImage,
            previousImage
        }
    },
    components: {
        Breadcrumb,
        GoToTop
    }
}
</script>