<template>
  <div class="section">
    <h2 class="addBar">
      {{ sectionName }}
    </h2>
    <div class="row sectionCards">
      <div v-for="index in 4" :key="index" class="col-md-3">
        <mdb-card>
          <mdb-card-body class="cardBody">
            <mdb-card-image
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
              alt="Card image cap"
            ></mdb-card-image>
            <mdb-btn color="dark" class="btn-sm btn-block">Pinko</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbCard, mdbCardImage, mdbCardBody, mdbBtn } from 'mdbvue'
export default {
  name: 'SectionComponent',
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbBtn,
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
  padding: 0rem !important;
}
</style>
