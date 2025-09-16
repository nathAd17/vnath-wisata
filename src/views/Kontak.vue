<template>
<section class="relative mx-auto my-2 h-full lg:max-w-screen-xl">
        <!-- Background Hero Section -->
        <div class="mx-auto my-6 h-full rounded-[3rem] bg-gray-500 bg-opacity-100 bg-cover bg-fixed bg-center bg-no-repeat bg-blend-multiply lg:max-w-screen-xl"
             style="background-image: url('/assets/pulau-padar.jpg');">
            
            <!-- Header Section -->
            <div class="max-w-xl mx-auto my-6 sm:text-center md:mb-4 lg:max-w-2xl">
                <div class="max-w-xl py-10 mx-auto text-center lg:max-w-2xl">
                    <h2 class="inline-block p-2 mb-4 text-xs font-bold tracking-wider text-center uppercase rounded-full bg-light font-poppins text-primarydark">
                        PESONA FLOBAMORA
                    </h2>
                    <div class="mb-3">
                        <h1 class="inline-block max-w-2xl text-xl font-semibold leading-none tracking-normal font-poppins text-light sm:text-3xl">
                            Hubungi Kami: Jelajahi Bersama, Raih Pengalaman Tak Terlupakan!
                        </h1>
                    </div>
                    <p class="text-base font-normal font-inter text-graylight">
                        Kami siap membantu setiap langkah perjalanan Anda di Bumi Flobamora. Jika ada pertanyaan, saran, atau bantuan yang Anda butuhkan, jangan ragu untuk menghubungi kami!
                    </p>
                </div>
            </div>
            <!-- Popover Button -->
            <div class="absolute left-4 top-4 group font-inter">
                <button type="button"
                    class="p-2 text-white transition-transform rounded-full backdrop-blur-lg focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:-translate-y-1"
                    aria-label="Info gambar">
                    <svg class="h-7 w-7 text-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>

                <!-- Popover Panel -->
                <div
                    class="absolute z-10 invisible w-56 mt-3 text-sm text-gray-600 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-md opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-gray-800 dark:text-light">
                    <div class="p-4 space-y-2">
                        <h2 class="text-base font-semibold text-dark dark:text-light">Info Background Gambar</h2>
                        <p>Wisata: Air Terjun Oenesu</p>
                        <router-link to="/destinasi/air-terjun-oenesu"
                            class="inline-flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400">
                            Kunjungi
                            <svg class="w-3 h-3 ml-1 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </router-link>
                    </div>

                    <!-- Arrow -->
                       <div class="absolute -top-[0.50rem] left-3 h-0 w-0 -translate-x-1/2 border-b-8 border-l-8 border-r-8 border-transparent border-b-gray-200"></div>
                </div>
            </div>

            <div class="container flex flex-col flex-1 px-4 py-4 mx-auto my-6">
                <div class="justify-between flex-1 lg:mx-12 lg:flex lg:items-center">
                    <!-- Contact Info Section -->
                    <div class="relative lg:mx-2 lg:w-1/2">
                        <ol class="w-full my-4 font-inter">
                            <!-- Phone Contact -->
                            <li>
                                <div class="w-full p-2 text-primarydark">
                                    <div class="flex items-center justify-start gap-2">
                                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                                        </svg>
                                        <p class="text-lg font-semibold text-light">Hubungi Kami</p>
                                    </div>
                                    <p class="px-8 py-2 text-sm text-light">
                                        +62 80123456789, +62 81234567890
                                    </p>
                                </div>
                            </li>
                            
                            <!-- Location -->
                            <li>
                                <div class="w-full p-2 my-2 text-primarydark">
                                    <div class="flex items-center justify-start gap-2">
                                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                                        </svg>
                                        <p class="text-lg font-semibold text-light">Lokasi</p>
                                    </div>
                                    <p class="px-8 py-2 text-sm text-light">
                                        Kupang Barat, Kab. Kupang, Nusa Tenggara Timur
                                    </p>
                                </div>
                            </li>
                            
                            <!-- Social Media -->
                            <li class="flex items-center justify-start gap-2 p-2">
                                <div class="flex items-center justify-start gap-2">
                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                                    </svg>
                                    <p class="text-lg font-semibold text-light">Terhubung dengan kami</p>
                                </div>
                            </li>
                            
                            <!-- Social Media Buttons -->
                            <li class="px-10 py-2">
                                <button type="button" class="inline-flex items-center px-2 py-2 mb-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg me-2 hover:bg-green-100 focus:outline-none focus:ring-4 focus:ring-gray-100">
                                    <svg class="w-6 h-5 -ms-1 me-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                                    </svg>
                                    Instagram
                                </button>
                                <button type="button" class="inline-flex items-center px-2 py-2 mb-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg me-2 hover:bg-green-100 focus:outline-none focus:ring-4 focus:ring-gray-100">
                                    <svg class="w-6 h-5 -ms-1 me-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                                    </svg>
                                    Facebook
                                </button>
                                <button type="button" class="inline-flex items-center px-2 py-2 mb-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg me-2 hover:bg-green-100 focus:outline-none focus:ring-4 focus:ring-gray-100">
                                    <svg class="w-6 h-5 -ms-1 me-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                                    </svg>
                                    X
                                </button>
                            </li>
                        </ol>
                    </div>

                    <!-- Contact Form Section -->
                    <div class="mt-8 font-inter lg:mx-2 lg:w-1/2">
                        <div class="relative w-full px-8 py-10 mx-auto overflow-hidden bg-transparent shadow-2xl rounded-3xl backdrop-blur-md lg:max-w-2xl">
                            <h1 class="text-xl font-medium text-center text-teal-100">Hubungi Kami</h1>
                            <p class="mt-2 text-center text-teal-50">Hubungi kami untuk informasi lebih lanjut</p>
                            
                            <!-- Success Alert -->
                            <div v-if="success"  id="successAlert" class="absolute right-3 top-3 z-50 transition-all duration-300 ease-in-out">
                                <div class="relative px-4 py-3 text-green-700 bg-green-100 border border-green-400 rounded-xl shadow-lg">
                                    <button onclick="closeAlert('successAlert')" class="absolute top-1 right-2 text-green-700 hover:text-green-900">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                    <div class="flex items-center py-1.5">
                                        <svg class="w-5 h-5 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span id="successMessage">Pesan Anda berhasil dikirim!</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Error Alert -->
                            <div id="errorAlert" v-if="error" class="absolute right-3 top-3 z-50 transition-all duration-300 ease-in-out">
                                <div class="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded-xl shadow-lg">
                                    <button onclick="closeAlert('errorAlert')" class="absolute top-1 right-2 text-red-700 hover:text-red-900">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                    <div class="flex items-center">
                                        <svg class="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span id="errorMessage">Terjadi kesalahan saat mengirim pesan.</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Contact Form -->
                            <form @submit.prevent="submitForm" id="contactForm" class="flex flex-col mt-6">
                                <!-- Name Field -->
                                <div class="flex-1">
                                    <label for="name" class="block mb-2 text-sm text-teal-50">Nama Lengkap</label>
                                    <input
                                    v-model="form.name"
                                        id="name" 
                                        type="text" 
                                        name="name"
                                        placeholder="Cth. John Doe"
                                        class="block w-full p-3 mt-2 bg-white border border-gray-200 rounded-md text-gray-900 focus:border-primary focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-40"
                                        required
                                    />
                                    <div id="nameError" class="hidden mt-1 text-sm text-red-300"></div>
                                </div>

                                <!-- Email Field -->
                                <div class="flex-1 mt-6">
                                    <label for="email" class="block mb-2 text-sm text-teal-50">Email</label>
                                    <input
                                    v-model="form.email"
                                        id="email" 
                                        type="email" 
                                        name="email"
                                        placeholder="Cth. john@mail.com"
                                        class="block w-full p-3 mt-2 bg-white border border-gray-200 rounded-md text-gray-900 focus:border-primary focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-40"
                                        required
                                    />
                                    <div id="emailError" class="hidden mt-1 text-sm text-red-300"></div>
                                </div>

                                <!-- Message Field -->
                                <div class="w-full my-6">
                                    <label for="comment" class="block mb-2 text-sm text-teal-50">Pesan</label>
                                    <textarea
                                    v-model="form.comment"
                                        id="comment" 
                                        name="comment"
                                        placeholder="Tulis pesan Anda di sini..."
                                        class="block w-full h-32 p-3 mt-2 bg-white border border-gray-200 rounded-md text-gray-900 focus:border-primary focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-40 md:h-48"
                                        required
                                    ></textarea>
                                    <div id="commentError" class="hidden mt-1 text-sm text-red-300"></div>
                                </div>

                                <!-- Submit Button -->
                                <button 
                                    type="submit" 
                                    id="submitBtn"
                                    :disabled="loading"
                                    class="relative z-10 flex items-center justify-center gap-3 px-8 py-3 mt-4 text-center transition-all duration-300 ease-in-out border-2 rounded-md border-teal-50 bg-primary font-inter text-light hover:bg-primarydark hover:border-blue-300 lg:font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <svg v-if="loading"
                                        id="loadingSpinner"
                                        class="hidden w-5 h-5 text-white animate-spin"
                                        fill="none" 
                                        viewBox="0 0 24 24"
                                    >
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>{{ loading ? "Mengirim..." : "Kirim Pesan" }}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  comment: "",
});

const loading = ref(false);
const success = ref(false);
const error = ref(false);

const submitForm = async () => {
  loading.value = true;
  success.value = false;
  error.value = false;

  try {
    const createdAt = new Date().toLocaleString("id-ID", {
      dateStyle: "short",
      timeStyle: "medium",
    });

    const res = await fetch("https://api.sheetmonkey.io/form/q892fcascpZMGbr5FPiCaZ", {
      method: "POST",
      body: JSON.stringify({
        Name: form.value.name,
        Email: form.value.email,
        Comment: form.value.comment,
        Created_at: createdAt,
        Source: "vnath-wisata"
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      success.value = true;
      form.value = { name: "", email: "", comment: "" };
      setTimeout(() => (success.value = false), 4000);
    } else {
      error.value = true;
      setTimeout(() => (error.value = false), 4000);
    }
  } catch (e) {
    error.value = true;
    setTimeout(() => (error.value = false), 4000);
  } finally {
    loading.value = false;
  }
};
</script>