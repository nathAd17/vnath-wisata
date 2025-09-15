<template>
    <section id="islands"
        class="relative mx-auto mt-16 rounded-[3rem] bg-primaryhover px-4 py-16 dark:bg-primarydark md:px-10 lg:max-w-screen-xl lg:px-10 lg:py-20 xl:mx-auto xl:px-20">
        <div class="assets">
            <img src="/assets/aircraft.svg" class="invisible absolute right-0 z-10 h-12 w-12 md:visible"
                alt="air-craft" />
            <img src="/assets/airballoon.svg"
                class="invisible absolute left-14 top-56 z-10 h-16 w-16 rotate-12 md:visible" alt="air-balloon" />
            <img src="/assets/cloudy.svg" class="absolute left-1/2 top-4 z-10 h-16 w-16 rotate-12" alt="cloud" />
        </div>
        <div class="mx-auto mb-10 max-w-xl sm:text-center md:mb-12 lg:max-w-2xl">
            <div class="mx-auto mb-5 max-w-xl text-center lg:max-w-2xl">
                <h2 class="mb-2 inline-block rounded-full bg-primarydark p-2 text-center font-poppins text-xs font-bold uppercase tracking-wider text-light shadow-xl dark:bg-primary md:mb-4"
                    role="heading" aria-level="2">
                    PESONA FLOBAMORA
                </h2>
                <div class="mb-4">
                    <h1 class="inline-block max-w-2xl font-poppins text-xl font-bold leading-tight text-light dark:text-lighthover md:text-3xl"
                        role="heading" aria-level="1">
                        Jelajahi Keindahan Alam Indonesia: Berbagai Pulau di Bumi Flobamora dengan Ragam Wisata Alam
                        yang
                        Memukau
                    </h1>
                </div>
                <p class="font-inter text-base font-normal text-lighthover dark:text-graylight" role="heading"
                    aria-level="2">
                    Keliling Flobamora dan Rasakan Pesona Alam Indonesia yang Menakjubkan
                </p>
            </div>
        </div>
        <div class="mx-auto grid gap-6 px-4 sm:grid-cols-2 md:max-w-full lg:max-w-screen-xl lg:grid-cols-3 lg:gap-10">
            <div v-for="island in islandData" :key="island.id"
                class="card relative transform overflow-hidden rounded-3xl shadow-xl transition duration-300 hover:shadow-2xl hover:shadow-dark lg:hover:-translate-y-2">
                <img class="h-56 w-full object-cover hover:hidden md:h-64 xl:h-80"
                    :src="`/assets/${island.image}` || `https://placehold.co/600x400/000000/FFF?text=${island.name}`"
                    :alt="`Pulau ${island.name}`" loading="lazy" />
                <h3 class="absolute left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#27272782] px-3 py-2 text-center font-poppins text-lg font-bold capitalize text-light hover:hidden"
                    :aria-label="`pulau-${island.name}`">
                    Pulau
                    {{ island.name }}
                </h3>
                <div
                    class="absolute inset-0 z-[9999] flex flex-col justify-center bg-primarydark bg-opacity-95 px-5 py-4 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <h1 class="card-title mb-2 font-rubik text-lg font-medium capitalize text-light md:mb-4 lg:font-bold"
                        role="heading" aria-level="2" :aria-label="`pulau-${island.name}`">Pulau {{ island.name }}
                    </h1>
                    <p class="lg:text-md small-desc mb-2 font-inter text-sm font-normal tracking-wide text-light lg:mb-4 lg:font-medium"
                        aria-label="deskripsi">
                        Jelajahi keindahan Pulau
                        <span class="capitalize">{{ island.name }}</span> melalui
                        {{ getDestinationCount(island.name) }} Kabupaten/Kota yang ada dengan ciri khas tersendiri dan nikmati
                        keindahan alam yang menakjubkan melalui destinasi wisata yang ada.
                    </p>
                    <div class="flex items-center justify-center space-x-3">
                        <a :href="`/destinasi/pulau/${island.name}`"
                            class="relative isolation-auto z-10 overflow-hidden rounded-md border-2 border-light bg-light px-8 py-2 font-inter capitalize before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-primarydark before:transition-all before:duration-700 hover:text-light before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 dark:bg-primary dark:text-light lg:font-semibold"
                            role="link" :aria-label="`jelajah-pulau-${island.name}`">Jelajahi Pulau {{ island.name }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import { islands } from '../data/islands';
import { tours } from '../data/tours';
export default {
    data() {
        return {
            islands,
            tours,
        }
    },

    computed: {
        islandData() {
            return this.islands;
        },

        // mapping jumlah destinasi by island
        destinationCountByIsland() {
            const countMap = {};

            this.islands.forEach(island => {
                countMap[island.name] = 0;
            });

            this.tours.forEach(tour => {
                if(tour.island && tour.island.name) {
                    countMap[tour.island.name] = (countMap[tour.island.name] || 0) +1;
                }
            });

            return countMap;
        }
    },

    methods: {
        // get jumlah destinasi by island name
        getDestinationCount(islandName) {
            return this.destinationCountByIsland[islandName] || 0;
        },

        // filtering
        getDestinationCountDirect(islandName) {
            return this.tours.filter(tour => 
                tour.island && tour.island.name === islandName
            ).length;
        },

        // get semua destinasi by island name
        getDestinationByIsland(islandName) {
            return this.tours.filter(tour => 
                tour.island && tour.island.name === islandName
            );
        }

    }
}
</script>