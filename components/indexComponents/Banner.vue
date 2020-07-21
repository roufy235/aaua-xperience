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
                    <select name="" class="form-control" id="">
                      <option value="hello">hello</option>
                      <option value="hello">hello</option>
                    </select>
                  </div>
                </div>
                <div class="noPadding col-md-2">
                  <mdbBtn color="danger" class="btn-block searchBtn">
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
            <b-col>
              <div>
                <b-icon icon="search" variant="danger"></b-icon>
                <h3>
                  Shops
                </h3>
              </div>
            </b-col>
            <b-col>
              <BIconHouse class="setIconColor" />
              <h3>
                Hotels
              </h3>
            </b-col>
            <b-col>
              <BIconServer class="setIconColor" />
              <h3>
                Restaurants
              </h3>
            </b-col>
            <b-col>
              <BIconThreeDots class="setIconColor" />
              <h3>
                More
              </h3>
            </b-col>
          </b-row>
        </mdbCardBody>
      </mdbCard>
    </div>
  </div>
</template>

<script>
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
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .myContent {
    padding: 70px 0 0 0;
  }
  .searchHolder {
    margin: 10px;
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
  box-shadow: 2px 2px 2px 2px black;
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
