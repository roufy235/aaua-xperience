<template>
  <div class="pageHolder">
    <div class="container">
      <h2>
        {{ placeName }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  asyncData({ params }) {
    // noinspection JSUnresolvedVariable
    return {
      placeName: params.singlePlaceName,
    }
  },
}
</script>

<style scoped></style>
