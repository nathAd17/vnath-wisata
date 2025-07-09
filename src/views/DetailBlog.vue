<template>
    <div class="min-h-screen max-w-screen-xl px-4 mx-auto font-inter">
        <div class="mb-8">
            <Breadcrumb />
        </div>
        <div v-if="post" class="content">
            <header class="max-w-2xl mx-auto my-4 text-center">
                <h2 class="inline-block p-2 mb-4 text-xs font-bold tracking-wider text-center uppercase rounded-full bg-primary font-poppins text-light"
                    aria-label="beranda">PESONA FLOBAMORA</h2>
                <h3 class="mx-auto mb-4 text-xl font-bold leading-none tracking-tight capitalize font-poppins text-primarydark dark:text-graylight sm:text-3xl"
                    aria-label="judul blog" title="judul blog"> {{ post.title }}</h3>
                <p class="my-4 text-base font-normal capitalize font-inter text-graydark dark:text-primarygray md:text-lg"
                    aria-label="quotes">"Terbenamlah dalam pesona Nusa Tenggara Timur yang Menggoda Anda dengan
                    Destinasi Wisata
                    yang Memukau dan Kaya Budaya!"</p>
                <div
                    class="flex items-center justify-center max-w-xl gap-2 my-4 text-sm font-inter text-graydark dark:text-primarygray sm:mx-auto">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                            clip-rule="evenodd" />
                    </svg>
                    <a :href="`/post?author=${post.author.username}`"
                        class="text-dark hover:underline dark:text-graylight">by {{ post.author.full_name }}</a>
                    <span>- {{ formatDate(post.published_at) }}</span>
                </div>
            </header>
            <section class="flex flex-col gap-6 px-3 mx-auto md:flex-row">
                <!-- {{-- section left --}} -->
                <section v-if="post.image" class="relative container-detail md:w-3/4">
                    <img id="elImg" class="mx-auto mb-6 h-56 w-full rounded-3xl object-cover sm:h-fit max-h-[25rem]"
                        :alt="post.title" :src="`/src/assets/${post.image.image}`" />
                    <button onclick="fullScreen()" type="button"
                        class="absolute p-2 text-sm font-medium text-center text-white duration-500 ease-in-out border rounded-full right-5 top-4 backdrop-blur-lg hover:scale-90 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        aria-label="gambar">
                        <svg class="w-5 h-5 text-white md:h-7 md:w-7" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="stroke-2"
                                d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5" />
                        </svg>
                    </button>
                    <div class="w-full px-2 mt-6 text-center md:mx-auto md:mb-2">
                        <!-- hal.deskripsi -->
                        <div class="relative px-2 mb-4 rounded-lg description md:mx-auto md:max-w-full lg:max-w-screen-xl"
                            id="deskripsi">
                            <article
                                class="container mt-4 text-sm prose text-left prose-li:text-primarydark md:prose-strong:text-base prose-strong:text-primarydark prose-strong:text-sm prose-strong:dark:text-graylight prose-li:dark:text-graylight prose-h3:dark:text-graylight prose-h2:dark:text-graylight prose-h2:text-primarydark dark:text-graylight font-inter text-primarydark md:text-base"
                                v-html="post.content">
                            </article>
                        </div>
                        <!-- akhir deskripsi -->
                    </div>
                </section>
                <!-- {{-- section right --}} -->
                <section
                    class="flex-row flex-wrap inline-block max-w-full p-1 mt-1 rounded-lg section-right h-3/4 md:w-1/3 md:flex-col font-roboto">
                    <div class="author-blog">
                        <h4
                            class="px-1.5 pb-4 text-left font-inter text-xl font-semibold text-dark dark:text-graylight">
                            Blog lain dari Penulis
                        </h4>
                        <!-- container List/Carousel -->
                        <div id="blogList"
                            class="relative inline-block max-w-full p-4 bg-gray-100 rounded-lg shadow-xl h-3/4 shadow-graylight dark:bg-graydark dark:shadow-dark">
                            <ol class="author-carousel *:!overflow-visible">

                                <li v-if="authorPosts.length === 0"
                                    class="flex flex-col items-center w-full gap-2 px-2 py-1 transition-all duration-300 ease-in-out cursor-pointer rounded-xl hover:scale-105 hover:bg-opacity-80 md:flex-row">
                                    <div class="basis-1/3 animate-pulse">
                                       <img src="https://placehold.co/400x300?text=Tidak\nditemukan&font=roboto" alt="not found" class="rounded-md">
                                    </div>
                                    <div class="basis-3/4">
                                        <h3 class="text-sm font-light text-dark dark:text-graylight"
                                            aria-label="judul blog">
                                            Tidak ditemukan Postingan lain dari Penulis
                                        </h3>
                                    </div>
                                </li>
                                <li v-for="other in authorPosts" :key="other.id" class="mb-4 ms-2 carousel-cell">
                                    <div class="flex justify-between mb-4 card-header">
                                        <span
                                            class="bg-emeraldmedium text-primarydark text-xs font-normal inline-flex items-center px-2.5 py-0.5 rounded">
                                            <svg class="w-3 h-3 mr-1" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4ZM5 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5Zm14 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4Z" />
                                            </svg>
                                            {{ other.category.name }}
                                        </span>
                                        <span
                                            class="inline-flex items-center rounded px-2 py-0.5 text-xs font-normal text-primarydark dark:text-graylight">
                                            <svg class="w-3 h-3 me-1" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            {{ formatDate(other.published_at) }}
                                        </span>
                                    </div>
                                    <div
                                        class="card-body my-2">
                                        <h3 class="text-lg font-medium text-primarydark dark:text-light">
                                            {{ other.title }}</h3>
                                        <p class="font-light text-sm"> 
                                        {{ truncateContent(other.content) }}
                                        </p>
                                    </div>
                                    <div class="my-2 card-footer">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center space-x-2">
                                                <img class="rounded-full w-7 h-7"
                                                    :src="`https://ui-avatars.com/api/?name=${other.author.username}`"
                                                    alt="Jese Leos avatar" />
                                                <span class="text-sm font-medium text-primarydark dark:text-white">
                                                    {{ other.author.full_name }}
                                                </span>
                                            </div>
                                            <a :href="`post/${other.slug}`"
                                                class="inline-flex items-center text-sm font-medium dark:text-emeraldmedium text-primaryhover hover:underline">
                                                Read More
                                                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                            <hr class="mt-3 border-graylight sm:mx-auto dark:border-gray-700" />

                            <div v-if="authorPosts.length > 3" class="mx-auto hover:underline underline-offset-4 text-center cta">
                                <a href="/" class="text-base text-blue-400 font-medium">Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { posts as postsData } from '../data/posts.js'
