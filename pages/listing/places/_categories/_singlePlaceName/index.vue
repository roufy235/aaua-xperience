<template>
  <div class="pageHolder">
    <div class="container">
      <h2>
        {{ placeName }}
      </h2>
    </div>
  </div>
</template>

<script>
import { capitaliseFirstLetter } from '~/helpers/myFunctions'

export default {
  name: 'Index',
  asyncData({ params, store }) {
    // noinspection JSUnresolvedVariable
    return {
      projectName: store.state.projectName,
      placeName: params.singlePlaceName,
      pageTitle: capitaliseFirstLetter(params.singlePlaceName),
    }
  },
  head() {
    return {
      title: this.pageTitle + ' | ' + this.projectName,
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

<style scoped></style>
