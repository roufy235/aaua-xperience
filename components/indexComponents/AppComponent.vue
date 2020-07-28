<template>
  <section>
    <div>
      <div class="text-center">
        <h2>{{ GET_PROJECT_NAME }} App Available</h2>
      </div>
      <div class="text-center">
        <img class="this" src="/images/mobile.svg" alt="app icon" />
      </div>
      <div class="text-center">
        <img src="/images/app_android.svg" alt="app icon" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppComponent',
  computed: {
    ...mapGetters(['GET_PROJECT_NAME']),
  },
}
</script>

<style scoped>
img {
  margin-top: 20px;
  margin-bottom: 20px;
}
.this {
  width: 100%;
}
section {
  margin: 50px;
}
h2 {
  color: black;
  font-weight: 500 !important;
  margin-bottom: 50px;
}
</style>
