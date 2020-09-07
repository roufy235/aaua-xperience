<template>
  <div>
    <span class="filterStyle">
      Filter
    </span>
    <BIconFilter class="iconFloatRight" />
    <hr />
    <mdb-btn-group>
      <mdb-btn
        class="btn-sm"
        color="danger"
        :active="true"
        @click.native="toggle"
      >
        All
      </mdb-btn>
      <mdb-btn
        class="btn-sm"
        color="danger"
        :active="false"
        @click.native="toggle"
      >
        Popular
      </mdb-btn>
      <mdb-btn
        class="btn-sm"
        color="danger"
        :active="true"
        @click.native="toggle"
      >
        Latest
      </mdb-btn>
    </mdb-btn-group>
    <hr />
    <p class="cateName">
      Category
    </p>
    <div
      v-for="(cate, index) in categories"
      :key="index"
      class="custom-control custom-checkbox"
    >
      <!--suppress HtmlFormInputWithoutLabel -->
      <input
        :id="`cate${cate.name}`"
        type="checkbox"
        class="custom-control-input"
      />
      <label
        class="custom-control-label cateNameItem"
        :for="`cate${cate.name}`"
      >
        {{ cate.name }}
      </label>
    </div>
    <hr />
    <p class="cateName">
      Rating
    </p>
    <div
      v-for="(cate, index) in categories"
      :key="index"
      class="custom-control custom-checkbox"
    >
      <!--suppress HtmlFormInputWithoutLabel -->
      <input
        :id="`defaultUnchecked${index}`"
        type="checkbox"
        class="custom-control-input"
      />
      <label
        class="custom-control-label cateNameItem"
        :for="`defaultUnchecked${index}`"
      >
        {{ cate.name }}
      </label>
    </div>
  </div>
</template>

<script>
// noinspection ES6CheckImport
import { mdbBtn, mdbBtnGroup } from 'mdbvue'
import { BIconFilter } from 'bootstrap-vue'

export default {
  name: 'SideMenuComponent',
  components: {
    mdbBtn,
    BIconFilter,
    mdbBtnGroup,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggle() {},
  },
}
</script>

<style scoped>
.cateNameItem {
  font-size: 13px;
  margin-bottom: 5px;
}
.cateName {
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 15px;
}
.filterStyle {
  font-size: 15px;
  font-weight: bold;
}
.iconFloatRight {
  float: right;
  font-weight: 600 !important;
  font-size: 14px !important;
  color: black !important;
}
[type='checkbox']:checked + label:before {
  border-color: red;
  background-color: red;
}
</style>
