<template>
  <div>
    <Banner />
    <div class="container">
      <h2>
        Famous Shops
      </h2>
    </div>
  </div>
</template>

<script>
import Banner from '~/components/indexComponents/Banner'
export default {
  components: { Banner },
  head() {
    return {
      title: process.env.npm_package_name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
}
</script>

<!--suppress SassScssResolvedByNameOnly -->
<style scoped lang="scss">
h2 {
  color: #333;
  font-weight: 500 !important;
}
.container {
  margin-top: 80px;
}
</style>
