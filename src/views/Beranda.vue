<template>
  <div>
    <!-- <HomeCarousel 
      @go-to-detail="handleGoToDetail"
    /> -->
    <CarouselHome />
  </div>
</template>
<script>
// import HomeCarousel from '../components/HomeCarousel.vue';
import CarouselHome from '../components/CarouselHome.vue';
export default {
    components: {
        // HomeCarousel,
        CarouselHome
    },
    methods: {
        handleGoToDetail(slug) {
            this.$router.push('/destinasi/${slug}')
        }
    }
}

</script>