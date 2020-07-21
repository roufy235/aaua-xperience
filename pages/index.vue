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
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
      <div class="container">
        <h2 class="addBar">
          Famous Shops
        </h2>
      </div>
    </div>
  </div>
</template>

<!--suppress ES6CheckImport -->
<script>
import { mdbBtn } from 'mdbvue'
import Banner from '~/components/indexComponents/Banner'
export default {
  components: { Banner, mdbBtn },
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
h2 {
  color: #333;
  font-weight: 500 !important;
}
.indexPage {
  margin-top: 40px;
}
</style>
