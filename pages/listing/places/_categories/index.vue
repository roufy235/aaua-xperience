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
  asyncData({ params }) {
    return {
      categories: params.categories,
      pageTitle: capitaliseFirstLetter(params.categories),
    }
  },
}
</script>

<style scoped></style>
