<template>
  <div>
    <!-- <HomeCarousel 
      @go-to-detail="handleGoToDetail"
    /> -->
    <CarouselHome />
    <About />
    <LatestPost />
  </div>
</template>
<script>
// import HomeCarousel from '../components/HomeCarousel.vue';
import CarouselHome from '../components/CarouselHome.vue';
import LatestPost from '../components/LatestPost.vue';
import About from '../components/About.vue';
export default {
    components: {
        // HomeCarousel,
        CarouselHome,
        LatestPost,
        About
    },
    methods: {
        handleGoToDetail(slug) {
            this.$router.push('/destinasi/${slug}')
        }
    }
}

</script>