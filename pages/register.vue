<template>
  <div class="pageHolder">
    <div class="container">
      <h3>
        Register
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  middleware: 'UserIsNotLoggedIn',
  head() {
    return {
      title: 'Sign Up',
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
