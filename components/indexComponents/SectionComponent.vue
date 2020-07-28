<template>
  <div class="section">
    <h2 class="addBar">
      {{ sectionName }}
    </h2>
    <div class="row sectionCards">
      <div v-for="index in 4" :key="index" class="col-md-3">
        <mdb-card>
          <mdb-view hover>
            <nuxt-link to="#">
              <mdb-card-image
                src="https://picsum.photos/250/300"
                class="img-fluid_per"
                alt="Card image cap"
              />
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </nuxt-link>
          </mdb-view>
          <mdb-card-body class="cardBody">
            <mdb-card-title>
              <p>
                Basic card
              </p>
            </mdb-card-title>
          </mdb-card-body>
        </mdb-card>
      </div>
    </div>
  </div>
</template>

<!--suppress ES6CheckImport -->
<script>
import {
  mdbCard,
  mdbView,
  mdbMask,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
} from 'mdbvue'
export default {
  name: 'SectionComponent',
  components: {
    mdbCard,
    mdbCardTitle,
    mdbCardImage,
    mdbCardBody,
    mdbMask,
    mdbView,
  },
  props: {
    sectionName: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .col-md-3 {
    margin-bottom: 20px !important;
  }
}

.section {
  margin-top: 30px;
  margin-bottom: 70px;
}
h2 {
  color: #333;
  font-weight: 500 !important;
}
.sectionCards {
  margin: 30px;
}
.cardBody {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0 !important;
}
.img-fluid_per {
  width: 100% !important;
}
p {
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
}
</style>
