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
          ><a href="#">FAQs</a>
        </div>

        <div v-if="GET_IS_USER_LOGGED_IN" class="hide-for-mobile">
          <nuxt-link to="/user" class="btn-sm btn btn-dark ripple-parent">
            Name
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
        <mdb-modal-body>...</mdb-modal-body>
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
  }),
  computed: {
    ...mapGetters(['GET_IS_USER_LOGGED_IN']),
  },
  methods: {
    logout() {
      this.$fireAuth
        .signOut()
        .then((response) => {
          this.$store.commit('SET_LOGIN_VAL', false)
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
