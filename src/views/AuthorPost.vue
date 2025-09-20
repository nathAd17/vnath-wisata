<template>
    <section class="max-w-full mx-auto container-destination lg:max-w-screen-xl">
        <div class="mx-2 mb-8 sm:mx-4">
            <Breadcrumb />
        </div>
        <!-- Author Header -->
        <div v-if="user"
            class=" text-white bg-cover bg-center font-inter rounded-3xl py-16 bg-[url('/assets/destinasi/danau-kelimutu.webp')]">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div
                    class="flex flex-col items-center p-4 space-y-6 bg-transparent md:flex-row md:space-y-0 md:space-x-8 backdrop-blur-md rounded-2xl">
                    <div class="flex-shrink-0">
                        <img :src="`https://ui-avatars.com/api/?name=${user.username}&rounded=true`"
                            :alt="`${user.username}`" class="w-32 h-32 border-4 border-white rounded-full shadow-lg">
                    </div>
                    <div class="text-center md:text-left">
                        <h1 class="mb-1 text-2xl font-bold">{{ user.full_name }}</h1>
                        <p class="mb-4 text-lg text-emerald-100">{{ user.address }}</p>
                        <p class="max-w-5xl leading-relaxed text-emerald-50">
                            {{ user.bio }}
                        </p>
                        <div class="flex flex-wrap justify-center gap-4 mt-6 md:justify-start">
                            <div class="flex items-center">
                                <i class="mr-2 fas fa-calendar"></i>
                                <span>Bergabung sejak {{ formatYear(user.created_at) }}</span>
                            </div>
                            <div class="flex items-center">
                                <i class="mr-2 fas fa-edit"></i>
                                <span>{{ authorPosts.length }} Artikel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Posts Section -->
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="relative z-20 my-2">
                
            <h1 v-if="user"
            class="px-2 mb-4 text-xl font-semibold font-inter text-dark dark:text-light">
            Menampilkan blog dari {{ user.full_name }}
        </h1>
                <div
                    class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-x-4 md:space-y-0">
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
                                class="absolute right-0 z-10 p-4 mt-2 bg-white shadow top-40 sm:top-28 md:top-26 w-max rounded-2xl dark:bg-graydark">
                                <form @submit.prevent="applyFilter" class="font-inter">

                                    <div class="my-4 category">
                                        <label class="mb-3 text-sm font-medium text-graydark dark:text-graylight">
                                            Kategori Post
                                        </label>
                                        <select v-model="selectedCategory"
                                            class="block w-full rounded-xl border border-gray-300 bg-light p-2.5 text-sm capitalize text-graydark focus:border-primary focus:ring-primary dark:bg-graydark dark:text-graylight">
                                            <option value="">Semua Kategori</option>
                                            <option v-for="category in categoriesPost" :key="category.id"
                                                :value="category.slug">
                                                {{ category.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="my-4 sort">
                                        <label class="mb-3 text-sm font-medium text-graydark dark:text-graylight">
                                            Waktu Post
                                        </label>
                                        <select v-model="selectedSort" @change="applyFilter"
                                            class="block w-full rounded-xl border border-gray-300 bg-light p-2.5 text-sm capitalize text-graydark focus:border-primary focus:ring-primary dark:bg-graydark dark:text-graylight">
                                            <option value="newest">
                                                Terbaru
                                            </option>
                                            <option value="oldest">
                                                Terlama
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
                <div class="flex flex-wrap items-center gap-2">
                    <span class="text-xs font-medium md:text-sm text-graydark dark:text-graylight">Filter aktif:</span>

                    <!-- Type Filter Tag -->
                    <div v-if="selectedCategory"
                        class="inline-flex items-center px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full md:text-sm dark:bg-green-900 dark:text-green-200">
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
                        class="inline-flex items-center px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full md:text-sm dark:bg-green-900 dark:text-green-200">
                        <span class="mr-2">{{ getTypeDisplayName(selectedSort) }}</span>
                        <button @click="removeSort"
                            class="ml-1 hover:bg-green-200 dark:hover:bg-green-800 rounded-full p-0.5 transition-colors duration-200"
                            aria-label="Hapus sort post">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    <!-- Clear All Filters Button -->
                    <button @click="clearAllFilters"
                        class="inline-flex items-center px-2 py-1 text-xs text-gray-800 transition-colors duration-200 bg-gray-100 rounded-full md:text-sm hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
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
                <div v-for="post in paginatedPosts" :key="post.id" class="destination-card">
                    <!-- post Card -->
                    <div class="hover:contrast-110 group relative flex h-[350px] w-full items-end justify-start rounded-3xl bg-cover bg-center text-left duration-300 ease-in-out hover:brightness-110 md:h-[400px]"
                        :style="`background-image:url(/assets/${post.thumbnail.image})`">
                        <div
                            class="absolute top-0 bottom-0 left-0 right-0 mt-20 rounded-3xl bg-gradient-to-b from-transparent to-gray-800/80">
                        </div>
                        <div class="absolute top-0 z-10 flex items-center justify-between w-full px-4 mt-2">
                            <a :href="`/post/kategori=${post.category.slug}`"
                                :aria-label="`kunjungi wisata${post.category.name}`"
                                class="p-2 text-sm font-medium capitalize transition duration-500 ease-in-out bg-green-200 font-inter hover:contrast-100 hover:brightness-75 text-dark rounded-xl">{{ post.category.name
                                }}</a>
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
                                {{post.title }}
                            </a>
                            <br>
                            <a :href="`post/${post.slug}`"
                                class="text-sm font-normal leading-7 tracking-tight capitalize font-rubik text-light"
                                :aria-label="`kunjungi blog ${post.slug}`">
                                {{truncateContent(post.content) }}
                            </a>
                        </main>
                        <a :href="`post/${post.slug}`" :aria-label="`kunjungi blog ${post.slug}`"
                            class="absolute w-full h-full"></a>
                    </div>
                </div>

                <!-- Empty State -->
                <div v-if="filteredPosts.length === 0"
                    class="p-4 text-center col-span-full font-inter bg-lighthover dark:bg-graydark rounded-3xl">
                    <img id="notFoundGif" class="mx-auto w-60" src="/not-found.gif" alt="not-found" loading="lazy">
                    </img>
                    <h1 class="mt-4 text-3xl font-bold tracking-tight text-dark dark:text-graylight sm:text-5xl"> Tidak
                        ada
                        Blog</h1>
                    <p class="mt-6 text-base leading-7 text-grayhover dark:text-graylight">Coba ubah filter atau kata
                        kunci
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
    </section>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { posts as postsData } from '../data/posts.js';
import { categoriesPost } from '../data/categoriesPost';
import { users as usersData } from '../data/users';
import Breadcrumb from '../components/Breadcrumb.vue';
import GoToTop from '../components/GoToTop.vue';

export default {
    setup() {
        const route = useRoute();
        const authorPosts = ref([]);
        const user = ref(null);
        const loading = ref(true);
        const error = ref(null);

        // Filter states menggunakan Composition API
        const searchKeyword = ref('');
        const selectedCategory = ref('');
        const selectedSort = ref('newest'); // default terbaru
        const showFilterDropdown = ref(false);
        const currentPage = ref(1);
        const perPage = ref(6);

        const getPostByAuthor = () => {
            try {
                const username = route.params.username;

                if (!username) {
                    error.value = 'Username tidak ditemukan dalam parameter';
                    loading.value = false;
                    return;
                }

                const userData = usersData.find((u) => u.username === username);

                if (!userData) {
                    error.value = 'Data author tidak ditemukan';
                    loading.value = false;
                    return;
                }

                user.value = { ...userData };
                getAuthorPosts(username);
            } catch (err) {
                error.value = 'Terjadi kesalahan saat memuat data author';
                console.error('Error in getPostByAuthor:', err);
            } finally {
                loading.value = false;
            }
        };

        const getAuthorPosts = (username) => {
            try {
                const filteredPosts = postsData
                    .filter(p => p.author && p.author.username === username)
                    .map(p => {
                        const category = categoriesPost.find(c => c.slug === p.category?.slug);
                        return {
                            ...p,
                            category: category || { name: 'Tidak diketahui', slug: 'unknown' }
                        };
                    });

                authorPosts.value = filteredPosts;
            } catch (err) {
                error.value = 'Terjadi kesalahan saat memuat posts';
                console.error('Error in getAuthorPosts:', err);
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
        const searchPosts = () => {
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
            const category = categoriesPost.find(cat => cat.slug === typeSlug);
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
        const filteredPosts = computed(() => {
            let filtered = [...authorPosts.value];

            // Search filter
            if (searchKeyword.value) {
                filtered = filtered.filter(post =>
                    post.title?.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
                    post.name?.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
                    post.description?.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
                    post.content?.toLowerCase().includes(searchKeyword.value.toLowerCase())
                );
            }

            // Category filter
            if (selectedCategory.value) {
                filtered = filtered.filter(post => {
                    return post.category && post.category.slug === selectedCategory.value;
                });
            }

            // Sort filter berdasarkan waktu
            if (selectedSort.value === 'newest') {
                filtered = filtered.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
            } else if (selectedSort.value === 'oldest') {
                filtered = filtered.sort((a, b) => new Date(a.published_at) - new Date(b.published_at));
            }

            return filtered;
        });

        const totalPages = computed(() => {
            return Math.ceil(filteredPosts.value.length / perPage.value);
        });

        const paginatedPosts = computed(() => {
            const start = (currentPage.value - 1) * perPage.value;
            const end = start + perPage.value;
            return filteredPosts.value.slice(start, end);
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
            getPostByAuthor();
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
            user,
            authorPosts,
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
            searchPosts,
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
            filteredPosts,
            totalPages,
            paginatedPosts,
            hasActiveFilters,

            // Data for templates
            categoriesPost,

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