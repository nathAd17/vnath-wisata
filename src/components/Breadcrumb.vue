<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 font-inter md:space-x-2 rtl:space-x-reverse">
      <li 
        v-for="(item, index) in breadcrumbItems" 
        :key="index"
        class="inline-flex items-center"
      >
        <!-- First item (with home icon) -->
        <template v-if="index === 0">
          <router-link
            :to="item.path"
            class="inline-flex items-center text-xs md:text-sm font-semibold text-gray-700 hover:text-primaryhover dark:text-primarygray dark:hover:text-primary"
          >
            <svg 
              class="me-2.5 h-3 w-3" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            {{ item.name }}
          </router-link>
        </template>

        <!-- Other items (with separator) -->
        <template v-else>
          <div class="flex items-center">
            <svg 
              class="w-3 h-3 mx-1 text-primarygray dark:text-graydark rtl:rotate-180" 
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 6 10"
            >
              <path 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2"
                d="m1 9 4-4-4-4" 
              />
            </svg>
            
            <!-- If not last item, make it clickable -->
            <router-link
              v-if="index < breadcrumbItems.length - 1"
              :to="item.path"
              class="text-xs md:text-sm font-medium ms-1 text-gray-700 hover:text-primaryhover dark:text-primarygray dark:hover:text-primary md:ms-2"
            >
              {{ item.name }}
            </router-link>
            
            <!-- Last item (current page) -->
            <span 
              v-else
              class="text-xs md:text-sm font-medium ms-1 text-grayhover dark:text-primarygray md:ms-2"
              :aria-current="index === breadcrumbItems.length - 1 ? 'page' : undefined"
            >
              {{ item.name }}
            </span>
          </div>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'BreadcrumbComponent',
  props: {
    // Optional prop to override automatic breadcrumb generation
    customItems: {
      type: Array,
      default: null
    }
  },
  computed: {
    breadcrumbItems() {
      // If custom items provided, use them
      if (this.customItems) {
        return this.customItems;
      }

      // Auto-generate breadcrumb based on current route
      const route = this.$route;
      const items = [];

      // Route name to display name mapping
      const routeNameMap = {
        'Beranda': 'Beranda',
        'Destinasi': 'Destinasi',
        'detailDestinasi': 'Detail Destinasi',
        'Blog': 'Blog',
        'detailBlog': 'Detail Blog',
        'Kontak': 'Kontak'
      };

      // Always start with home/beranda
      items.push({
        name: routeNameMap['Beranda'] || 'Beranda',
        path: '/'
      });

      // Add current route if not home
      if (route.name !== 'Beranda') {
        // Handle parent routes
        if (route.name === 'detailDestinasi') {
          // Add Destinasi as parent
          items.push({
            name: routeNameMap['Destinasi'] || 'Destinasi',
            path: '/destinasi'
          });
        }
        else if (route.name === 'detailBlog') {
          // Add Blog as parent
          items.push({
            name: routeNameMap['Blog'] || 'Blog',
            path: '/post'
          });
        }

        // Add current route
        items.push({
          name: routeNameMap[route.name] || route.name,
          path: route.path
        });
      }

      return items;
    }
  }
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>