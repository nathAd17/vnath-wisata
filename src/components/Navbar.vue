<template>
  <nav class="relative m-2 container-nav">
    <div class="max-w-screen-xl mx-auto">
      <div class="flex flex-wrap items-center justify-between py-4">
        <!-- Logo Section -->
        <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" class="h-12 md:h-16" alt="Logo Pesona Flobamora" loading="lazy"/>
          <span class="self-center text-xl font-medium md:text-2xl text-primarydark whitespace-nowrap dark:text-primarylight font-pacifico">
            Pesona Flobamora
          </span>
        </router-link>

        <!-- Right Side Controls -->
        <div class="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <!-- Dark Mode Toggle -->
          <label class="relative inline-flex items-center cursor-pointer" for="dark-toggle">
            <input 
              class="hidden peer" 
              id="dark-toggle" 
              type="checkbox" 
              v-model="isDarkMode"
              @change="toggleDarkMode"
            />
            <div class="relative w-[85px] h-[35px] bg-lighthover peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[30px] after:h-[30px] after:bg-gradient-to-r from-green-500 to-gray-300 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-500 after:rounded-full after:top-[3px] after:left-[3px] active:after:w-[30px] peer-checked:after:left-[80px] peer-checked:after:translate-x-[-100%] shadow-lg duration-300 after:duration-300 after:shadow-md">
            </div>
            
            <!-- Sun Icon -->
            <svg height="0" width="90" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              class="fill-white peer-checked:opacity-60 absolute w-5 h-5 left-[8px]">
              <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z">
              </path>
            </svg>
            
            <!-- Moon Icon -->
            <svg height="512" width="512" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              class="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-5 h-5 right-[10px]">
              <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z">
              </path>
            </svg>
          </label>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu" 
            type="button"
            class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            :class="{ 'bg-gray-100 dark:bg-gray-700': isMobileMenuOpen }"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Hamburger Icon -->
            <svg 
              class="w-5 h-5 transition-transform duration-300" 
              :class="{ 'rotate-90': isMobileMenuOpen }"
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none"
              viewBox="0 0 17 14"
            >
              <path 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" 
              />
            </svg>
          </button>
        </div>

        <!-- Desktop Navigation Menu -->
        <div 
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" 
          id="navbar-user"
        >
          <ul class="flex flex-col p-4 mt-4 font-semibold rounded-lg font-inter md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <router-link 
                to="/"
                :class="{ 'text-primaryhover dark:text-primarylight': $route.path === '/' }"
                class="block px-3 py-2 capitalize transition-colors duration-200 hover:text-primaryhover dark:hover:text-primarylight text-dark dark:text-light"
              >
                Beranda
              </router-link>
            </li>
            <li>
              <router-link 
                to="/destinasi"
                :class="{ 'text-primaryhover dark:text-primarylight': $route.path.includes('/destinasi') }"
                class="block px-3 py-2 capitalize transition-colors duration-200 hover:text-primaryhover dark:hover:text-primarylight text-dark dark:text-light"
              >
                Destinasi
              </router-link>
            </li>
            <li>
              <router-link 
                to="/post"
                :class="{ 'text-primaryhover dark:text-primarylight': $route.path === '/post' }"
                class="block px-3 py-2 capitalize transition-colors duration-200 hover:text-primaryhover dark:hover:text-primarylight text-dark dark:text-light"
              >
                Blog
              </router-link>
            </li>
            <li>
              <router-link 
                to="/kontak"
                :class="{ 'text-primaryhover dark:text-primarylight': $route.path === '/kontak' }"
                class="block px-3 py-2 capitalize transition-colors duration-200 hover:text-primaryhover dark:hover:text-primarylight text-dark dark:text-light"
              >
                Kontak
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Mobile Navigation Menu -->
        <div 
          class="w-full md:hidden"
          :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }"
        >
          <div class="px-2 pt-2 pb-3 mt-4 space-y-1 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <router-link 
              to="/"
              @click="closeMobileMenu"
              :class="{ 'text-primaryhover dark:text-primarylight bg-gray-100 dark:bg-gray-700': $route.path === '/' }"
              class="block px-3 py-2 capitalize transition-colors duration-200 rounded-md hover:text-primaryhover dark:hover:text-primarylight text-dark dark:text-light"
            >
              Beranda
            </router-link>
            <router-link 
              to="/destinasi"
              @click="closeMobileMenu"
              :class="{ 'text-primaryhover dark:text-primarylight bg-gray-100 dark:bg-gray-700': $route.path.includes('/destinasi') }"
              class="block px-3 py-2 capitalize transition-colors duration-200 rounded-md hover:text-primaryhover dark:hover:text-primarylight text-dark dark:text-light"
            >
              Destinasi
            </router-link>
            <router-link 
              to="/post"
              @click="closeMobileMenu"
              :class="{ 'text-primaryhover dark:text-primarylight bg-gray-100 dark:bg-gray-700': $route.path === '/post' }"
              class="block px-3 py-2 capitalize transition-colors duration-200 rounded-md hover:text-primaryhover dark:hover:text-primarylight text-dark dark:text-light"
            >
              Blog
            </router-link>
            <router-link 
              to="/kontak"
              @click="closeMobileMenu"
              :class="{ 'text-primaryhover dark:text-primarylight bg-gray-100 dark:bg-gray-700': $route.path === '/kontak' }"
              class="block px-3 py-2 capitalize transition-colors duration-200 rounded-md hover:text-primaryhover dark:hover:text-primarylight text-dark dark:text-light"
            >
              Kontak
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'NavbarComponent',
  setup() {
    const isDarkMode = ref(false)
    const isMobileMenuOpen = ref(false)

    // Dark mode functionality
    const toggleDarkMode = () => {
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }

    // Mobile menu functionality
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false
    }

    // Initialize theme on component mount
    onMounted(() => {
      // Check for saved theme preference or default to light mode
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        isDarkMode.value = true
        document.documentElement.classList.add('dark')
      } else {
        isDarkMode.value = false
        document.documentElement.classList.remove('dark')
      }

      // Close mobile menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.container-nav')) {
          isMobileMenuOpen.value = false
        }
      })
    })

    return {
      isDarkMode,
      isMobileMenuOpen,
      toggleDarkMode,
      toggleMobileMenu,
      closeMobileMenu
    }
  }
}
</script>

<style scoped>
/* Custom styles for Pacifico font */
.font-pacifico {
  font-family: 'Pacifico', cursive;
}

/* Custom styles for Inter font */
.font-inter {
  font-family: 'Inter', sans-serif;
}

/* Smooth transitions */
.transition-colors {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Mobile menu animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>