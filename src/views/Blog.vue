<template>
    <div class="max-w-full mx-auto container-destination lg:max-w-screen-xl">
        <div class="mb-8 mx-2 sm:mx-4">
            <Breadcrumb />
        </div>
        <!-- Header Section -->
       <div class="max-w-xl mx-auto mb-10 text-center md:mb-6 lg:max-w-2xl">
        <div>
            <h2
                class="inline-block p-2 mb-4 text-xs font-bold tracking-wider text-center uppercase rounded-full bg-primary font-poppins text-light" role="heading" aria-level="2">
                PESONA FLOBAMORA
            </h2>
        </div>
        <h2
            class="max-w-lg mb-2 text-3xl font-bold leading-none tracking-tight font-poppins text-dark dark:text-light sm:text-4xl md:mx-auto" role="heading" aria-level="1">
            <span class="relative inline-block">
                <svg viewBox="0 0 52 24" fill="currentColor"
                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-light_gray sm:block lg:-ml-28 lg:-mt-10 lg:w-32">
                    <defs>
                        <pattern id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6" x="0" y="0" width=".135" height=".30">
                            <circle cx="1" cy="1" r=".7"></circle>
                        </pattern>
                    </defs>
                    <rect fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)" width="52" height="24"></rect>
                </svg>
                <span class="relative">"Jelajahi </span>
            </span> surga tersembunyi di
            Nusa Tenggara Timur!"
        </h2>
        <p class="text-base font-normal font-inter text-graydark dark:text-graylight md:text-lg" role="heading" aria-level="2"> "Destinasi Wisata Nusa Tenggara Timur Mengundang Anda untuk
            Menciptakan Kenangan Abadi!" </p>
    </div>

        <!-- Search and Filter Section -->
        <div class="relative z-20 my-2">
            <div class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-x-4 md:space-y-0">
                <!-- Search -->
                <div class="w-full md:w-80">
                    <form class="flex items-center font-inter" @submit.prevent="searchPosts">
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
                                placeholder="Cari wisata" @input="searchPosts">
                        </div>
                    </form>
                </div>

                <!-- Filter -->
                <div
                    class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
                    <div class="flex items-center max-w-lg space-x-3">
                        <button @click="toggleFilterDropdown"
                            class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-xl text-graydark hover:bg-gray-100 hover:text-primary focus:z-10 focus:outline-none focus:ring-2 focus:ring-primaryhover dark:bg-graydark dark:text-graylight md:w-auto"
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
                            class="absolute right-0 top-14 z-10 p-4 mt-2 bg-white shadow w-max rounded-2xl dark:bg-graydark">
                            <form @submit.prevent="applyFilter" class="font-inter">

                                <div class="my-4 category">
                                    <label class="mb-3 text-sm font-medium text-graydark dark:text-graylight">
                                        Kategori Post
                                    </label>
                                    <select v-model="selectedCategory"
                                        class="block w-full rounded-xl border border-gray-300 bg-light p-2.5 text-sm capitalize text-graydark focus:border-primary focus:ring-primary dark:bg-graydark dark:text-graylight">
                                        <option value="">Semua Kategori</option>
                                        <option v-for="category in categoriesPost" :key="category.id" :value="category.slug">
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

        <!-- Search Result Label -->
        <h1 v-if="hasActiveFilters"
            class="px-2 mb-4 text-lg font-medium underline font-inter text-dark decoration-lighthover underline-offset-8 dark:text-light"
            aria-label="search-result">
            Menampilkan Hasil
        </h1>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 gap-6 mx-2 my-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <div v-for="post in paginatedDestinations" :key="post.id" class="destination-card">
                <!-- post Card -->
                <div class="hover:contrast-110 group relative flex h-[350px] w-full items-end justify-start rounded-3xl bg-cover bg-center text-left duration-300 ease-in-out hover:brightness-110 md:h-[400px]"
                    :style="`background-image:url(src/assets/${post.thumbnail.image})`">
                    <div
                        class="absolute top-0 bottom-0 left-0 right-0 mt-20 rounded-3xl bg-gradient-to-b from-transparent to-gray-800/80">
                    </div>
                    <div class="absolute top-0 z-10 flex items-center justify-between w-full px-4 mt-2">
                        <a :href="`/post?kategori=${post.category.slug}`"
                            :aria-label="`kunjungi wisata${post.category.name}`"
                            class="p-2 bg-green-200 text-sm font-medium capitalize transition duration-500 ease-in-out font-inter hover:contrast-100 hover:brightness-75 text-dark rounded-xl">{{post.category.name }}</a>
                        <a :href="`post/${post.slug}`" aria-label="kunjungi wisata"
                            class="p-2 duration-300 ease-in-out border rounded-full border-light backdrop-blur-md group-hover:bg-primary">
                            <svg class="w-5 h-5 duration-300 ease-linear rotate-45 text-light group-hover:rotate-90"
                                viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                    class="fill-light" />
                            </svg>
                        </a>
                    </div>
                    <main class="z-10 px-3 py-1 m-2 text-left hover:text-primaryhover">
                        <p class="text-sm font-medium leading-7 tracking-tight text-gray-300 capitalize font-rubik"
                            rel="date/time" aria-label="tanggal publish">
                            <time pubdate datetime="{{formatDate(post.published_at)}}"
                                title="{{formatDate(post.published_at)}}">{{ formatDate(post.published_at) }}</time>
                        </p>
                        <a :href="`post/${post.slug}`"
                            class="text-base font-medium leading-7 tracking-tight capitalize font-rubik text-light"
                            :aria-label="`kunjungi blog ${post.slug}`">
                            {{ post.content }}
                        </a>
                    </main>
                    <a :href="`post/${post.slug}`" :aria-label="`kunjungi blog ${post.slug}`"
                        class="absolute w-full h-full"></a>
                </div>
            </div>

            <!-- Empty State -->
            <div v-if="filteredPosts.length === 0"
                class="p-4 text-center col-span-full font-inter bg-lighthover dark:bg-graydark rounded-3xl">
                <img id="notFoundGif" class="mx-auto w-60" src="/src/assets/not-found.gif" alt="not-found">
                </img>
                <h1 class="mt-4 text-3xl font-bold tracking-tight text-dark dark:text-graylight sm:text-5xl"> Tidak ada
                    Blog</h1>
                <p class="mt-6 text-base leading-7 text-grayhover dark:text-graylight">Coba ubah filter atau kata kunci
                    pencarian.</p>
                <div class="flex items-center justify-center mt-10 gap-x-6">
                    <a href="/post"
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
</template>

