<template>
  <div class="searchHolderDef">
    <div class="container">
      <b-row>
        <b-col lg="9" md="9">
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
                  <input type="text" class="form-control" placeholder="Where" />
                  <BIconMap class="custom-search-icon" />
                </div>
              </div>
              <div class="noPadding col-md-3">
                <div class="form-group">
                  <!--suppress HtmlFormInputWithoutLabel -->
                  <select name="" class="form-control">
                    <option value="all">All Categories</option>
                    <option
                      v-for="(cate, index) in categories"
                      :key="index"
                      :value="cate.name"
                    >
                      {{ cate.name }}
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
        </b-col>
        <b-col lg="3" md="3">
          <p class="listCounter">145 result for All listing</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// noinspection ES6CheckImport
import { mdbBtn } from 'mdbvue'
import { BIconMap, BIconSearch } from 'bootstrap-vue'

export default {
  name: 'TopMenuSearch',
  components: {
    mdbBtn,
    BIconSearch,
    BIconMap,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.custom-search-icon {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  border-radius: 3px;
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
}
.noPadding {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.listCounter {
  color: white;
  font-weight: 500;
  margin-top: 14px;
}
.searchHolderDef {
  //noinspection SassScssResolvedByNameOnly
  background-color: $projectColorRed;
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>
