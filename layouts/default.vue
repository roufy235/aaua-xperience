<template>
  <div>
    <header class="header" :class="{ open: openNav }">
      <div
        class="overlay"
        :class="{ 'fade-out': !openNav, 'fade-in': openNav }"
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

        <mdbBtn class="btn-sm hide-for-mobile" color="danger">
          Sign In
        </mdbBtn>
      </nav>
    </header>
    <Nuxt />
  </div>
</template>

<script>
import { mdbBtn } from 'mdbvue'
export default {
  components: { mdbBtn },
  data: () => ({
    openNav: false,
  }),
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

<style scoped lang="scss">
.logo {
  width: $logoSize !important;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
