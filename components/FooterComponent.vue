<template>
  <footer>
    <div class="container">
      <b-row>
        <b-col sm="6" md="4" lg="4">
          <h6>
            Quick Links
          </h6>
          <ul>
            <li>
              <nuxt-link to="#" class="link">About Us</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#" class="link">FAQs</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#" class="link">Help</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#" class="link">My Account</nuxt-link>
            </li>
          </ul>
        </b-col>
        <b-col sm="6" md="4" lg="4">
          <h6>Contacts</h6>
          <ul>
            <li>
              <span class="link"><BIconHouse /> +234 70 0000 0000</span>
            </li>
            <li>
              <span class="link"><BIconPhone /> +234 70 0000 0000</span>
            </li>
            <li>
              <span class="link"><BIconEnvelopeFill /> info@email.com</span>
            </li>
          </ul>
        </b-col>
        <b-col sm="12" md="4" lg="4">
          <h6>
            Keep in touch
          </h6>
          <div>
            <b-form inline>
              <label class="sr-only" for="inline-form-input-name">Name</label>
              <b-input
                id="inline-form-input-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Your email"
              ></b-input>
              <mdbBtn color="danger" class="btn-sm submit">Submit</mdbBtn>
            </b-form>
          </div>
          <h6>
            Follow us
          </h6>
          <ul class="socialBtn">
            <li><BIconEnvelopeFill class="socialBtnIcons" /></li>
            <li><BIconEnvelopeFill class="socialBtnIcons" /></li>
            <li><BIconEnvelopeFill class="socialBtnIcons" /></li>
            <li><BIconEnvelopeFill class="socialBtnIcons" /></li>
          </ul>
        </b-col>
      </b-row>
      <hr />
      <p class="text-center reserved">
        2020 © Copyright <b>{{ GET_PROJECT_NAME }}</b> All rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
// noinspection NpmUsedModulesInstalled
import { mapGetters } from 'vuex'
import { mdbBtn } from 'mdbvue'
import { BIconPhone, BIconHouse, BIconEnvelopeFill } from 'bootstrap-vue'
export default {
  name: 'FooterComponent',
  components: {
    BIconPhone,
    BIconHouse,
    mdbBtn,
    BIconEnvelopeFill,
  },
  computed: {
    ...mapGetters(['GET_PROJECT_NAME']),
  },
}
</script>

<!--suppress SassScssResolvedByNameOnly -->
<style scoped lang="scss">
footer {
  background-color: white;
  padding: 20px;
}
.socialBtn > li {
  margin-left: 10px;
  display: inline-block !important;
}
.submit {
  height: 38px;
}
.socialBtnIcons:hover {
  color: $projectColorRed;
}
.socialBtnIcons {
  font-size: 20px;
}
.reserved {
  font-size: 13px;
}
#inline-form-input-name {
  width: 70%;
  margin-right: -8px !important;
  background: #c0c0c033;
  border: 0 solid white;
}
.link:hover {
  margin-left: 5px;
  font-weight: 500;
  color: $projectColorRed !important;
}
b {
  font-weight: 600;
}
ul {
  list-style: none;
  padding-left: 0px;
  display: block;
}
li {
  margin-top: 10px;
  margin-bottom: 10px;
  display: block !important;
}
.link {
  font-size: 14px;
  color: black;
}
h6 {
  margin-top: 5px;
  color: black;
  font-weight: 600;
}
</style>
