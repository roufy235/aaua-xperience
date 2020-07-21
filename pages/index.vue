<template>
  <div>
    <Banner />
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
<style scoped lang="scss"></style>
