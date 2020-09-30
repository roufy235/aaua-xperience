<template>
  <div class="pageHolder">
    <div class="container">
      <h2>All Places</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  head() {
    return {
      title: 'All Places',
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

<style scoped></style>
