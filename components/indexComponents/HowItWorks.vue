<template>
  <section>
    <div class="call_section">
      <div class="wrapper">
        <div class="container margin_80_55">
          <div class="text-center">
            <h2>How it Works</h2>
          </div>
          <div class="row works">
            <div class="col-md-4">
              <div class="box_how text-center">
                <BIconSearch class="custom-search-icon" />
                <h3>Search Locations</h3>
                <p class="text-center">
                  An nec placerat repudiare scripserit, temporibus complectitur
                  at sea, vel ignota fierent eloquentiam id.
                </p>
                <span></span>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box_how text-center">
                <BIconInfoCircle class="custom-search-icon" />
                <h3>View Location Info</h3>
                <p class="text-center">
                  An nec placerat repudiare scripserit, temporibus complectitur
                  at sea, vel ignota fierent eloquentiam id.
                </p>
                <span></span>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box_how text-center">
                <BIconHandThumbsUp class="custom-search-icon" />
                <h3>Book, Reach or Call</h3>
                <p class="text-center">
                  An nec placerat repudiare scripserit, temporibus complectitur
                  at sea, vel ignota fierent eloquentiam id.
                </p>
              </div>
            </div>
          </div>
          <!-- /row -->
          <b-row>
            <b-col offset-md="3" offset-lg="3" sm="12" md="4" lg="4">
              <nuxt-link
                to="/register"
                class="btn-block btn btn-danger reg ripple-parent"
                data-v-56cc9c65=""
              >
                Sign Up
              </nuxt-link>
            </b-col>
          </b-row>
        </div>
      </div>
      <!-- /wrapper -->
    </div>
  </section>
</template>

<script>
import { BIconSearch, BIconInfoCircle, BIconHandThumbsUp } from 'bootstrap-vue'
export default {
  name: 'HowItWorks',
  components: {
    BIconSearch,
    BIconInfoCircle,
    BIconHandThumbsUp,
  },
}
</script>

<!--suppress SassScssResolvedByNameOnly -->
<style scoped lang="scss">
.call_section {
  background-image: url('/images/bannerTwo.jpg');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}
.col-md-4 {
  margin-bottom: 20px;
}
.reg {
  font-weight: bold;
}
.works {
  margin-bottom: 30px;
}
p {
  color: white;
}
h2 {
  color: white;
  font-weight: 500 !important;
  margin-bottom: 50px;
}
h3 {
  color: white;
  font-weight: 500 !important;
  text-align: center;
}
.call_section .wrapper {
  background-color: #000000e8;
  position: relative;
  z-index: 22;
  padding: 70px 0 60px 0;
}
.custom-search-icon {
  color: #ff3547;
  font-size: 40px;
  margin-bottom: 28px;
}
</style>