import { categoriesPost } from '../data/categoriesPost.js'
import Breadcrumb from '../components/Breadcrumb.vue'

export default {
    setup() {
        const route = useRoute()
        const post = ref(null)
        const authorPosts = ref([])

        const getPostDetail = () => {
            const slug = route.params.slug
            const data = postsData.find((p) => p.slug === slug)

            if (!data) {
                console.warn('Data post tidak ditemukan')
                return
            }

            const category = categoriesPost.find((c) => c.slug === data.category.slug)

            post.value = {
                ...data,
                category: category || { name: 'Tidak Diketahui' },
            }

            getAuthorPosts()

        }

        const getAuthorPosts = () => {
            if (!post.value) return

            // Filter posts berdasarkan author yang sama, exclude post yang sedang dibaca
            const otherPosts = postsData
                .filter(p => 
                    p.author.username === post.value.author.username && 
                    p.slug !== post.value.slug
                )
                .map(p => {
                    // Tambahkan kategori untuk setiap post
                    const category = categoriesPost.find(c => c.slug === p.category.slug)
                    return {
                        ...p,
                        category: category || { name: 'Tidak Diketahui' }
                    }
                })
                .sort((a, b) => new Date(b.published_at) - new Date(a.published_at)) // Urutkan berdasarkan tanggal terbaru
                .slice(0, 5) // Ambil maksimal 5 post

            authorPosts.value = otherPosts
        }

        const truncateContent = (content) => {
            if (!content) return ''
            // Hapus HTML tags dan batasi karakter
            const textContent = content.replace(/<[^>]*>/g, '')
            return textContent.length > 100 ? textContent.substring(0, 100) + '...' : textContent
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
            getPostDetail()
        })

        return {
            post,
            authorPosts,
            truncateContent,
            fullScreen
        }
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('id-ID', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            }).format(date);
        }
    },
    components: {
        Breadcrumb,
    }
}
</script>
