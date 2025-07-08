<template>
    <section class="relative mx-auto max-w-full pt-6 lg:max-w-screen-xl">
        <div class="absolute inset-0 -z-10 mt-8 h-full rounded-t-[3rem] bg-cover bg-fixed bg-center bg-no-repeat shadow-xl"
            style="background-image: url('/src/assets/destinasi/air-terjun-oenesu.png')" role="img"
            aria-label="background-wisata">
        </div>
        <div class="mx-auto mt-2 max-w-xl text-center lg:max-w-2xl">
            <div class="mb-6 mt-2 text-center">
                <h2 class="relative my-8 inline-block rounded-full bg-light p-2 text-center font-poppins text-xs font-bold uppercase tracking-wider text-primarydark shadow-lg dark:bg-primarydark dark:text-light"
                    role="heading" aria-level="2">
                    PESONA FLOBAMORA
                </h2>
                <div class="mb-4 max-w-4xl">
                    <h1 class="inline-block font-poppins text-xl font-bold leading-none tracking-normal text-light sm:text-4xl"
                        role="heading" aria-level="1">
                        Jelajahi Keindahan Nusantara: Temukan Perjalanan Tak Terlupakan di Bumi Flobamora
                    </h1>
                </div>
                <h2 class="font-inter text-base font-medium text-graylight md:text-lg" role="heading" aria-level="2">
                    Nikmati pesona alam Indonesia yang memukau dengan destinasi menakjubkan di Flobamora. Temukan
                    perjalanan yang sempurna dan buat kenangan luar biasa di salah satu surga tropis ini.
                </h2>
            </div>
            <router-link to="/destinasi"
                class="group relative isolation-auto z-10 mx-auto mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-light bg-transparent px-2 py-1 font-inter text-base text-light backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-primary before:transition-all before:duration-700 hover:text-light before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 md:px-4 md:py-2 md:text-lg lg:font-semibold"
                aria-label="jelajahi destinasi">Jelajahi
                <svg class="h-8 w-8 rotate-45 justify-end rounded-full border border-light p-2 text-light duration-300 ease-linear group-hover:rotate-90 group-hover:bg-light"
                    viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        class="fill-light group-hover:fill-dark dark:fill-light" />
                </svg>
            </router-link>
            <!-- Popover Button -->
            <div class="absolute left-4 top-12 group font-inter">
                <button type="button"
                    class="rounded-full p-2 text-white backdrop-blur-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform group-hover:-translate-y-1"
                    aria-label="Info gambar">
                    <svg class="h-7 w-7 text-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>

                <!-- Popover Panel -->
                <div
                    class="invisible absolute z-10 mt-3 w-56 rounded-lg border border-gray-200 bg-white text-sm text-gray-600 shadow-md opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 dark:bg-gray-800 dark:text-light">
                    <div class="p-4 space-y-2">
                        <h2 class="text-base font-semibold text-dark dark:text-light">Info Background Gambar</h2>
                        <p>Wisata: Air Terjun Oenesu</p>
                        <router-link to="/destinasi/air-terjun-oenesu"
                            class="inline-flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400">
                            Kunjungi
                            <svg class="ml-1 h-3 w-3 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </router-link>
                    </div>

                    <!-- Arrow -->
                       <div class="absolute -top-[0.50rem] left-3 h-0 w-0 -translate-x-1/2 border-b-8 border-l-8 border-r-8 border-transparent border-b-gray-100 dark:border-b-gray-800"></div>
                </div>
            </div>

        </div>
        <section class="mt-16 bg-transparent -mb-4 pt-4 px-4 backdrop-blur sm:pt-6 sm:px-6">
            <div class="mx-auto max-w-screen-xl font-inter">
                <div class="flex flex-col flex-wrap gap-x-10 lg:flex-row lg:flex-nowrap lg:justify-between">
                    <div class="mx-auto my-2 max-w-xl text-center text-light md:mb-0 lg:text-left">
                        <a href="/" class="flex items-center justify-center lg:justify-start" title="beranda"
                            aria-label="Kembali ke Beranda">
                            <img src="/src/assets/logo.png" class="mr-2 h-12" alt="Pesona Flobamora Logo" />
                            <span class="self-center whitespace-nowrap font-inter text-xl font-medium">Pesona
                                Flobamora</span>
                        </a>
                        <p class="my-2 text-base font-medium" title="deskripsi">Gerbang menuju pesona alam yang memukau,
                            kekayaan budaya yang mengakar, dan petualangan epik di lanskap magis
                            Flobamora.</p>
                    </div>
                    <div class="mt-6 flex flex-wrap justify-between gap-8 sm:flex-nowrap sm:justify-center lg:gap-14">
                        <nav>
                            <h3 class="mb-6 text-sm font-semibold uppercase text-light" title="navigasi">
                                Navigasi
                            </h3>
                            <ul class="flex flex-col gap-3 text-lighthover">
                                <li>
                                    <router-link to="/" class="hover:underline"
                                        aria-label="menu-beranda">Beranda</router-link>
                                </li>
                                <li>
                                    <router-link to="/destinasi" class="hover:underline"
                                        aria-label="menu-destinasi">Destinasi</router-link>
                                </li>
                                <li>
                                    <router-link to="/blog" class="hover:underline"
                                        aria-label="menu-blog">Blog</router-link>
                                </li>
                                <li>
                                    <router-link to="/kontak" class="hover:underline"
                                        aria-label="menu-kontak">Kontak</router-link>
                                </li>
                            </ul>
                        </nav>
                        <nav>
                            <h3 class="mb-6 text-sm font-semibold uppercase text-light">Sosial Media
                            </h3>
                            <ul class="flex flex-col gap-3 text-lighthover">
                                <li>
                                    <a href="https://instagram.com" class="hover:underline"
                                        aria-label="Instagram">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://facebook.com" class="hover:underline"
                                        aria-label="Facebook">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://twiter.com" class="hover:underline" aria-label="X">X</a>
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <h3 class="mb-6 text-sm font-semibold uppercase text-light" title="kontak">Hubungi Kami</h3>
                            <ul class="flex flex-col gap-3 text-wrap text-lighthover">
                                <li>
                                    <a href="#" class="text-wrap hover:underline"
                                        aria-label="email">pesonaflobamora@mail.co</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline" aria-label="telepon">+62801234567890</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline" aria-label="alamat">Kupang Barat, Kab.Kupang -
                                        NTT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-full text-center">
                    <h1
                        class="font-poppins text-[2.5rem] tracking-widest font-bold text-light sm:text-[5.5rem] md:text-[6rem] lg:text-[8.5rem] xl:text-[11.5rem] xl:tracking-wide">
                        FLOBAMORA</h1>
                </div>
                <hr class="my-2 border-gray-200 sm:mx-auto lg:my-4" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="text-center">
                        <span class="text-center text-sm text-light" aria-label="Copyright">© 2024 Hak Cipta | <a
                                href="/" class="text-center hover:underline">Pesona Flobamora</a>.
                            Develop By
                            <a href="https://vnath-portfolio.vercel.app/" target="_blank"
                                class="text-center hover:underline" aria-label="developer">NathDev</a>
                        </span>
                    </div>
                    <div class="mt-4 flex justify-center space-x-6 text-sm sm:mt-0">
                        <a href="#" class="text-light hover:text-lighthover hover:underline"
                            aria-label="privacy-policy">
                            Privay Policy
                        </a>
                        <a href="#" class="text-light hover:text-lighthover hover:underline"
                            aria-label="terms-conditions">
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
