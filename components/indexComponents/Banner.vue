<template>
  <div>
    <div class="banner">
      <div class="overlayBanner">
        <div class="container">
          <div class="myContent">
            <h2 class="text-center">
              FIND WHAT YOU NEED!
            </h2>
            <div class="myCard">
              <div class="row custom-search-input-2 searchHolder">
                <div class="noPadding col-md-4">
                  <div class="form-group">
                    <!--suppress HtmlFormInputWithoutLabel -->
                    <input
                      type="text"
                      class="removeBorder form-control"
                      placeholder="What are you looking for..."
                    />
                    <BIconSearch class="custom-search-icon" />
                  </div>
                </div>
                <div class="noPadding col-md-3">
                  <div class="form-group">
                    <!--suppress HtmlFormInputWithoutLabel -->
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Where"
                    />
                    <BIconMap class="custom-search-icon" />
                  </div>
                </div>
                <div class="noPadding col-md-3">
                  <div class="form-group">
                    <!--suppress HtmlFormInputWithoutLabel -->
                    <select name="" class="form-control">
                      <option value="all">All Categories</option>
                      <option
                        v-for="(cate, index) in GET_ALL_CATEGORIES"
                        :key="index"
                        :value="cate.name"
                        >{{ cate.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="noPadding col-md-2">
                  <mdbBtn color="danger" class="btn-block searchBtn boldMe">
                    Search
                  </mdbBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <mdbCard class="categories">
        <mdbCardBody class="text-center">
          <b-row>
            <b-col
              v-for="(cate, index) in GET_ALL_CATEGORIES.slice(0, 3)"
              :key="index"
              :class="{ categoryBars: index === 1 || index === 2 }"
              lg="3"
              md="6"
              sm="6"
            >
              <nuxt-link :to="`/listing/places/${cate.link}`">
                <b-icon
                  v-if="index === 0"
                  icon="search"
                  variant="danger"
                ></b-icon>
                <BIconHouse v-else-if="index === 1" class="setIconColor" />
                <BIconServer v-else class="setIconColor" />
                <h3>
                  {{ cate.name }}
                </h3>
              </nuxt-link>
            </b-col>
            <b-col class="categoryBars" sm="6" md="6" lg="3">
              <nuxt-link to="/listing/places">
                <BIconThreeDots class="setIconColor" />
                <h3>
                  More
                </h3>
              </nuxt-link>
            </b-col>
          </b-row>
        </mdbCardBody>
      </mdbCard>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  BIconSearch,
  BIconMap,
  BIcon,
  BIconHouse,
  BIconServer,
  BIconThreeDots,
} from 'bootstrap-vue'
import { mdbBtn, mdbCard, mdbCardBody } from 'mdbvue'
export default {
  name: 'Banner',
  components: {
    mdbBtn,
    BIconSearch,
    BIconThreeDots,
    BIconMap,
    mdbCard,
    mdbCardBody,
    BIcon,
    BIconHouse,
    BIconServer,
  },
  computed: {
    ...mapGetters(['GET_ALL_CATEGORIES']),
  },
}
</script>

<!--suppress SassScssResolvedByNameOnly -->
<style scoped lang="scss">
.categories {
  margin-top: -30px;
}
h3 {
  font-size: 1rem;
  color: #333;
  font-weight: 500 !important;
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .myContent {
    padding: 130px 0 0 0;
  }
  .card {
    position: inherit !important;
  }
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .myContent {
    padding: 70px 0 0 0;
  }
  .searchHolder {
    margin: 10px;
  }
  h2 {
    margin-bottom: 50px;
    color: white;
    font-weight: 900;
    font-size: 2rem !important;
    text-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);
    margin-top: 40px;
  }
  .card {
    position: inherit !important;
  }
}

.custom-search-icon {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  border-radius: 3px;
  font-size: 18px;
  font-size: 1.125rem;
  position: absolute;
  background-color: #fff;
  line-height: 50px;
  top: 1px;
  right: 1px;
  padding-right: 15px;
  display: block;
  width: 20px;
  box-sizing: content-box;
  height: 48px;
  z-index: 9;
  color: #999;
}
.custom-search-input-2 .form-group {
  margin: 0;
}
.custom-search-input-2 {
  border-radius: 10px;
}
.searchBtn {
  height: 50px;
}
.removeBorder {
  border: 0;
}
.custom-search-input-2 input,
.custom-search-input-2 select {
  border: 0;
  height: 50px;
  padding-left: 15px;
  border-right: 1px solid #d2d8dd;
  font-weight: 500;
}
.searchHolder {
  background-color: white;
  box-shadow: 2px 2px 2px 24px #5a17175c;
}
.padding {
  padding: 25px;
}
.noPadding {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
h2 {
  margin-bottom: 50px;
  color: white;
  font-weight: 900;
  font-size: 2.625rem;
  text-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);
}
.overlayBanner {
  background-color: $bannerOverlay;
  height: $bannerHeight;
}
.banner {
  background-image: url('/images/bannerTwo.jpg');
  background-size: cover;
  height: $bannerHeight;
  background-position: bottom;
  background-repeat: no-repeat;
}
</style>
