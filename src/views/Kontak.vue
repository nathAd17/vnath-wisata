<template>
    <section class="min-h-screen max-w-screen-xl px-4 mx-auto">
    <div class="mb-8 mx-2 sm:mx-4">
            <Breadcrumb />
        </div>
    <h1>Hellow world</h1>
    <GoToTop 
      :threshold="300"
      variant="primary"
      :show-progress="true"
      position="bottom-right"
    />
    </section>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue';
import GoToTop from '../components/GoToTop.vue';

export default {
    components: {
        Breadcrumb,
        GoToTop
    }
}
</script>