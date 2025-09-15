<template>
    <section class="max-w-full mx-auto container-destination lg:max-w-screen-xl">
        <div class="mb-8 mx-2 sm:mx-4">
            <Breadcrumb />
        </div>
        <!-- Author Header -->
        <div
  v-if="island"
  class="text-white bg-cover bg-opacity-10 bg-center font-inter rounded-3xl py-16"
  :style="{ backgroundImage: `url('/assets/${island.image}')` }"
>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 bg-transparent backdrop-blur-md p-4 rounded-2xl">
                    <div class="flex-shrink-0">
                        <img :src="`/assets/${island.image}` || `https://placehold.co/600x400/000000/FFF?text=${island.name}`"
                            :alt="`Pulau ${island.name}`" loading="lazy" class="w-52 h-52 object-cover rounded-md border-2 border-white shadow-lg">
                    </div>
                    <div class="text-center md:text-left">
                        <h1 class="text-2xl capitalize font-bold mb-1">Pulau {{ island.name }}</h1>
                        <p class="text-emerald-50 max-w-5xl leading-relaxed">
                            {{ island.description }}
                        </p>
                        <div class="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                            <div class="flex items-center">
                                <i class="fas fa-edit mr-2"></i>
                                <span>{{ islandDestination.length }} Destinasi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Posts Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="relative z-20 my-2">
                
            <h1 v-if="island"
            class="px-2 mb-4 text-xl font-semibold font-inter text-dark dark:text-light">
            Menampilkan destinasi dari Pulau {{ island.name }}
        </h1>
                <div
                    class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-x-4 md:space-y-0">
                    <!-- Search -->
                    <div class="w-full md:w-80">
                        <form class="flex items-center font-inter" @submit.prevent="searchTours">
                            <label for="keyword" class="sr-only">Search</label>
                            <div class="relative w-full group">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-graydark dark:text-light"
                                        fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input type="text" id="keyword" v-model="searchKeyword"
                                    class="block w-full px-2 py-3 pl-10 text-sm bg-white border border-gray-300 rounded-2xl text-dark focus:border-light focus:ring-primary dark:bg-graydark dark:text-light dark:placeholder-graylight"
                                    placeholder="Cari wisata" @input="searchTours">
                            </div>
                        </form>
                    </div>

                    <!-- Filter -->
                    <div
                        class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0 filter-dropdown-container">
                        <div class="flex items-center max-w-lg space-x-3">
                            <button @click="toggleFilterDropdown"
                                class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-xl text-graydark hover:bg-gray-100 hover:text-primary focus:z-10 focus:outline-none focus:ring-2 focus:ring-primaryhover dark:bg-graydark dark:text-graylight md:w-auto filter-toggle-button"
                                type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                    class="w-4 h-4 mr-2 text-primarygray dark:text-graylight" viewbox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                                        clip-rule="evenodd" />
                                </svg>
                                Filter
                                <svg class="-mr-1 ml-1.5 h-5 w-5" fill="currentColor" viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </button>

                            <!-- Dropdown menu -->
                            <div v-show="showFilterDropdown"
                                class="absolute right-0 top-40 sm:top-28 md:top-26 z-10 p-4 mt-2 bg-white shadow w-max rounded-2xl dark:bg-graydark">
                                <form @submit.prevent="applyFilter" class="font-inter">

                                    <div class="my-4 category">
                                        <label class="mb-3 text-sm font-medium text-graydark dark:text-graylight">
                                            Kategori Destinasi
                                        </label>
                                        <select v-model="selectedCategory"
                                            class="block w-full rounded-xl border border-gray-300 bg-light p-2.5 text-sm capitalize text-graydark focus:border-primary focus:ring-primary dark:bg-graydark dark:text-graylight">
                                            <option value="">Semua Kategori</option>
                                            <option v-for="category in categories" :key="category.id"
                                                :value="category.slug">
                                                {{ category.name }}
                                            </option>
                                        </select>
                                    </div>

                                    <div class="flex justify-center w-full pb-4 mt-6 space-x-4 md:px-4">
                                        <button aria-label="reset" type="button" @click="resetFilter"
                                            class="w-full px-5 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg text-graydark hover:bg-gray-100 hover:text-primary focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-graydark dark:text-graylight dark:hover:bg-grayhover">
                                            Reset
                                        </button>
                                        <button aria-label="apply" type="submit"
                                            class="w-full px-5 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-primary-300 bg-primary hover:bg-primarydark focus:outline-none focus:ring-4 dark:bg-primary dark:hover:bg-primarydark dark:focus:ring-primarydark">
                                            Terapkan
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Active Filter Tags -->
            <div v-if="hasActiveFilters" class="px-4 mb-6">
                <div class="flex flex-wrap gap-2 items-center">
                    <span class="md:text-sm text-xs text-graydark dark:text-graylight font-medium">Filter aktif:</span>

                    <!-- Type Filter Tag -->
                    <div v-if="selectedCategory"
                        class="inline-flex items-center px-2 py-1 rounded-full text-xs md:text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        <span class="mr-2">{{ getTypeDisplayName(selectedCategory) }}</span>
                        <button @click="removeCategoryFilter"
                            class="ml-1 hover:bg-green-200 dark:hover:bg-green-800 rounded-full p-0.5 transition-colors duration-200"
                            aria-label="Hapus filter jenis wisata">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <!-- Type Sort Tag -->
                    <div v-if="selectedSort"
                        class="inline-flex items-center px-2 py-1 rounded-full text-xs md:text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        <span class="mr-2">{{ getTypeDisplayName(selectedSort) }}</span>
                        <button @click="removeSort"
                            class="ml-1 hover:bg-green-200 dark:hover:bg-green-800 rounded-full p-0.5 transition-colors duration-200"
                            aria-label="Hapus sort">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    <!-- Clear All Filters Button -->
                    <button @click="clearAllFilters"
                        class="inline-flex items-center px-2 py-1 rounded-full text-xs md:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                        aria-label="Hapus semua filter">
                        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        Hapus Semua
                    </button>
                </div>
            </div>


            <!-- Content Grid -->
            <div class="grid grid-cols-1 gap-6 mx-2 my-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <div v-for="tour in paginatedTours" :key="tour.id" class="destination-card">
                <!-- Destination Card -->
                <div class="hover:contrast-110 group relative flex h-[350px] w-full items-end justify-start rounded-3xl bg-cover bg-center text-left duration-300 ease-in-out hover:brightness-110 md:h-[400px]"
                    :style="`background-image:url(/assets/${tour.image.image})`">
                    <div
                        class="absolute top-0 bottom-0 left-0 right-0 mt-20 rounded-3xl bg-gradient-to-b from-transparent to-gray-800/80">
                    </div>
                    <div class="absolute top-0 z-10 flex items-center justify-between w-full px-4 mt-2">
                        <a :href="`/destinasi?kategori=${tour.category.slug}`"
                            :aria-label="`kunjungi wisata${tour.category.name}`"
                            class="p-2 text-sm font-medium capitalize transition duration-500 ease-in-out font-inter hover:contrast-100 hover:brightness-75 text-dark rounded-xl"
                            :class="{
                                'bg-green-200': tour.category.slug === 'pegunungan',
                                'bg-blue-200': tour.category.slug === 'perairan-laut',
                                'bg-amber-100': tour.category.slug === 'goa-dan-perairan-darat',
                                'bg-rose-100': tour.category.slug === 'budaya',
                            }">{{
                                tour.category.name }}</a>
                        <a :href="`destinasi/${tour.slug}`" aria-label="kunjungi wisata"
                            class="p-2 duration-300 ease-in-out border rounded-full border-light backdrop-blur-md group-hover:bg-primary">
                            <svg class="w-5 h-5 duration-300 ease-linear rotate-45 text-light group-hover:rotate-90"
                                viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                    class="fill-light" />
                            </svg>
                        </a>
                    </div>
                    <main class="z-10 p-1 m-2 mx-auto text-center text-light hover:text-primaryhover">
                        <a :href="`destinasi/${tour.slug}`" aria-label="lokasi wisata"
                            class="text-lg font-semibold leading-7 tracking-tight capitalize font-regular font-rubik">{{
                            tour.name }}
                            - {{ tour.regency.name }}
                        </a>
                    </main>
                    <a :href="`destinasi/${tour.slug}`" :aria-label="`kunjungi wisata${tour.category.name}`"
                        class="absolute w-full h-full"></a>
                </div>
            </div>

                <!-- Empty State -->
                <div v-if="filteredTours.length === 0"
                    class="p-4 text-center col-span-full font-inter bg-lighthover dark:bg-graydark rounded-3xl">
                    <img id="notFoundGif" class="mx-auto w-60" src="/not-found.gif" alt="not-found">
                    </img>
                    <h1 class="mt-4 text-3xl font-bold tracking-tight text-dark dark:text-graylight sm:text-5xl"> Tidak
                        ada
                        Destinasi</h1>
                    <p class="mt-6 text-base leading-7 text-grayhover dark:text-graylight">Coba ubah filter atau kata
                        kunci
                        pencarian.</p>
                    <div class="flex items-center justify-center mt-10 gap-x-6">
                        <a href="/destinasi"
                            class="rounded-xl bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryhover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Kembali</a>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="flex justify-center my-16">
                <div class="flex items-center space-x-2">
                    <button @click="prevPage" :disabled="currentPage === 1"
                        class="relative inline-flex items-center justify-center px-4 py-2 text-base font-semibold leading-5 text-center text-gray-700 transition duration-200 ease-in-out bg-white border border-gray-300 rounded-full hover:text-gray-500 hover:bg-green-100 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd" />
                        </svg>Prev
                    </button>
                    <span class="px-4 py-2 text-sm text-graydark dark:text-graylight">
                        Page {{ currentPage }} of {{ totalPages }}
                    </span>
                    <button @click="nextPage" :disabled="currentPage === totalPages"
                        class="relative inline-flex items-center justify-center px-4 py-2 text-base font-semibold leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-full hover:text-gray-500 hover:bg-green-100 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700">
                        Next
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { tours as toursData } from '../data/tours.js';
import { islands as islandsData} from '../data/islands.js';
import { categories } from '../data/categories';
import Breadcrumb from '../components/Breadcrumb.vue';
import GoToTop from '../components/GoToTop.vue';

