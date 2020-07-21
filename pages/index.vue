<template>
  <div>
    <Banner />
    <div class="indexPage">
      <div class="text-center">
        <mdbBtn class="boldMe" color="danger" @click="becomeASponsor">
          Become a Sponsor
        </mdbBtn>
      </div>
      <div class="container">
        <SectionComponent section-name="Famous Shops" />
        <SectionComponent section-name="Popular Hotels" />
        <SectionComponent section-name="Top Restaurants" />
      </div>
      <HowItWorks />
    </div>
  </div>
</template>

<!--suppress ES6CheckImport -->
<script>
import { mdbBtn } from 'mdbvue'
import Banner from '~/components/indexComponents/Banner'
import SectionComponent from '~/components/indexComponents/SectionComponent'
import HowItWorks from '~/components/indexComponents/HowItWorks'
export default {
  components: { HowItWorks, SectionComponent, Banner, mdbBtn },
  methods: {
    becomeASponsor() {
      this.$router.push('/sponsor')
    },
  },
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
.indexPage {
  margin-top: 40px;
}
</style>
