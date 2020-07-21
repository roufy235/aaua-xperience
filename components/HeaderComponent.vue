<template>
  <header class="header" :class="{ open: openNav }">
    <div
      class="overlay"
      :class="{ 'fade-in': openNav, 'fade-out': !openNav }"
    ></div>
    <nav class="myFlex myFlex-jc-sb myFlex-ai-c">
      <nuxt-link to="#">
        <img class="logo" src="/logo.png" alt="logo" />
      </nuxt-link>
      <a
        id="btnHamburger"
        class="header__menu hide-for-desktop"
        href="#"
        @click="openNav = !openNav"
      >
        <span></span>
        <span></span>
        <span></span>
      </a>

      <div class="header__menu header__links hide-for-mobile">
        <a href="#">Home</a><a href="#">About</a><a href="#">Contact</a
        ><a href="#">Blog</a><a href="#">Careers</a>
      </div>

      <div class="hide-for-mobile">
        <mdbBtn class="btn-sm" color="dark">
          Sign Up
        </mdbBtn>
        <mdbBtn class="btn-sm" color="danger">
          Sign In
        </mdbBtn>
      </div>
    </nav>
  </header>
</template>

<!--suppress ES6CheckImport -->
<script>
import { mdbBtn } from 'mdbvue'
export default {
  name: 'HeaderComponent',
  components: { mdbBtn },
  data: () => ({
    openNav: false,
  }),
}
</script>

<!--suppress SassScssResolvedByNameOnly -->
<style scoped lang="scss">
.logo {
  width: $logoSize !important;
}
.btn-sm {
  font-weight: bold !important;
}
</style>
