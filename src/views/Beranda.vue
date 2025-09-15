<template>
  <div>
    <!-- <HomeCarousel 
      @go-to-detail="handleGoToDetail"
    /> -->
    <CarouselHome />
    <About />
    <Island />
    <LatestPost />
    <GoToTop 
      :threshold="300"
      variant="primary"
      :show-progress="true"
      position="bottom-right"
    />
  </div>
</template>
<script>
// import HomeCarousel from '../components/HomeCarousel.vue';
import CarouselHome from '../components/CarouselHome.vue';
import LatestPost from '../components/LatestPost.vue';
import Island from '../components/Island.vue';
import About from '../components/About.vue';
import GoToTop from '../components/GoToTop.vue';

export default {
    components: {
        // HomeCarousel,
        CarouselHome,
        LatestPost,
        About,
        Island,
        GoToTop
    },
    methods: {
        handleGoToDetail(slug) {
            this.$router.push('/destinasi/${slug}')
        }
    }
}

</script>