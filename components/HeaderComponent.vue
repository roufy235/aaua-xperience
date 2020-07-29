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
          ><a href="#">FAQs</a><nuxt-link to="/listing/events">Events</nuxt-link
          ><nuxt-link to="/listing/places">Places</nuxt-link>
        </div>

        <div v-if="GET_IS_USER_LOGGED_IN" class="hide-for-mobile">
          <nuxt-link
            :to="`/${GET_USER_DATA.username}`"
            class="btn-sm btn btn-dark ripple-parent"
          >
            {{ GET_USER_DATA.username }}
          </nuxt-link>
          <mdbBtn color="danger" class="btn-sm" @click="logout">
            Sign out
          </mdbBtn>
        </div>
        <div v-else class="hide-for-mobile">
          <nuxt-link to="/register" class="btn-sm btn btn-dark ripple-parent">
            Sign Up
          </nuxt-link>
          <mdbBtn color="danger" class="btn-sm" @click="modal = !modal">
            Sign In
          </mdbBtn>
        </div>
      </nav>
    </header>
    <div>
      <mdb-modal
        side
        position="top-right"
        direction="right"
        :show="modal"
        @close="modal = false"
      >
        <mdb-modal-header>
          <mdb-modal-title>Sign In</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <form>
            <label for="defaultFormLoginEmailEx" class="grey-text"
              >Your email</label
            >
            <input
              id="defaultFormLoginEmailEx"
              v-model="loginData.email"
              type="email"
              required
              class="form-control"
            />
            <br />
            <label for="defaultFormLoginPasswordEx" class="grey-text"
              >Your password</label
            >
            <input
              id="defaultFormLoginPasswordEx"
              v-model="loginData.password"
              type="password"
              required
              class="form-control"
            />
            <div class="text-center mt-4">
              <mdbBtn
                color="danger"
                :disabled="loginData.loginBool"
                class="btn btn-block btn-sm"
                @click="login"
              >
                <span
                  v-if="loginData.loginBool"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Login
              </mdbBtn>
            </div>
          </form>
        </mdb-modal-body>
      </mdb-modal>
    </div>
  </div>
</template>

<!--suppress ES6CheckImport, NpmUsedModulesInstalled -->
<script>
import {
  mdbBtn,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
} from 'mdbvue'
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'
import { getUserDataFuncHelper } from '~/helpers/firebase_database_reference'
// noinspection JSAnnotator
export default {
  name: 'HeaderComponent',
  components: {
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbBtn,
  },
  data: () => ({
    openNav: false,
    modal: false,
    loginData: {
      loginBool: false,
      email: 'roufy235@gmail.com',
      password: 'roufy235',
    },
  }),
  computed: {
    ...mapGetters(['GET_IS_USER_LOGGED_IN', 'GET_USER_DATA']),
  },
  methods: {
    login() {
      if (this.loginData.email && this.loginData.password) {
        this.loginData.loginBool = true
        this.$fireAuth
          .signInWithEmailAndPassword(
            this.loginData.email,
            this.loginData.password
          )
          .then((response) => {
            response.user.getIdToken(true).then((token) => {
              Cookies.set('access_token', token)
            })
            getUserDataFuncHelper(this.$fireDb, this.$fireAuth.currentUser.uid)
              .once('value')
              .then((snapshot) => {
                const user = snapshot.val()
                // noinspection JSUnresolvedVariable
                this.$store.commit('SET_LOGIN_VAL', true)
                this.$store.commit('SET_USER_DATA', user)
                if (this.$route.fullPath === '/register') {
                  this.$router.push('/')
                }
                this.loginData.loginBool = false
                this.modal = false
              })
              .catch((error) => {
                this.$toast.error(error)
              })
          })
          .catch((error) => {
            this.$toast.error(error.toString())
            this.loginData.loginBool = false
          })
      } else {
        this.$toast.info('Email/password is empty')
      }
    },
    logout() {
      // noinspection JSUnusedLocalSymbols
      this.$fireAuth
        .signOut()
        .then((response) => {
          // noinspection JSUnresolvedVariable
          this.$store.commit('SET_LOGIN_VAL', false)
          this.$store.commit('SET_USER_DATA', '')
          this.$router.push('/')
          this.$toast.success('You are now signed out')
          Cookies.remove('access_token')
        })
        .catch((error) => {
          alert(error)
        })
    },
  },
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