<script>
import { posts } from '../data/posts';
import { categoriesPost } from '../data/categoriesPost';
import Breadcrumb from '../components/Breadcrumb.vue';

export default {
    components: {
        Breadcrumb,
    },
    data() {
        return {
            // Sample data - replace with your actual data
            posts,
            categoriesPost,
            // Filter states
            searchKeyword: '',
            selectedCategory: '',
            showFilterDropdown: false,
            // Pagination
            currentPage: 1,
            perPage: 6
        };
    },
    computed: {
        filteredPosts() {
            let filtered = this.posts;

            // Search filter
            if (this.searchKeyword) {
                filtered = filtered.filter(post =>
                    post.name.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
                    post.description.toLowerCase().includes(this.searchKeyword.toLowerCase())
                );
            }

            // Type filter
            if (this.selectedCategory) {
                filtered = filtered.filter(post => {
                    const category = this.categoriesPost.find(cat => cat.slug === post.category.slug);
                    return category && category.slug === this.selectedCategory;
                });
            }

            return filtered;
        },
        totalPages() {
            return Math.ceil(this.filteredPosts.length / this.perPage);
        },
        paginatedDestinations() {
            const start = (this.currentPage - 1) * this.perPage;
            const end = start + this.perPage;
            return this.filteredPosts.slice(start, end);
        },
        hasActiveFilters() {
            return this.searchKeyword || this.selectedCategory;
        }
    },
    methods: {
        searchPosts() {
            this.currentPage = 1;
        },
        toggleFilterDropdown() {
            this.showFilterDropdown = !this.showFilterDropdown;
        },
        applyFilter() {
            this.currentPage = 1;
            this.showFilterDropdown = false;
        },
        resetFilter() {
            this.selectedCategory = '';
            this.searchKeyword = '';
            this.currentPage = 1;
        },

        removeCategoryFilter() {
            this.selectedCategory = '';
            this.currentPage = 1;
        },
        clearAllFilters() {
            this.selectedCategory = '';
            this.searchKeyword = '';
            this.currentPage = 1;
        },
        getTypeDisplayName(typeSlug) {
            const category = this.categoriesPost.find(cat => cat.slug === typeSlug);
            return category ? category.name : typeSlug;
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        getCategoryName(categoryId) {
            const category = this.categoriesPost.find(cat => cat.id === categoryId);
            return category ? category.name : 'Unknown';
        },
        formatDate(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('id-ID', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            }).format(date);
        }
    },
    mounted() {
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.flex.max-w-lg.items-center.space-x-3')) {
                this.showFilterDropdown = false;
            }
        });
    }
}
</script>