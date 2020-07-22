<template>
  <div class="pageHolder">
    <div class="container">
      <mdbBtn class="btn-sm" :disabled="loader" color="success" @click="login">
        <span
          v-if="loader"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Login
      </mdbBtn>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
// noinspection ES6CheckImport
import { mdbBtn } from 'mdbvue'
export default {
  name: 'Login',
  components: { mdbBtn },
  data: () => ({
    loader: false,
  }),
  methods: {
    login() {
      this.loader = true
      this.$fireAuth
        .signInWithEmailAndPassword('roufy235@gmail.com', 'roufy2354kfkfkfkfk')
        .then((response) => {
          this.loader = false
          response.user.getIdToken(true).then((token) => {
            Cookies.set('access_token', token)
          })
          this.$store.commit('SET_LOGIN_VAL', true)
          this.$router.push('/user')
        })
        .catch((error) => {
          Cookies.remove('access_token')
          this.loader = false
          alert(error.toString())
        })
    },
  },
  head() {
    return {
      title: 'Sign In',
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
