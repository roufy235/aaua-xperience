<template>
  <div>
    <header-component />
    <div id="pattern">
      <Nuxt />
    </div>
    <FooterComponent />
  </div>
</template>

<style scoped lang="scss">
#pattern {
  background: #f8f8f8 url('/images/pattern_3.svg') no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
  z-index: 1;
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
<script>
import HeaderComponent from '~/components/HeaderComponent'
import FooterComponent from '~/components/FooterComponent'
export default {
  components: { FooterComponent, HeaderComponent },
}
</script>
