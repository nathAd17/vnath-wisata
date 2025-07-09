// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../views/Beranda.vue'
import Destinasi from '../views/Destinasi.vue'
import detailDestinasi from '../views/DetailDestinasi.vue'
import detailBlog from '../views/DetailBlog.vue'
import Blog from '../views/Blog.vue'
import Kontak from '../views/Kontak.vue'

const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: Beranda
  },
  {
    path: '/destinasi',
    name: 'Destinasi',
    component: Destinasi
  },
  {
    path: '/destinasi/:slug',
    name: 'detailDestinasi',
    component: detailDestinasi
  },
  {
    path: '/post/:slug',
    name: 'detailBlog',
    component: detailBlog
  },
  {
    path: '/post',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: Kontak
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router