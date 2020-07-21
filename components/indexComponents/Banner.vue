<template>
  <div class="banner">
    <div class="overlayBanner">
      <h2 class="text-center">
        Explore on-going and upcoming
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style scoped lang="scss">
h2 {
  color: white;
  font-weight: 700;
}
.overlayBanner {
  background-color: $bannerOverlay;
  height: $bannerHeight;
}
.banner {
  background-image: url('/images/banner.jpeg');
  background-size: cover;
  height: $bannerHeight;
  background-position: bottom;
  background-repeat: no-repeat;
}
</style>
