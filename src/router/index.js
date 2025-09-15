// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../views/Beranda.vue'
import Destinasi from '../views/Destinasi.vue'
import detailDestinasi from '../views/DetailDestinasi.vue'
import destinasiPulau from '../views/DestinasiPulau.vue'
import detailBlog from '../views/DetailBlog.vue'
import authorPost from '../views/AuthorPost.vue'
import Blog from '../views/Blog.vue'
import Kontak from '../views/Kontak.vue'
import NotFoundPage from '../components/NotFoundPage.vue'

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
    path: '/destinasi/pulau/:name',
    name: 'destinasiPulau',
    component: destinasiPulau
  },
  {
    path: '/post',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/post/:slug',
    name: 'detailBlog',
    component: detailBlog
  },
  {
    path: '/post/author/:username',
    name: 'authorPost',
    component: authorPost
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: Kontak
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router