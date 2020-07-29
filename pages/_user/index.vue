<template>
  <div class="pageHolder"></div>
</template>

<script>
export default {
  name: 'Index',
  middleware: 'UserAuth',
  asyncData({ store, params }) {
    return {
      title: store.state.projectName,
      user: params.user,
    }
  },
  head() {
    return {
      title: this.user + ' | ' + this.title,
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
