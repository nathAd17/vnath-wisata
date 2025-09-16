<template>
    <div class="min-h-screen max-w-screen-xl px-4 mx-auto">
        <div class="mb-8 mx-2 sm:mx-4">
            <Breadcrumb />
        </div>
        <!-- <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 font-inter md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <a href="/destinasi"
                        class="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-primaryhover dark:text-primarygray dark:hover:text-primary">
                        <svg class="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Destinasi
                    </a>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="w-3 h-3 mx-1 text-primarygray dark:text-graydark rtl:rotate-180" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="text-sm font-medium ms-1 text-grayhover dark:text-primarygray md:ms-2">Detail
                            Destinasi</span>
                    </div>
                </li>
            </ol>
        </nav> -->
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
            <section class="relative container-img mb-4">
                <div class="flex gap-2 h-56 sm:h-64 md:h-[30rem]">
                    <!-- Main Image -->
                    <div class="flex-1 relative">
                        <img id="elImg" class="w-full h-full rounded-l-3xl object-cover cursor-pointer"
                            :alt="tour.name" :src="`/assets/${tour.image.image}`"
                            @click="openGalleryModal" loading="lazy"/>
                    </div>
                    
                    <!-- Side Images -->
                    <div v-if="tour.gallery && tour.gallery.length > 0" class="flex flex-col gap-2 w-1/3">                        
                        <!-- Second gallery image or view more overlay -->
                        <div class="flex-1 relative cursor-pointer" @click="openGalleryModal">
                            <img v-if="tour.gallery.length > 1" 
                                :src="`/assets/${tour.gallery[0].image}`" 
                                :alt="tour.name"
                                class="w-full h-full rounded-r-3xl object-cover" loading="lazy"/>
                            <div v-else class="w-full h-full rounded-br-3xl bg-gray-200 flex items-center justify-center">
                                <span class="text-gray-500">Tidak ada foto lain</span>
                            </div>
                            
                            <!-- View more overlay if there are more than 2 gallery images -->
                            <div v-if="tour.gallery.length > 2" 
                                class="absolute inset-0 bg-black bg-opacity-50 rounded-r-3xl flex items-center justify-center">
                                <div class="text-white text-center">
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
                            class="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg p-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <!-- Modal Content -->
                    <div class="p-4 max-h-[70vh] overflow-y-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <!-- Main image -->
                            <div class="relative cursor-pointer group">
                                <img :src="`/assets/${tour.image.image}`" loading="lazy" :alt="tour.name"
                                    class="object-cover w-full h-48 transition-transform rounded-lg group-hover:scale-105" />
                                <div class="absolute inset-0 transition-opacity bg-black bg-opacity-0 rounded-lg group-hover:scale-105 group-hover:bg-opacity-20">
                                </div>
                            </div>
                            
                            <!-- Gallery images -->
                            <div v-for="(photo, index) in tour.gallery" :key="index"
                                class="relative cursor-pointer group">
                                <img :src="`/assets/${photo.image}`" loading="lazy" :alt="tour.name"
                                    class="object-cover w-full h-48 transition-transform rounded-lg group-hover:scale-105" />
                                <div class="absolute inset-0 transition-opacity bg-black bg-opacity-0 rounded-lg group-hover:scale-105 group-hover:bg-opacity-20">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="flex flex-col my-4">
                <div class="flex flex-wrap md:block">
                    <!-- left section -->
                    <section class="text-center md:float-left md:mx-auto md:mb-2 md:w-2/3">
                        <!-- hal.deskripsi -->
                        <div class="relative mb-2 md:pr-2 rounded-lg sm:max-w-xl md:mx-auto md:max-w-full lg:max-w-screen-xl"
                            id="deskripsi">
                            <article
                                class="container p-3 mt-4 text-sm  text-left bg-white dark:bg-dark rounded-xl shadow-lg dark:text-graylight font-inter text-primarydark md:text-lg">
                                <h2
                                    class="text-xl font-semibold underline text-primarydark dark:text-graylight underline-offset-8">
                                    Informasi Singkat</h2>
                                <div class="my-4 text-sm lg:text-base prose text-medium" aria-label="deskripsi-wisata"
                                    v-html="tour.fullDescription">
                                </div>
                            </article>
                            <div class="bg-white dark:bg-dark mt-3 rounded-xl shadow-lg px-3 py-1">
                            <ol class="w-full my-4 font-inter text-left" role="list" aria-label="info-wisata">
                                <li>
                                    <div class="w-full p-2 border-l-2 border-secondarydark text-primarydark dark:text-secondary"
                                        role="alert">
                                        <div class="flex items-center justify-between">
                                            <span class="sr-only">Wisata info</span>
                                            <h3 class="text-sm font-medium md:text-lg"
                                                :title="`lokasi-wisata-${tour.name}`">Lokasi</h3>
                                        </div>
                                        <p class="pt-2 text-sm font-normal capitalize text-dark dark:text-light"
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
                                        <p class="pt-2 text-sm text-dark dark:text-light"
                                            :aria-label="`jam-operasional-wisata-${tour.name}`">
                                            Pkl. {{ tour.operationalHours }} WITA
                                        </p>
                                    </div>
                                </li>
                                <!-- <li>
                            <div class="w-full p-2 my-2 border-l-2 border-secondarydark text-primarydark dark:text-secondary"
                                role="alert">
                                <div class="flex items-center justify-between">
                                    <span class="sr-only">Wisata info</span>
                                    <h3 class="text-sm font-medium md:text-lg" title="biaya-masuk-wisata-{{ $destinations->name }}">Biaya Masuk</h3>
                                </div>
                                <p class="pt-2 text-sm text-dark dark:text-light" aria-label="biaya-masuk-wisata-{{ $destinations->name }}">
                                    {{ tour.entry_fee }}
                                </p>
                            </div>
                        </li> -->
                                <li>
                                    <div class="w-full p-2 border-l-2 border-secondarydark text-primarydark dark:text-secondary"
                                        role="alert">
                                        <div class="flex items-center justify-between">
                                            <span class="sr-only">Wisata info</span>
                                            <h3 class="text-sm font-medium md:text-lg"
                                                :title="`fasilitas-wisata-${tour.name}`">Fasilitas</h3>
                                        </div>
                                        <div v-if="tour.facilities && tour.facilities.length > 0"
                                            class="pt-2 text-sm text-dark dark:text-light"
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
                        
                        <div class="overflow-x-auto mt-4 md:block bg-white dark:bg-dark rounded-xl shadow-lg px-3 py-1">
                            <div class="container-maps">
                                 <h2
                                    class="text-xl font-semibold underline text-primarydark dark:text-graylight underline-offset-8">
                                    Peta Lokasi Wisata</h2>
                                <div class="text-center rounded md:my-3">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15704.261860759712!2d123.48309124540305!3d-10.256304037799584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c5699cfeb3f64c5%3A0xadf751838b8b304!2sPantai%20Baliana!5e0!3m2!1sid!2sid!4v1751873587520!5m2!1sid!2sid"
                                        class="object-cover w-full rounded-md h-48" allowfullscreen
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
import { ref, onMounted } from 'vue'
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

        const fullScreen = () => {
            const img = document.getElementById('elImg')
            if (img.requestFullscreen) {
                img.requestFullscreen()
            } else if (img.mozRequestFullScreen) {
                img.mozRequestFullScreen()
            } else if (img.webkitRequestFullscreen) {
                img.webkitRequestFullscreen()
            } else if (img.msRequestFullscreen) {
                img.msRequestFullscreen()
            }
        }

        onMounted(() => {
            getTourDetail()
        })

        return {
            tour,
            showGalleryModal,
            openGalleryModal,
            closeGalleryModal,
            fullScreen
        }
    },
    components: {
        Breadcrumb,
        GoToTop
    }
}
</script>
