<template>
  <section>
    <div class="gifImage">
      <div class="overlayBanner"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorks',
}
</script>

<!--suppress SassScssResolvedByNameOnly -->
<style scoped lang="scss">
.gifImage {
  background-image: url('/gif/how_it_works.gif');
  height: $bannerHeight;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.overlayBanner {
  background-color: $bannerOverlay;
  height: $bannerHeight;
}
</style>
