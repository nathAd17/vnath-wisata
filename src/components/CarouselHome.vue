<template>
    <section class="max-w-full mx-auto container-home lg:max-w-screen-xl">
        <div
            class="home relative mx-auto mt-4 flex w-full flex-col items-center justify-center rounded-[3rem] bg-secondary py-32 shadow-2xl lg:py-[260px]">
            <img v-for="(tour, index) in topFiveRandomTours" :key="index" :src="`src/assets/${tour.image.image}`"
                :alt="`gambar wisata ${tour.name}`" class="img-slide rounded-[3rem] h-screen"
                :class="{ active: index === currentSlide }" loading="lazy" />

            <div v-for="(tour, index) in topFiveRandomTours" :key="'content-' + index"
                class="relative content z-[777] text-light w-[80%] lg:max-w-screen-lg xl:max-w-screen-xl max-w-full md:mx-auto lg:px-0 my-12"
                :class="{ 'hidden': index !== currentSlide, 'active': index === currentSlide }">
                <div class="text-center text-wrap">
                    <h1
                        class="mb-4 text-4xl font-bold leading-tight tracking-wide text-center text-transparent uppercase text-stroke text-wrap font-poppins lg:text-7xl">
                        <span class="text-4xl font-poppins text-light lg:text-7xl">Pesona</span><br />
                        {{ tour.name }}
                    </h1>
                    <a :href="`https://www.google.com/maps/place/${tour.location} - ${tour.regency.name}`"
                        class="block my-4 text-base font-medium text-white capitalize font-inter hover:text-lighthover md:font-semibold">
                        {{ tour.location }} - Kab.{{ tour.regency.name }}
                    </a>
                    <a :href="tour.url"
                        class="relative z-10 inline-flex items-center justify-center gap-2 px-2 py-1 mx-auto mt-2 overflow-hidden text-base bg-transparent border-2 rounded-full cursor-pointer group isolation-auto border-light font-inter text-light backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-primary before:transition-all before:duration-700 hover:text-light before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 md:px-4 md:py-2 md:text-lg lg:font-semibold"
                        aria-label="detail-wisata"> Jelajahi
                        <svg class="justify-end w-8 h-8 p-2 duration-300 ease-linear rotate-45 border rounded-full border-light text-light group-hover:rotate-90 group-hover:bg-light"
                            viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                class="fill-light group-hover:fill-dark dark:fill-light" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="absolute mx-auto text-center typing-box md:left-4">
                <p class="font-bold line animation-typing font-inter text-light">PESONA FLOBAMORA</p>
            </div>

            <div class="slider-navigation">
                <div class="flex items-center justify-start gap-2 my-4">
                    <button @click="prevSlide"
                    class="p-2 duration-300 ease-in-out bg-transparent border rounded-full nav-arrow prev border-dark text-cyan-500 backdrop-blur-3xl hover:bg-light hover:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light"
                    aria-label="previous">
                    <svg class="w-4 h-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
                <button @click="nextSlide"
                    class="p-2 duration-300 ease-in-out bg-transparent border rounded-full nav-arrow next border-dark text-cyan-500 backdrop-blur-3xl hover:bg-light hover:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light"
                    aria-label="next">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
                </div>
            </div>

            <div class="dot-nav absolute right-2 z-[888] m-auto mt-12 flex flex-col gap-2">
                <div v-for="(tour, index) in topFiveRandomTours" :key="'dot-' + index" class="nav-btn"
                    :class="{ active: index === currentSlide }" @click="goToSlide(index)"></div>
            </div>
        </div>
    </section>
</template>

<script>
import { tours } from '../data/tours';