export default {
    setup() {
        const route = useRoute();
        const island = ref(null);
        const islandDestination = ref([]);
        const loading = ref(true);
        const error = ref(null);

        // Filter states menggunakan Composition API
        const searchKeyword = ref('');
        const selectedCategory = ref('');
        const selectedSort = ref('newest'); // default terbaru
        const showFilterDropdown = ref(false);
        const currentPage = ref(1);
        const perPage = ref(6);

        const getDestinationByIsland = () => {
            try {
                const name = route.params.name;

                if (!name) {
                    error.value = 'Pulau tidak ditemukan dalam parameter';
                    loading.value = false;
                    return;
                }

                const islandData = islandsData.find((i) => i.name === name);

                if (!islandData) {
                    error.value = 'Data pulau tidak ditemukan';
                    loading.value = false;
                    return;
                }

                island.value = { ...islandData };
                getIslandDestination(name);
            } catch (err) {
                error.value = 'Terjadi kesalahan saat memuat data pulau';
                console.error('Error in get destination By island:', err);
            } finally {
                loading.value = false;
            }
        };
        const getIslandDestination = (name) => {
            try {
                const filteredTours = toursData
                    .filter(t => t.name && t.island.name === name)
                    .map(p => {
                        const category = categories.find(c => c.slug === p.category?.slug);
                        return {
                            ...p,
                            category: category || { name: 'Tidak diketahui', slug: 'unknown' }
                        };
                    });

                islandDestination.value = filteredTours;
            } catch (err) {
                error.value = 'Terjadi kesalahan saat memuat tours';
                console.error('Error in get island destination:', err);
            }
        };

        const truncateContent = (content) => {
            if (!content) return '';
            const textContent = content.replace(/<[^>]*>/g, '');
            return textContent.length > 100 ? textContent.substring(0, 100) + '...' : textContent;
        };

        const formatDate = (dateString) => {
            if (!dateString) return '';
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('id-ID', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            }).format(date);
        };

        const formatYear = (dateString) => {
            if (!dateString) return '';
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('id-ID', {
                year: 'numeric'
            }).format(date);
        };

        // Filter methods
        const searchTours = () => {
            currentPage.value = 1;
        };

        const toggleFilterDropdown = () => {
            showFilterDropdown.value = !showFilterDropdown.value;
        };

        const applyFilter = () => {
            currentPage.value = 1;
            showFilterDropdown.value = false;
        };

        const resetFilter = () => {
            selectedCategory.value = '';
            searchKeyword.value = '';
            selectedSort.value = 'newest';
            currentPage.value = 1;
        };

        const removeCategoryFilter = () => {
            selectedCategory.value = '';
            currentPage.value = 1;
        };
        const removeSort = () => {
            selectedSort.value = '';
            currentPage.value = 1;
        };

        const clearAllFilters = () => {
            selectedCategory.value = '';
            searchKeyword.value = '';
            selectedSort.value = 'newest';
            currentPage.value = 1;
        };

        const getTypeDisplayName = (typeSlug) => {
            const category = categories.find(cat => cat.slug === typeSlug);
            return category ? category.name : typeSlug;
        };

        // Pagination methods
        const prevPage = () => {
            if (currentPage.value > 1) {
                currentPage.value--;
            }
        };

        const nextPage = () => {
            if (currentPage.value < totalPages.value) {
                currentPage.value++;
            }
        };

        // Computed properties
        const filteredTours = computed(() => {
            let filtered = [...islandDestination.value];

            // Search filter
            if (searchKeyword.value) {
                filtered = filtered.filter(tour =>
                    tour.location?.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
                    tour.name?.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
                    tour.description?.toLowerCase().includes(searchKeyword.value.toLowerCase())
                );
            }

            // Category filter
            if (selectedCategory.value) {
                filtered = filtered.filter(tour => {
                    return tour.category && tour.category.slug === selectedCategory.value;
                });
            }

            return filtered;
        });

        const totalPages = computed(() => {
            return Math.ceil(filteredTours.value.length / perPage.value);
        });

        const paginatedTours = computed(() => {
            const start = (currentPage.value - 1) * perPage.value;
            const end = start + perPage.value;
            return filteredTours.value.slice(start, end);
        });

        const hasActiveFilters = computed(() => {
            return searchKeyword.value || selectedCategory.value || selectedSort.value !== 'newest';
        });

        // Close dropdown when clicking outside
        const handleClickOutside = (e) => {
            // Cek apakah click di dalam dropdown container atau button toggle
            const isInsideDropdown = e.target.closest('.filter-dropdown-container');
            const isToggleButton = e.target.closest('.filter-toggle-button');

            if (!isInsideDropdown && !isToggleButton) {
                showFilterDropdown.value = false;
            }
        };

        onMounted(() => {
            getDestinationByIsland();
            // Tambahkan delay kecil untuk menghindari konflik dengan click toggle
            setTimeout(() => {
                document.addEventListener('click', handleClickOutside);
            }, 100);
        });

        // Cleanup event listener
        const cleanup = () => {
            document.removeEventListener('click', handleClickOutside);
        };

        return {
            // Data
            island,
            islandDestination,
            loading,
            error,

            // Filter states
            searchKeyword,
            selectedCategory,
            selectedSort,
            showFilterDropdown,
            currentPage,
            perPage,

            // Methods
            truncateContent,
            formatDate,
            formatYear,
            searchTours,
            toggleFilterDropdown,
            applyFilter,
            resetFilter,
            removeCategoryFilter,
            removeSort,
            clearAllFilters,
            getTypeDisplayName,
            prevPage,
            nextPage,

            // Computed
            filteredTours,
            totalPages,
            paginatedTours,
            hasActiveFilters,

            // Data for templates
            categories,

            // Cleanup
            cleanup
        };
    },
    components: {
        Breadcrumb,
        GoToTop
    }
};
</script>