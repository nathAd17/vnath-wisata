<template>
<div class="absolute -z-50">
        <div class="w-screen overflow-y-auto isolate h-dvh font-inter ">
            <svg class="absolute -top-[23em] -z-10 h-full w-full stroke-grayhover [mask-image:radial-gradient(100%_100%_at_top_right,gray,black,transparent)] dark:stroke-light/10"
                aria-hidden="true">
                <defs>
                    <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="100%" y="-1"
                        patternUnits="userSpaceOnUse">
                        <path d="M.5 200V.5H200" fill="none"></path>
                    </pattern>
                </defs>
                <svg x="50%" y="-1" class="overflow-visible fill-light dark:fill-darkhover/20">
                    <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                        stroke-width="0"></path>
                </svg>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)">
                </rect>
            </svg>
            <div class="absolute left-0 top-10 -z-10 hidden transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                aria-hidden="true">
                <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                    style="clip-path:polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)">
                </div>
            </div>
        </div>
    </div>
    <section class="bg-transparent font-inter">

        <div class="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
            <div class="w-full ">
                <div class="flex flex-col items-center max-w-lg mx-auto text-center">
                    <p class="text-sm font-medium text-primary dark:text-primarylight">404 |
                        Not Found</p>
                    <h1 class="mt-3 text-2xl font-semibold text-dark dark:text-white md:text-3xl"> Halaman yang Anda cari tidak dapat ditemukan. </h1>
                    <p class="mt-4 text-base font-normal text-grayhover dark:text-primarygray">Silakan periksa kembali URL atau kembali ke beranda.</p>

                    <div class="flex items-center justify-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                        <button
                            class="flex items-center justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 bg-white border rounded-lg text-dark dark:text-lighthover gap-x-2 sm:w-auto dark:hover:bg-dark dark:bg-gray-900 hover:bg-light dark:border-dark" onclick="history.back()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <span>Kembali</span>
                        </button>

                        <a href="/"
                            class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg bg-primary shrink-0 sm:w-auto hover:bg-emerald-600 dark:hover:bg-primary dark:bg-emerald-600">
                            Beranda
                    </a>
                    </div>
                </div>

                <div class="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="p-6 rounded-lg shadow-xl bg-emeraldlight dark:bg-dark shadow-graydark/15">
                        <span class="text-grayhover dark:text-primarygray">
                            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z" />
                            </svg>
                        </span>

                        <h3 class="mt-6 font-medium text-dark dark:text-lighthover ">Destinasi</h3>

                        <p class="mt-2 text-grayhover dark:text-primarygray ">Temukan destinasi wisata menarik yang menanti untuk dijelajahi.
                        </p>

                        <a href="/destinasi"
                            class="inline-flex items-center mt-4 text-sm text-primary gap-x-2 dark:text-primarylight hover:underline">
                            <span>Jelajah Wisata</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>

                    <div class="p-6 rounded-lg shadow-xl bg-emeraldlight dark:bg-dark shadow-graydark/15">
                        <span class="text-grayhover dark:text-primarygray">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>
                        </span>

                        <h3 class="mt-6 font-medium text-dark dark:text-lighthover ">Blog Kami</h3>

                        <p class="mt-2 text-grayhover dark:text-primarygray ">Baca cerita dan tips perjalanan terbaik dari kami.</p>

                        <a href="/post"
                            class="inline-flex items-center mt-4 text-sm text-primary gap-x-2 dark:text-primarylight hover:underline">
                            <span>Kunjungi Blog</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>

                    <div class="p-6 rounded-lg shadow-xl bg-emeraldlight dark:bg-dark shadow-graydark/15">
                        <span class="text-grayhover dark:text-primarygray">
                            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z" />
                            </svg>
                        </span>

                        <h3 class="mt-6 font-medium text-dark dark:text-lighthover ">Kontak</h3>

                        <p class="mt-2 text-grayhover dark:text-primarygray ">Hubungi kami untuk bantuan atau informasi lebih lanjut.</p>

                        <a href="/kontak"
                            class="inline-flex items-center mt-4 text-sm text-primary gap-x-2 dark:text-primarylight hover:underline">
                            <span>Hubungi kami</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/')
    },
    
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>