<template>
  <div class="pageHolder">
    <TopMenuSearch :categories="GET_ALL_CATEGORIES" />
    <div class="container">
      <b-row class="productPage">
        <b-col sm="3" lg="3" md="3" class="backColor">
          <SideMenuComponent :categories="GET_ALL_CATEGORIES" />
        </b-col>
        <b-col sm="9" lg="9" md="9"></b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// noinspection NpmUsedModulesInstalled
import { mapGetters } from 'vuex'
import SideMenuComponent from '~/components/reusable/SideMenuComponent'
import TopMenuSearch from '~/components/reusable/TopMenuSearch'

export default {
  name: 'Index',
  components: {
    TopMenuSearch,
    SideMenuComponent,
  },
  computed: {
    ...mapGetters(['GET_ALL_CATEGORIES']),
  },
  head() {
    return {
      title: 'Events',
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

<style scoped lang="scss">
.backColor {
  background: #f8f8f8;
  padding: 15px;
}
.padding {
  padding: 25px;
}
.productPage {
  margin-top: 30px;
}
</style>
