<template>
  <div class="pageHolder">
    <div class="container">
      <h2>
        {{ pageTitle }}
      </h2>
    </div>
  </div>
</template>

<script>
import { capitaliseFirstLetter } from '~/helpers/myFunctions'
export default {
  name: 'Index',
  asyncData({ params, store }) {
    return {
      projectName: store.state.projectName,
      categories: params.categories,
      pageTitle: capitaliseFirstLetter(params.categories),
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
