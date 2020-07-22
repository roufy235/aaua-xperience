<template>
  <div>
    <header class="header stickNavBar" :class="{ open: openNav }">
      <div
        class="overlay"
        :class="{ 'fade-in': openNav, 'fade-out': !openNav }"
      ></div>
      <nav class="myFlex myFlex-jc-sb myFlex-ai-c">
        <nuxt-link to="/">
          <img class="logo" src="/logo.png" alt="logo" />
        </nuxt-link>
        <a
          id="btnHamburger"
          class="header__menu hide-for-desktop"
          @click="openNav = !openNav"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div class="header__menu header__links hide-for-mobile">
          <a href="#">About Us</a><a href="#">Contact Us</a><a href="#">Blog</a
          ><a href="#">FAQs</a>
        </div>

        <div class="hide-for-mobile">
          <nuxt-link to="/register" class="btn-sm btn btn-dark ripple-parent">
            Sign Up
          </nuxt-link>
          <nuxt-link to="/login" class="btn-sm btn btn-danger ripple-parent">
            Sign In
          </nuxt-link>
        </div>
      </nav>
    </header>
  </div>
</template>

<!--suppress ES6CheckImport -->
<script>
export default {
  name: 'HeaderComponent',
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
