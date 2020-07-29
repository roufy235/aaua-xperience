<template>
  <div class="pageHolder">
    <div class="container">
      <h3>
        Register with us Today
      </h3>
      <b-row>
        <b-col offset="2" md="8" lg="8">
          <mdb-card>
            <mdb-card-body>
              <form>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input
                    id="username"
                    v-model="regData.username"
                    class="form-control"
                    required
                    type="text"
                  />
                </div>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    id="name"
                    v-model="regData.name"
                    class="form-control"
                    required
                    type="text"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    v-model="regData.email"
                    class="form-control"
                    required
                    type="email"
                  />
                </div>
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input
                    id="phone"
                    v-model="regData.phone"
                    class="form-control"
                    required
                    type="tel"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    id="password"
                    v-model="regData.password"
                    class="form-control"
                    required
                    type="password"
                  />
                </div>
                <div class="form-group">
                  <label for="cPassword">Confirm Password</label>
                  <input
                    id="cPassword"
                    v-model="regData.cPassword"
                    class="form-control"
                    required
                    type="password"
                  />
                </div>
                <div class="form-group">
                  <mdbBtn
                    :disabled="regData.isRegBool"
                    color="danger"
                    class="btn-block"
                    @click="createAccount"
                  >
                    <span
                      v-if="regData.isRegBool"
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Create Account
                  </mdbBtn>
                </div>
              </form>
            </mdb-card-body>
          </mdb-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// noinspection ES6CheckImport
import { mdbCard, mdbCardBody, mdbBtn } from 'mdbvue'
import Cookie from 'js-cookie'
import { createNewUserFuncHelper } from '~/helpers/firebase_database_reference'

export default {
  name: 'Register',
  middleware: 'UserIsNotLoggedIn',
  components: {
    mdbCard,
    mdbCardBody,
    mdbBtn,
  },
  data: () => ({
    regData: {
      isRegBool: false,
      username: '',
      name: '',
      email: '',
      password: '',
      cPassword: '',
      phone: '',
    },
  }),
  methods: {
    createAccount() {
      if (
        this.regData.username &&
        this.regData.name &&
        this.regData.email &&
        this.regData.phone &&
        this.regData.password &&
        this.regData.cPassword
      ) {
        if (this.regData.password === this.regData.cPassword) {
          this.regData.isRegBool = true
          this.$fireAuth
            .createUserWithEmailAndPassword(
              this.regData.email,
              this.regData.password
            )
            .then((response) => {
              response.user.getIdToken(true).then((token) => {
                Cookie.set('access_token', token)
              })
              const userId = response.user.uid
              createNewUserFuncHelper(this.$fireDb, userId)
                .set({
                  name: this.regData.name,
                  email: this.regData.email,
                  phone: this.regData.phone,
                })
                .then((response) => {
                  this.regData.isRegBool = false
                  this.$store.commit('SET_LOGIN_VAL', true)
                  this.regData.password = ''
                  this.regData.cPassword = ''
                  this.$store.commit('SET_USER_DATA', this.regData)
                  this.$router.push('/')
                })
                .catch((error) => {
                  this.$toast.error(error)
                })
            })
            .catch((error) => {
              this.regData.isRegBool = false
              this.$toast.error(error)
            })
        } else {
          this.$toast.info('Password mismatch')
        }
      } else {
        this.$toast.info('All fields are required')
      }
    },
  },
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

<style scoped>
h3 {
  margin-bottom: 20px;
}
.container {
  margin-top: 100px;
  margin-bottom: 50px;
}
</style>