export default {
    data() {
        return {
            currentSlide: 0,
            interval: null,
            tours,
            topFiveRandomTours: [],
        };
    },
    mounted() {
        this.filterAndShuffleTopTours();
        this.startCarousel();
    },
    methods: {
        filterAndShuffleTopTours() {
            // Filter data dengan topWisata = 1
            const filteredTours = this.tours.filter(tour => tour.topWisata === 1);

            // Shuffle array secara acak menggunakan Fisher-Yates algorithm
            const shuffled = [...filteredTours];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }

            // Ambil maksimal 5 data
            this.topFiveRandomTours = shuffled.slice(0, 5);
        },
        nextSlide() {
            // Perbaikan: menggunakan topFiveRandomTours.length bukan tours.length
            this.currentSlide = (this.currentSlide + 1) % this.topFiveRandomTours.length;
        },
        prevSlide() {
            // Perbaikan: menggunakan topFiveRandomTours.length bukan tours.length
            this.currentSlide = (this.currentSlide - 1 + this.topFiveRandomTours.length) % this.topFiveRandomTours.length;
        },
        goToSlide(index) {
            this.currentSlide = index;
            this.restartCarousel();
        },
        startCarousel() {
            // Hanya mulai carousel jika ada data
            if (this.topFiveRandomTours.length > 0) {
                this.interval = setInterval(this.nextSlide, 5000);
            }
        },
        stopCarousel() {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        },
        restartCarousel() {
            this.stopCarousel();
            this.startCarousel();
        },
    },
    beforeUnmount() {
        // Cleanup interval saat component di-unmount
        this.stopCarousel();
    },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
    @keyframes typing {
        0% {
            width: 0;
        }

        80% {
            width: 11em;
        }

        /* Animasi selesai di 80% */
        100% {
            width: 11em;
        }
    }

    .line {
        position: relative;
        width: 1;
        height: auto;
        border-right: 2px solid rgba(255, 255, 255, .75);
        margin: 0 auto;
        font-size: 100%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
    }

    .typing-box {
        position: absolute;
        top: 0;
        margin: 4px 0;
    }
}

@media screen and (min-width: 768px) {
    @keyframes typing {
        0% {
            height: 0;
        }

        80% {
            height: 20em;
        }

        /* Animasi selesai di 80% */
        100% {
            height: 20em;
        }
    }

    .line {
        position: relative;
        width: auto;
        height: 15em;
        margin: 0 auto;
        font-size: 110%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-orientation: upright;
        writing-mode: vertical-rl;
    }
}

.animation-typing {
    animation: typing 5s steps(40) 1s infinite normal;
}

.home:before {
    z-index: 777;
    content: '';
    position: absolute;
    background: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.home .content.active {
    display: block;
}

.home .content .text-stroke {
    -webkit-text-stroke: 2px #10b981;
}

.home .content .text-stroke span {
    -webkit-text-stroke: initial;
}

.home .content .text-shadow {
    text-shadow: 1px 1px 2px rgb(39, 214, 162), 0 0 1em black, 0 0 0.2em black;
}

.home .media-icons a {
    color: #fff;
    font-size: 1.6em;
    transition: 0.3s ease;
}

.home .media-icons a:not(:last-child) {
    margin-bottom: 20px;
}

.home .media-icons a:hover {
    transform: scale(1.3);
    color: #09a6d4;
}

.home img {
    z-index: 000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slider-navigation {
    z-index: 888;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    transform: translateY(80px);
    margin-bottom: 12px;
}

@media (min-width: 768px) {
    .dot-nav .nav-btn {
        width: 12px;
        height: 12px;
        background: #fff;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
        transition: 0.3s ease;
    }

    .dot-nav .nav-btn.active {
        background: #00c73c;
    }

    .dot-nav .nav-btn:not(:last-child) {
        margin-right: 20px;
    }

    .dot-nav .nav-btn:hover {
        transform: scale(1.2);
    }
}

.img-slide {
    position: absolute;
    width: 100%;
    clip-path: circle(0% at 0 50%);
}

.img-slide.active {
    clip-path: circle(150% at 0 50%);
    transition: 2s ease;
    transition-property: clip-path;
}

@media (max-width: 1040px) {
    .home {
        padding: 100px 20px;
    }
}

@media (max-width: 560px) {
    .home .content .text-stroke {
        -webkit-text-stroke: 2px #10b981;
    }
}

.card:before {
    content: '';
    position: absolute;
    z-index: 999;
    top: -26px;
    right: -26px;
    background: linear-gradient(135deg, #1c6448, #235f42);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 1s ease-out;
}

.card:hover:before {
    transform: scale(28);
}
</style>